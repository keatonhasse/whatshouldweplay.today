import { STEAM_API_KEY } from '$env/static/private';

export async function getOwnedGames(steamid) {
  const base = 'https://api.steampowered.com';
  const endpoint = '/IPlayerService/GetOwnedGames/v0001';
  const query = `/?key=${STEAM_API_KEY}&steamid=${steamid}&include_appinfo=1`;
  const url = `${base}${endpoint}${query}`;
  try {
    const response = await fetch(url);
    if (response.ok) {
      const json = await response.json();
      return { success: true, steamid: steamid, games: json.response.games };
    } else {
      console.log('response is not ok');
    }
  } catch (error) {
    console.log('error: ', error);
  }
}
