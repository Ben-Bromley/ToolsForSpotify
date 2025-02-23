import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen items-center justify-items-center p-8 pb-20 sm:p-20">
      <main>
        <h1 className="mb-8 text-5xl font-bold">ToolsForSpotify</h1>
        <section>
          <p>
            ToolsForSpotify is a collection of some basic functions I need using
            the Spotify API.
          </p>
          <p>
            It is a work in progress and more tools will be added in the future.
          </p>
        </section>
        <section className="my-8">
          <Link
            href="/playlist"
            className="rounded border border-slate-500 px-6 py-4 transition-colors hover:bg-slate-100 hover:text-slate-800"
          >
            Playlist Tools
          </Link>
        </section>
      </main>
    </div>
  );
}
