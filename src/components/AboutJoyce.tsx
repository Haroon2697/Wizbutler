import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Mail, Phone, Instagram, Linkedin, Facebook } from "lucide-react";

export function AboutJoyce() {
  return (
    <section id="about-joyce" className="py-20 bg-background scroll-mt-24 md:scroll-mt-32">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-black dark:text-[#fe9e01] font-sans">Meet Joyce</h2>
            <p className="mt-3 text-lg md:text-xl text-muted-foreground font-sans">
              Your dedicated space management consultant and WizButler implementation specialist
            </p>
          </div>

          <Card className="rounded-2xl border-gray-200 border-wizbutler-orange/30 shadow-[0_0_15px_rgba(254,158,1,0.1)]">
            <CardContent className="p-6 md:p-10">
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-2xl md:text-3xl font-bold text-black dark:text-[#fe9e01] font-sans">Joyce from Synergy Restaurant Group</h3>
                    <p className="text-muted-foreground leading-relaxed font-sans">
                      Joyce specializes in helping venues maximize their revenue potential through WizButler space management implementation.
                      With extensive experience in restaurant operations and space optimization, she ensures your WizButler setup
                      is perfectly tailored to your specific venue needs and operational style.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-foreground">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent">
                        <Phone className="h-4 w-4" />
                      </span>
                          <a href="tel:+14152994019" className="hover:text-[#fe9e01] transition-colors font-sans">+1 (415) 299–4019</a>
                    </div>
                    <div className="flex items-center gap-3 text-foreground">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Mail className="h-4 w-4" />
                      </span>
                          <a href="mailto:joyce@synergysrestaurantgroup.com" className="hover:text-[#fe9e01] transition-colors font-sans">joyce@synergysrestaurantgroup.com</a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                   
                    <a 
                      aria-label="LinkedIn" 
                      href="https://www.linkedin.com/in/jlt2088/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="h-10 w-10 inline-flex items-center justify-center rounded-lg border border-gray-200 hover:bg-muted cursor-pointer dark:hover:shadow-[0_0_15px_rgba(251,191,36,0.4)] dark:hover:border-yellow-400"
                      onClick={(e) => {
                        e.preventDefault();
                        window.open('https://www.linkedin.com/in/jlt2088/', '_blank', 'noopener,noreferrer');
                      }}
                    >
                      <Linkedin className="h-5 w-5 text-foreground dark:drop-shadow-[0_0_6px_rgba(251,191,36,0.5)]" />
                    </a>
              
                  </div>

                  <div className="flex items-center gap-3">
                    <a href={import.meta.env.NEXT_PUBLIC_JOYCE_CALENDAR_URL || "https://cal.com/synergy-group/30min"}>
                      <Button size="lg" className="h-10 px-4 btn-neon bg-[#43217a] dark:bg-[#fe9e01] text-white shadow-[0_0_20px_rgba(67,33,122,0.4)] dark:shadow-[0_0_20px_rgba(254,158,1,0.4)] hover:bg-[#fe9e01] dark:hover:bg-[#43217a] hover:shadow-[0_0_30px_rgba(254,158,1,0.6)] dark:hover:shadow-[0_0_30px_rgba(67,33,122,0.6)]">
                        <Calendar className="h-4 w-4 mr-2 drop-shadow-[0_0_6px_rgba(254,158,1,0.5)]" />
                        Schedule with Joyce
                      </Button>
                    </a>
                  </div>
                </div>

                <div>
                  <div className="aspect-square rounded-2xl overflow-hidden border border-gray-200">
                    <img
                      src="/images/joyce.JPG"
                      alt="Joyce Turchetti"
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default AboutJoyce;


