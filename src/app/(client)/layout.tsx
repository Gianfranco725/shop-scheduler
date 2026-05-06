import HeroSection from "@/app/(client)/components/sections/HeroSection";
export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HeroSection />
      <section>{children}</section>
    </>
  );
}
