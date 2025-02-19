import AIDemo from "../app/landing page/AIDemo"
import CTASection from "../app/landing page/CTASection";
import DeveloperShowcase from "../app/landing page/DeveloperShowcase";
import FeaturesSection from "../app/landing page/FeaturesSection";
import { Footer } from "../app/landing page/FooterSection";
import HeroSection from "../app/landing page/HeroSection";
import HowItWorks from "../app/landing page/HowItWorks";
import Navigation from "../app/landing page/Navigation";
import PricingSection from "../app/landing page/PricingSection";
import TechNews from "../app/landing page/TechNews";
import Testimonials from "../app/landing page/Testimonials";

export default function LandingPage() {
  return (
    <div>
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <HowItWorks />
      <AIDemo />
      <DeveloperShowcase />
      <TechNews />
      <PricingSection />
      <Testimonials />
      <CTASection />
      <Footer/>
    </div>
  );
}

