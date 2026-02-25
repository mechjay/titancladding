/* ============================================================
   NAVBAR — Titan Force Design
   Sticky dark nav with amber accent, Rajdhani font
   ============================================================ */
import { useState, useEffect } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Technology", href: "#technology" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[oklch(0.09_0.01_240/0.97)] backdrop-blur-md shadow-[0_4px_30px_oklch(0_0_0/0.5)]"
          : "bg-transparent"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNavClick("#home"); }}
            className="flex items-center gap-2 group"
          >
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-[oklch(0.72_0.18_65)] to-[oklch(0.60_0.20_60)] flex items-center justify-center font-bold text-[oklch(0.09_0.01_240)] text-lg"
                style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}>
                T
              </div>
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-['Rajdhani'] font-700 text-lg tracking-widest text-white uppercase">
                Titan<span className="text-[oklch(0.72_0.18_65)]">Cladding</span>
              </span>
              <span className="text-[0.55rem] tracking-[0.3em] text-[oklch(0.82_0.14_185)] uppercase font-['Open_Sans']">
                Technology
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="font-['Rajdhani'] font-600 text-sm tracking-widest uppercase text-[oklch(0.75_0.005_240)] hover:text-[oklch(0.72_0.18_65)] transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[oklch(0.72_0.18_65)] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+1-832-208-2666"
              className="flex items-center gap-2 text-[oklch(0.82_0.14_185)] text-sm font-['Open_Sans'] hover:text-white transition-colors"
            >
              <Phone size={14} />
              <span>Get a Quote</span>
            </a>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick("#contact"); }}
              className="titan-btn-primary text-sm px-5 py-2"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ background: "oklch(0.09 0.01 240 / 0.98)" }}
      >
        <div className="container py-4 flex flex-col gap-1 border-t border-[oklch(0.25_0.01_240)]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              className="font-['Rajdhani'] font-600 text-base tracking-widest uppercase text-[oklch(0.75_0.005_240)] hover:text-[oklch(0.72_0.18_65)] py-3 border-b border-[oklch(0.18_0.01_240)] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleNavClick("#contact"); }}
            className="titan-btn-primary text-center mt-4"
          >
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
}
