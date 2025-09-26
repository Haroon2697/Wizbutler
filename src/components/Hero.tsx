import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Hero() {
  // Floating particles data
  const particles = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    size: Math.random() * 20 + 10,
    delay: Math.random() * 2,
    duration: 6 + Math.random() * 4,
  }));

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cyber-grid">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyber-purple/10 via-transparent to-cyber-blue/10" />
      
      {/* Floating Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="particle bg-gradient-to-r from-neon-purple to-neon-blue"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 10, 0],
            x: [0, 10, -10, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="container mx-auto px-6 text-center z-10">
        {/* Proof Chips */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-8"
        >
          {[
            "35% booking increase",
            "Patented technology",
            "300+ venues"
          ].map((text, index) => (
            <Badge
              key={text}
              variant="secondary"
              className="glass-card px-4 py-2 text-sm border-spacing-2 border-glass-border border-blue-400/30 font-medium hover:shadow-neon hover:border-primary/50 text-foreground hover:text-foreground dark:hover:border-yellow-400/50 dark:hover:shadow-[0_0_15px_rgba(251,191,36,0.4)] dark:hover:text-yellow-400 font-sans"
            >
              {text}
            </Badge>
          ))}
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight font-sans"
        >
          The Dynamic{" "}
          <span className="bg-gradient-to-r from-cyber-purple to-cyber-blue dark:from-yellow-400 dark:via-yellow-500 dark:to-amber-500 bg-clip-text text-transparent font-bold">All-in-One</span>{" "}
          AI Platform for{" "}
          <span className="bg-gradient-to-r from-cyber-purple to-cyber-blue dark:from-yellow-400 dark:via-yellow-500 dark:to-amber-500 bg-clip-text text-transparent font-bold">Space Management</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
              className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto font-sans font-light"
        >
          Automate space management, optimize layouts, and boost revenue — with{" "}
          <span className="text-primary font-semibold font-sans">seamless integration</span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Button size="lg" className="btn-neon text-lg px-8 py-4 dark:bg-gradient-to-r dark:from-yellow-400 dark:to-amber-500 dark:text-white dark:shadow-[0_0_25px_rgba(251,191,36,0.4)] dark:hover:shadow-[0_0_35px_rgba(251,191,36,0.6)] font-sans">
            Let's Chat
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="glass-card text-lg px-8 py-4 hover:bg-accent/10 hover:border-accent/40 text-foreground hover:text-foreground hover:border-blue-400/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] dark:shadow-[0_0_20px_rgba(251,191,36,0.3)] dark:hover:shadow-[0_0_30px_rgba(251,191,36,0.5)] dark:hover:border-yellow-400 dark:hover:bg-yellow-400/10 font-sans"
          >
            See How It Works
          </Button>
        </motion.div>

        {/* Floating geometric shapes */}
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-32 h-32 border-2 border-neon-purple/30 dark:border-yellow-400/30 rounded-2xl"
          animate={{
            rotate: [0, 45, 90, 135, 180, 225, 270, 315, 360],
            scale: [1, 1.1, 1, 0.9, 1],
            y: [0, -20, 10, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute top-3/4 right-1/4 w-24 h-24 bg-gradient-to-r from-cyber-blue/20 to-neon-purple/20 dark:from-yellow-400/20 dark:to-amber-500/20 rounded-full"
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </section>
  );
}