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
    offset: ["start start", "end end"]
  });

  // Horizontal movement for images - from sides to center and back
  const xLeft1 = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], ["-100%", "0%", "0%", "100%"]);
  const xRight1 = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], ["100%", "0%", "0%", "-100%"]);
  const xLeft2 = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], ["-120%", "0%", "0%", "120%"]);
  const xRight2 = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], ["120%", "0%", "0%", "-120%"]);
  const xCenter = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], ["0%", "0%", "0%", "0%"]);
  
  // Opacity and scale - stay visible
  const opacity = useTransform(scrollYProgress, [0, 0.15], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);
  
  // Text horizontal movement
  const textX1 = useTransform(scrollYProgress, [0, 0.5, 1], ["-10%", "0%", "10%"]);
  const textX2 = useTransform(scrollYProgress, [0, 0.5, 1], ["10%", "0%", "-10%"]);

  const floatingImages = [
    {
      src: parallaxLaptop,
      x: xLeft1,
      className: "absolute top-[15%] left-[5%] w-[280px] md:w-[350px] z-10",
      alt: "Laptop con diseño web"
    },
    {
      src: parallaxInterface,
      x: xRight1,
      className: "absolute top-[10%] right-[8%] w-[200px] md:w-[280px] z-20",
      alt: "Interfaz digital"
    },
    {
      src: parallaxPhone,
      x: xLeft2,
      className: "absolute bottom-[20%] left-[15%] w-[120px] md:w-[180px] z-30",
      alt: "Móvil con app"
    },
    {
      src: parallaxMonitor,
      x: xRight2,
      className: "absolute bottom-[15%] right-[5%] w-[250px] md:w-[320px] z-10",
      alt: "Monitor con diseño"
    },
    {
      src: parallaxShapes,
      x: xCenter,
      className: "absolute top-[45%] right-[30%] w-[150px] md:w-[200px] z-5 opacity-80",
      alt: "Formas abstractas"
    }
  ];

  return (
    <section 
      ref={containerRef}
      className="relative h-[300vh]"
    >
      {/* Sticky container */}
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden bg-background">
        {/* Floating Images with Horizontal Parallax */}
        {floatingImages.map((img, index) => (
          <motion.div
            key={index}
            style={{ x: img.x, opacity, scale }}
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
            style={{ x: textX1 }}
            className="text-[12vw] md:text-[10vw] font-bold text-foreground tracking-tighter leading-none"
          >
            DISEÑA
          </motion.h2>
          <motion.h2 
            style={{ x: textX2 }}
            className="text-[12vw] md:text-[10vw] font-bold text-primary tracking-tighter leading-none"
          >
            SMARTER
          </motion.h2>
        </motion.div>

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background pointer-events-none z-50" />
      </div>
    </section>
  );
};

export default ParallaxText;
