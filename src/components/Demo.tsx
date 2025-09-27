import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, User, Building2, MessageSquare, Send } from "lucide-react";

export function Demo() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    restaurant: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "ff6dcc37-d814-44b7-9ab0-a55ae9fb8b45",
          ...formData,
          from_name: "Clara AI Landing Page",
          subject: `Demo Request from ${formData.name} - ${formData.restaurant}`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Demo Request Sent! 🎉",
          description: "We'll contact you within 24 hours to schedule your personalized demo.",
        });
        setFormData({ name: "", email: "", phone: "", restaurant: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again or contact us directly at wizbutler@synergysrestaurantgroup.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const inputFields = [
    { name: "name", placeholder: "Your Name", icon: User, type: "text" },
    { name: "email", placeholder: "Email Address", icon: Mail, type: "email" },
    { name: "phone", placeholder: "Phone Number", icon: Phone, type: "tel" },
    { name: "restaurant", placeholder: "Restaurant Name", icon: Building2, type: "text" },
  ];

  return (
    <section id="demo" className="py-24 bg-[#43217a]/5 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-cyber-grid opacity-20" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#43217a]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#fe9e01]/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-black dark:text-[#fe9e01] font-sans"
          >
            See WizButler in Action
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto font-sans"
          >
            Ready to transform your venue's space management? Book a personalized demo and see WizButler's capabilities firsthand.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Demo Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="glass-card p-8 border-wizbutler-orange/30 shadow-[0_0_15px_rgba(254,158,1,0.1)] hover:shadow-[0_0_20px_rgba(254,158,1,0.2)]">
              <form onSubmit={handleSubmit} className="space-y-6">
                {inputFields.map((field, index) => (
                  <motion.div
                    key={field.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="relative"
                  >
                    <field.icon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground text-[#43217a] dark:text-[#fe9e01] hover:text-[#fe9e01] dark:hover:text-[#43217a] drop-shadow-[0_0_6px_rgba(67,33,122,0.5)] dark:drop-shadow-[0_0_6px_rgba(254,158,1,0.5)]" />
                    <Input
                      type={field.type}
                      name={field.name}
                      placeholder={field.placeholder}
                      value={formData[field.name as keyof typeof formData]}
                      onChange={handleChange}
                      required
                      className="pl-12 glass-card border-[#fe9e01]/30 focus:border-[#fe9e01]/50 focus:ring-2 focus:ring-[#fe9e01]/20 hover:border-[#fe9e01]/50 hover:shadow-[0_0_8px_rgba(254,158,1,0.3)] transition-all duration-300"
                    />
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="relative"
                >
                  <MessageSquare className="absolute left-3 top-4 w-5 h-5 text-muted-foreground text-[#43217a] dark:text-[#fe9e01] hover:text-[#fe9e01] dark:hover:text-[#43217a] drop-shadow-[0_0_6px_rgba(67,33,122,0.5)] dark:drop-shadow-[0_0_6px_rgba(254,158,1,0.5)]" />
                  <Textarea
                    name="message"
                    placeholder="Tell us about your restaurant and specific needs..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="pl-12 glass-card border-[#fe9e01]/30 focus:border-[#fe9e01]/50 focus:ring-2 focus:ring-[#fe9e01]/20 hover:border-[#fe9e01]/50 hover:shadow-[0_0_8px_rgba(254,158,1,0.3)] transition-all duration-300 resize-none"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-neon text-lg py-4 bg-[#43217a] dark:bg-[#fe9e01] text-white shadow-[0_0_25px_rgba(67,33,122,0.4)] dark:shadow-[0_0_25px_rgba(254,158,1,0.4)] hover:bg-[#fe9e01] dark:hover:bg-[#43217a] hover:shadow-[0_0_35px_rgba(254,158,1,0.6)] dark:hover:shadow-[0_0_35px_rgba(67,33,122,0.6)]"
                  >
                    {isSubmitting ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                      />
                    ) : (
                      <Send className="w-5 h-5 mr-2 text-white drop-shadow-[0_0_6px_rgba(254,158,1,0.5)]" />
                    )}
                    {isSubmitting ? "Sending..." : "Book Demo"}
                  </Button>
                </motion.div>
              </form>
            </Card>
          </motion.div>

          {/* Demo Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="glass-card p-6 border-blue-400/20 shadow-[0_0_10px_rgba(59,130,246,0.1)] hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] dark:shadow-[0_0_10px_rgba(251,191,36,0.1)] dark:hover:shadow-[0_0_15px_rgba(251,191,36,0.2)]">
              <h3 className="text-2xl font-bold mb-4 text-[#43217a] font-sans">What You'll See</h3>
              <ul className="space-y-4">
                {[
                  "Live space management demo",
                  "Real-time booking optimization",
                  "Revenue analytics walkthrough",
                  "Venue-specific configuration",
                  "Integration capabilities",
                ].map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="flex items-center text-foreground font-sans"
                  >
                    <div className="w-3 h-3 rounded-full bg-[#43217a] mr-3 shadow-[0_0_8px_rgba(67,33,122,0.5)]" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="glass-card p-6 border-blue-400/20 shadow-[0_0_10px_rgba(59,130,246,0.1)] hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] dark:shadow-[0_0_10px_rgba(251,191,36,0.1)] dark:hover:shadow-[0_0_15px_rgba(251,191,36,0.2)]">
              <h3 className="text-xl font-bold mb-3 text-[#43217a] font-sans">Quick Facts</h3>
              <div className="grid grid-cols-2 gap-4 text-sm font-sans">
                <div>
                  <span className="font-semibold font-sans">Demo Duration:</span>
                  <br /><span className="font-sans">15-20 minutes</span>
                </div>
                <div>
                  <span className="font-semibold font-sans">Setup Time:</span>
                  <br /><span className="font-sans">&lt; 24 hours</span>
                </div>
                <div>
                  <span className="font-semibold font-sans">No Commitment:</span>
                  <br /><span className="font-sans">Free trial available</span>
                </div>
                <div>
                  <span className="font-semibold font-sans">Support:</span>
                  <br /><span className="font-sans">24/7 assistance</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}