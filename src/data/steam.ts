export interface SteamGame {
	appId: string;
	name: string;
	hoursOnRecord: number;
	recentHours?: number;
	image: string;
}

const steamId64 = "76561199075407182";

/**
 * Public Steam profile snapshot.
 *
 * This data intentionally stays local so the About page does not depend on
 * Steam Community availability or a Steam Web API key during every build.
 */
export const steamProfile = {
	accountId: "1115141454",
	steamId64,
	nickname: "Focalors",
	customUrl: "flyinglaird",
	avatar: "/images/steam/avatar.jpg",
	memberSince: "July 20, 2020",
	location: "Shanghai, China",
	status: "In-Game",
	statusDetail: "TBH: Task Bar Hero",
	lastSynced: "July 19, 2026",
	links: {
		profile: `https://steamcommunity.com/profiles/${steamId64}/`,
		games: `https://steamcommunity.com/profiles/${steamId64}/games/?tab=all`,
		wishlist: `https://store.steampowered.com/wishlist/profiles/${steamId64}/`,
		inventory: `https://steamcommunity.com/profiles/${steamId64}/inventory/`,
		market: "https://steamcommunity.com/market/",
	},
	games: [
		{
			appId: "1172470",
			name: "Apex Legends",
			hoursOnRecord: 2757,
			recentHours: 2.9,
			image: "/images/steam/apex.jpg",
		},
		{
			appId: "3678970",
			name: "TBH: Task Bar Hero",
			hoursOnRecord: 47,
			recentHours: 47,
			image: "/images/steam/task-bar-hero.jpg",
		},
		{
			appId: "2868840",
			name: "Slay the Spire 2",
			hoursOnRecord: 45,
			recentHours: 3.2,
			image: "/images/steam/slay-the-spire-2.jpg",
		},
		{
			appId: "3101040",
			name: "Magical Girl Witch Trials",
			hoursOnRecord: 5.6,
			recentHours: 5.6,
			image: "/images/steam/magical-girl-witch-trials.jpg",
		},
		{
			appId: "2881650",
			name: "Content Warning",
			hoursOnRecord: 1.7,
			recentHours: 1.7,
			image: "/images/steam/content-warning.jpg",
		},
		{
			appId: "4704690",
			name: "MECCHA CHAMELEON",
			hoursOnRecord: 7,
			recentHours: 0.6,
			image: "/images/steam/meccha-chameleon.jpg",
		},
	] satisfies SteamGame[],
};
