import { motion } from "framer-motion";
import ivanFounder from "@/assets/ivan-founder.png";
import teamMember from "@/assets/team-member.png";

const About = () => {
  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              Creatividad sin
              <br />
              <span className="gradient-text">límites</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              En Atom Studios, creemos que cada marca merece una presencia digital excepcional. 
              Combinamos diseño estratégico con desarrollo de vanguardia para crear experiencias 
              que no solo se ven increíbles, sino que también generan resultados.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
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
            </div>

            {/* Founder Photo with Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-6"
            >
              <div className="w-24 h-24 rounded-full overflow-hidden glass border-2 border-primary/30 flex-shrink-0">
                <img 
                  src={ivanFounder}
                  alt="Iván - Fundador de Atom Studios"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div>
                <p className="text-foreground font-medium mb-1">Iván</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  "Soy el fundador de Atom Studios. Mi pasión es transformar ideas en experiencias digitales que conectan marcas con personas."
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Visual - Team Member Photo */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative max-w-md mx-auto">
              {/* Decorative Elements */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/20 to-transparent animate-pulse-glow" />
              
              <div className="relative rounded-2xl glass overflow-hidden">
                <img 
                  src={teamMember}
                  alt="Equipo Atom Studios"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Floating Card */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-6 -left-6 p-6 rounded-2xl glass"
              >
                <p className="text-3xl font-display font-bold gradient-text">5+</p>
                <p className="text-sm text-muted-foreground">Años creando</p>
              </motion.div>

              {/* Floating Card 2 */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -top-4 -right-4 p-4 rounded-xl glass"
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-sm text-foreground">Disponibles ahora</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
