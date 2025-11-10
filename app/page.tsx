import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { FeaturedProject } from "./components/FeaturedProject";
import { Services } from "./components/Services";
import { Contact } from "./components/Contact";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <About />
      <FeaturedProject />
      <Services />
      <Contact />
    </main>
  );
}