import AboutUsSection from "./components/sections/AboutUsSection";
import ServiceSection from "./components/sections/ServicesSection";
import TestimonialSection from "./components/sections/TestimonialSection";

export default function Home() {
  return (
    <main className="flex flex-col px-4 py-2">
      <AboutUsSection />
      <ServiceSection />
      <TestimonialSection />
    </main>
  );
}
