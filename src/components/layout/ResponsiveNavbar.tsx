"use client";

import { useState } from "react";

interface NavbarProps {
  onOpenModal: () => void;
}

export default function ResponsiveNavbar({
  onOpenModal,
}: NavbarProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="premium-navbar">
        <div className="premium-nav">

          {/* Mobile Hamburger */}
          <button
            className="hamburger"
            onClick={() => setOpen(true)}
          >
            ☰
          </button>

          {/* Logo */}
          <a href="#" className="brand">
            ORF Studios
          </a>

          {/* Desktop Navigation */}
          <nav className="premium-links">
            <a href="#work">Work</a>
            <a href="#services">Services</a>
            <a href="#about">About</a>
          </nav>

          {/* Desktop Arrow */}
          <button
            className="premium-arrow desktop-arrow"
            onClick={onOpenModal}
          >
            ↗
          </button>

          {/* Mobile CTA */}
          <button
            className="mobile-talk"
            onClick={onOpenModal}
          >
            Let's Talk
          </button>

        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`mobile-overlay ${open ? "active" : ""}`}>

        <button
          className="close-menu"
          onClick={() => setOpen(false)}
        >
          ✕
        </button>

        <a href="#work" onClick={() => setOpen(false)}>
          Work
        </a>

        <a href="#services" onClick={() => setOpen(false)}>
          Services
        </a>

        <a href="#about" onClick={() => setOpen(false)}>
          About
        </a>

      </div>
    </>
  );
}