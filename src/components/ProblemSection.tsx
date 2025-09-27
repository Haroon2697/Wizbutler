import { motion } from "framer-motion";

export function ProblemSection() {
  const problems = [
    {
      title: "Manual Management",
      description: "Still managing tables manually and taking calls from customers who can't book online, even when you still have empty tables?",
      icon: "📞"
    },
    {
      title: "Silo Systems",
      description: "Frustrated in managing multiple silo systems? More fees, more training, multiple databases and manual repetitive tasks",
      icon: "🔗"
    },
    {
      title: "No Planning Time",
      description: "No time for planning, while staff are bogged down in procedures instead of delivering great customer experiences",
      icon: "⏰"
    },
    {
      title: "Outdated Systems",
      description: "Are outdated systems and procedures preventing you from enhancing your brand, growing profits, and scaling up?",
      icon: "🚫"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-[#43217a] via-[#43217a]/90 to-[#fe9e01]/10 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-cyber-grid opacity-10" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-[#fe9e01]/20 to-[#43217a]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-[#43217a]/20 to-[#fe9e01]/20 rounded-full blur-3xl" />
      

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-2 h-2 rounded-full bg-[#fe9e01]"></div>
            <span className="text-[#fe9e01] font-semibold text-sm uppercase tracking-wider">Common Challenges</span>
            <div className="w-2 h-2 rounded-full bg-[#fe9e01]"></div>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white font-sans mb-6">
            Do you have these problems?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#fe9e01] to-[#43217a] rounded-full mx-auto"></div>
        </motion.div>

        {/* Problem Statements */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative group"
              >
                {/* Problem Card */}
                <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:bg-white/20 hover:border-[#fe9e01]/50 transition-all duration-500 h-full shadow-[0_0_30px_rgba(0,0,0,0.1)] hover:shadow-[0_0_40px_rgba(254,158,1,0.2)]">
                  {/* Icon */}
                  <div className="text-4xl mb-4">{problem.icon}</div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-4 font-sans group-hover:text-[#fe9e01] transition-colors duration-300">
                    {problem.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-white/90 text-base leading-relaxed font-sans">
                    {problem.description}
                  </p>
                </div>

              </motion.div>
            ))}
          </div>
        </div>

        {/* Concluding Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center max-w-5xl mx-auto"
        >
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-12 border border-white/20 shadow-[0_0_40px_rgba(0,0,0,0.1)]">
            <div className="w-16 h-16 rounded-full bg-[#fe9e01] flex items-center justify-center mx-auto mb-6 shadow-[0_0_25px_rgba(254,158,1,0.5)]">
              <span className="text-2xl">💡</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 font-sans">
              We understand your pain
            </h3>
            <p className="text-white/90 text-lg md:text-xl leading-relaxed font-sans mb-8">
              We know your struggles because we've lived them. What does success look like for your venue? Let's chat and talk about how we can help you achieve it.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#fe9e01] text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-[0_0_25px_rgba(254,158,1,0.4)] hover:shadow-[0_0_35px_rgba(254,158,1,0.6)] transition-all duration-300"
            >
              Let's Talk Solutions
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
