import { motion } from "framer-motion";
import ivanFounder from "@/assets/ivan-founder.png";
import teamMember from "@/assets/team-member.png";

const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="font-display text-[15vw] font-bold text-foreground/[0.03] uppercase tracking-tighter whitespace-nowrap">
          ATOM STUDIOS
        </span>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Conoce al <span className="gradient-text">equipo</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Las mentes creativas detrás de cada proyecto
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Creator 1 - Ivan */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center text-center"
          >
            {/* Photo */}
            <div className="relative mb-8 group">
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative w-64 h-80 sm:w-80 sm:h-96 overflow-hidden">
                <img 
                  src={ivanFounder}
                  alt="Iván - Fundador de Atom Studios"
                  className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
            
            {/* Description */}
            <div className="max-w-sm">
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">IVÁN</h3>
              <p className="text-muted-foreground leading-relaxed uppercase tracking-wide text-sm">
                Hola, soy Iván - Desarrollador Frontend creativo.
                <br />
                Mi enfoque está en construir experiencias elegantes, animadas e inmersivas
                que transforman sitios web simples en algo extraordinario.
              </p>
            </div>
          </motion.div>

          {/* Creator 2 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col items-center text-center"
          >
            {/* Photo */}
            <div className="relative mb-8 group">
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative w-64 h-80 sm:w-80 sm:h-96 overflow-hidden">
                <img 
                  src={teamMember}
                  alt="Co-fundador de Atom Studios"
                  className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
            
            {/* Description */}
            <div className="max-w-sm">
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">CREADOR</h3>
              <p className="text-muted-foreground leading-relaxed uppercase tracking-wide text-sm">
                Soy el co-fundador de Atom Studios.
                <br />
                Especializado en diseño UI/UX y estrategia digital,
                creo experiencias visuales que conectan marcas con su audiencia.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Tech Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mt-20"
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
    </section>
  );
};

export default About;
