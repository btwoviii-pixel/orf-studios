"use client";

interface NavbarProps {
  onOpenModal: () => void;
}

export default function ResponsiveNavbar({
  onOpenModal,
}: NavbarProps) {
  return (
    <header className="premium-navbar">

      <div className="premium-nav">

        <a href="#" className="brand">
          ORF Studios
        </a>

        <nav className="premium-links">
          <a href="#work">Work</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
        </nav>

        <button
          className="premium-arrow"
          onClick={onOpenModal}
        >
          ↗
        </button>

      </div>

    </header>
  );
}