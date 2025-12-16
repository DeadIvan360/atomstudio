import { motion } from "framer-motion";
import { Mail, ArrowRight, Phone } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

const PHONE_NUMBER = "+34 612 345 678";
const WHATSAPP_LINK = "https://wa.me/34612345678?text=Hola%2C%20me%20interesa%20empezar%20un%20proyecto%20web";

const Contact = () => {
  return (
    <section id="contacto" className="py-32 relative" aria-labelledby="contacto-title">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-muted-foreground mb-8">
            <Mail className="w-4 h-4" aria-hidden="true" />
            <span>Cotización gratis</span>
          </div>

          <h2 id="contacto-title" className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold mb-8 leading-tight">
            Solicita tu
            <br />
            <span className="gradient-text">Cotización de Diseño Web</span>
          </h2>

          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Cuéntanos sobre tu proyecto y recibe una cotización personalizada. 
            Diseño web profesional para empresas que buscan resultados.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] text-white font-semibold rounded-full hover:scale-105 transition-transform duration-300 shadow-lg shadow-[#25D366]/30"
            >
              <SiWhatsapp className="w-5 h-5" />
              Contactar por WhatsApp
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-8">
            <a
              href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`}
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Phone className="w-4 h-4" />
              {PHONE_NUMBER}
            </a>
            
            <a
              href="mailto:atomstudios10@gmail.com"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="w-4 h-4" />
              atomstudios10@gmail.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
