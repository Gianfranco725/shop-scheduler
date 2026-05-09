import Button from "../ui/Button";

export default function HeroSection() {
  return (
    <header className="">
      <div className="flex justify-between px-4 sm:px-12 xl:px-16 2xl:px-30 py-2 bg-[#C3C3C3]">
        <p className="text-[11px] sm:text-base">39 US-206, Augusta, NJ 07822</p>
        <p className="text-[11px] sm:text-base">+1 (222)-333-4444</p>
      </div>
      <nav className="flex justify-between px-4 xl:px-16 2xl:px-30 py-6">
        <div className="w-47.5">Logo Placeholder</div>
        <ul className="hidden md:flex gap-6">
          <li>HOME</li>
          <li>VINYL WRAPS</li>
          <li className="hidden lg:block">WINDOW TINTS</li>
          <li className="xl:hidden">SERVICES</li>
          <li className="hidden xl:block">PPF</li>
          <li className="hidden xl:block">CERAMIC COUTING</li>
          <li className="hidden xl:block">CONTACT</li>
          <li className="hidden xl:block">ABOUT US</li>
        </ul>
        <Button content="My Booking" customStyle="w-47.5" />
      </nav>
      <div className="video-placeholder flex items-end justify-center px-4 sm:px-26 py-10 md:py-20 h-180 md:h-206.25 mx-4 bg-[#949494] rounded-lg">
        <div className="flex flex-col gap-8 md:max-w-198.75">
          <span className="hidden md:block text-[#9F9F9F] text-[188px]">
            video
          </span>

          <h1 className="text-center text-balance text-4xl md:text-5xl text-white">
            Top Paint Protection Film, Tint, Wrap & Detail Solutions in New
            Jersey
          </h1>

          <p className="text-center md:text-balance text-lg md:text-xl text-white font-light">
            Vectura helps you track expenses, manage budgets, and make smarter
            decisions — all in one simple dashboard.
          </p>

          <div className="flex justify-center gap-4">
            <Button content="My Booking" />
            <Button content="View our Services" />
          </div>
        </div>
      </div>
    </header>
  );
}
