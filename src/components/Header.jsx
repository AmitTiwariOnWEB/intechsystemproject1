import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Solutions', href: '#solutions' },
    { name: 'Industries', href: '#industries' },
    { name: 'Partners', href: '#partners' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 glass-nav border-b border-[#1e3b8a]/5">
      <nav className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#1e3b8a] rounded flex items-center justify-center">
            <span className="material-icons-round text-white text-xl">security</span>
          </div>
          <span className="text-lg font-bold tracking-tight text-[#1e3b8a] uppercase">
            Intech <span className="text-[#0ea5e9]">System</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium hover:text-[#1e3b8a] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+919876543210"
            className="flex items-center gap-2 text-sm font-medium text-[#1e3b8a] hover:text-[#0ea5e9] transition-colors"
          >
            <span className="material-icons-round text-lg">phone</span>
            Call Now
          </a>
          <a
            href="#contact"
            className="bg-[#1e3b8a] hover:bg-[#1e3b8a]/90 text-white px-5 py-2 rounded-lg text-sm font-semibold transition-all"
          >
            Get a Quote
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden flex items-center gap-4">
          <a
            href="#contact"
            className="bg-[#1e3b8a] text-white px-3 py-1.5 rounded-lg text-xs font-semibold"
          >
            Get Quote
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-[#1e3b8a]"
          >
            <span className="material-icons-round">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-100 px-4 py-4 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-gray-700 hover:text-[#1e3b8a] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="tel:+919876543210"
            className="flex items-center gap-2 text-sm font-medium text-[#1e3b8a]"
          >
            <span className="material-icons-round text-lg">phone</span>
            Call Now
          </a>
        </div>
      )}
    </header>
  );
}
