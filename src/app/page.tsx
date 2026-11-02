import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { Marquee } from "@/components/sections/marquee";
import { Works } from "@/components/sections/works";
import { Motivation } from "@/components/sections/motivation";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <main className="grain">
      <Navbar />
      <Hero />
      <Marquee />
      <Works />
      <Motivation />
      <About />
      <Contact />
    </main>
  );
}
