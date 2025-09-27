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
    <footer className="bg-[#43217a] backdrop-blur-xl border-t border-glass-border/30 py-16 relative overflow-hidden">
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
                className="w-12 h-12 object-contain invert"
              />
              <div>
                <div className="text-xl font-bold text-white font-sans">
                  WizButler
                </div>
                <div className="text-sm text-white/80 font-sans">
                  Space Management Platform
                </div>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed font-sans">
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
            <h3 className="text-lg font-bold text-white font-sans">Contact</h3>
            <div className="space-y-4">
              <a
                href="mailto:joyce@synergysrestaurantgroup.com"
                className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors magnetic font-sans"
              >
                <Mail className="w-5 h-5 text-[#43217a] hover:text-[#fe9e01] drop-shadow-[0_0_6px_rgba(67,33,122,0.5)]" />
                <span className="text-sm font-sans">joyce@synergysrestaurantgroup.com</span>
              </a>
              <a
                href="tel:+14152994019"
                className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors magnetic font-sans"
              >
                <Phone className="w-5 h-5 text-[#43217a] hover:text-[#fe9e01] drop-shadow-[0_0_6px_rgba(67,33,122,0.5)]" />
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
            <h3 className="text-lg font-bold text-white font-sans">Quick Links</h3>
            <div className="space-y-3">
              {["Features", "Demo", "Contact", "Privacy Policy", "Terms of Service"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(" ", "-")}`}
                  className="block text-white/80 hover:text-white transition-colors magnetic text-sm font-sans"
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
            <h3 className="text-lg font-bold text-white font-sans">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 rounded-xl bg-gradient-to-r from-cyber-purple/20 to-cyber-blue/20 
                           flex items-center justify-center text-muted-foreground hover:text-primary 
                           hover:shadow-neon transition-all duration-300 magnetic border border-glass-border/30"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-white hover:text-white drop-shadow-[0_0_6px_rgba(255,255,255,0.5)]" />
                </motion.a>
              ))}
            </div>
            <p className="text-xs text-white/60 font-sans">
              Stay updated with the latest WizButler news and venue management insights.
            </p>
            <a href={newsletterUrl} className="inline-block mt-2 text-sm underline text-white/80 hover:text-white font-sans">
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
          <p className="text-sm text-white/80 font-sans">
            © 2024 WizButler. All rights reserved.
          </p>
          <p className="text-sm text-white/80 mt-4 md:mt-0 font-sans">
            Powered by Synergy Restaurant Group
          </p>
        </motion.div>
      </div>
    </footer>
  );
}