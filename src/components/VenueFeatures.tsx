import { motion } from "framer-motion";
import { Utensils, Coffee, Wine, Store } from "lucide-react";

export function VenueFeatures() {
  const venueTypes = [
    {
      icon: Utensils,
      title: "Full Service Restaurant",
      features: [
        "Bookings & function management in one system",
        "Booking add-ons & prepaid menus",
        "Automated waitlist",
        "VIP preferences with auto-favorite table seating",
        "Dynamic POS linked to bookings/menus"
      ],
      gradient: "from-cyber-purple to-neon-purple",
    },
    {
      icon: Coffee,
      title: "Fast Casual Dining",
      features: [
        "AI-driven booking allocation",
        "Online booking edits (no staff needed)",
        "Self-ordering via pre-order & QR scans",
        "Dynamic POS/QR tied to booking menus"
      ],
      gradient: "from-cyber-blue to-neon-blue",
    },
    {
      icon: Wine,
      title: "Bars & Clubs",
      features: [
        "Booking with ticketing & dynamic pricing",
        "Multi-floor POS & smart printing",
        "QR code ordering"
      ],
      gradient: "from-neon-purple to-cyber-blue",
    },
    {
      icon: Store,
      title: "Cafes & Takeaway",
      features: [
        "Dynamic POS & digital kitchen printing",
        "Online ordering for dine-in/takeaway",
        "Built-in loyalty (digital stamps, points rewards)"
      ],
      gradient: "from-cyber-purple to-cyber-blue",
    },
  ];

  return (
    <section className="py-24 bg-[#43217a] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-cyber-grid opacity-20" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-cyber-purple/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-radial from-cyber-blue/10 to-transparent rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white font-sans">
            Tailored for Every Venue Type
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto font-sans font-light">
            WizButler adapts to your specific venue needs with specialized features and workflows
          </p>
        </motion.div>

        {/* Venue Types Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {venueTypes.map((venue, index) => (
            <motion.div
              key={venue.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white p-6 rounded-2xl magnetic group shadow-[0_0_20px_rgba(0,0,0,0.1)] hover:shadow-[0_0_30px_rgba(0,0,0,0.2)]"
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 bg-[#fe9e01] text-white shadow-[0_0_20px_rgba(254,158,1,0.4)] group-hover:bg-[#43217a]`}>
                <venue.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-[#43217a] group-hover:text-[#fe9e01] transition-all duration-300 font-sans">
                {venue.title}
              </h3>
              
              <ul className="space-y-3">
                {venue.features.map((feature, featureIndex) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 + featureIndex * 0.1 + 0.5 }}
                    className="flex items-start text-sm text-muted-foreground font-sans"
                  >
                    <div className="w-2 h-2 rounded-full bg-[#43217a] mr-3 mt-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-white/80 mb-6 font-sans">
            Ready to see how WizButler can transform your specific venue type?
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }} 
            className="btn-neon px-8 py-4 text-lg bg-[#fe9e01] text-white border-2 border-[#43217a] shadow-[0_0_20px_rgba(254,158,1,0.3)] hover:bg-[#43217a] hover:border-[#fe9e01] hover:shadow-[0_0_40px_rgba(254,158,1,0.8)] font-sans"
          >
            Get Your Custom Demo
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
