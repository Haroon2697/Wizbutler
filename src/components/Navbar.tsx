import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuOpen && !(event.target as Element).closest('.mobile-menu-container')) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 mobile-menu-container ${
          scrolled
            ? "bg-gradient-to-r from-[#43217a]/90 via-[#43217a]/80 to-[#fe9e01]/40 backdrop-blur-xl border-b border-white/20 shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.a
              href="#top"
              whileHover={{ scale: 1.05 }}
              className="flex items-center"
              aria-label="Home"
            >
              <img 
                src="/images/wizlogo.png" 
                alt="WizButler Logo" 
                className={`w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-lg object-contain ${
                  scrolled ? "invert-0" : "invert"
                }`}
              />
            </motion.a>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-6">
              {[
                { name: "Features", href: "#features" },
                { name: "How It Works", href: "#how-it-works" },
                { name: "Testimonials", href: "#testimonials" },
                { name: "Contact", href: "#contact" }
              ].map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`magnetic hover:text-[#fe9e01] transition-colors duration-300 font-medium font-sans ${
                    scrolled ? "text-white/80" : "text-black/80"
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.querySelector(link.href);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-2">
              <a
                href="tel:+14152994019"
                className={`p-2 rounded-lg transition-all duration-200 hover:bg-white/10 ${
                  scrolled ? "text-white hover:bg-white/20" : "text-black hover:bg-black/10"
                }`}
                aria-label="Call us"
              >
                <Phone className="w-5 h-5" />
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 rounded-lg transition-all duration-200 hover:bg-white/10 ${
                  scrolled ? "text-white hover:bg-white/20" : "text-black hover:bg-black/10"
                }`}
                aria-label="Toggle mobile menu"
              >
                <motion.div
                  animate={{ rotate: mobileMenuOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </motion.div>
              </button>
            </div>

            {/* CTA & Theme Toggle */}
            <div className="hidden md:flex items-center space-x-4">
              <a href="tel:+14152994019" aria-label="Call us" className={`flex w-10 h-10 rounded-lg border items-center justify-center hover:bg-white/10 hover:shadow-[0_0_20px_rgba(254,158,1,0.5)] hover:border-[#fe9e01] ${
                scrolled ? "border-white/30" : "border-black/30"
              }`}>
                <Phone className={`w-5 h-5 drop-shadow-[0_0_8px_rgba(254,158,1,0.6)] ${
                  scrolled ? "text-white" : "text-black"
                }`} />
              </a>
              <a
                href={import.meta.env.NEXT_PUBLIC_NEWSLETTER_URL || "https://www.linkedin.com/newsletters/restaurant-rescues-7344923332078669824"}
                className="flex"
              >
                <Button className="btn-neon bg-[#43217a] text-white shadow-[0_0_20px_rgba(67,33,122,0.4)] hover:bg-[#fe9e01] hover:shadow-[0_0_30px_rgba(254,158,1,0.6)]">Subscribe</Button>
              </a>
            </div>
          </div>
        </div>
        
        {/* Animated Line with Fading Effects */}
        <div className="relative mx-4 md:mx-8 lg:mx-16 xl:mx-24">
          {/* Main Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
            className="h-px bg-[#43217a]"
            style={{ transformOrigin: "left" }}
          />
          
          {/* Left Fade Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="absolute top-0 left-0 h-px w-16 bg-background"
          />
          
          {/* Right Fade Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="absolute top-0 right-0 h-px w-16 bg-background"
          />
          
          {/* Glow Effect */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 0.6 }}
            transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
            className="absolute top-0 left-0 h-px w-full bg-[#fe9e01]/50 blur-sm"
            style={{ transformOrigin: "left" }}
          />
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-30"
            onClick={() => setMobileMenuOpen(false)}
          />
          
          {/* Mobile Menu */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden fixed top-20 left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-gray-200 shadow-lg z-40"
          >
            <div className="px-4 py-6 space-y-4">
              {/* Close Button */}
              <div className="flex justify-end mb-4">
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-lg text-gray-500 hover:text-black hover:bg-gray-100 transition-colors"
                  aria-label="Close mobile menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              {[
                { name: "Features", href: "#features" },
                { name: "How It Works", href: "#how-it-works" },
                { name: "Testimonials", href: "#testimonials" },
                { name: "Contact", href: "#contact" }
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    const element = document.querySelector(link.href);
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="block py-3 text-lg text-black hover:text-[#fe9e01] transition-colors border-b border-gray-100"
                >
                  {link.name}
                </a>
              ))}
              
              <div className="pt-4 border-t border-gray-200 space-y-4">
                <a
                  href="tel:+14152994019"
                  className="flex items-center space-x-3 text-black hover:text-[#fe9e01] transition-colors py-2"
                >
                  <Phone className="w-5 h-5" />
                  <span className="text-sm">+1 (415) 299-4019</span>
                </a>
                <a
                  href="mailto:wizbutler@synergysrestaurantgroup.com"
                  className="block text-black hover:text-[#fe9e01] transition-colors py-2 text-sm break-all"
                >
                  wizbutler@synergysrestaurantgroup.com
                </a>
                <div className="pt-2">
                  <a
                    href={import.meta.env.NEXT_PUBLIC_NEWSLETTER_URL || "https://www.linkedin.com/newsletters/restaurant-rescues-7344923332078669824"}
                    className="block w-full bg-[#43217a] text-white text-center py-3 px-4 rounded-lg hover:bg-[#fe9e01] transition-colors font-semibold"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Subscribe
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </>
  );
}