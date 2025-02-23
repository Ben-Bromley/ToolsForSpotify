import { SpotifyApi } from '@spotify/web-api-ts-sdk';

const Spotify = SpotifyApi.withClientCredentials(
  process.env.VITE_SPOTIFY_CLIENT_ID ?? '',
  process.env.VITE_SPOTIFY_CLIENT_SECRET ?? ''
);

export default Spotify;
