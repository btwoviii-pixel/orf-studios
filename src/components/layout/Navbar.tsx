"use client";

interface NavbarProps {
  onOpenModal: () => void;
}

export default function Navbar({ onOpenModal }: NavbarProps) {
  return (
    <header className="navbar">
      <div className="container">

        <div className="logo">
          ORF Studios
        </div>

        <nav>
          <a href="#">Home</a>
          <a href="#work">Work</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
        </nav>

        <button
          onClick={onOpenModal}
          className="cta"
        >
          Let's Talk
        </button>

      </div>
    </header>
  );
}