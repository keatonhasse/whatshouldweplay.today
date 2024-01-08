export function handle({ event, resolve }) {
  const steamid = event.cookies.get('steamid');
  event.locals.steamid = steamid;
  return resolve(event);
}
