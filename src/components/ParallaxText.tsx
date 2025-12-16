import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import parallaxLaptop from "@/assets/parallax-laptop.png";
import parallaxInterface from "@/assets/parallax-interface.png";
import parallaxPhone from "@/assets/parallax-phone.png";
import parallaxMonitor from "@/assets/parallax-monitor.png";
import parallaxShapes from "@/assets/parallax-shapes.png";
import parallaxWeb1 from "@/assets/parallax-web1.png";
import parallaxWeb2 from "@/assets/parallax-web2.png";
import parallaxWeb3 from "@/assets/parallax-web3.png";
import parallaxWeb4 from "@/assets/parallax-web4.png";
import parallaxWeb5 from "@/assets/parallax-web5.png";

const ParallaxText = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Horizontal movement for images - more dramatic movement
  const xLeft1 = useTransform(scrollYProgress, [0, 0.5, 1], ["-120%", "0%", "120%"]);
  const xRight1 = useTransform(scrollYProgress, [0, 0.5, 1], ["120%", "0%", "-120%"]);
  const xLeft2 = useTransform(scrollYProgress, [0, 0.5, 1], ["-150%", "0%", "150%"]);
  const xRight2 = useTransform(scrollYProgress, [0, 0.5, 1], ["150%", "0%", "-150%"]);
  const xCenter = useTransform(scrollYProgress, [0, 0.5, 1], ["-80%", "0%", "80%"]);
  const xLeft3 = useTransform(scrollYProgress, [0, 0.5, 1], ["-180%", "0%", "180%"]);
  const xRight3 = useTransform(scrollYProgress, [0, 0.5, 1], ["180%", "0%", "-180%"]);
  
  // Text horizontal movement - more movement
  const textX1 = useTransform(scrollYProgress, [0, 0.5, 1], ["-20%", "0%", "20%"]);
  const textX2 = useTransform(scrollYProgress, [0, 0.5, 1], ["20%", "0%", "-20%"]);

  const floatingImages = [
    {
      src: parallaxLaptop,
      x: xLeft1,
      className: "absolute top-[8%] left-[3%] w-[220px] md:w-[280px] z-10",
      alt: "Diseño web profesional en laptop - desarrollo de páginas web responsivas"
    },
    {
      src: parallaxInterface,
      x: xRight1,
      className: "absolute top-[5%] right-[5%] w-[180px] md:w-[240px] z-20",
      alt: "Interfaz de usuario UI/UX - diseño web moderno para empresas"
    },
    {
      src: parallaxPhone,
      x: xLeft2,
      className: "absolute bottom-[25%] left-[10%] w-[100px] md:w-[150px] z-30",
      alt: "Diseño web móvil - páginas web optimizadas para smartphones"
    },
    {
      src: parallaxMonitor,
      x: xRight2,
      className: "absolute bottom-[20%] right-[3%] w-[200px] md:w-[280px] z-10",
      alt: "Sitio web profesional en monitor - desarrollo web de alta calidad"
    },
    {
      src: parallaxShapes,
      x: xCenter,
      className: "absolute top-[40%] right-[35%] w-[120px] md:w-[160px] z-5 opacity-70",
      alt: "Elementos de diseño web creativos"
    },
    {
      src: parallaxWeb1,
      x: xLeft3,
      className: "absolute top-[20%] left-[20%] w-[200px] md:w-[260px] z-15",
      alt: "Tienda online profesional - diseño de e-commerce para negocios"
    },
    {
      src: parallaxWeb2,
      x: xRight3,
      className: "absolute top-[30%] right-[15%] w-[120px] md:w-[160px] z-25",
      alt: "Aplicación web para delivery - desarrollo de apps para restaurantes"
    },
    {
      src: parallaxWeb3,
      x: xLeft1,
      className: "absolute bottom-[35%] left-[25%] w-[180px] md:w-[240px] z-12",
      alt: "Página web inmobiliaria - diseño web para sector inmobiliario"
    },
    {
      src: parallaxWeb4,
      x: xRight1,
      className: "absolute bottom-[10%] right-[20%] w-[200px] md:w-[260px] z-18",
      alt: "Sitio web para gimnasio - diseño web para sector fitness"
    },
    {
      src: parallaxWeb5,
      x: xCenter,
      className: "absolute top-[60%] left-[5%] w-[180px] md:w-[240px] z-8",
      alt: "Tienda de moda online - diseño web para boutiques y tiendas"
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
