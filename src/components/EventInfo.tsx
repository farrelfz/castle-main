const schedule = [
  { time: "08:00 - 08:30", activity: "Registration & Morning Coffee" },
  { time: "08:30 - 09:00", activity: "Opening Remarks" },
  { time: "09:00 - 11:30", activity: "Keynote Sessions" },
  { time: "11:30 - 13:00", activity: "Break & Networking" },
  { time: "13:00 - 16:00", activity: "Parallel Presentation Sessions" }
];

const committee = [
  { name: "Dr. Nisa Pramesti", role: "Conference Chair" },
  { name: "Prof. Rian Setiawan", role: "Scientific Committee" },
  { name: "Dr. Lintang Wardani", role: "Publication Chair" },
  { name: "M. Reza Fadli", role: "Program Coordinator" }
];

const faqs = [
  {
    question: "Is IPS 2025 fully online?",
    answer: "IPS 2025 uses a hybrid format. Participants may attend on-site in Jakarta or virtually."
  },
  {
    question: "Can undergraduate students submit papers?",
    answer: "Yes. Submissions from undergraduate and postgraduate students are welcome with supervisor acknowledgment."
  },
  {
    question: "Will all accepted papers be published?",
    answer: "Accepted papers are eligible for publication tracks based on quality review and publication scope fit."
  }
];

export function EventInfo() {
  return (
    <section id="event-info" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5E8374]">Event Information</p>
          <h2 className="mt-3 text-3xl font-semibold text-[#1F2937] sm:text-4xl">Everything attendees need in one place.</h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <article className="rounded-2xl border border-[#E4ECE9] bg-[#F4F7F6] p-7">
            <h3 className="text-xl font-semibold text-[#1F2937]">Schedule</h3>
            <div className="mt-5 divide-y divide-[#D5E3DD] rounded-xl border border-[#DDE9E3] bg-white">
              {schedule.map((item) => (
                <div key={item.time} className="grid gap-2 px-4 py-3 sm:grid-cols-[170px_1fr]">
                  <p className="text-sm font-medium text-[#5E8374]">{item.time}</p>
                  <p className="text-sm text-[#1F2937]">{item.activity}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-2xl border border-[#E4ECE9] bg-[#F4F7F6] p-7">
            <h3 className="text-xl font-semibold text-[#1F2937]">Committee</h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {committee.map((person) => (
                <div key={person.name} className="rounded-xl border border-[#DDE9E3] bg-white p-4">
                  <p className="font-semibold text-[#1F2937]">{person.name}</p>
                  <p className="mt-1 text-sm text-[#5E8374]">{person.role}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-2xl border border-[#E4ECE9] bg-[#F4F7F6] p-7">
            <h3 className="text-xl font-semibold text-[#1F2937]">Registration Details</h3>
            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-[#374151]">
              <li className="rounded-xl border border-[#DDE9E3] bg-white p-4">Early Bird: USD 95 (Students) / USD 130 (General)</li>
              <li className="rounded-xl border border-[#DDE9E3] bg-white p-4">Regular: USD 120 (Students) / USD 160 (General)</li>
              <li className="rounded-xl border border-[#DDE9E3] bg-white p-4">Includes seminar access, e-certificate, and publication handling.</li>
            </ul>
            <a
              href="#home"
              className="mt-6 inline-flex rounded-full bg-[#5E8374] px-6 py-2.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#4F6F61]"
            >
              Register Your Seat
            </a>
          </article>

          <article className="rounded-2xl border border-[#E4ECE9] bg-[#F4F7F6] p-7">
            <h3 className="text-xl font-semibold text-[#1F2937]">FAQ</h3>
            <div className="mt-5 space-y-3">
              {faqs.map((faq) => (
                <div key={faq.question} className="rounded-xl border border-[#DDE9E3] bg-white p-4">
                  <p className="font-medium text-[#1F2937]">{faq.question}</p>
                  <p className="mt-2 text-sm leading-relaxed text-[#4B5563]">{faq.answer}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
