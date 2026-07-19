/**
 * Academic homepage content.
 *
 * Keep edits in this file: the page layout reads every section from these
 * typed arrays. Empty arrays render a quiet placeholder instead of breaking
 * the layout, so information can be added gradually.
 */

export interface AcademicLink {
	label: string;
	url: string;
}

export interface NewsItem {
	date: string;
	text: string;
	url?: string;
}

export interface AwardItem {
	title: string;
	date: string;
}

export interface Publication {
	title: string;
	authors: string;
	venue: string;
	year: string;
	highlights?: string[];
	image?: string;
	selected?: boolean;
	links?: AcademicLink[];
}

export interface TimelineEntry {
	organization: string;
	role: string;
	period: string;
	description?: string;
	logo?: string;
	url?: string;
}

export interface AcademicProject {
	name: string;
	description: string;
	tags: string[];
	image?: string;
	imageAlt?: string;
	starsBadge?: string;
	links: AcademicLink[];
}

export interface InvitedTalk {
	event: string;
	date: string;
	description: string;
	url?: string;
}

export const academicProfile = {
	name: "Junyi Chen",
	nameZh: "陈俊一",
	headline: "Master Student in SJTU",
	location: "Shanghai, China",
	avatar: "/images/academic/junyi-lifestyle.jpg",
	email: "junyi.chen@sjtu.edu.cn",
	bio: [
		"I am a master's student in Computer Science at Shanghai Jiao Tong University, advised by Prof. Fan Wu and Prof. Shengzhong Liu in NNE-Lab.",
		"My research focuses on efficient AI, LLM post-training and inference, reinforcement learning systems, and machine learning systems.",
	],
	interests: [
		"Efficient AI",
		"LLM Post Train",
		"LLM Inference",
		"RL System",
		"Machine Learning System",
	],
	links: [
		{ label: "Email", url: "mailto:junyi.chen@sjtu.edu.cn" },
		{ label: "GitHub", url: "https://github.com/flyinglandlord" },
	] satisfies AcademicLink[],
};

export const news: NewsItem[] = [
	{
		date: "2026.06",
		text: "🎉 Our SmartThinker has been accepted by ICML 2026!",
	},
	{
		date: "2026.06",
		text: "🎉 Our StructureBench has been accepted by IJCAI 2026!",
	},
	{
		date: "2026.05",
		text: "🎉 Our C²KV has been accepted by KDD 2026!",
	},
	{
		date: "2026.04",
		text: "🏆 Honored to receive the SenseTime Rising Star Intern Award!",
	},
	{
		date: "2025.11",
		text: "🎉 Our TokenFlow has been accepted by EuroSys 2026!",
	},
	{
		date: "2025.09",
		text: "🏆 Grateful to receive the National Scholarship for graduate students!",
	},
	{
		date: "2025.08",
		text: "🏆 Our Pre³ received an Outstanding Paper Award at ACL 2025!",
	},
	{
		date: "2025.05",
		text: "🎉 Our Pre³ has been accepted to ACL 2025 as an oral presentation!",
	},
];

// Example:
// {
//   title: "Paper title",
//   authors: "Junyi Chen, Collaborator Name",
//   venue: "Conference or Journal",
//   year: "2026",
//   selected: true,
//   links: [{ label: "Paper", url: "https://..." }],
// }
export const publications: Publication[] = [
	{
		title:
			"TokenFlow: Responsive LLM Text Streaming Serving under Request Burst via Preemptive Scheduling",
		authors:
			"Junyi Chen, Chuheng Du, Renyuan Liu, Shuochao Yao, Dingtian Yan, Jiang Liao, Shengzhong Liu, Fan Wu, Guihai Chen",
		venue: "EuroSys",
		year: "2026",
		selected: true,
		links: [{ label: "ArXiv", url: "https://arxiv.org/abs/2510.02758" }],
	},
	{
		title:
			"Pre³: Enabling Deterministic Pushdown Automata for Faster Structured LLM Generation",
		authors:
			"Junyi Chen, Shihao Bai, Zaijun Wang, Siyu Wu, Chuheng Du, Hailong Yang, Ruihao Gong, Shengzhong Liu, Fan Wu, Guihai Chen",
		venue: "ACL",
		year: "2025",
		highlights: ["Oral · 218/1,699 (12.8%)", "🏆 Outstanding Paper · Top 2.5%"],
		selected: true,
		links: [
			{ label: "ArXiv", url: "https://arxiv.org/abs/2506.03887" },
			{
				label: "ACL Anthology",
				url: "https://aclanthology.org/2025.acl-long.551/",
			},
			{ label: "GitHub", url: "https://github.com/ModelTC/lightllm" },
		],
	},
	{
		title:
			"C²KV: Compressed and Composable KV Cache Reuse for Efficient LLM Inference",
		authors:
			"Chuheng Du, Junyi Chen, Hanlin Tang, Kan Liu, Lan Tao, Lin Qu, Chaoyue Niu, Shengzhong Liu, Guihai Chen, Fan Wu",
		venue: "KDD",
		year: "2026",
		selected: true,
		links: [
			{ label: "PDF", url: "/papers/c2kv-kdd-2026.pdf" },
			{ label: "GitHub", url: "https://github.com/s7a9/C2KV" },
		],
	},
	{
		title:
			"SmartThinker: Progressive Chain-of-Thought Length Calibration for Efficient Large Language Model Reasoning",
		authors:
			"Chenzhi Hu, Qinzhe Hu, Yuhang Xu, Junyi Chen, Ruijie Wang, Shengzhong Liu, Jianxin Li, Fan Wu, Guihai Chen",
		venue: "ICML",
		year: "2026",
		selected: true,
		links: [
			{ label: "ArXiv", url: "https://arxiv.org/abs/2603.08000" },
			{
				label: "GitHub",
				url: "https://github.com/SJTU-RTEAS/SmartThinker",
			},
		],
	},
	{
		title:
			"StructureBench: A Unified Benchmark Suite for Multi-Scenario Structured Generation Tasks with On-Device Models",
		authors:
			"Xiaokun Xiong, Zhengjie Xu, Junyi Chen, Shihao Bai, Ruihao Gong, Xianglong Liu",
		venue: "IJCAI",
		year: "2026",
		selected: false,
		links: [
			{
				label: "PDF",
				url: "/papers/structurebench-ijcai-ecai-2026.pdf",
			},
			{
				label: "GitHub",
				url: "https://github.com/Str-Ben/StructureBench",
			},
		],
	},
	{
		title:
			"TinyFormer: Efficient Transformer Design and Deployment on Tiny Devices",
		authors:
			"Jianlei Yang, Jiacheng Liao, Fanding Lei, Meichen Liu, Lingkun Long, Junyi Chen, Han Wan, Bei Yu, Weisheng Zhao",
		venue: "IEEE TCAS-I",
		year: "2026",
		selected: false,
		links: [{ label: "ArXiv", url: "https://arxiv.org/abs/2311.01759" }],
	},
];

export const projects: AcademicProject[] = [
	{
		name: "LightLLM",
		description:
			"A Python-based LLM inference and serving framework for high-throughput, low-latency deployment, with distributed serving and an efficient runtime architecture.",
		tags: ["Python", "LLM Serving", "Distributed Systems"],
		image:
			"https://raw.githubusercontent.com/ModelTC/LightLLM/main/assets/logo_new.png",
		imageAlt: "LightLLM logo from the official repository README",
		starsBadge:
			"https://img.shields.io/github/stars/ModelTC/LightLLM?style=flat&label=Stars&color=2358a7",
		links: [
			{
				label: "GitHub",
				url: "https://github.com/ModelTC/lightllm",
			},
		],
	},
	{
		name: "Relax",
		description:
			"An asynchronous reinforcement learning engine for omni-modal post-training at scale, with service-oriented orchestration and decoupled training and inference built on Ray Serve, Megatron-LM, and SGLang.",
		tags: [
			"Reinforcement Learning",
			"Distributed Systems",
			"LLM Infrastructure",
		],
		image:
			"https://raw.githubusercontent.com/redai-infra/Relax/main/assets/arch.png",
		imageAlt:
			"Relax six-layer architecture from the official repository README",
		starsBadge:
			"https://img.shields.io/github/stars/redai-infra/Relax?style=flat&label=Stars&color=2358a7",
		links: [
			{
				label: "GitHub",
				url: "https://github.com/redai-infra/Relax",
			},
		],
	},
];

export const invitedTalks: InvitedTalk[] = [
	{
		event:
			"Huawei KADC 2025 · High-Performance Inference and Technology Innovation Forum",
		date: "May 24, 2025",
		description:
			"Invited talk: “Cloud–Edge Collaborative Inference Acceleration for Large Language Models” (大语言模型端云协同推理加速方案), at the Kunpeng Ascend Developer Conference 2025 in Beijing.",
		url: "https://www.hiascend.com/ascend-2025KADC/Parallel-session?id=569bd441414d487eba15340f4aa21ea2",
	},
	{
		event: "AI Time · ACL 2025 Outstanding Paper Sharing",
		date: "Aug 26, 2025",
		description:
			"Presented Pre³ and discussed how deterministic pushdown automata enable faster structured LLM generation.",
		url: "https://www.bilibili.com/video/BV1UPvKzqEAe/",
	},
];

export const awards: AwardItem[] = [
	{ title: "SenseTime Rising Star Intern Award", date: "2026" },
	{ title: "National Scholarship (Graduate), China", date: "2025" },
	{ title: "ACL Outstanding Paper Award", date: "2025" },
	{ title: "Beijing Outstanding Graduate", date: "2024" },
	{ title: "Beihang University Outstanding Graduate", date: "2024" },
	{ title: "National Scholarship (Undergraduate), China", date: "2023" },
	{ title: "National Scholarship (Undergraduate), China", date: "2021" },
];

export const education: TimelineEntry[] = [
	{
		organization: "Shanghai Jiao Tong University",
		role: "M.S. in Computer Science · NNE-Lab",
		period: "Sep 2024 – Present",
		description:
			"Advised by Prof. Fan Wu and Prof. Shengzhong Liu. GPA: 3.95/4.0.",
		logo: "/images/academic/logos/sjtu.png",
		url: "https://www.sjtu.edu.cn/",
	},
	{
		organization: "Beihang University",
		role: "B.S. in Computer Science · Shen Yuan Honors College",
		period: "Sep 2020 – Jun 2024",
		description: "Top 5% honors program. GPA: 3.92/4.0; rank: 1/50.",
		logo: "/images/academic/logos/beihang.png",
		url: "https://www.buaa.edu.cn/",
	},
];

export const experience: TimelineEntry[] = [
	{
		organization: "SenseTime Research",
		role: "Research Intern · Large Model Systems and Toolchain Team",
		period: "Dec 2023 – Present",
		description:
			"Designed buffer-aware preemptive scheduling for responsive LLM serving, developed grammar-constrained structured decoding, and explored confidence-based dynamic speculative decoding for multi-token prediction.",
		logo: "/images/academic/logos/sensetime.png",
		url: "https://www.sensetime.com/",
	},
];
