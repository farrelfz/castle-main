"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Speakers", href: "#speakers" },
  { label: "Publications", href: "#publications" },
  { label: "Event Information", href: "#event-info" },
  { label: "Contact", href: "#contact" }
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-[#E6EFEB] bg-white/95 shadow-[0_12px_35px_rgba(31,41,55,0.08)] backdrop-blur"
          : "bg-white/90 backdrop-blur"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#home" className="text-lg font-semibold tracking-tight text-[#1F2937]">
          IPS <span className="text-[#5E8374]">2025</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-[#1F2937] transition-colors duration-200 hover:text-[#5E8374]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#event-info"
          className="hidden rounded-full bg-[#5E8374] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(94,131,116,0.32)] transition-all duration-300 hover:bg-[#4F6F61] md:inline-flex"
        >
          Register
        </a>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="inline-flex rounded-full border border-[#D8E6DF] p-2 text-[#1F2937] transition-colors duration-200 hover:bg-[#F4F7F6] md:hidden"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-[#E6EFEB] bg-white md:hidden"
          >
            <nav className="space-y-2 px-6 py-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={closeMenu}
                  className="block rounded-xl px-3 py-2 text-sm font-medium text-[#1F2937] transition-colors duration-200 hover:bg-[#F4F7F6] hover:text-[#4F6F61]"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
