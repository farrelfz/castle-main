"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-white pb-24 pt-36 sm:pb-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-28 top-12 h-72 w-72 rounded-full bg-[#D9E8E2] blur-3xl" />
        <div className="absolute -right-16 bottom-8 h-80 w-80 rounded-full bg-[#E7F0EC] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="overflow-hidden rounded-[2rem] px-6 py-16 text-center shadow-[0_24px_60px_rgba(79,111,97,0.24)] sm:px-12 sm:py-20"
          style={{ background: "linear-gradient(135deg, #5E8374, #7FAE9B)" }}
        >
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-[#EAF4F0]">
            International Physics Seminar
          </p>
          <h1 className="mx-auto max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            International Physics Seminar 2025
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-[#EDF6F2] sm:text-lg">
            "Physics: The Fundamentals of Sustainable Development Goals"
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#event-info"
              className="inline-flex min-w-44 items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-[#4F6F61] shadow-[0_12px_26px_rgba(31,41,55,0.18)] transition-transform duration-300 hover:scale-[1.03]"
            >
              Register Now
            </a>
            <a
              href="#publications"
              className="inline-flex min-w-44 items-center justify-center rounded-full border border-white/70 bg-white/10 px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/20"
            >
              Submit Paper
            </a>
          </div>

          <div className="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-4 text-left sm:grid-cols-3">
            <div className="rounded-2xl border border-white/25 bg-white/10 p-4 backdrop-blur-sm">
              <p className="text-sm text-[#EAF4F0]">Format</p>
              <p className="mt-1 text-lg font-semibold text-white">Hybrid</p>
            </div>
            <div className="rounded-2xl border border-white/25 bg-white/10 p-4 backdrop-blur-sm">
              <p className="text-sm text-[#EAF4F0]">Location</p>
              <p className="mt-1 text-lg font-semibold text-white">Jakarta</p>
            </div>
            <div className="rounded-2xl border border-white/25 bg-white/10 p-4 backdrop-blur-sm">
              <p className="text-sm text-[#EAF4F0]">Audience</p>
              <p className="mt-1 text-lg font-semibold text-white">Academics & Researchers</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
