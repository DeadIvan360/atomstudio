import { motion } from "framer-motion";

const stats = [
  { value: "150+", label: "Proyectos", sublabel: "Completados" },
  { value: "98%", label: "Clientes", sublabel: "Satisfechos" },
  { value: "5+", label: "Años de", sublabel: "Experiencia" },
  { value: "24/7", label: "Soporte", sublabel: "Disponible" },
];

const Stats = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
      
      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estableciendo un nuevo estándar en diseño web—
            <span className="text-foreground font-medium"> más rápido, más inteligente, mejor.</span>
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="mb-4">
                <span className="font-display text-5xl lg:text-6xl font-bold gradient-text">
                  {stat.value}
                </span>
              </div>
              <div className="space-y-1">
                <p className="text-foreground font-medium">{stat.label}</p>
                <p className="text-sm text-muted-foreground">{stat.sublabel}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
