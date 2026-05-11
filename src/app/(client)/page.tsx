export default function Home() {
  return (
    <main className="flex flex-col gap-4 px-4 py-2">
      <div className="about-us grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 xl:grid-cols-16 grid-rows-[auto_auto_auto] md:grid-rows-[auto_auto] gap-4 auto-rows-min">
        <small className="col-start-1 lg:col-start-2 row-start-1 text-xl underline">
          About Us
        </small>
        <p className="col-start-1 md:col-start-3 lg:col-start-4 xl:col-start-7 row-start-2 md:row-start-1 col-span-4 md:col-span-6 lg:col-span-7 xl:col-span-9 text-4xl md:mb-10 xl:mb-20">
          Our team of car detailing experts specializes in providing
          top-of-the-line Ceramic Pro Ceramic Coating, KAVACA Paint Protection
          Film, and KAVACA Window Tint services that will keep your car looking
          like it just rolled off the lot.
        </p>

        <div className="col-start-4 md:col-start-1 lg:col-start-2 row-start-3 md:row-start-2 bg-amber-100 self-end">
          Logo
        </div>

        <div className="card-placeholder col-start-1 md:col-start-3 lg:col-start-4 xl:col-start-7 row-start-3 md:row-start-2 col-span-3 md:col-span-6 lg:col-span-7 xl:col-span-9">
          <div className="grid grid-rows-2 md:grid-rows-1 grid-cols-3 md:grid-cols-6 lg:grid-cols-7 xl:grid-cols-9">
            <div className="col-start-1 bg-amber-100">
              <h2>3+</h2>
            </div>

            <div className="col-start-1 md:col-start-3 bg-amber-100">
              <h2>6.2+</h2>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
