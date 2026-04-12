const publications = [
  {
    title: "Journal of Physics: Conference Series",
    description: "Selected papers will be submitted to JPCS with international visibility for peer-reviewed conference outputs.",
    badge: "Scopus Indexed"
  },
  {
    title: "Spektra Journal",
    description: "Manuscripts in applied and educational physics may continue publication tracks in Spektra Journal.",
    badge: "SINTA"
  },
  {
    title: "SNF Proceedings",
    description: "Accepted works can be included in SNF Proceedings as part of curated seminar documentation.",
    badge: "Proceedings"
  }
];

export function Publications() {
  return (
    <section id="publications" className="bg-[#F4F7F6] py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5E8374]">Publications</p>
          <h2 className="mt-3 text-3xl font-semibold text-[#1F2937] sm:text-4xl">High-quality publication opportunities.</h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {publications.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-[#E4ECE9] bg-white p-7 shadow-[0_14px_36px_rgba(31,41,55,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_44px_rgba(79,111,97,0.2)]"
            >
              <span className="inline-flex rounded-full bg-[#E7F1EC] px-3 py-1 text-xs font-semibold text-[#4F6F61]">{item.badge}</span>
              <h3 className="mt-5 text-xl font-semibold text-[#1F2937]">{item.title}</h3>
              <p className="mt-3 leading-relaxed text-[#4B5563]">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
