import React, { useState, useEffect } from 'react';
import { Droplet, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Hjem', href: '#home' },
    { name: 'Om oss', href: '#about' },
    { name: 'Tjenester', href: '#services' },
    { name: 'Prosjekter', href: '#gallery' },
    { name: 'Kundeuttalelser', href: '#testimonials' },
    { name: 'Kontakt', href: '#contact' },
  ];

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled || mobileMenuOpen
          ? 'bg-white shadow-md py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <Droplet
            className={`h-8 w-8 ${
              isScrolled || mobileMenuOpen ? 'text-blue-600' : 'text-blue-500'
            }`}
          />
          <span
            className={`text-xl font-bold ${
              isScrolled || mobileMenuOpen ? 'text-gray-800' : 'text-white'
            }`}
          >
            RørEkspert AS
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`font-medium hover:text-blue-600 transition-colors ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="btn btn-primary ml-2"
          >
            Få gratis befaring
          </a>
        </nav>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-gray-700"
          aria-label={mobileMenuOpen ? 'Lukk meny' : 'Åpne meny'}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="container py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-medium text-gray-700 hover:text-blue-600 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="btn btn-primary w-full mt-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Få gratis befaring
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;