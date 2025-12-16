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
        <title>Diseño Web Profesional | Atom Studios - Agencia Digital</title>
        <meta
          name="description"
          content="Diseño y desarrollo web profesional para empresas. Landing pages, tiendas online y sitios web que convierten visitantes en clientes. ¡Cotiza gratis!"
        />
        <meta name="keywords" content="diseño web profesional, agencia diseño web, desarrollo web, páginas web para empresas, landing pages, tiendas online, UI/UX" />
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
