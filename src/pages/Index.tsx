import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { VenueFeatures } from "@/components/VenueFeatures";
import { Testimonials } from "@/components/Testimonials";
import { Outcomes } from "@/components/Outcomes";
import { HowItWorks } from "@/components/HowItWorks";
import { Footer } from "@/components/Footer";
import { PatentSection } from "@/components/PatentSection";
import { MagneticCursor } from "@/components/ui/magnetic-cursor";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <MagneticCursor />
      <Navbar />
      <Hero />
      <Features />
      <VenueFeatures />
      <Outcomes />
      <HowItWorks />
      <Testimonials />
      <PatentSection />
      <Footer />
    </div>
  );
};

export default Index;