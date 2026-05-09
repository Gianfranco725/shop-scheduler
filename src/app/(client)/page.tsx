export default function Home() {
  return (
    <main className="flex flex-col gap-4 px-4 sm:px-8 xl:px-12 2xl:px-26 py-2 mx-4">
      <div className="flex justify-between">
        <small>About Us</small>
        <p>
          Our team of car detailing experts specializes in providing
          top-of-the-line Ceramic Pro Ceramic Coating, KAVACA Paint Protection
          Film, and KAVACA Window Tint services that will keep your car looking
          like it just rolled off the lot.
        </p>
      </div>
      <div className="flex justify-between">
        <div className="flex justify-center items-center">Logo</div>

        <div className="card-placeholder">
          <div className="">
            <h2>3+</h2>
          </div>

          <div className="">
            <h2>6.2+</h2>
          </div>
        </div>
      </div>
    </main>
  );
}
