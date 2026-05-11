import Button from "../ui/Button";

export default function TestimonialSection() {
  return (
    <div className="testimonial grid grid-cols-1 grid-rows-2 md:grid-rows-1 md:grid-cols-8 lg:grid-cols-12 xl:grid-cols-16 pb-10 lg:pb-20 gap-4">
      <div className="col-start-1 lg:col-start-2 xl:col-start-2 md:col-span-4 lg:col-span-5 xl:col-span-5">
        <p className="text-xl underline row-start-1 col-start-2 col-span-10 mb-5">
          Client
        </p>

        <p>2018 BMW M4 F82</p>
        <p className="text-2xl md:text-4xl mb-10">
          Full Paint Protection Film Installation
        </p>
        <p className="mb-10">
          The 2022 Mercedes-Maybach GLS 600 is the ultimate expression of
          sophistication, blending handcrafted luxury with commanding presence.
          Designed to deliver a smooth, effortless drive, it offers unmatched
          comfort and elegance for those who demand more than just a journey —
          they demand an experience.
        </p>

        <Button content="Book PPF Service" customStyle="mb-10 bg-black" />

        <div className="brands-placeholder">Ford</div>
      </div>

      <div className="image-placeholder col-start-1 row-start-2 md:row-start-1 md:col-start-5 lg:col-start-7 xl:col-start-8 md:col-span-4 lg:col-span-5 xl:col-span-8 bg-zinc-200 rounded-xl"></div>
    </div>
  );
}
