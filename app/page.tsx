import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Blog from "./components/Blog";
import BackToTop from "./components/BackToTop";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen" id="main-content">
      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <Experience />
      <Projects />
      <Blog />
      <Contact />
      <Footer />

      {/* Global decorative elements */}
      <div className="fixed bottom-0 left-10 hidden lg:block w-[1px] h-32 bg-gray-500/50" />
      <div className="fixed bottom-0 right-10 hidden lg:block w-[1px] h-32 bg-gray-500/50" />

      <BackToTop />
    </main>
  );
}

