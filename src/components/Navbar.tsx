"use client";

import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Recruitment', href: '#recruitment' },
    { name: 'Contact', href: '#footer' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-army-panel bg-opacity-80 backdrop-blur-sm border-b border-army-border">
      <nav className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <a href="#home" className="flex items-center space-x-3 text-2xl font-bold text-army-gold hover:text-army-gold-hover transition-colors">
          <img src="/sam-britsh-army/images/sba_logo.png" alt="SBA Logo" className="h-9 w-9 object-contain rounded-full border border-army-border" />
          <span>Sam's BA</span>
        </a>
        <div className="lg:hidden">
          <button onClick={() => setOpen(!open)} aria-label="Toggle menu" className="text-army-gold hover:text-army-gold-hover">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        <ul className="hidden lg:flex space-x-6 text-lg text-gray-200">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="hover:text-army-gold transition-colors">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      {/* Mobile menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="lg:hidden bg-army-panel border-t border-army-border p-4"
        >
          <ul className="flex flex-col space-y-4 text-gray-200 text-lg">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} onClick={() => setOpen(false)} className="hover:text-army-gold transition-colors">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </header>
  );
}
