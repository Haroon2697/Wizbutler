import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Mail, Phone, Instagram, Linkedin, Facebook } from "lucide-react";

export function AboutJoyce() {
  return (
    <section id="about-joyce" className="py-20 bg-background scroll-mt-24 md:scroll-mt-32">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-black dark:bg-gradient-to-r dark:from-yellow-400 dark:to-amber-500 dark:bg-clip-text dark:text-transparent font-sans">Meet Joyce</h2>
            <p className="mt-3 text-lg md:text-xl text-muted-foreground font-sans">
              Your dedicated space management consultant and WizButler implementation specialist
            </p>
          </div>

          <Card className="rounded-2xl border-gray-200 border-blue-400/30 shadow-sm shadow-[0_0_15px_rgba(59,130,246,0.1)] dark:border-yellow-400/30 dark:shadow-[0_0_15px_rgba(251,191,36,0.1)]">
            <CardContent className="p-6 md:p-10">
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-2xl md:text-3xl font-bold text-black dark:bg-gradient-to-r dark:from-yellow-400 dark:to-amber-500 dark:bg-clip-text dark:text-transparent font-sans">Joyce from Synergy Restaurant Group</h3>
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
                          <a href="tel:+14152994019" className="hover:text-primary transition-colors dark:hover:text-yellow-400 font-sans">+1 (415) 299–4019</a>
                    </div>
                    <div className="flex items-center gap-3 text-foreground">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Mail className="h-4 w-4" />
                      </span>
                          <a href="mailto:joyce@synergysrestaurantgroup.com" className="hover:text-primary transition-colors dark:hover:text-yellow-400 font-sans">joyce@synergysrestaurantgroup.com</a>
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
                      <Button size="lg" className="h-10 px-4 btn-neon dark:bg-gradient-to-r dark:from-yellow-400 dark:to-amber-500 dark:text-white dark:shadow-[0_0_20px_rgba(251,191,36,0.4)] dark:hover:shadow-[0_0_30px_rgba(251,191,36,0.6)]">
                        <Calendar className="h-4 w-4 mr-2 dark:drop-shadow-[0_0_6px_rgba(251,191,36,0.5)]" />
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


