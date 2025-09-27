import { motion } from "framer-motion";
import { Mail, Phone, Instagram, Linkedin, Facebook } from "lucide-react";

export function Footer() {
  const newsletterUrl = import.meta.env.NEXT_PUBLIC_NEWSLETTER_URL || "#";
  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/synergyrestaurantgroup1?igsh=MTh6OWtpYnJ1ZWM%3D", label: "Instagram" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/synergy-restaurant-group-llc/?viewAsMember=true", label: "LinkedIn" },
    { icon: Facebook, href: "https://www.facebook.com/share/1ARpdDF4Y2/", label: "Facebook" },
  ];

  return (
    <footer className="bg-background/95 backdrop-blur-xl border-t border-glass-border/30 py-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-cyber-grid opacity-10" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-radial from-cyber-purple/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-radial from-cyber-blue/10 to-transparent rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-3">
              <img
                src="/images/logo.png"
                alt="Synergy Restaurant Group"
                className="w-12 h-12 object-contain invert dark:invert-0"
              />
              <div>
                <div className="text-xl font-bold text-black dark:text-[#fe9e01] font-sans">
                  WizButler
                </div>
                <div className="text-sm text-muted-foreground font-sans">
                  Space Management Platform
                </div>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed font-sans">
              Revolutionizing venue operations with AI-powered space management. 
              Optimize layouts, boost revenue, scale efficiently.
            </p>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-lg font-bold text-[#43217a] font-sans">Contact</h3>
            <div className="space-y-4">
              <a
                href="mailto:joyce@synergysrestaurantgroup.com"
                className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors magnetic dark:hover:text-yellow-400 font-sans"
              >
                <Mail className="w-5 h-5 text-[#43217a] dark:text-[#fe9e01] hover:text-[#fe9e01] dark:hover:text-[#43217a] drop-shadow-[0_0_6px_rgba(67,33,122,0.5)] dark:drop-shadow-[0_0_6px_rgba(254,158,1,0.5)]" />
                <span className="text-sm font-sans">joyce@synergysrestaurantgroup.com</span>
              </a>
              <a
                href="tel:+14152994019"
                className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors magnetic dark:hover:text-yellow-400 font-sans"
              >
                <Phone className="w-5 h-5 text-[#43217a] dark:text-[#fe9e01] hover:text-[#fe9e01] dark:hover:text-[#43217a] drop-shadow-[0_0_6px_rgba(67,33,122,0.5)] dark:drop-shadow-[0_0_6px_rgba(254,158,1,0.5)]" />
                <span className="text-sm font-sans">+1 (415) 299-4019</span>
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-lg font-bold text-[#43217a] font-sans">Quick Links</h3>
            <div className="space-y-3">
              {["Features", "Demo", "Contact", "Privacy Policy", "Terms of Service"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(" ", "-")}`}
                  className="block text-muted-foreground hover:text-[#fe9e01] transition-colors magnetic text-sm font-sans"
                >
                  {link}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-lg font-bold text-[#43217a] font-sans">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 rounded-xl bg-gradient-to-r from-cyber-purple/20 to-cyber-blue/20 
                           flex items-center justify-center text-muted-foreground hover:text-primary 
                           hover:shadow-neon transition-all duration-300 magnetic border border-glass-border/30
                           dark:bg-gradient-to-r dark:from-yellow-400/20 dark:to-amber-500/20 
                           dark:shadow-[0_0_15px_rgba(251,191,36,0.2)] dark:hover:shadow-[0_0_25px_rgba(251,191,36,0.4)]
                           dark:border-yellow-400/30"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-[#43217a] dark:text-[#fe9e01] hover:text-[#fe9e01] dark:hover:text-[#43217a] drop-shadow-[0_0_6px_rgba(67,33,122,0.5)] dark:drop-shadow-[0_0_6px_rgba(254,158,1,0.5)]" />
                </motion.a>
              ))}
            </div>
            <p className="text-xs text-muted-foreground font-sans">
              Stay updated with the latest WizButler news and venue management insights.
            </p>
            <a href={newsletterUrl} className="inline-block mt-2 text-sm underline hover:text-[#fe9e01] font-sans">
              Subscribe to our newsletter
            </a>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="border-t border-glass-border/30 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-sm text-muted-foreground font-sans">
            © 2024 WizButler. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground mt-4 md:mt-0 font-sans">
            Powered by Synergy Restaurant Group
          </p>
        </motion.div>
      </div>
    </footer>
  );
}