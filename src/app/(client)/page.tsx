import AboutUsSection from "./components/sections/AboutUsSection";

export default function Home() {
  return (
    <main className="flex flex-col px-4 py-2">
      <AboutUsSection />
      <div className="services-placeholder lg:grid lg:grid-cols-12 xl:grid-cols-16 grid-rows-[auto_auto_auto] gap-4 pb-10 lg:pb-20">
        <small className="text-xl underline mb-5 row-start-1 col-start-2 col-span-10">
          Services
        </small>
        <p className="max-w-194 row-start-2 col-start-2 col-span-10 text-3xl lg:text-4xl mb-5">
          Choose one of our service to see more details about it.
        </p>
        <div className="grid row-start-3 grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2 col-start-2 xl:col-start-2 col-span-10 xl:col-span-14 gap-4">
          <div className="service-card px-6 py-8 rounded-lg bg-zinc-200">
            <div className="image-placeholder h-32 sm:h-50"></div>
            <p className="mb-4">Ceramic Courting</p>
            <p className="mb-1">
              Self-care, for your car. XPEL’s self-healing paint protection film
              is designed to keep your vehicle looking brand new by protecting
              against rock chips, scratches, and scuffs.
            </p>
            <small>more details</small>
          </div>

          <div className="service-card px-6 py-8 rounded-lg bg-zinc-200">
            <div className="image-placeholder h-32 sm:h-50"></div>
            <p className="mb-4">Ceramic Courting</p>
            <p className="mb-1">
              Self-care, for your car. XPEL’s self-healing paint protection film
              is designed to keep your vehicle looking brand new by protecting
              against rock chips, scratches, and scuffs.
            </p>
            <small>more details</small>
          </div>

          <div className="service-card px-6 py-8 rounded-lg bg-zinc-200">
            <div className="image-placeholder h-32 sm:h-50"></div>
            <p className="mb-4">Ceramic Courting</p>
            <p className="mb-1">
              Self-care, for your car. XPEL’s self-healing paint protection film
              is designed to keep your vehicle looking brand new by protecting
              against rock chips, scratches, and scuffs.
            </p>
            <small>more details</small>
          </div>

          <div className="service-card px-6 py-8 rounded-lg bg-zinc-200">
            <div className="image-placeholder h-32 sm:h-50"></div>
            <p className="mb-4">Ceramic Courting</p>
            <p className="mb-1">
              Self-care, for your car. XPEL’s self-healing paint protection film
              is designed to keep your vehicle looking brand new by protecting
              against rock chips, scratches, and scuffs.
            </p>
            <small>more details</small>
          </div>
        </div>
      </div>
    </main>
  );
}
