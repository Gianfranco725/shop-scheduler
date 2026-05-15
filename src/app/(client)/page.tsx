import AboutUsSection from "./components/sections/AboutUsSection";
import FaqsSection from "./components/sections/FaqsSection";
import ServiceSection from "./components/sections/ServicesSection";
import TestimonialSection from "./components/sections/TestimonialSection";

export default function Home() {
  return (
    <main className="flex flex-col px-4 py-2">
      <AboutUsSection />
      <ServiceSection />
      <TestimonialSection />
      <FaqsSection />

      <div className="reviews-section grid grid-cols-1 grid-rows-[auto_auto_auto_auto_auto] md:grid-cols-8 lg:grid-cols-12 xl:grid-cols-16 pb-10 lg:pb-20 gap-4">
        <small className="text-xl underline mb-5 row-start-1 col-start-1 lg:col-start-2 md:col-span-8">
          Testimonials
        </small>
        <p className="max-w-194 row-start-2 col-start-1 lg:col-start-2 md:col-span-8 text-3xl lg:text-4xl mb-5">
          What our clients say about us
        </p>
        <div className="first-row-card-container flex col-start-1 lg:col-start-2 xl:col-start-2 row-start-3 md:col-span-8 lg:col-span-10 xl:col-span-14 gap-4">
          <div className="review-card col-span-4 bg-zinc-200">
            <small>star</small>
            <p>
              “Car was perfect for family of 5. Plenty of space for luggage.
              Great on gas. Host was organized, communicated great, and very
              welcoming!”
            </p>
            <div className="customer-info"> Collin B</div>
          </div>
          <div className="review-card col-span-4 bg-zinc-200">
            <small>star</small>
            <p>
              “Car was perfect for family of 5. Plenty of space for luggage.
              Great on gas. Host was organized, communicated great, and very
              welcoming!”
            </p>
            <div className="customer-info"> Collin B</div>
          </div>
          <div className="hidden lg:block review-card col-span-4 bg-zinc-200">
            <small>star</small>
            <p>
              “Car was perfect for family of 5. Plenty of space for luggage.
              Great on gas. Host was organized, communicated great, and very
              welcoming!”
            </p>
            <div className="customer-info"> Collin B</div>
          </div>
          <div className="review-card col-span-4 bg-zinc-200">
            <small>star</small>
            <p>
              “Car was perfect for family of 5. Plenty of space for luggage.
              Great on gas. Host was organized, communicated great, and very
              welcoming!”
            </p>
            <div className="customer-info"> Collin B</div>
          </div>
        </div>
      </div>
    </main>
  );
}
