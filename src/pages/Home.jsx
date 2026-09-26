import Navbar from "@/components/oceanmak/Navbar";
import Hero from "@/components/oceanmak/Hero";
import Introduction from "@/components/oceanmak/Introduction";
import WhyOceanmak from "@/components/oceanmak/WhyOceanmak";
import Services from "@/components/oceanmak/Services";
import Industries from "@/components/oceanmak/Industries";
import Projects from "@/components/oceanmak/Projects";
import Hseq from "@/components/oceanmak/Hseq";
import Capability from "@/components/oceanmak/Capability";
import Gallery from "@/components/oceanmak/Gallery";
import About from "@/components/oceanmak/About";
import Cta from "@/components/oceanmak/Cta";
import Contact from "@/components/oceanmak/Contact";
import Footer from "@/components/oceanmak/Footer";

export default function Home() {
  return (
    <div className="bg-abyss min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Introduction />
        <WhyOceanmak />
        <Services />
        <Industries />
        <Projects />
        <Hseq />
        <Capability />
        <Gallery />
        <About />
        <Cta />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}