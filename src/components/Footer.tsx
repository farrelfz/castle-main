import { Facebook, Instagram, Linkedin } from "lucide-react";

const socialLinks = [
  { name: "Instagram", href: "#", icon: Instagram },
  { name: "LinkedIn", href: "#", icon: Linkedin },
  { name: "Facebook", href: "#", icon: Facebook }
];

export function Footer() {
  return (
    <footer id="contact" className="bg-[#4F6F61] py-14 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-[#DDE9E3]">IPS 2025</p>
            <h3 className="mt-3 text-2xl font-semibold">International Physics Seminar</h3>
            <p className="mt-4 text-sm leading-relaxed text-[#E5EFEB]">
              A premium academic forum connecting physics communities to advance sustainable development goals.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <ul className="mt-4 space-y-2 text-sm text-[#E5EFEB]">
              <li>Email: ips2025@unj.ac.id</li>
              <li>Phone: +62 21 489-8486</li>
              <li>Location: Universitas Negeri Jakarta</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="mt-4 space-y-2 text-sm text-[#E5EFEB]">
              <li>
                <a href="#about" className="transition-colors hover:text-white">
                  About Conference
                </a>
              </li>
              <li>
                <a href="#speakers" className="transition-colors hover:text-white">
                  Speakers
                </a>
              </li>
              <li>
                <a href="#publications" className="transition-colors hover:text-white">
                  Publications
                </a>
              </li>
              <li>
                <a href="#event-info" className="transition-colors hover:text-white">
                  Event Information
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold">Social</h4>
            <div className="mt-4 flex gap-3">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-label={item.name}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#7FAE9B] text-[#EAF4F0] transition-colors hover:bg-[#7FAE9B] hover:text-[#1F2937]"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-[#7FAE9B]/40 pt-6 text-sm text-[#DDE9E3]">
          <p>© 2025 International Physics Seminar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
