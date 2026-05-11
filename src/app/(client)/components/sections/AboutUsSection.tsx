export default function AboutUsSection() {
  return (
    <div className="about-us grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 xl:grid-cols-16 grid-rows-[auto_auto_auto] md:grid-rows-[auto_auto] gap-4 py-10 lg:py-20">
      <small className="col-start-1 lg:col-start-2 row-start-1 text-xl underline mb-10 md:mb-0">
        About Us
      </small>
      <p className="col-start-1 md:col-start-3 lg:col-start-4 xl:col-start-7 row-start-2 md:row-start-1 col-span-4 md:col-span-6 lg:col-span-8 xl:col-span-9 text-2xl lg:text-3xl 2xl:text-4xl mb-5 md:mb-10 xl:mb-20">
        Our team of car detailing experts specializes in providing
        top-of-the-line Ceramic Pro Ceramic Coating, KAVACA Paint Protection
        Film, and KAVACA Window Tint services that will keep your car looking
        like it just rolled off the lot.
      </p>

      <div className="col-start-4 md:col-start-1 lg:col-start-2 row-start-3 md:row-start-2 bg-amber-100 self-end aspect-square rounded-lg">
        Logo
      </div>

      <div className="card-placeholder col-start-1 md:col-start-3 lg:col-start-4 xl:col-start-7 row-start-3 md:row-start-2 col-span-3 md:col-span-6 lg:col-span-8 xl:col-span-9">
        <div className="grid grid-rows-[auto_auto] md:grid-rows-1 grid-cols-3 md:grid-cols-6 lg:grid-cols-7 xl:grid-cols-9 gap-4 lg:gap-0">
          <div className="col-start-1 col-span-3 lg:col-span-3 xl:col-span-4 2xl:col-span-3 px-4 py-6 sm:px-6 sm:py-8 bg-amber-100">
            <p className="text-sm sm:text-base mb-10">
              Over three years in the market trusted by hundreds of car
              enthusiats
            </p>
            <div className="flex items-end gap-1.5">
              <h2 className="text-[64px] sm:text-[96px] leading-14 sm:leading-18">
                2+
              </h2>
              <small className="pb-1">miles</small>
            </div>
          </div>

          <div className="col-start-1 md:col-start-4 lg:col-start-5 xl:col-start-6 2xl:col-start-5 col-span-3 lg:col-span-3 xl:col-span-4 2xl:col-span-3 px-6 py-8 bg-amber-100 rounded-lg">
            <p className="text-sm sm:text-base mb-10">
              Over three years in the market trusted by hundreds of car
              enthusiats
            </p>
            <div className="flex items-end gap-1.5">
              <h2 className="text-[64px] sm:text-[96px] leading-14 sm:leading-18">
                6.2+
              </h2>
              <small className="pb-1">miles</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
