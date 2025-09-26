import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
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
          ? "bg-background/80 backdrop-blur-xl border-b border-glass-border/30 shadow-lg"
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
              className="w-24 h-24 rounded-lg object-contain invert dark:invert-0" 
            />
          </motion.a>

          {/* Navigation Links */}
          <div className="flex items-center space-x-6">
            {["Features", "About Joyce", "Contact"].map((link, index) => (
              <motion.a
                key={link}
                href={`#${link === "About Joyce" ? "about-joyce" : link.toLowerCase()}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="magnetic text-foreground/80 hover:text-primary transition-colors duration-300 font-medium dark:hover:text-yellow-400 font-sans"
              >
                {link}
              </motion.a>
            ))}
          </div>

          {/* CTA & Theme Toggle */
          }
          <div className="flex items-center space-x-4">
            <a href="tel:+14152994019" aria-label="Call us" className="flex w-10 h-10 rounded-lg border border-gray-200 dark:border-gray-800 items-center justify-center hover:bg-accent/10 dark:hover:shadow-[0_0_20px_rgba(251,191,36,0.5)] dark:hover:border-yellow-400">
              <Phone className="w-5 h-5 dark:drop-shadow-[0_0_8px_rgba(251,191,36,0.6)]" />
            </a>
            <ThemeToggle />
            <a
              href={import.meta.env.NEXT_PUBLIC_NEWSLETTER_URL || "https://www.linkedin.com/newsletters/restaurant-rescues-7344923332078669824"}
              className="flex"
            >
              <Button className="btn-neon dark:bg-gradient-to-r dark:from-yellow-400 dark:to-amber-500 dark:text-white dark:shadow-[0_0_20px_rgba(251,191,36,0.4)] dark:hover:shadow-[0_0_30px_rgba(251,191,36,0.6)]">Subscribe</Button>
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
          className="h-px bg-gradient-to-r from-cyber-purple via-cyber-blue to-cyber-purple dark:from-yellow-400 dark:via-amber-500 dark:to-yellow-400"
          style={{ transformOrigin: "left" }}
        />
        
        {/* Left Fade Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="absolute top-0 left-0 h-px w-16 bg-gradient-to-r from-background via-background/80 to-transparent"
        />
        
        {/* Right Fade Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="absolute top-0 right-0 h-px w-16 bg-gradient-to-l from-background via-background/80 to-transparent"
        />
        
        {/* Glow Effect */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 0.6 }}
          transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
          className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-cyber-purple/30 via-cyber-blue/50 to-cyber-purple/30 dark:from-yellow-400/30 dark:via-amber-500/50 dark:to-yellow-400/30 blur-sm"
          style={{ transformOrigin: "left" }}
        />
      </div>
    </motion.nav>
  );
}