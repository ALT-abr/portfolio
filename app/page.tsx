import Hero from "@/components/sections/Hero"
import About from "@/components/sections/About"
import Skills from "@/components/sections/Skills";
import Project from "@/components/sections/Project";
export default function Home() {
  return (
    <main className="main">
      <Hero />
      <About />
      <Skills />
      <Project />
    </main>
  );
}
