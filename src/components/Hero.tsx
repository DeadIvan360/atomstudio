import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useState, useRef, useMemo } from "react";
import heroVideo from "@/assets/hero-video.mp4";

// Generate frame URLs from Supabase storage
const TOTAL_FRAMES = 160;
const SUPABASE_BUCKET_URL = "https://vxukunqktsxcyjtarmou.supabase.co/storage/v1/object/public/parallax%20atom";

const Hero = () => {
  const [videoStarted, setVideoStarted] = useState(false);
  const [currentFrame, setCurrentFrame] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  
  // Generate all frame URLs
  const frameUrls = useMemo(() => {
    return Array.from({ length: TOTAL_FRAMES }, (_, i) => {
      const frameNumber = i.toString().padStart(3, '0');
      return `${SUPABASE_BUCKET_URL}/frame_${frameNumber}_delay-0.05s.png`;
    });
  }, []);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  // Update current frame based on scroll progress
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const frameIndex = Math.min(
      Math.floor(latest * TOTAL_FRAMES),
      TOTAL_FRAMES - 1
    );
    setCurrentFrame(Math.max(0, frameIndex));
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0.8]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1]);

  const handleVideoPlay = () => {
    setVideoStarted(true);
    window.dispatchEvent(new CustomEvent('videoStarted'));
  };

  return (
    <>
      {/* First Section - Video */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            src={heroVideo}
            autoPlay
            muted
            loop
            playsInline
            onPlay={handleVideoPlay}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background" />
        </div>

        {/* Bottom Text */}
        {videoStarted && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="absolute bottom-8 left-6 z-10"
          >
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-foreground/90 leading-tight tracking-tight">
              SITIOS QUE
              <br />
              TRANSFORMAN NEGOCIOS
            </h2>
          </motion.div>
        )}

        {/* Scroll Indicator */}
        {videoStarted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="absolute bottom-10 right-10 z-10"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center gap-2 text-muted-foreground"
            >
              <span className="text-xs uppercase tracking-widest">Scroll</span>
              <ArrowDown size={20} />
            </motion.div>
          </motion.div>
        )}
      </section>

      {/* Second Section - Text Content */}
      <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
        {/* Parallax Frame Animation */}
        <motion.div 
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, -100]) }}
          className="absolute inset-0 z-0"
        >
          <img 
            src={frameUrls[currentFrame]} 
            alt="" 
            className="w-full h-full object-cover opacity-40 transition-opacity duration-100"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        </motion.div>
        
        {/* Floating Glow Effect */}
        <motion.div 
          style={{ y: useTransform(scrollYProgress, [0, 1], [50, -150]), scale }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl z-0" 
        />

        {/* Content with Parallax */}
        <motion.div style={{ y, opacity }} className="relative z-10 container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="inline-block px-4 py-2 rounded-full glass text-sm text-muted-foreground mb-8">
                Estudio de Diseño Web
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
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
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl text-muted-foreground max-w-xl mx-auto mb-12"
            >
              Transformamos ideas en sitios web impactantes. Diseño, desarrollo y 
              estrategia digital para marcas que quieren destacar.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
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
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Hero;
