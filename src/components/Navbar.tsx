"use client";

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/#about' },
    { name: 'Gallery', href: '/#gallery' },
    { name: 'Recruitment', href: '/#recruitment' },
    { name: 'Contact', href: '/#footer' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-army-panel bg-opacity-80 backdrop-blur-sm border-b border-army-border">
      <nav className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <Link href="/" className="text-2xl font-bold text-army-gold hover:text-army-gold-hover transition-colors">
          Sam's British Army
        </Link>
        <div className="lg:hidden">
          <button onClick={() => setOpen(!open)} aria-label="Toggle menu" className="text-army-gold hover:text-army-gold-hover">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        <ul className="hidden lg:flex space-x-6 text-lg text-gray-200">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link href={link.href} className="hover:text-army-gold transition-colors">
                {link.name}
              </Link>
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
                <Link href={link.href} onClick={() => setOpen(false)} className="hover:text-army-gold transition-colors">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </header>
  );
}
