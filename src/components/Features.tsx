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
    <section id="features" className="py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-cyber-grid opacity-30" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyber-purple/10 to-cyber-blue/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black dark:bg-gradient-to-r dark:from-yellow-400 dark:to-amber-5 dark:bg-clip-text dark:text-transparent font-sans">
            Powerful Features for Modern Venues
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-sans font-light">
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
              className="glass-card p-8 magnetic group dark:shadow-[0_0_25px_rgba(251,191,36,0.2)] dark:hover:shadow-[0_0_35px_rgba(251,191,36,0.4)]"
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 bg-gradient-to-r from-cyber-purple to-cyber-blue text-white dark:bg-gradient-to-r dark:from-yellow-400 dark:to-amber-500 dark:text-white dark:shadow-[0_0_20px_rgba(251,191,36,0.4)]`}>
                <feature.icon className="w-8 h-8 dark:text-white" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyber-purple to-cyber-blue bg-clip-text text-transparent dark:from-yellow-400 dark:to-amber-500 group-hover:from-blue-600 group-hover:to-blue-800 dark:group-hover:from-yellow-300 dark:group-hover:to-amber-400 transition-all duration-300 font-sans">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground text-lg leading-relaxed font-sans">
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
              className="glass-card px-6 py-4 flex items-center space-x-3 border-blue-400/20 shadow-[0_0_8px_rgba(59,130,246,0.1)] hover:shadow-[0_0_12px_rgba(59,130,246,0.2)] dark:shadow-[0_0_15px_rgba(251,191,36,0.2)] dark:hover:shadow-[0_0_25px_rgba(251,191,36,0.4)]"
            >
              <feature.icon className="w-5 h-5 text-primary dark:text-yellow-400 dark:drop-shadow-[0_0_6px_rgba(251,191,36,0.5)]" />
              <span className="font-medium text-foreground font-sans">{feature.text}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}