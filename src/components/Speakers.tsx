import Image from "next/image";

const speakers = [
  {
    name: "Prof. Elena Martin",
    institution: "University of Barcelona",
    image:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Dr. Arif Rahman",
    institution: "BRIN Indonesia",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Prof. Michael Lee",
    institution: "National University of Singapore",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Dr. Sofia Delgado",
    institution: "CERN",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Prof. Budi Santoso",
    institution: "Universitas Negeri Jakarta",
    image:
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Dr. Hana Yoshida",
    institution: "University of Tokyo",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=80"
  }
];

export function Speakers() {
  return (
    <section id="speakers" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5E8374]">Speakers</p>
          <h2 className="mt-3 text-3xl font-semibold text-[#1F2937] sm:text-4xl">Meet global experts shaping modern physics.</h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {speakers.map((speaker) => (
            <article
              key={speaker.name}
              className="group overflow-hidden rounded-2xl border border-[#E4ECE9] bg-white shadow-[0_12px_30px_rgba(31,41,55,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(79,111,97,0.2)]"
            >
              <Image
                src={speaker.image}
                alt={speaker.name}
                width={480}
                height={320}
                className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-[#1F2937]">{speaker.name}</h3>
                <p className="mt-1 text-sm text-[#4B5563]">{speaker.institution}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
