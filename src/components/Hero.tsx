import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useRef } from "react";
import heroVideo from "@/assets/hero-video.mp4";
import parallaxFrame from "@/assets/parallax-frame.png";

const Hero = () => {
  const textSectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: textSectionRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [50, -150]);
  const y3 = useTransform(scrollYProgress, [0, 1], [150, -50]);

  return (
    <>
      {/* Video Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            src={heroVideo}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-white"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ArrowDown size={20} />
          </motion.div>
        </motion.div>
      </section>

      {/* Text Section */}
      <section ref={textSectionRef} className="relative min-h-screen flex items-center justify-center overflow-visible bg-background">
        {/* Parallax Images */}
        <div className="absolute inset-0 pointer-events-none hidden lg:block">
          <motion.img
            src={parallaxFrame}
            alt=""
            style={{ y: y1 }}
            className="absolute left-1/2 -translate-x-1/2 top-10 w-72 h-auto opacity-90"
          />
          <motion.img
            src={parallaxFrame}
            alt=""
            style={{ y: y2 }}
            className="absolute right-20 top-1/3 w-80 h-auto opacity-80"
          />
          <motion.img
            src={parallaxFrame}
            alt=""
            style={{ y: y3 }}
            className="absolute left-20 bottom-20 w-64 h-auto opacity-85"
          />
        </div>
        <div className="relative z-10 container mx-auto px-6 py-20">
          <motion.div 
            className="max-w-5xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <span className="inline-block px-4 py-2 rounded-full glass text-sm text-muted-foreground mb-8">
                Estudio de Diseño Web
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight mb-8"
            >
              <span className="text-foreground">CREAMOS</span>
              <br />
              <span className="gradient-text animate-gradient">EXPERIENCIAS</span>
              <br />
              <span className="text-foreground">DIGITALES</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl text-muted-foreground max-w-xl mb-12"
            >
              Transformamos ideas en sitios web impactantes. Diseño, desarrollo y 
              estrategia digital para marcas que quieren destacar.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:scale-105 transition-transform duration-300 glow"
              >
                Empezar Proyecto
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center px-8 py-4 glass text-foreground font-semibold rounded-full hover:bg-secondary transition-colors duration-300"
              >
                Ver Portafolio
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Hero;
