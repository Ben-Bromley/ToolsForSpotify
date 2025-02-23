'use client';
import Link from 'next/link';
import React from 'react';

const ToolsDashboard: React.FC = () => {
  const [playlistId, setPlaylistId] = React.useState<string>('');
  return (
    <main className="min-h-screen bg-slate-900 p-4 text-white">
      <h1 className="mb-8 text-xl font-bold sm:text-4xl">
        ToolsForSpotify | Playlists
      </h1>
      <section>
        <form action="/playlist"></form>
        <input
          type="text"
          placeholder="Playlist ID"
          onChange={(e) => setPlaylistId(e.target.value)}
          className="mr-2 rounded-md bg-slate-800 p-2 text-white"
        />
        <Link href={`/playlist/${playlistId}`}>View Playlist</Link>
      </section>
    </main>
  );
};

export default ToolsDashboard;
