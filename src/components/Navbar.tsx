import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
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
              src="/images/logo.png" 
              alt="Logo" 
              className="w-24 h-24 rounded-lg object-contain invert" 
            />
          </motion.a>

          {/* Navigation Links */}
          <div className="flex items-center space-x-6">
            {["Features", "Contact"].map((link, index) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase()}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="magnetic text-white/80 hover:text-[#fe9e01] transition-colors duration-300 font-medium font-sans"
              >
                {link}
              </motion.a>
            ))}
          </div>

          {/* CTA & Theme Toggle */
          }
          <div className="flex items-center space-x-4">
            <a href="tel:+14152994019" aria-label="Call us" className="flex w-10 h-10 rounded-lg border border-white/30 items-center justify-center hover:bg-white/10 hover:shadow-[0_0_20px_rgba(254,158,1,0.5)] hover:border-[#fe9e01]">
              <Phone className="w-5 h-5 text-white drop-shadow-[0_0_8px_rgba(254,158,1,0.6)]" />
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
  );
}