import { motion, useScroll, useTransform } from "framer-motion";
import { Palette, Code2, Rocket, LineChart, Layers, Zap } from "lucide-react";
import { useRef } from "react";
import parallaxFrame from "@/assets/parallax-frame.png";

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
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [50, -150]);
  const y3 = useTransform(scrollYProgress, [0, 1], [150, -50]);

  return (
    <section id="services" className="py-32 relative overflow-hidden" ref={containerRef}>
      {/* Parallax Images - Right Side */}
      <div className="absolute right-0 top-0 h-full w-1/3 pointer-events-none hidden lg:block">
        <motion.img
          src={parallaxFrame}
          alt=""
          style={{ y: y1 }}
          className="absolute right-10 top-20 w-48 h-auto opacity-20 blur-[1px]"
        />
        <motion.img
          src={parallaxFrame}
          alt=""
          style={{ y: y2 }}
          className="absolute right-32 top-1/3 w-64 h-auto opacity-15 blur-[2px]"
        />
        <motion.img
          src={parallaxFrame}
          alt=""
          style={{ y: y3 }}
          className="absolute right-8 bottom-40 w-56 h-auto opacity-25"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-20"
        >
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Servicios que
            <br />
            <span className="gradient-text">impulsan tu marca</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Soluciones digitales completas para llevar tu presencia online al siguiente nivel.
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
