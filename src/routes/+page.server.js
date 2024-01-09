import { getOwnedGames } from '$lib/api/getOwnedGames.js';

export async function load({ cookies }) {
  const steamid = cookies.get('steamid');
  if (steamid)
    return getOwnedGames(steamid);
}

export const actions = {
  getOwnedGames: async ({ cookies, request }) => {
    const data = await request.formData();
    const input = data.get('input');
    const steamid = checkInput(input);
    cookies.set('steamid', steamid, { path: '/' })
  }
};

function checkInput(input) {
  const regex = [
    { pattern: /^\d{17}$/, func: steamID },
    { pattern: /^.*$/, func: getSteamIDFromName },
    { pattern: /^https:\/\/steamcommunity\.com\/profile\/(\d{17})\/?$/, func: getSteamIDFromProfileURL },
    { pattern: /^https:\/\/steamcommunity\.com\/id\/([a-zA-Z0-9_-]{2,32})\/?$/, func: getSteamIDFromVanityURL }
  ];
  for (const { pattern, func } of regex) {
    if (pattern.test(input)) {
      return func(input);
    }
  }
}

const steamID = (steamid) => steamid;

function getSteamIDFromName(name) {
  return name;
}

function getSteamIDFromProfileURL(url) {
  return url;
}

function getSteamIDFromVanityURL(url) {
  return url;
}
