import { motion } from "framer-motion";
import { Link, Settings, Rocket } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: Link,
      title: "Discover & Understand",
      description: "Personalized consultation and demo to assess your space management challenges and goals.",
      details: ["Venue assessment", "Goal identification", "Custom demo"],
    },
    {
      number: "02",
      icon: Settings,
      title: "Tailored Onboarding & Setup",
      description: "Custom configuration for your floor plan, rules, and style—ensuring revenue optimization from launch.",
      details: ["Floor plan optimization", "Rule configuration", "Revenue optimization"],
    },
    {
      number: "03",
      icon: Rocket,
      title: "Go Live & Optimize",
      description: "Instant smoother operations, less manual work, and better returns, backed by ongoing support.",
      details: ["Instant activation", "Performance monitoring", "Ongoing support"],
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-br from-[#43217a] via-[#43217a]/90 to-[#fe9e01]/40 relative overflow-hidden">

      {/* Background Elements */}
      <div className="absolute inset-0 bg-cyber-grid opacity-20" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-gradient-radial from-[#fe9e01]/10 to-transparent rounded-full" />
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-gradient-radial from-[#43217a]/10 to-transparent rounded-full" />
      
      {/* Contrast Lines */}
      <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-l from-transparent via-[#fe9e01]/60 to-transparent" />
      <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-transparent via-[#fe9e01]/60 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#43217a]/60 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white font-sans">
            How It Works
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto font-sans">
            Get WizButler up and running in three simple steps
          </p>
        </motion.div>

        {/* Steps */}
        <div className="space-y-24">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Content */}
              <div className="flex-1 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start mb-6">
                  <span className="text-6xl font-bold text-white mr-4 font-sans">
                    {step.number}
                  </span>
                  <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.4)]">
                    <step.icon className="w-8 h-8 text-[#43217a]" />
                  </div>
                </div>

                    <h3 className="text-3xl font-bold mb-4 text-white font-sans">
                  {step.title}
                </h3>

                <p className="text-xl text-white/90 mb-8 leading-relaxed font-sans">
                  {step.description}
                </p>

                <div className="space-y-3">
                  {step.details.map((detail, detailIndex) => (
                    <motion.div
                      key={detail}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2 + detailIndex * 0.1 + 0.5 }}
                      className="flex items-center justify-center lg:justify-start"
                    >
                      <div className="w-2 h-2 rounded-full bg-white mr-3" />
                          <span className="text-white font-medium font-sans">{detail}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Visual Element */}
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="flex-1 flex justify-center"
              >
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl w-80 h-64 flex items-center justify-center magnetic border border-white/20 hover:bg-white/20 hover:border-[#43217a]/50 transition-all duration-500 shadow-[0_0_20px_rgba(0,0,0,0.1)] hover:shadow-[0_0_30px_rgba(67,33,122,0.2)]">
                  <div className="text-center">
                    <div className="w-24 h-24 rounded-3xl bg-white flex items-center justify-center mb-4 mx-auto shadow-[0_0_20px_rgba(255,255,255,0.4)]">
                      <step.icon className="w-12 h-12 text-[#43217a]" />
                    </div>
                    <h4 className="text-xl font-bold text-white font-sans">
                      Step {step.number}
                    </h4>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Progress Line */}
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="absolute left-1/2 top-1/4 bottom-0 w-1 bg-white rounded-full transform -translate-x-1/2 hidden lg:block"
          style={{ transformOrigin: "top" }}
        />
      </div>
    </section>
  );
}