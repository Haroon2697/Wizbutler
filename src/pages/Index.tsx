import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Outcomes } from "@/components/Outcomes";
import { HowItWorks } from "@/components/HowItWorks";
import { Demo } from "@/components/Demo";
import { Footer } from "@/components/Footer";
import { MagneticCursor } from "@/components/ui/magnetic-cursor";
import { ClaraWidget } from "@/components/ClaraWidget";
import { AboutJoyce } from "@/components/AboutJoyce";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <MagneticCursor />
      <Navbar />
      <Hero />
      <Features />
      <Outcomes />
      <HowItWorks />
      <AboutJoyce />
      <Demo />
      <Footer />
      <ClaraWidget />
    </div>
  );
};

export default Index;