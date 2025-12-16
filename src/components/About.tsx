import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ivanFounder from "@/assets/ivan-founder.png";
import teamMember from "@/assets/team-member.png";

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  // Scale transforms for parallax effect - images start visible but small, then grow
  const scale1 = useTransform(scrollYProgress, [0, 0.5], [0.4, 1]);
  const scale2 = useTransform(scrollYProgress, [0.1, 0.6], [0.4, 1]);
  const opacity1 = useTransform(scrollYProgress, [0, 0.15], [0.6, 1]);
  const opacity2 = useTransform(scrollYProgress, [0.1, 0.25], [0.6, 1]);
  
  // Text appears after images are grown
  const textOpacity = useTransform(scrollYProgress, [0.5, 0.7], [0, 1]);
  const textY = useTransform(scrollYProgress, [0.5, 0.7], [30, 0]);

  return (
    <section id="nosotros" ref={sectionRef} className="relative h-[300vh]" aria-labelledby="nosotros-title">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {/* Background Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden" aria-hidden="true">
          <motion.span 
            style={{ opacity: useTransform(scrollYProgress, [0, 0.3], [0, 0.03]) }}
            className="font-display text-[15vw] font-bold text-foreground uppercase tracking-tighter whitespace-nowrap"
          >
            ATOM STUDIOS
          </motion.span>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Section Header */}
          <motion.div
            style={{ opacity: textOpacity, y: textY }}
            className="text-center mb-16"
          >
            <h2 id="nosotros-title" className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Agencia de <span className="gradient-text">Diseño Web</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Expertos en diseño y desarrollo web profesional para empresas
            </p>
          </motion.div>

          {/* Team Grid */}
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Creator 1 - Ivan */}
            <div className="flex flex-col items-center text-center">
              {/* Photo with Parallax */}
              <motion.div
                style={{ scale: scale1, opacity: opacity1 }}
                className="relative mb-8 group origin-center"
              >
                <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative w-64 h-80 sm:w-80 sm:h-96 overflow-hidden">
                  <img 
                    src={ivanFounder}
                    alt="Iván - Desarrollador web y fundador de Atom Studios, agencia de diseño web profesional"
                    loading="lazy"
                    className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </motion.div>
              
              {/* Description */}
              <motion.div 
                style={{ opacity: textOpacity, y: textY }}
                className="max-w-sm"
              >
                <h3 className="font-display text-2xl font-bold text-foreground mb-4">IVÁN</h3>
                <p className="text-muted-foreground leading-relaxed uppercase tracking-wide text-sm">
                  Hola, soy Iván - Desarrollador Frontend creativo.
                  <br />
                  Mi enfoque está en construir experiencias elegantes, animadas e inmersivas
                  que transforman sitios web simples en algo extraordinario.
                </p>
              </motion.div>
            </div>

            {/* Creator 2 */}
            <div className="flex flex-col items-center text-center">
              {/* Photo with Parallax */}
              <motion.div
                style={{ scale: scale2, opacity: opacity2 }}
                className="relative mb-8 group origin-center"
              >
                <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative w-64 h-80 sm:w-80 sm:h-96 overflow-hidden">
                  <img 
                    src={teamMember}
                    alt="Co-fundador de Atom Studios - Diseñador UI/UX especializado en páginas web para empresas"
                    loading="lazy"
                    className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </motion.div>
              
              {/* Description */}
              <motion.div 
                style={{ opacity: textOpacity, y: textY }}
                className="max-w-sm"
              >
                <h3 className="font-display text-2xl font-bold text-foreground mb-4">CREADOR</h3>
                <p className="text-muted-foreground leading-relaxed uppercase tracking-wide text-sm">
                  Soy el co-fundador de Atom Studios.
                  <br />
                  Especializado en diseño UI/UX y estrategia digital,
                  creo experiencias visuales que conectan marcas con su audiencia.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Tech Tags */}
          <motion.div
            style={{ opacity: textOpacity }}
            className="flex flex-wrap justify-center gap-4 mt-16"
          >
            <div className="px-5 py-3 rounded-full glass text-sm text-foreground">
              React & Next.js
            </div>
            <div className="px-5 py-3 rounded-full glass text-sm text-foreground">
              Figma & Design
            </div>
            <div className="px-5 py-3 rounded-full glass text-sm text-foreground">
              Webflow
            </div>
            <div className="px-5 py-3 rounded-full glass text-sm text-foreground">
              WordPress
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
