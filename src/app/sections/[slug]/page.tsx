import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  archivesData,
  contactChannelsData,
  publicationsData,
  speakersData,
  statsData,
  testimonialsData,
  timelineData
} from "@/data";
import { sectionPageBySlug, sectionPages, type SectionSlug } from "@/data/section-pages";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const isSectionSlug = (slug: string): slug is SectionSlug => {
  return sectionPages.some((item) => item.slug === slug);
};

export async function generateStaticParams() {
  return sectionPages.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;

  if (!isSectionSlug(slug)) {
    return {
      title: "Section Not Found"
    };
  }

  const data = sectionPageBySlug[slug];

  return {
    title: `${data.title} | CASTLE KPM UNJ`,
    description: data.description
  };
}

const renderDataBlock = (slug: SectionSlug) => {
  switch (slug) {
    case "about":
      return (
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <h3 className="mb-2 text-lg font-semibold text-slate-900">Visi Komunitas</h3>
            <p className="text-sm text-slate-600">
              Menjadi pusat pengembangan kreativitas dan inovasi mahasiswa pada ranah akademik
              berbasis kolaborasi lintas disiplin.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <h3 className="mb-2 text-lg font-semibold text-slate-900">Misi Operasional</h3>
            <p className="text-sm text-slate-600">
              Memfasilitasi pelatihan, pendampingan, publikasi, dan diseminasi karya ilmiah yang
              relevan dengan kebutuhan masyarakat.
            </p>
          </div>
        </div>
      );
    case "speakers":
      return (
        <div className="grid gap-4 md:grid-cols-2">
          {speakersData.map((speaker) => (
            <article key={speaker.id} className="rounded-xl border border-slate-200 bg-white p-5">
              <h3 className="text-lg font-semibold text-slate-900">{speaker.name}</h3>
              <p className="mb-3 text-sm font-medium text-primary">{speaker.role}</p>
              <p className="mb-3 text-sm text-slate-600">{speaker.bio}</p>
              <div className="flex flex-wrap gap-2">
                {speaker.expertise.map((skill) => (
                  <span key={skill} className="rounded-full bg-blue-100 px-2 py-1 text-xs text-blue-700">
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      );
    case "timeline":
      return (
        <div className="space-y-4">
          {timelineData.map((item) => (
            <article key={item.id} className="rounded-xl border border-slate-200 bg-white p-5">
              <div className="mb-2 flex flex-wrap items-center gap-2">
                <span className="text-sm font-semibold text-primary">{item.date}</span>
                <span className="rounded-full bg-blue-100 px-2 py-1 text-xs font-semibold text-blue-700">
                  {item.type}
                </span>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="text-sm text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>
      );
    case "publications":
      return (
        <div className="grid gap-4 md:grid-cols-3">
          {publicationsData.map((item) => (
            <article key={item.id} className="rounded-xl border border-slate-200 bg-white p-5">
              <h3 className="mb-3 text-xl font-semibold text-slate-900">{item.name}</h3>
              <p className="mb-3 text-sm text-slate-600">{item.description}</p>
              <p className="text-xs text-slate-500">
                <span className="font-semibold text-slate-700">Frekuensi:</span> {item.frequency}
              </p>
              <p className="mt-1 text-xs text-slate-500">
                <span className="font-semibold text-slate-700">Scope:</span> {item.scope}
              </p>
            </article>
          ))}
        </div>
      );
    case "archives":
      return (
        <div className="grid gap-4 md:grid-cols-3">
          {archivesData.map((item) => (
            <article key={item.id} className="rounded-xl border border-slate-200 bg-white p-5">
              <p className="mb-2 text-sm font-semibold text-primary">{item.year}</p>
              <h3 className="mb-2 text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="mb-3 text-sm text-slate-600">{item.summary}</p>
              <ul className="space-y-1 text-sm text-slate-700">
                {item.highlights.map((point) => (
                  <li key={point}>• {point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      );
    case "contact":
      return (
        <div className="grid gap-4 md:grid-cols-2">
          {contactChannelsData.map((item) => (
            <article key={item.id} className="rounded-xl border border-slate-200 bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">{item.label}</p>
              <p className="mt-2 text-base font-medium text-slate-900">{item.value}</p>
              <a
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="mt-3 inline-block text-sm font-semibold text-primary"
              >
                Hubungi via kanal ini
              </a>
            </article>
          ))}
        </div>
      );
    case "testimonials":
      return (
        <div className="grid gap-4 md:grid-cols-3">
          {testimonialsData.map((item) => (
            <blockquote key={item.id} className="rounded-xl border border-slate-200 bg-white p-5">
              <p className="mb-3 text-sm text-slate-700">"{item.quote}"</p>
              <footer>
                <p className="font-semibold text-slate-900">{item.name}</p>
                <p className="text-xs text-slate-500">{item.role}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      );
    case "stats":
      return (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {statsData.map((item) => (
            <article key={item.label} className="rounded-xl border border-slate-200 bg-white p-5 text-center">
              <p className="mb-2 text-4xl font-bold text-primary">
                {item.value}
                {item.suffix}
              </p>
              <p className="text-sm text-slate-600">{item.label}</p>
            </article>
          ))}
        </div>
      );
    default:
      return null;
  }
};

export default async function SectionDetailPage({ params }: PageProps) {
  const { slug } = await params;

  if (!isSectionSlug(slug)) {
    notFound();
  }

  const data = sectionPageBySlug[slug];

  return (
    <main className="min-h-screen bg-slate-50 py-16">
      <div className="container px-6">
        <div className="mb-8">
          <Link href="/sections" className="text-sm font-semibold text-primary">
            ← Kembali ke daftar section
          </Link>
          <p className="mt-6 mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            {data.title}
          </p>
          <h1 className="mb-3 text-4xl font-bold text-slate-900">{data.headline}</h1>
          <p className="max-w-3xl text-slate-600">{data.description}</p>
        </div>

        <div className="mb-10 grid gap-4 rounded-2xl border border-blue-100 bg-blue-50 p-6 md:grid-cols-3">
          {data.detailPoints.map((point) => (
            <p key={point} className="text-sm text-slate-700">
              {point}
            </p>
          ))}
        </div>

        {renderDataBlock(slug)}

        <div className="mt-10">
          <Link href={`/${data.homeAnchor}`} className="text-sm font-semibold text-primary">
            Lihat section ini di homepage
          </Link>
        </div>
      </div>
    </main>
  );
}
