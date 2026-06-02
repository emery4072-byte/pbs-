/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Hammer, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  onOpenLeadsPortal: () => void;
  leadsCount: number;
}

export default function Header({ onOpenLeadsPortal, leadsCount }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Our Work', href: '#gallery' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // height of footer/header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      id="app-header"
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm py-3'
          : 'bg-white/80 backdrop-blur-md border-b border-slate-100 py-4 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.03)]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2 group transition"
          >
            <div className="bg-blue-700 text-white p-2 rounded flex items-center justify-center shadow-md shadow-blue-700/10 group-hover:bg-blue-850 group-hover:scale-105 transition-all">
              <Hammer className="h-5 w-5" />
            </div>
            <div>
              <span className="font-display font-extrabold text-xl tracking-tight text-slate-800 group-hover:text-blue-700 transition-colors uppercase">
                PSB
              </span>
              <span className="font-display font-bold text-[10px] block text-slate-500 tracking-widest -mt-1 uppercase">
                Contracting
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-sm font-semibold text-slate-600 hover:text-blue-700 transition-colors font-sans"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={onOpenLeadsPortal}
              className="relative text-xs font-semibold px-3 py-1.5 rounded-full border border-slate-200 hover:border-blue-500/50 bg-white hover:bg-slate-50 text-slate-700 shadow-sm transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Leads Portal
              {leadsCount > 0 && (
                <span className="bg-blue-700 text-white text-[10px] font-bold px-1.5 py-0.2 rounded-full ml-1">
                  {leadsCount}
                </span>
              )}
            </button>

            <a
              href="tel:+5926982072"
              className="flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold px-4 py-2.5 rounded-lg text-xs uppercase tracking-wider shadow-md shadow-blue-700/15 hover:shadow-blue-700/25 transform hover:-translate-y-0.5 transition-all"
            >
              <Phone className="h-4 w-4 animate-bounce" />
              <span>+592 698-2072</span>
            </a>
          </div>

          {/* Hamburger Menu & Contact Link for mobile */}
          <div className="flex items-center gap-3 md:hidden">
            <a
              href="tel:+5926982072"
              className="bg-slate-100 hover:bg-slate-200 text-blue-700 p-2.5 rounded-lg border border-slate-200 transition"
              aria-label="Call Business"
            >
              <Phone className="h-4 w-4" />
            </a>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-700 hover:text-blue-700 p-2.5 rounded-lg bg-slate-100 border border-slate-200 transition cursor-pointer"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-b border-slate-200 py-4 px-4 overflow-hidden"
          >
            <div className="flex flex-col gap-3">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-base font-semibold py-2 px-3 rounded-lg text-slate-600 hover:text-blue-700 hover:bg-slate-50 transition-all font-sans"
                >
                  {item.label}
                </a>
              ))}
              
              <div className="h-[1px] bg-slate-100 my-2"></div>

              <div className="flex flex-col gap-3 py-2 px-3">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenLeadsPortal();
                  }}
                  className="flex items-center justify-between w-full text-sm font-semibold text-slate-700 hover:text-blue-700 cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    Lead Tracker Drawer
                  </span>
                  <span className="bg-blue-700 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                    {leadsCount}
                  </span>
                </button>

                <div className="flex items-center gap-1.5 text-xs text-slate-500">
                  <MapPin className="h-3.5 w-3.5 text-blue-700" />
                  <span>Old Scheme 52, Tuschen, Guyana</span>
                </div>

                <a
                  href="tel:+5926982072"
                  className="flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-4 rounded-xl shadow-lg transition-all text-center text-xs uppercase tracking-wider"
                >
                  <Phone className="h-4 w-4" />
                  <span>Call: +592 698-2072</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
