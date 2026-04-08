import { useState } from "react";

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur border-b border-gray-200 z-50">

      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo / Name */}
        <div className="font-semibold text-lg">
          Krunal Hingu
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium">

          <a href="#home" className="hover:text-primary transition">Home</a>
          <a href="#about" className="hover:text-primary transition">About</a>
          <a href="#skills" className="hover:text-primary transition">Skills</a>
          <a href="#experience" className="hover:text-primary transition">Experience</a>
          <!-- a href="#certifications" className="hover:text-primary transition">Certifications</a -->
          <a href="#contact" className="hover:text-primary transition">Contact</a>

        </nav>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">

          <nav className="flex flex-col px-6 py-4 space-y-4 text-sm font-medium">

            <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
            <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
            <a href="#certifications" onClick={() => setMenuOpen(false)}>Certifications</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>

          </nav>

        </div>
      )}

    </header>
  );
}
