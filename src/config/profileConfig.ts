import type { ProfileConfig } from "../types/config";

// 个人资料配置
export const profileConfig: ProfileConfig = {
	// GitHub exposes the current profile image at this stable URL, so changing
	// the avatar on GitHub automatically updates both homepages.
	avatar: "https://github.com/flyinglandlord.png?size=460",
	name: "FlyingFlame",
	bio: "记录技术、学习与生活",
	typewriter: {
		enable: true, // 启用个人简介打字机效果
		speed: 80, // 打字速度（毫秒）
	},
	links: [
		{
			name: "GitHub",
			icon: "fa7-brands:github",
			url: "https://github.com/flyinglandlord",
		},
		{
			name: "Steam",
			icon: "fa7-brands:steam",
			url: "https://steamcommunity.com/profiles/76561199075407182/",
		},
		{
			name: "Email",
			icon: "material-symbols:mail",
			url: "mailto:2645377161@qq.com",
		},
	],
};
