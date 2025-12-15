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

  // Horizontal movement for images - more dramatic movement
  const xLeft1 = useTransform(scrollYProgress, [0, 0.5, 1], ["-150%", "0%", "150%"]);
  const xRight1 = useTransform(scrollYProgress, [0, 0.5, 1], ["150%", "0%", "-150%"]);
  const xLeft2 = useTransform(scrollYProgress, [0, 0.5, 1], ["-180%", "0%", "180%"]);
  const xRight2 = useTransform(scrollYProgress, [0, 0.5, 1], ["180%", "0%", "-180%"]);
  const xCenter = useTransform(scrollYProgress, [0, 0.5, 1], ["-50%", "0%", "50%"]);
  
  // Text horizontal movement - more movement
  const textX1 = useTransform(scrollYProgress, [0, 0.5, 1], ["-20%", "0%", "20%"]);
  const textX2 = useTransform(scrollYProgress, [0, 0.5, 1], ["20%", "0%", "-20%"]);

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
            style={{ x: img.x }}
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
        <div className="relative z-40 text-center px-4 max-w-6xl">
          <motion.p 
            style={{ x: textX1 }}
            className="text-[6vw] md:text-[4vw] font-bold text-foreground tracking-tight leading-tight"
          >
            No es solo una página web,
          </motion.p>
          <motion.p 
            style={{ x: textX2 }}
            className="text-[6vw] md:text-[4vw] font-bold text-primary tracking-tight leading-tight"
          >
            es tu mejor vendedor.
          </motion.p>
        </div>

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background pointer-events-none z-50" />
      </div>
    </section>
  );
};

export default ParallaxText;
