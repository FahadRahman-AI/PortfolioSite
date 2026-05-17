import Preloader from "@/app/components/Preloader";
import Hero from "@/app/sections/Hero";
import Showreel from "@/app/sections/Showreel";
import Projects from "@/app/sections/Projects";
import About from "@/app/sections/About";
import Services from "@/app/sections/Services";
import Archive from "@/app/sections/Archive";
import Startup from "@/app/sections/Startup";
import Testimonials from "@/app/sections/Testimonials";
import Contact from "@/app/sections/Contact";

export default function Home() {
  return (
    <>
      <Preloader />
      <main>
        <Hero />
        <Showreel />
        <Projects />
        <About />
        <Services />
        <Archive />
        <Startup />
        <Testimonials />
        <Contact />
      </main>
    </>
  );
}
