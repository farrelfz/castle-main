import type { Metadata } from "next";
import { Sora, DM_Sans } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/i18n/language";

const sora = Sora({ subsets: ["latin"], variable: "--font-sora" });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });

export const metadata: Metadata = {
  title: "IPS 2025 | International Physics Seminar",
  description:
    "International Physics Seminar 2025 in Jakarta with a hybrid format for researchers, students, and academics."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${sora.variable} ${dmSans.variable} font-body antialiased selection:bg-primary selection:text-white`}
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
