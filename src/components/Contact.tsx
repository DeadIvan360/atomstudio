import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-muted-foreground mb-8">
            <Mail className="w-4 h-4" />
            <span>Empecemos algo increíble</span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold mb-8 leading-tight">
            ¿Listo para
            <br />
            <span className="gradient-text">transformar tu marca?</span>
          </h2>

          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Cuéntanos sobre tu proyecto y descubre cómo podemos ayudarte a crear 
            una presencia digital que destaque.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="mailto:atomstudios10@gmail.com"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:scale-105 transition-transform duration-300 glow"
            >
              Iniciar Proyecto
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a
              href="mailto:atomstudios10@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              atomstudios10@gmail.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
