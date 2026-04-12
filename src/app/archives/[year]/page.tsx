import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { castleEditionsData } from "@/data";

interface PageProps {
  params: Promise<{ year: string }>;
}

export async function generateStaticParams() {
  return castleEditionsData.map((item) => ({ year: String(item.year) }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { year } = await params;
  const edition = castleEditionsData.find((item) => String(item.year) === year);

  if (!edition) {
    return { title: "Archive Not Found" };
  }

  return {
    title: `CASTLE ${edition.edition} (${edition.year}) | Archives`,
    description: `${edition.theme} - ${edition.tagline}`
  };
}

export default async function ArchiveYearPage({ params }: PageProps) {
  const { year } = await params;
  const edition = castleEditionsData.find((item) => String(item.year) === year);

  if (!edition) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50 py-16">
      <div className="container px-6">
        <Link href="/archives" className="text-sm font-semibold text-primary">
          ← Kembali ke Archives
        </Link>

        <header className="mt-6 rounded-2xl border border-slate-200 bg-white p-6">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            CASTLE {edition.edition} - {edition.year}
          </p>
          <h1 className="mb-2 text-4xl font-bold text-slate-900">{edition.theme}</h1>
          <p className="mb-3 text-slate-600">{edition.tagline}</p>
          <div className="grid gap-2 text-sm text-slate-600 md:grid-cols-2">
            <p>
              <span className="font-semibold text-slate-800">Tanggal:</span> {edition.date}
            </p>
            <p>
              <span className="font-semibold text-slate-800">Lokasi:</span> {edition.venue}
            </p>
          </div>
        </header>

        <section className="mt-10">
          <h2 className="mb-3 text-2xl font-bold text-slate-900">Mengenai CASTLE {edition.year}</h2>
          <p className="mb-5 text-slate-600">{edition.overview}</p>
          <div className="grid gap-3 md:grid-cols-3">
            {edition.focusAreas.map((area) => (
              <article key={area} className="rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-700">
                {area}
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Speakers</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {edition.speakers.map((speaker) => (
              <article key={speaker.id} className="rounded-xl border border-slate-200 bg-white p-5">
                <h3 className="text-lg font-semibold text-slate-900">{speaker.name}</h3>
                <p className="mb-2 text-sm font-medium text-primary">{speaker.role}</p>
                <p className="text-sm text-slate-600">{speaker.topic}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
