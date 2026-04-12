import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-white">
      <div className="mx-auto max-w-xl text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-300">404</p>
        <h1 className="mb-4 text-4xl font-bold sm:text-5xl">Halaman Tidak Ditemukan</h1>
        <p className="mb-8 text-slate-300">
          Maaf, halaman yang kamu cari tidak tersedia atau sudah dipindahkan.
        </p>
        <Link
          href="/"
          className="inline-flex items-center rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition-colors hover:bg-cyan-300"
        >
          Kembali ke Beranda
        </Link>
      </div>
    </main>
  );
}
