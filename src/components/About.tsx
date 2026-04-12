import Image from "next/image";

const conferenceScope = [
  "Material Physics",
  "Instrumentation & Computational Physics",
  "Medical Physics",
  "Earth & Space Physics",
  "Nuclear Physics",
  "Energy & Environmental Physics",
  "Physics Education"
];

const importantDates = [
  { title: "Abstract Submission", date: "June 14, 2025" },
  { title: "Acceptance Notification", date: "July 1, 2025" },
  { title: "Registration Deadline", date: "July 20, 2025" },
  { title: "Conference Date", date: "August 2, 2025" },
  { title: "Full Paper Deadline", date: "August 30, 2025" }
];

const speakerPreview = [
  {
    name: "Prof. Elena Martin",
    institution: "University of Barcelona",
    image:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Dr. Arif Rahman",
    institution: "BRIN Indonesia",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Prof. Michael Lee",
    institution: "National University of Singapore",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
  }
];

export function About() {
  return (
    <section id="about" className="bg-[#F4F7F6] py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5E8374]">About IPS 2025</p>
          <h2 className="mt-3 text-3xl font-semibold text-[#1F2937] sm:text-4xl">One conference, four integrated experiences.</h2>
          <p className="mt-4 text-base leading-relaxed text-[#4B5563]">
            IPS 2025 is an international physics seminar held in Jakarta with a hybrid format that brings together
            researchers, students, and academics to discuss impactful physics research supporting sustainable development goals.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <article className="rounded-2xl bg-white p-8 shadow-[0_16px_44px_rgba(31,41,55,0.08)]">
            <h3 className="text-xl font-semibold text-[#1F2937]">Conference Overview</h3>
            <p className="mt-4 leading-relaxed text-[#4B5563]">
              The seminar is designed as a premium academic forum connecting interdisciplinary physics communities. Sessions include keynote talks,
              oral presentations, and publication pathways for high-quality papers.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
              <div className="rounded-xl bg-[#F4F7F6] p-4">
                <p className="text-[#5E8374]">City</p>
                <p className="mt-1 font-semibold text-[#1F2937]">Jakarta</p>
              </div>
              <div className="rounded-xl bg-[#F4F7F6] p-4">
                <p className="text-[#5E8374]">Mode</p>
                <p className="mt-1 font-semibold text-[#1F2937]">Hybrid Event</p>
              </div>
              <div className="rounded-xl bg-[#F4F7F6] p-4">
                <p className="text-[#5E8374]">Participants</p>
                <p className="mt-1 font-semibold text-[#1F2937]">Global Community</p>
              </div>
              <div className="rounded-xl bg-[#F4F7F6] p-4">
                <p className="text-[#5E8374]">Focus</p>
                <p className="mt-1 font-semibold text-[#1F2937]">SDGs Through Physics</p>
              </div>
            </div>
          </article>

          <article className="rounded-2xl bg-white p-8 shadow-[0_16px_44px_rgba(31,41,55,0.08)]">
            <h3 className="text-xl font-semibold text-[#1F2937]">Conference Scope</h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {conferenceScope.map((scope) => (
                <div key={scope} className="rounded-xl border border-[#E4ECE9] bg-[#FAFCFB] p-3 text-sm font-medium text-[#1F2937]">
                  {scope}
                </div>
              ))}
            </div>
          </article>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <article className="rounded-2xl bg-white p-8 shadow-[0_16px_44px_rgba(31,41,55,0.08)]">
            <h3 className="text-xl font-semibold text-[#1F2937]">Important Dates</h3>
            <div className="mt-6 space-y-6">
              {importantDates.map((item, index) => (
                <div key={item.title} className="relative pl-8">
                  {index < importantDates.length - 1 && (
                    <span className="absolute left-[9px] top-7 h-[calc(100%+10px)] w-px bg-[#C8DCD3]" />
                  )}
                  <span className="absolute left-0 top-1.5 h-5 w-5 rounded-full border-4 border-[#DCEAE4] bg-[#5E8374]" />
                  <p className="text-sm text-[#5E8374]">{item.date}</p>
                  <p className="mt-1 font-medium text-[#1F2937]">{item.title}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-2xl bg-white p-8 shadow-[0_16px_44px_rgba(31,41,55,0.08)]">
            <h3 className="text-xl font-semibold text-[#1F2937]">Speakers Highlight</h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {speakerPreview.map((speaker) => (
                <div
                  key={speaker.name}
                  className="group overflow-hidden rounded-2xl border border-[#E6EFEB] bg-[#FAFCFB] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(79,111,97,0.18)]"
                >
                  <Image
                    src={speaker.image}
                    alt={speaker.name}
                    width={320}
                    height={220}
                    className="h-40 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="p-4">
                    <p className="font-semibold text-[#1F2937]">{speaker.name}</p>
                    <p className="mt-1 text-sm text-[#4B5563]">{speaker.institution}</p>
                  </div>
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
