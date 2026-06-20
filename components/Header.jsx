'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`} id="header">
      <div className="container">
        <nav className="navbar">
          <a href="#home" className="logo">
            <Image src="/logo-white.png" alt="CodeLaksh logo" width={36} height={29} priority />
            <span>CodeLaksh</span>
          </a>
          <ul className={`nav-menu ${menuOpen ? 'active' : ''}`} id="navMenu">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setMenuOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div
            className="hamburger"
            id="hamburger"
            role="button"
            tabIndex={0}
            aria-label="Toggle navigation menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <i className="fas fa-bars" aria-hidden="true"></i>
          </div>
        </nav>
      </div>
    </header>
  );
}
