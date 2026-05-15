import Accordion from "../ui/Accordion";

export default function FaqsSection() {
  return (
    <div className="FAQs grid grid-cols-1 grid-rows-[auto_auto] md:grid-cols-8 lg:grid-cols-12 xl:grid-cols-16 gap-4">
      <p className="text-xl underline row-start-1 col-start-1 lg:col-start-2 mb-5">
        FAQs
      </p>
      <div className="accordion-container row-start-2 col-start-1 lg:col-start-2 xl:col-start-2 md:col-span-4 lg:col-span-5 xl:col-span-7">
        <Accordion />
        <Accordion />
        <Accordion />
        <Accordion />
      </div>

      <div className="image-placeholder row-start-2 hidden md:block col-start-1 md:col-start-5 lg:col-start-7 xl:col-start-9 md:col-span-4 lg:col-span-5 xl:col-span-7 bg-zinc-200 rounded-xl">
        f
      </div>
    </div>
  );
}
