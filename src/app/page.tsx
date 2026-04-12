import { About } from "@/components/About";
import { EventInfo } from "@/components/EventInfo";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Publications } from "@/components/Publications";
import { Speakers } from "@/components/Speakers";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Speakers />
      <Publications />
      <EventInfo />
      <Footer />
    </main>
  );
}
