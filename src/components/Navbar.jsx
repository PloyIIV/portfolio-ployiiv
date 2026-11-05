import React, { useState, useEffect } from 'react';
import { Moon, Sun, Globe, Menu, X, Mail } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Navbar = ({ lang, setLang, theme, setTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { nav, profile } = portfolioData;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: nav.about[lang] },
    { href: '#projects', label: nav.projects[lang] },
    { href: '#experience', label: nav.experience[lang] },
    { href: '#stack', label: nav.stack[lang] },
    { href: '#contact', label: nav.contact[lang] },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-[#F4F4EE]/90 dark:bg-[#121214]/90 backdrop-blur-md shadow-sm border-b border-zinc-900/10 dark:border-zinc-800'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        
        {/* Brand / User Emoji Avatar */}
        <a
          href="#about"
          className="group flex items-center gap-2 hover:opacity-90 transition-opacity"
          aria-label="Home"
        >
          <img
            src="/avatar.jpg"
            alt="Chadapan Emoji"
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover border-2 border-zinc-900 dark:border-zinc-100 dark:shadow-none bg-white dark:bg-zinc-900"
          />
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3.5 py-1.5 text-xs sm:text-sm font-semibold tracking-wide text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white rounded-md hover:bg-zinc-900/5 dark:hover:bg-zinc-100/10 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Controls: Borderless, equal-sized buttons */}
        <div className="flex items-center gap-2">
          
          {/* Language Toggle (ENG / THAI) */}
          <button
            onClick={() => setLang(lang === 'en' ? 'th' : 'en')}
            className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center text-xs font-extrabold uppercase rounded-lg bg-zinc-200/70 dark:bg-zinc-800/70 hover:bg-zinc-300 dark:hover:bg-zinc-700 text-zinc-900 dark:text-zinc-100 transition-colors border-0"
            title={lang === 'en' ? "สลับเป็นภาษาไทย" : "Switch to English"}
            aria-label="Toggle Language"
          >
            <span>{lang === 'en' ? 'TH' : 'EN'}</span>
          </button>

          {/* Theme Toggle (Dark / Light) */}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg bg-zinc-200/70 dark:bg-zinc-800/70 hover:bg-zinc-300 dark:hover:bg-zinc-700 text-zinc-900 dark:text-zinc-100 transition-colors border-0"
            aria-label="Toggle Theme"
            title={theme === 'dark' ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {theme === 'dark' ? (
              <Sun size={17} className="text-amber-400" />
            ) : (
              <Moon size={17} className="text-zinc-800" />
            )}
          </button>

          {/* Contact Button */}
          <a
            href="#contact"
            className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors border-0"
            title={lang === 'en' ? "Contact Me" : "ติดต่อฉัน"}
            aria-label="Contact Me"
          >
            <Mail size={16} />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg bg-zinc-200/70 dark:bg-zinc-800/70 text-zinc-900 dark:text-zinc-100 border-0"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-zinc-900/10 dark:border-zinc-800 bg-[#F4F4EE] dark:bg-[#121214] px-4 pt-2 pb-6 space-y-3">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-base font-bold text-zinc-800 dark:text-zinc-200 hover:bg-zinc-900/5 dark:hover:bg-zinc-800 rounded"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-2 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
            <span className="text-xs text-zinc-500 font-semibold">
              {profile.status[lang]}
            </span>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-1.5 text-xs font-bold uppercase tracking-wider bg-zinc-900 dark:bg-zinc-100 text-[#F4F4EE] dark:text-[#121214] rounded"
            >
              {lang === 'en' ? "Get In Touch" : "ส่งข้อความ"}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
