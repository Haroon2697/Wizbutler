import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      quote: "WizButler increased our online bookings from 220 people on a busy seating to 300 people, autonomously, online and in real-time without any manual intervention, an increase of over 35% of customers.",
      author: "Stan Delimitrou",
      role: "Director & Executive Chef",
      company: "Left Bank Melbourne"
    },
    {
      quote: "The WizButler Team were amazing in understanding our strategy and requirements and make the opening of our 250 seat restaurant easy.",
      author: "Paul Bellette",
      role: "General Manager",
      company: "Melbourne Winery"
    }
  ];

  return (
    <section className="py-24 bg-[#fe9e01] dark:bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-cyber-grid opacity-10" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyber-purple/10 to-cyber-blue/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white dark:text-[#fe9e01] font-sans">
            What Our Clients Say
          </h2>
          <p className="text-xl text-white/80 dark:text-muted-foreground max-w-2xl mx-auto font-sans font-light">
            Real results from real venues using WizButler
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass-card p-8 magnetic group dark:shadow-[0_0_25px_rgba(251,191,36,0.2)] dark:hover:shadow-[0_0_35px_rgba(251,191,36,0.4)]"
            >
              {/* Quote Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-2xl bg-[#43217a] dark:bg-[#43217a] flex items-center justify-center shadow-[0_0_20px_rgba(67,33,122,0.4)] dark:shadow-[0_0_20px_rgba(67,33,122,0.4)]">
                  <Quote className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Quote */}
              <blockquote className="text-lg text-white/80 dark:text-muted-foreground mb-6 leading-relaxed font-sans italic">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="border-t border-white/30 dark:border-glass-border/30 pt-6">
                <div className="font-bold text-white dark:text-foreground text-lg font-sans">{testimonial.author}</div>
                <div className="text-white/60 dark:text-muted-foreground font-sans">{testimonial.role}</div>
                <div className="text-white dark:text-[#fe9e01] font-semibold font-sans">{testimonial.company}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Patents Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="glass-card px-8 py-6 inline-block border-blue-400/30 shadow-[0_0_15px_rgba(59,130,246,0.1)] dark:border-yellow-400/30 dark:shadow-[0_0_15px_rgba(251,191,36,0.1)]">
            <h3 className="text-xl font-bold mb-2 text-white dark:text-[#43217a] font-sans">
              Patented Technology
            </h3>
            <p className="text-white/80 dark:text-muted-foreground font-sans">
              Granted in USA, Canada, Singapore, Malaysia, and India
            </p>
            <p className="text-sm text-white/60 dark:text-muted-foreground mt-2 font-sans">
              "Gives greater benefits to the operators" - Australian Patent Office
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
