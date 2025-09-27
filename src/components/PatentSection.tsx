import { motion } from "framer-motion";
import { Award, Globe, Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PatentSection() {
  const patents = [
    { country: "USA", status: "Granted" },
    { country: "Canada", status: "Granted" },
    { country: "Singapore", status: "Granted" },
    { country: "Malaysia", status: "Granted" },
    { country: "India", status: "Granted" },
    { country: "Other Countries", status: "Pending" },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Contrast Line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#43217a]/60 to-transparent" />
      
      {/* Background Elements */}
      <div className="absolute inset-0 bg-cyber-grid opacity-10" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[#43217a]/10 to-[#fe9e01]/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Patent Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Tagline */}
              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black font-sans px-4">
                  Built by visionaries for visionaries
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-[#43217a] to-[#fe9e01] rounded-full"></div>
              </div>

              {/* Patent Quote */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="bg-white p-4 sm:p-6 lg:p-8 rounded-2xl shadow-[0_0_20px_rgba(0,0,0,0.1)] border border-gray-200 mx-4"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-[#43217a] flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <blockquote className="text-base sm:text-lg text-gray-600 italic font-sans leading-relaxed">
                      "Current invention gives greater benefits to the operators"
                    </blockquote>
                    <p className="text-xs sm:text-sm text-[#43217a] font-semibold mt-2 font-sans">
                      Australian Patent Office
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Patent Countries */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="space-y-4"
              >
                <h3 className="text-lg sm:text-xl font-bold text-black font-sans px-4">
                  Patents granted in USA, Canada, Singapore, Malaysia, India, other countries in pending
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3 px-4">
                  {patents.map((patent, index) => (
                    <motion.div
                      key={patent.country}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                      className={`p-2 sm:p-3 rounded-lg text-center font-sans ${
                        patent.status === "Granted"
                          ? "bg-[#43217a] text-white"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      <div className="font-semibold text-xs sm:text-sm">{patent.country}</div>
                      <div className="text-xs opacity-80">{patent.status}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Right Side - CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="text-center lg:text-left">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4 font-sans px-4">
                  Ready to Transform Your Venue?
                </h3>
                <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 font-sans px-4">
                  Join the visionaries who are already revolutionizing their space management
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-4 px-4">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    size="lg"
                    className="w-full lg:w-auto btn-neon text-lg px-8 py-4 bg-[#43217a] text-white border-2 border-[#fe9e01] shadow-[0_0_20px_rgba(67,33,122,0.3)] hover:bg-[#fe9e01] hover:border-[#43217a] hover:shadow-[0_0_40px_rgba(254,158,1,0.8)] font-sans"
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Discovery Call
                  </Button>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full lg:w-auto text-lg px-8 py-4 bg-white text-[#43217a] border-2 border-[#43217a] hover:bg-[#43217a] hover:text-white hover:shadow-[0_0_20px_rgba(67,33,122,0.3)] font-sans"
                  >
                    <Users className="w-5 h-5 mr-2" />
                    1:1 Book a Demo
                  </Button>
                </motion.div>
              </div>

              {/* Additional Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-center lg:text-left"
              >
                <p className="text-sm text-gray-600 font-sans">
                  <Globe className="w-4 h-4 inline mr-2" />
                  Available worldwide • 24/7 Support • Free Consultation
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
