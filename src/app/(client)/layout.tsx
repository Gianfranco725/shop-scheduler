export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header>
        <div>
          <small>Address Placeholder</small>
          <small>Phone Number Placeholder</small>
        </div>
        <nav>
          <div>Logo Placeholder</div>
          <ul>
            <li>HOME</li>
            <li>VINYL WRAPS</li>
            <li>WINDOW TINTS</li>
            <li>PPF</li>
            <li>CERAMIC COUTING</li>
            <li>CONTACT</li>
            <li>ABOUT US</li>
          </ul>
          <button>Services Button</button>
        </nav>
      </header>
      <section>{children}</section>
    </>
  );
}
