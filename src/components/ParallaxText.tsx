import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import parallaxLaptop from "@/assets/parallax-laptop.png";
import parallaxInterface from "@/assets/parallax-interface.png";
import parallaxPhone from "@/assets/parallax-phone.png";
import parallaxMonitor from "@/assets/parallax-monitor.png";
import parallaxShapes from "@/assets/parallax-shapes.png";

const ParallaxText = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Different parallax speeds for each element
  const y1 = useTransform(scrollYProgress, [0, 1], ["20%", "-30%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["40%", "-20%"]);
  const y3 = useTransform(scrollYProgress, [0, 1], ["10%", "-40%"]);
  const y4 = useTransform(scrollYProgress, [0, 1], ["30%", "-15%"]);
  const y5 = useTransform(scrollYProgress, [0, 1], ["50%", "-25%"]);
  
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.9, 1, 1, 0.9]);
  
  // Horizontal movement for text
  const x1 = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);

  const floatingImages = [
    {
      src: parallaxLaptop,
      y: y1,
      className: "absolute top-[10%] left-[5%] w-[280px] md:w-[350px] z-10",
      alt: "Laptop con diseño web"
    },
    {
      src: parallaxInterface,
      y: y2,
      className: "absolute top-[5%] right-[8%] w-[200px] md:w-[280px] z-20",
      alt: "Interfaz digital"
    },
    {
      src: parallaxPhone,
      y: y3,
      className: "absolute bottom-[15%] left-[10%] w-[120px] md:w-[180px] z-30",
      alt: "Móvil con app"
    },
    {
      src: parallaxMonitor,
      y: y4,
      className: "absolute bottom-[10%] right-[5%] w-[250px] md:w-[320px] z-10",
      alt: "Monitor con diseño"
    },
    {
      src: parallaxShapes,
      y: y5,
      className: "absolute top-[40%] right-[25%] w-[150px] md:w-[200px] z-5 opacity-80",
      alt: "Formas abstractas"
    }
  ];

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[120vh] flex flex-col items-center justify-center overflow-hidden bg-background"
    >
      {/* Floating Images with Parallax */}
      {floatingImages.map((img, index) => (
        <motion.div
          key={index}
          style={{ y: img.y, opacity, scale }}
          className={img.className}
        >
          <img 
            src={img.src} 
            alt={img.alt}
            className="w-full h-auto rounded-lg shadow-2xl shadow-primary/20"
          />
        </motion.div>
      ))}

      {/* Center Text */}
      <motion.div 
        style={{ opacity, scale }}
        className="relative z-40 text-center px-4"
      >
        <motion.h2 
          style={{ x: x1 }}
          className="text-[12vw] md:text-[10vw] font-bold text-foreground tracking-tighter leading-none"
        >
          DISEÑA
        </motion.h2>
        <motion.h2 
          style={{ x: x2 }}
          className="text-[12vw] md:text-[10vw] font-bold text-primary tracking-tighter leading-none"
        >
          SMARTER
        </motion.h2>
      </motion.div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background pointer-events-none z-50" />
    </section>
  );
};

export default ParallaxText;
