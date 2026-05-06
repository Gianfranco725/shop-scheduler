export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="">
        <div className="flex justify-between px-30 py-2 bg-[#C3C3C3]">
          <p>39 US-206, Augusta, NJ 07822</p>
          <p>+1 (222)-333-4444</p>
        </div>
        <nav className="flex justify-between px-30 py-6">
          <div className="w-47.5">Logo Placeholder</div>
          <ul className="flex gap-8">
            <li>HOME</li>
            <li>VINYL WRAPS</li>
            <li>WINDOW TINTS</li>
            <li>PPF</li>
            <li>CERAMIC COUTING</li>
            <li>CONTACT</li>
            <li>ABOUT US</li>
          </ul>
          <button className="w-47.5">Services Button</button>
        </nav>
        <div className="video-placeholder flex items-end justify-center px-26 py-20 h-206.25 mx-4 bg-[#949494] rounded-lg">
          <div className="flex flex-col gap-8 max-w-198.75">
            <span className="text-[#9F9F9F] text-[188px]">video</span>
            <h1 className="text-center text-balance text-5xl text-white">
              Top Paint Protection Film, Tint, Wrap & Detail Solutions in New
              Jersey
            </h1>
            <p className="text-center text-balance text-xl text-white font-light">
              Vectura helps you track expenses, manage budgets, and make smarter
              decisions — all in one simple dashboard.
            </p>
            <div className="flex justify-center gap-4">
              <button className="py-4 px-6 rounded-full bg-white text-lg">
                View our Services
              </button>
              <button className="py-4 px-6 rounded-full bg-white text-lg">
                Call Now
              </button>
            </div>
          </div>
        </div>
      </header>
      <section>{children}</section>
    </>
  );
}
