import { motion } from "framer-motion";
import { Palette, Code2, Rocket, LineChart, Layers, Zap } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Diseño UI/UX",
    description: "Interfaces intuitivas y experiencias memorables que conectan con tus usuarios.",
  },
  {
    icon: Code2,
    title: "Desarrollo Web",
    description: "Sitios web modernos, rápidos y optimizados con las últimas tecnologías.",
  },
  {
    icon: Rocket,
    title: "Landing Pages",
    description: "Páginas de conversión diseñadas para maximizar resultados.",
  },
  {
    icon: LineChart,
    title: "SEO & Analytics",
    description: "Estrategias de posicionamiento y análisis de datos para crecer.",
  },
  {
    icon: Layers,
    title: "E-Commerce",
    description: "Tiendas online completas que venden mientras duermes.",
  },
  {
    icon: Zap,
    title: "Mantenimiento",
    description: "Soporte continuo para mantener tu sitio seguro y actualizado.",
  },
];

const Services = () => {
  return (
    <section id="servicios" className="py-32 relative" aria-labelledby="servicios-title">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-20"
        >
          <h2 id="servicios-title" className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Servicios de
            <br />
            <span className="gradient-text">Diseño y Desarrollo Web</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Soluciones digitales completas para empresas que buscan destacar online y convertir visitantes en clientes.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                
                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
