/* ============================================================
   FOOTER — Titan Force Design
   Dark industrial footer with amber accents
   ============================================================ */
import { MapPin, Phone, Mail, ExternalLink } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[oklch(0.06_0.01_240)] border-t border-[oklch(0.18_0.01_240)]">
      {/* Main Footer */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663381340505/bTUuGLgttnsgjQYhgv59JA/titanclad_logo_transparent_5c440cbb.png"
                alt="TitanClad Logo"
                className="w-12 h-12 object-contain"
              />
              <div>
                <div className="font-['Rajdhani'] font-700 text-xl tracking-widest text-white uppercase">
                  Titan<span className="text-[oklch(0.72_0.18_65)]">Cladding</span>{" "}
                  <span className="text-[oklch(0.75_0.005_240)]">Technology</span>
                </div>
                <div className="text-[0.6rem] tracking-[0.3em] text-[oklch(0.82_0.14_185)] uppercase">
                  TitanClad™ — Precision Surface Engineering
                </div>
              </div>
            </div>
            <p className="text-[oklch(0.55_0.01_240)] text-sm leading-relaxed max-w-sm font-['Open_Sans']">
              TitanCladding Technology delivers precision laser cladding solutions for the oil & gas industry and beyond. 
              Our TitanClad™ process extends component life, reduces downtime, and maximizes operational reliability.
            </p>
            <div className="titan-section-divider mt-6 mb-6 max-w-xs" />
            <p className="text-[oklch(0.45_0.01_240)] text-xs tracking-widest uppercase font-['Rajdhani']">
              Serving Houston, TX and Surrounding Areas
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="titan-heading text-base tracking-widest text-[oklch(0.72_0.18_65)] mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "#home" },
                { label: "Our Services", href: "#services" },
                { label: "Industries Served", href: "#industries" },
                { label: "Our Technology", href: "#technology" },
                { label: "About Us", href: "#about" },
                { label: "Contact Us", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    className="text-[oklch(0.60_0.01_240)] hover:text-[oklch(0.72_0.18_65)] text-sm font-['Open_Sans'] transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-3 h-[1px] bg-[oklch(0.72_0.18_65)/0.4] group-hover:w-5 group-hover:bg-[oklch(0.72_0.18_65)] transition-all duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="titan-heading text-base tracking-widest text-[oklch(0.72_0.18_65)] mb-5">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[oklch(0.72_0.18_65)] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-[oklch(0.75_0.005_240)] text-sm font-['Open_Sans']">
                    16655-2 Telge Road
                  </p>
                  <p className="text-[oklch(0.75_0.005_240)] text-sm font-['Open_Sans']">
                    Cypress, TX 77429
                  </p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-[oklch(0.82_0.14_185)] flex-shrink-0" />
                <a
                  href="mailto:info@titancladding.com"
                  className="text-[oklch(0.60_0.01_240)] hover:text-[oklch(0.82_0.14_185)] text-sm font-['Open_Sans'] transition-colors"
                >
                  info@titancladding.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-[oklch(0.82_0.14_185)] flex-shrink-0" />
                <a
                  href="tel:+1-832-208-2666"
                  className="text-[oklch(0.60_0.01_240)] hover:text-[oklch(0.82_0.14_185)] text-sm font-['Open_Sans'] transition-colors"
                >
                  Call for a Quote
                </a>
              </li>
            </ul>

            <div className="mt-6 p-3 border border-[oklch(0.72_0.18_65)/0.3] bg-[oklch(0.72_0.18_65)/0.05]">
              <p className="text-[oklch(0.72_0.18_65)] text-xs font-['Rajdhani'] tracking-widest uppercase font-600">
                TitanClad™ Trademark
              </p>
              <p className="text-[oklch(0.50_0.01_240)] text-xs font-['Open_Sans'] mt-1">
                Registered trademark of TitanCladding Technology
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[oklch(0.14_0.01_240)]">
        <div className="container py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[oklch(0.40_0.01_240)] text-xs font-['Open_Sans']">
            © {year} TitanCladding Technology. All rights reserved. TitanClad™ is a registered trademark.
          </p>
          <p className="text-[oklch(0.35_0.01_240)] text-xs font-['Open_Sans']">
            Cypress, TX · Serving the Greater Houston Area
          </p>
        </div>
      </div>
    </footer>
  );
}
