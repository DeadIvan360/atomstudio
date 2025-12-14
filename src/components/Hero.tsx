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

      {/* Text Section */}
      <section className="relative py-32 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-foreground leading-tight tracking-tight">
              Creamos
              <br />
              <span className="gradient-text font-medium">experiencias</span>
              <br />
              digitales
            </h2>
          </motion.div>
        </div>
      </section>

      {/* Second Section - Text Content */}
      <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
        {/* Smooth Parallax Frame Animation */}
        <div className="absolute inset-0 z-0">
          <motion.img 
            src={frameUrls[currentFrame]} 
            alt="" 
            className="w-full h-full object-cover"
            style={{ 
              scale: useTransform(scrollYProgress, [0, 1], [1.1, 1])
            }}
            transition={{ duration: 0.1, ease: "linear" }}
          />
        </div>
        
        {/* Floating Glow Effect */}
        <motion.div 
          style={{ y: useTransform(scrollYProgress, [0, 1], [50, -150]), scale }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl z-0" 
        />

      </section>
    </>
  );
};

export default Hero;
