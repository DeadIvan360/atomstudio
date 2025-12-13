import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ShoppingBag, Building2, Briefcase, Rocket, Palette, Globe } from "lucide-react";

const Navigation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show navigation after scrolling past the video section (100vh)
      setIsVisible(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    { name: "E-Commerce", icon: ShoppingBag, href: "#services" },
    { name: "Corporativo", icon: Building2, href: "#services" },
    { name: "Startups", icon: Rocket, href: "#services" },
    { name: "Portafolios", icon: Briefcase, href: "#services" },
    { name: "Branding", icon: Palette, href: "#services" },
    { name: "Landing Pages", icon: Globe, href: "#services" },
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed top-4 left-4 right-4 z-50 flex items-center justify-between"
          >
            {/* Left Navigation Group */}
            <div className="flex items-center gap-1 glass rounded-full px-2 py-2 bg-secondary/80">
              {/* Logo */}
              <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-primary">
                <span className="font-display font-bold text-primary-foreground text-lg">A</span>
              </a>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center">
                <a
                  href="#portfolio"
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
                  href="#about"
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
            <a
              href="#contact"
              className="hidden md:block px-6 py-3 rounded-full text-sm font-semibold uppercase tracking-wide text-background bg-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              Empezar Proyecto
            </a>
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
                    href="#portfolio"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-foreground text-lg font-medium py-2"
                  >
                    Portafolio
                  </a>
                  <a
                    href="#services"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-foreground text-lg font-medium py-2"
                  >
                    Servicios
                  </a>
                  <a
                    href="#about"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-foreground text-lg font-medium py-2"
                  >
                    Nosotros
                  </a>
                  <a
                    href="#contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="bg-foreground text-background px-5 py-3 rounded-full text-center font-medium mt-2"
                  >
                    Empezar Proyecto
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </AnimatePresence>
  );
};

export default Navigation;
