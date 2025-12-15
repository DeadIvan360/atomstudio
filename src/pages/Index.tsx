import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ParallaxText from "@/components/ParallaxText";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Atom Studios | Diseño y Desarrollo Web Profesional</title>
        <meta
          name="description"
          content="Creamos experiencias digitales impactantes. Diseño web, desarrollo y estrategia digital para marcas que quieren destacar."
        />
        <meta name="keywords" content="diseño web, desarrollo web, páginas web, UI/UX, agencia digital" />
        <link rel="canonical" href="https://atomstudios.com" />
      </Helmet>

      <main className="min-h-screen bg-background">
        <Navigation />
        <Hero />
        <ParallaxText />
        <Services />
        <Stats />
        <Portfolio />
        <About />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default Index;
