"use client";

import { useState } from "react";

interface NavbarProps {
  onOpenModal: () => void;
}

export default function ResponsiveNavbar({
  onOpenModal,
}: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container">

        {/* Logo */}
        <div className="logo">
          ORF Studios
        </div>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <a href="#">Home</a>
          <a href="#work">Work</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
        </nav>

        {/* Desktop CTA */}
        <button
          onClick={onOpenModal}
          className="cta desktop-cta"
        >
          Let's Talk
        </button>

        {/* Mobile Hamburger */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu">

          <a href="#" onClick={() => setMenuOpen(false)}>
            Home
          </a>

          <a href="#work" onClick={() => setMenuOpen(false)}>
            Work
          </a>

          <a href="#services" onClick={() => setMenuOpen(false)}>
            Services
          </a>

          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>

          <button
            className="cta"
            onClick={() => {
              setMenuOpen(false);
              onOpenModal();
            }}
          >
            Let's Talk
          </button>

        </div>
      )}
    </header>
  );
}