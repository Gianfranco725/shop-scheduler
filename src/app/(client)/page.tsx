import AboutUsSection from "./components/sections/AboutUsSection";
import ServiceSection from "./components/sections/ServicesSection";
import TestimonialSection from "./components/sections/TestimonialSection";
import Accordion from "./components/ui/Accordion";

export default function Home() {
  return (
    <main className="flex flex-col px-4 py-2">
      <AboutUsSection />
      <ServiceSection />
      <TestimonialSection />
      <Accordion />
    </main>
  );
}
