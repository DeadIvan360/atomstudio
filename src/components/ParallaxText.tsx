import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ParallaxText = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Different parallax speeds for each line
  const x1 = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[80vh] flex flex-col items-center justify-center overflow-hidden bg-background py-20"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
      
      {/* Parallax text container */}
      <motion.div 
        style={{ opacity, scale }}
        className="relative z-10 w-full flex flex-col items-center gap-4"
      >
        {/* First line - moves left to right */}
        <motion.div 
          style={{ x: x1 }}
          className="flex items-center gap-8"
        >
          <span className="text-[8vw] md:text-[10vw] font-bold text-foreground/10 whitespace-nowrap tracking-tighter">
            CREAMOS
          </span>
          <span className="text-[8vw] md:text-[10vw] font-bold text-primary whitespace-nowrap tracking-tighter">
            EXPERIENCIAS
          </span>
          <span className="text-[8vw] md:text-[10vw] font-bold text-foreground/10 whitespace-nowrap tracking-tighter">
            DIGITALES
          </span>
        </motion.div>

        {/* Second line - moves right to left */}
        <motion.div 
          style={{ x: x2 }}
          className="flex items-center gap-8"
        >
          <span className="text-[8vw] md:text-[10vw] font-bold text-foreground/10 whitespace-nowrap tracking-tighter">
            DISEÑO
          </span>
          <span className="text-[8vw] md:text-[10vw] font-bold text-primary whitespace-nowrap tracking-tighter">
            QUE
          </span>
          <span className="text-[8vw] md:text-[10vw] font-bold text-foreground/10 whitespace-nowrap tracking-tighter">
            IMPACTA
          </span>
        </motion.div>
      </motion.div>

      {/* Decorative elements */}
      <motion.div 
        style={{ opacity }}
        className="absolute top-1/4 left-10 w-2 h-2 bg-primary rounded-full"
      />
      <motion.div 
        style={{ opacity }}
        className="absolute bottom-1/4 right-10 w-3 h-3 bg-primary/50 rounded-full"
      />
      <motion.div 
        style={{ opacity }}
        className="absolute top-1/2 right-1/4 w-1 h-1 bg-primary/30 rounded-full"
      />
    </section>
  );
};

export default ParallaxText;
