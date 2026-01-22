import { Hero } from "@/app/components/Hero";
import { ProgramsSection } from "@/app/components/ProgramsSection";
import { TestimonialsSection } from "@/app/components/TestimonialsSection";
import { CTASection } from "@/app/components/CTASection";
import { CoreValues } from "./components/CoreValues";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CoreValues />
      <ProgramsSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
