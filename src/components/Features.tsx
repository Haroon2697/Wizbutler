import { motion } from "framer-motion";
import { Clock, Calendar, TrendingUp, Zap, Shield, Smartphone } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: Clock,
      title: "AI-Driven Space Optimization",
      description: "Intelligent layout management that maximizes revenue potential and reduces manual table handling.",
      gradient: "from-cyber-purple to-neon-purple",
    },
    {
      icon: Calendar,
      title: "Unified Booking System",
      description: "All-in-one dashboard for reservations, events, and online orders with real-time availability.",
      gradient: "from-cyber-blue to-neon-blue",
    },
    {
      icon: TrendingUp,
      title: "Dynamic Revenue Growth",
      description: "Boost bookings and sales with automated waitlists, VIP preferences, and smart pricing.",
      gradient: "from-neon-purple to-cyber-blue",
    },
  ];

  const additionalFeatures = [
    { icon: Zap, text: "Real-time optimization" },
    { icon: Shield, text: "Patented technology" },
    { icon: Smartphone, text: "Multi-venue support" },
  ];

  return (
    <section id="features" className="py-32 bg-gradient-to-tr from-[#43217a] via-[#43217a]/90 to-[#fe9e01]/40 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-cyber-grid opacity-30" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[#43217a]/10 to-[#fe9e01]/10 rounded-full blur-3xl" />
      
      {/* Additional contrast elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#fe9e01]/50 to-transparent" />
      <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-transparent via-[#43217a]/50 to-transparent" />
      
      {/* Floating shapes for depth */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-[#fe9e01]/20 rounded-full blur-2xl animate-pulse" />
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-[#43217a]/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white font-sans">
            Powerful Features for Modern Venues
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto font-sans font-light">
            WizButler combines cutting-edge AI with space management expertise to deliver unprecedented results
          </p>
        </motion.div>

        {/* Main Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:bg-white/20 hover:border-[#fe9e01]/50 transition-all duration-500 h-full shadow-[0_0_20px_rgba(0,0,0,0.1)] hover:shadow-[0_0_30px_rgba(254,158,1,0.2)] magnetic group"
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 bg-[#43217a] text-white shadow-[0_0_20px_rgba(67,33,122,0.4)] group-hover:bg-[#fe9e01]`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-[#fe9e01] transition-all duration-300 font-sans">
                {feature.title}
              </h3>
              
              <p className="text-white/90 text-lg leading-relaxed font-sans">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Additional Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-6"
        >
          {additionalFeatures.map((feature, index) => (
            <motion.div
              key={feature.text}
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-xl rounded-2xl px-6 py-4 flex items-center space-x-3 border border-white/20 hover:bg-white/20 hover:border-[#fe9e01]/50 transition-all duration-500 shadow-[0_0_8px_rgba(0,0,0,0.1)] hover:shadow-[0_0_12px_rgba(254,158,1,0.2)]"
            >
              <feature.icon className="w-5 h-5 text-[#fe9e01] hover:text-[#43217a] drop-shadow-[0_0_6px_rgba(254,158,1,0.5)]" />
              <span className="font-medium text-white font-sans">{feature.text}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* Bottom divider for better component separation */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
    </section>
  );
}