#!/usr/bin/env python3
"""Recover Mizuki-compatible Markdown posts from Hexo/Shoka HTML output."""

from __future__ import annotations

import json
import re
import sys
from pathlib import Path

from bs4 import BeautifulSoup, NavigableString, Tag
from html2text import HTML2Text


def rewrite_local_url(value: str) -> str:
	if re.match(r"^[A-Za-z]:[/\\]", value):
		return "/legacy/missing/placeholder.svg"
	if value.startswith("/assets/"):
		return "/legacy/assets/" + value.removeprefix("/assets/")
	if value.startswith("/images/"):
		return "/legacy/images/" + value.removeprefix("/images/")
	if value and not re.match(r"^(?:[a-z][a-z0-9+.-]*:|/|#)", value, re.I):
		return "/legacy/missing/" + value
	return value


def yaml_string(value: str) -> str:
	return json.dumps(value, ensure_ascii=False)


def convert_article(source_file: Path, source_root: Path) -> tuple[str, str]:
	html = source_file.read_text(encoding="utf-8")
	soup = BeautifulSoup(html, "lxml")

	title_node = soup.select_one("#brand h1[itemprop='name headline']")
	body = soup.select_one("[itemprop='articleBody']")
	published_node = soup.select_one("time[itemprop*='datePublished']")
	if not title_node or not body or not published_node:
		raise ValueError(f"Missing article metadata in {source_file}")

	title = title_node.get_text(" ", strip=True)
	published = published_node.get("datetime", "")
	updated_node = soup.select_one("time[itemprop='dateModified']")
	updated = updated_node.get("datetime", "") if updated_node else ""
	category_node = soup.select_one(".breadcrumb .current [itemprop='name']")
	category = category_node.get_text(" ", strip=True) if category_node else ""
	tags = [node.get_text(" ", strip=True) for node in body.select(".tags a")]

	cover_node = soup.select_one("#imgs img")
	cover = ""
	if cover_node:
		cover = rewrite_local_url(cover_node.get("src") or cover_node.get("data-src") or "")

	for tag_list in body.select(".tags"):
		tag_list.decompose()
	for anchor in body.select("a.anchor"):
		anchor.decompose()

	for katex in body.select(".katex"):
		annotation = katex.select_one("annotation[encoding='application/x-tex']")
		if annotation:
			tex = annotation.get_text(strip=True)
			katex.replace_with(NavigableString(f"${tex}$"))

	for note in body.select("div.note"):
		blockquote = soup.new_tag("blockquote")
		for child in list(note.contents):
			blockquote.append(child.extract() if isinstance(child, Tag) else child)
		note.replace_with(blockquote)

	for image in body.select("img"):
		source = image.get("src") or image.get("data-src")
		if source:
			image["src"] = rewrite_local_url(source)
		image.attrs.pop("data-src", None)

	for link in body.select("a[href]"):
		link["href"] = rewrite_local_url(link["href"])

	for media in body.select(".media-container"):
		player = media.select_one("[data-src]")
		data = player.get("data-src", "") if player else ""
		urls = re.findall(r"https?://[^\"']+", data)
		if urls:
			paragraph = soup.new_tag("p")
			anchor = soup.new_tag("a", href=urls[0])
			anchor.string = "媒体链接"
			paragraph.append(anchor)
			media.replace_with(paragraph)
		else:
			media.decompose()

	converter = HTML2Text()
	converter.body_width = 0
	converter.ignore_images = False
	converter.ignore_links = False
	converter.protect_links = True
	converter.unicode_snob = True
	converter.skip_internal_links = False
	markdown = converter.handle(body.decode_contents()).strip()
	markdown = re.sub(r"\n{3,}", "\n\n", markdown)

	plain = body.get_text(" ", strip=True)
	description = re.sub(r"\s+", " ", plain)[:160]
	relative_dir = source_file.parent.relative_to(source_root).as_posix()
	permalink = f"/{relative_dir}/"

	frontmatter = [
		"---",
		f"title: {yaml_string(title)}",
		f"published: {published}",
	]
	if updated:
		frontmatter.append(f"updated: {updated}")
	frontmatter.extend(
		[
			f"description: {yaml_string(description)}",
			f"image: {yaml_string(cover)}",
			"tags:",
		]
	)
	frontmatter.extend(f"  - {yaml_string(tag)}" for tag in tags)
	frontmatter.extend(
		[
			f"category: {yaml_string(category)}",
			"draft: false",
			"comment: false",
			"lang: zh_CN",
			f"permalink: {yaml_string(permalink)}",
			"---",
			"",
		]
	)

	stem = re.sub(r"[^0-9A-Za-z\u4e00-\u9fff_-]+", "-", source_file.parent.name).strip("-")
	date = published[:10]
	filename = f"{date}-{stem or 'post'}.md"
	return filename, "\n".join(frontmatter) + markdown + "\n"


def main() -> None:
	if len(sys.argv) != 3:
		raise SystemExit("usage: migrate-hexo-html.py SOURCE_ROOT OUTPUT_DIR")
	source_root = Path(sys.argv[1]).resolve()
	output_dir = Path(sys.argv[2]).resolve()
	output_dir.mkdir(parents=True, exist_ok=True)

	articles = sorted(
		path
		for year in ("2020", "2021", "2022")
		for path in (source_root / year).rglob("index.html")
	)
	seen: set[str] = set()
	for source_file in articles:
		filename, content = convert_article(source_file, source_root)
		if filename in seen:
			filename = f"{source_file.parent.parent.name}-{filename}"
		seen.add(filename)
		(output_dir / filename).write_text(content, encoding="utf-8")
		print(f"{source_file.relative_to(source_root)} -> {filename}")

	print(f"Migrated {len(articles)} posts")


if __name__ == "__main__":
	main()
