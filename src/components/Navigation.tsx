import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ShoppingBag, Building2, Briefcase, Rocket, Palette, Globe } from "lucide-react";
import ProjectQuestionnaireDialog from "./ProjectQuestionnaireDialog";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isQuestionnaireOpen, setIsQuestionnaireOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleVideoStarted = () => {
      setIsVisible(true);
    };

    window.addEventListener('videoStarted', handleVideoStarted);
    return () => window.removeEventListener('videoStarted', handleVideoStarted);
  }, []);

  const services = [
    { name: "E-Commerce", icon: ShoppingBag, href: "#servicios" },
    { name: "Corporativo", icon: Building2, href: "#servicios" },
    { name: "Startups", icon: Rocket, href: "#servicios" },
    { name: "Portafolios", icon: Briefcase, href: "#servicios" },
    { name: "Branding", icon: Palette, href: "#servicios" },
    { name: "Landing Pages", icon: Globe, href: "#servicios" },
  ];

  if (!isVisible) return null;

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-4 left-4 right-4 z-50 flex items-center justify-between"
      >
        {/* Left Navigation Group */}
        <div className="flex items-center gap-1 glass rounded-full px-2 py-2 bg-secondary/60">
          {/* Logo */}
          <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-primary">
            <span className="font-display font-bold text-primary-foreground text-lg">A</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <a
              href="#portafolio"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm font-medium px-5 py-2"
            >
              PORTAFOLIO
            </a>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                onBlur={() => setTimeout(() => setIsServicesOpen(false), 200)}
                className={`flex items-center gap-1 text-sm font-medium px-5 py-2 rounded-full transition-colors duration-200 ${
                  isServicesOpen ? "bg-secondary/80 text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                SERVICIOS
                <ChevronDown size={16} className={`transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 glass rounded-2xl p-6 min-w-[400px] z-50 bg-secondary/95 backdrop-blur-xl"
                  >
                    <div className="grid grid-cols-2 gap-4">
                      {services.map((service) => (
                        <a
                          key={service.name}
                          href={service.href}
                          className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors duration-200 py-2"
                        >
                          <service.icon size={28} strokeWidth={1.5} />
                          <span className="text-base font-medium">{service.name}</span>
                        </a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a
              href="#nosotros"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm font-medium px-5 py-2"
            >
              NOSOTROS
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-foreground p-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Right CTA Button */}
        <button
          onClick={() => setIsQuestionnaireOpen(true)}
          className="hidden md:block px-6 py-3 rounded-full text-sm font-semibold uppercase tracking-wide text-background bg-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
        >
          Empezar Proyecto
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-4 top-20 z-40 glass rounded-2xl p-6 md:hidden bg-secondary/95 backdrop-blur-xl"
          >
            <div className="flex flex-col gap-4">
              <a
                href="#portafolio"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-foreground text-lg font-medium py-2"
              >
                Portafolio
              </a>
              <a
                href="#servicios"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-foreground text-lg font-medium py-2"
              >
                Servicios
              </a>
              <a
                href="#nosotros"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-foreground text-lg font-medium py-2"
              >
                Nosotros
              </a>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsQuestionnaireOpen(true);
                }}
                className="bg-foreground text-background px-5 py-3 rounded-full text-center font-medium mt-2"
              >
                Empezar Proyecto
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <ProjectQuestionnaireDialog 
        isOpen={isQuestionnaireOpen} 
        onClose={() => setIsQuestionnaireOpen(false)} 
      />
    </>
  );
};

export default Navigation;
