import About from "@/components/sections/About";
import Ventures from "@/components/sections/Ventures";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Ventures />
      <Experience />
      <Contact />
    </main>
  );
}