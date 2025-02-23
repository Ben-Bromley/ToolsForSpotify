'use client';
import { type Playlist, type Track } from '@spotify/web-api-ts-sdk';
import exportToCsv from '@/helpers/exportToCsv';

type PlaylistExportProps = {
  playlist: Playlist<Track>;
};

const ExportPlaylist: React.FC<PlaylistExportProps> = ({ playlist }) => {
  return (
    <div>
      <button
        className="rounded bg-slate-500 px-4 py-2 transition-colors hover:bg-slate-700"
        onClick={() => exportToCsv(playlist)}
      >
        Export To CSV
      </button>
    </div>
  );
};

export default ExportPlaylist;
