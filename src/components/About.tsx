import { motion } from "framer-motion";

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
            
            <p className="text-muted-foreground mb-10 leading-relaxed">
              Nuestro equipo de diseñadores y desarrolladores trabaja en perfecta sincronía 
              para transformar tu visión en realidad digital. Desde startups hasta empresas 
              establecidas, llevamos cada proyecto al siguiente nivel.
            </p>

            <div className="flex flex-wrap gap-4">
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
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Decorative Elements */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 to-transparent animate-pulse-glow" />
              
              <div className="absolute top-8 left-8 right-8 bottom-8 rounded-2xl glass overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=600&fit=crop"
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
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
