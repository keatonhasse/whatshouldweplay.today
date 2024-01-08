import { getOwnedGames } from '$lib/api/getOwnedGames.js';

export async function load({ cookies }) {
  const steamid = cookies.get('steamid');
  if (steamid)
    return getOwnedGames(steamid);
}

export const actions = {
  getOwnedGames: async ({ cookies, request }) => {
    const data = await request.formData();
    const steamid = data.get('steamid'); // 76561198060671016
    //const steamid = 76561198060671016n;
    // evosity = 76561198058605445
    cookies.set('steamid', steamid, { path: '/' })
  }
};
