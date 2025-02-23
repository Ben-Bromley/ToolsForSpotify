import { Playlist, Track } from '@spotify/web-api-ts-sdk';

/**
 * Build a CSV string from a playlist and download it using a link element.
 * @param playlist
 */
const exportToCsv = (playlist: Playlist<Track>) => {
  const DATA_PREFIX = 'data:text/csv;charset=utf-8,';
  const csvString =
    DATA_PREFIX +
    playlist.tracks.items
      .map((track) => {
        const row = [
          track.track.artists.map((artist) => artist.name).join(', '),
          track.track.name,
        ];
        return row.join(',');
      })
      .join('\n');

  const encodedUri = encodeURI(csvString);
  const link = document.createElement('a');
  link.setAttribute('href', encodedUri);
  link.setAttribute('download', 'playlist.csv');
  document.body.appendChild(link);

  link.click();
};

export default exportToCsv;
