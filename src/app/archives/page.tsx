import Link from "next/link";
import { castleEditionsData } from "@/data";

export default function ArchivesPage() {
  const editions = [...castleEditionsData].sort((a, b) => b.year - a.year);

  return (
    <main className="min-h-screen bg-slate-50 py-16">
      <div className="container px-6">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          CASTLE Archives
        </p>
        <h1 className="mb-4 text-4xl font-bold text-slate-900">Previous Conferences</h1>
        <p className="mb-10 max-w-3xl text-slate-600">
          Daftar seluruh edisi CASTLE ditampilkan langsung pada halaman ini. Setiap konferensi
          mencakup tema, keynote speaker, serta daftar speakers beserta topik yang dibawakan.
        </p>

        <section className="mb-10">
          <h2 className="mb-5 text-center text-3xl font-bold text-slate-800">Previous Seminars</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {editions.map((edition) => (
              <a
                key={edition.id}
                href={`#edition-${edition.year}`}
                className="rounded-full border border-slate-300 bg-white px-5 py-3 text-center font-medium text-slate-700 transition-colors hover:border-primary hover:text-primary"
              >
                {edition.edition}th CASTLE Conference {edition.year}
              </a>
            ))}
          </div>
        </section>

        <section className="space-y-8">
          {editions.map((edition) => {
            const keynote = edition.speakers.filter((speaker) =>
              speaker.role.toLowerCase().includes("keynote")
            );

            return (
              <article
                key={edition.id}
                id={`edition-${edition.year}`}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                      CASTLE {edition.edition}th Conference - {edition.year}
                    </p>
                    <h3 className="mt-1 text-2xl font-bold text-slate-900">{edition.theme}</h3>
                  </div>
                  <Link
                    href={`/archives/${edition.year}`}
                    className="inline-flex rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100"
                  >
                    Detail Page
                  </Link>
                </div>

                <p className="mb-4 text-sm text-slate-600">{edition.tagline}</p>

                <div className="mb-5 grid gap-2 text-sm text-slate-600 md:grid-cols-2">
                  <p>
                    <span className="font-semibold text-slate-800">Tanggal:</span> {edition.date}
                  </p>
                  <p>
                    <span className="font-semibold text-slate-800">Lokasi:</span> {edition.venue}
                  </p>
                </div>

                <div className="mb-5 rounded-xl border border-blue-100 bg-blue-50 p-4">
                  <h4 className="mb-2 text-sm font-bold uppercase tracking-wide text-blue-800">
                    Keynote Speaker
                  </h4>
                  <div className="space-y-2 text-sm text-slate-700">
                    {(keynote.length > 0 ? keynote : edition.speakers.slice(0, 1)).map((speaker) => (
                      <p key={speaker.id}>
                        <span className="font-semibold">{speaker.name}</span> - {speaker.topic}
                      </p>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="mb-3 text-sm font-bold uppercase tracking-wide text-slate-700">
                    Speakers & Topics
                  </h4>
                  <div className="grid gap-3 md:grid-cols-2">
                    {edition.speakers.map((speaker) => (
                      <div key={speaker.id} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                        <p className="font-semibold text-slate-900">{speaker.name}</p>
                        <p className="text-xs uppercase tracking-wide text-primary">{speaker.role}</p>
                        <p className="mt-1 text-sm text-slate-600">{speaker.topic}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </section>
      </div>
    </main>
  );
}
