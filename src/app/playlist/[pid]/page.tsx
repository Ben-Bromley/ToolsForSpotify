import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ExportPlaylist from '@/components/ExportPlaylist';
import Spotify from '@/helpers/spotifyApi';

type PageProps = {
  params: Promise<{ pid: string }>;
};

const PlaylistTools: NextPage<PageProps> = async ({ params }) => {
  const playlistId = (await params).pid;
  if (!playlistId) return <>No Playlist</>;

  const playlist = await Spotify.playlists.getPlaylist(playlistId);

  return (
    <main className="min-h-screen bg-slate-900 p-4 text-white">
      <h1 className="mb-2 text-lg font-bold sm:text-xl">
        ToolsForSpotify | Playlists
      </h1>
      <section>
        <Link
          href="/playlist"
          className="mb-8 block text-slate-400 hover:text-slate-100"
        >
          Back to Playlists
        </Link>
        {playlist && (
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-semibold">{playlist.name}</h2>
            <ExportPlaylist playlist={playlist} />
          </div>
        )}
        <hr className="my-4 border-slate-700" />
        {playlist &&
          playlist.tracks.items.map((track) => (
            <div
              key={track.track.id}
              className="mb-4 flex items-center space-x-4"
            >
              <Image
                src={track.track.album.images[0].url}
                alt={track.track.name}
                className="h-16 w-16 rounded-md"
                width={64}
                height={64}
              />
              <div>
                <h2 className="text-lg font-semibold">{track.track.name}</h2>
                <p>
                  {track.track.artists.map((artist) => artist.name).join(', ')}
                </p>
              </div>
            </div>
          ))}
      </section>
    </main>
  );
};

export default PlaylistTools;
