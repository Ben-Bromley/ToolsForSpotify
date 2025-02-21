import React, { useEffect } from "react";

const ToolsDashboard: React.FC = () => {
	const BEARER = process.env.REACT_APP_SPOTIFY_BEARER_TOKEN;
	const BASE_URL = "https://api.spotify.com/v1";
	const headers = React.useMemo(() => {
		return {
			Authorization: `Bearer ${BEARER}`,
		};
	}, [BEARER]);
	const [data, setData] = React.useState<any>(null);
	const [playlistId, setPlaylistId] = React.useState<any>("");

	useEffect(() => {
		(async () => {
			if (!playlistId) return;
			const data = await fetch(`${BASE_URL}/playlists/${playlistId}`, {
				headers,
			}).then((res) => res.json());
			setData(data);
		})();
	}, [headers, playlistId]);

	const logArtists = (data: any) => {
		const artists = data.tracks.items
			.map((item: any) => {
				return `${item.track.artists
					.map((artist: any) => artist.name)
					.join(", ")}`;
			})
			.join("\n");

		console.log(artists);
	};

	const logSongs = (data: any) => {
		const songs = data.tracks.items
			.map((item: any) => item.track.name)
			.join("\n");
		console.log(songs);
	};

	return (
		<div className="bg-slate-900 min-h-screen text-white p-4">
			<h1 className="text-4xl font-bold mb-8">
				ToolsForSpotify - PlaylistViewer
			</h1>
			<div className="space-x-2">
				<input
					className="py-2 px-4 rounded text-slate-900"
					type="text"
					value={playlistId}
					onChange={(e) => setPlaylistId(e.target.value)}
				/>
				<button
					className="bg-slate-600 px-4 py-2 rounded hover:bg-slate-700 transition-colors"
					onClick={() => logArtists(data)}
				>
					Log Artists
				</button>
				<button
					className="bg-slate-600 px-4 py-2 rounded hover:bg-slate-700 transition-colors"
					onClick={() => logSongs(data)}
				>
					Log Songs
				</button>
			</div>
			{data && (
				<div className="mt-4">
					<p className="font-bold text-xl">{data.name}</p>
				</div>
			)}
			{data?.tracks?.items && (
				<ul>
					{data.tracks.items.map((item: any) => (
						<li
							className="border rounded border-slate-600 p-4 my-4 flex items-center space-x-4"
							key={item.track.id}
						>
							<img
								src={item.track.album.images[0].url}
								alt=""
								className="w-16 h-16"
							/>
							<div>
								<p className="font-bold text-xl">{item.track.name}</p>
								<p>
									{item.track.artists
										.map((artist: any) => artist.name)
										.join(", ")}
								</p>
							</div>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default ToolsDashboard;
