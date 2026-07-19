# FlyingLandlord's Blog

基于 [Astro](https://astro.build/) 与 [Mizuki-Ultra](https://github.com/LyraVoid/Mizuki) v9 的个人博客。

## 本地开发

需要 Node.js 22+ 和 pnpm 9+：

```bash
pnpm install
pnpm dev
```

开发服务器默认运行在 `http://localhost:3000`。

## 内容

- 文章位于 `src/content/posts/`。
- 默认 `/` 为英文 Academic 主页；Mizuki 博客主页位于 `/blog/`。
- Academic 主页的个人资料、动态、论文、教育、经历和项目统一维护在 `src/data/academic.ts`。
- 站点配置位于 `src/config/`。
- Bangumi 追番页使用用户 ID `599923`，构建时自动刷新数据。
- 从旧 Hexo 静态页面恢复的图片和附件位于 `public/legacy/`。
- `scripts/migrate-hexo-html.py` 保留了本次 HTML → Markdown 的迁移工具。

GitHub 头像使用 `https://github.com/flyinglandlord.png` 动态同步。博客横幅使用原创动画风景图 `public/assets/banner/anime-city-river.webp`。

## 构建与部署

```bash
pnpm check
pnpm build
pnpm preview
```

推送到 `master` 后，GitHub Actions 会构建并部署到 GitHub Pages。仓库 Pages 的 Source 需要设置为 **GitHub Actions**。

## License

站点框架继承 Mizuki 的 Apache-2.0 与原始 Fuwari 的 MIT 许可；博客文章默认使用 CC BY-NC-SA 4.0。
