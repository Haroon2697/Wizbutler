import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      quote: "WizButler increased our online bookings by 35% autonomously, without any manual intervention.",
      author: "Stan Delimitrou",
      role: "Director & Executive Chef",
      company: "Left Bank Melbourne"
    },
    {
      quote: "The WizButler Team made opening our 250 seat restaurant easy and seamless.",
      author: "Paul Bellette",
      role: "General Manager",
      company: "Melbourne Winery"
    }
  ];

  return (
    <section id="testimonials" className="py-16 bg-white relative overflow-hidden">
      {/* Contrast Line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#fe9e01]/60 to-transparent" />
      
      {/* Background Elements */}
      <div className="absolute inset-0 bg-cyber-grid opacity-10" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[#43217a]/10 to-[#fe9e01]/10 rounded-full blur-3xl" />
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-[#43217a]/15 to-[#fe9e01]/15 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black font-sans">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto font-sans font-light">
            Real results from real venues using WizButler
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-[#fe9e01] transition-all duration-500 h-full shadow-[0_0_20px_rgba(0,0,0,0.1)] hover:shadow-[0_0_30px_rgba(254,158,1,0.2)] magnetic group"
            >
              {/* Quote Icon */}
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#43217a] flex items-center justify-center shadow-[0_0_15px_rgba(67,33,122,0.4)]">
                  <Quote className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Quote */}
              <blockquote className="text-base text-gray-600 mb-4 leading-relaxed font-sans italic">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="border-t border-gray-200 pt-4">
                <div className="font-bold text-black text-base font-sans">{testimonial.author}</div>
                <div className="text-sm text-gray-500 font-sans">{testimonial.role}</div>
                <div className="text-[#fe9e01] font-semibold text-sm font-sans">{testimonial.company}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
