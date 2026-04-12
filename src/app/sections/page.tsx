import Link from "next/link";
import { sectionPages } from "@/data/section-pages";

export default function SectionsPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-16">
      <div className="container px-6">
        <div className="mb-12">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Sections Directory
          </p>
          <h1 className="mb-3 text-4xl font-bold text-slate-900">Halaman Detail Per Section</h1>
          <p className="max-w-3xl text-slate-600">
            Setiap section pada landing page kini memiliki halaman terpisah berisi informasi yang
            lebih mendalam agar pengunjung dapat memahami konteks program secara utuh.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sectionPages.map((section) => (
            <article key={section.slug} className="rounded-2xl border border-slate-200 bg-white p-6">
              <h2 className="mb-2 text-2xl font-bold text-slate-900">{section.title}</h2>
              <p className="mb-5 text-sm text-slate-600">{section.description}</p>
              <div className="flex items-center gap-4">
                <Link
                  href={`/sections/${section.slug}`}
                  className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white transition hover:bg-primary-light"
                >
                  Buka Detail
                </Link>
                <Link href={`/${section.homeAnchor}`} className="text-sm font-semibold text-primary">
                  Lihat di Homepage
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
