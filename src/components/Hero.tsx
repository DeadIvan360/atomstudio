import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useState } from "react";
import heroVideo from "@/assets/hero-video.mp4";

const Hero = () => {
  const [videoStarted, setVideoStarted] = useState(false);

  const handleVideoPlay = () => {
    setVideoStarted(true);
    window.dispatchEvent(new CustomEvent('videoStarted'));
  };

  return (
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
  );
};

export default Hero;
