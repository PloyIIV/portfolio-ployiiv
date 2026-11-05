import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import StackSection from './components/StackSection';
import ContactSection from './components/ContactSection';

export function App() {
  const [lang, setLang] = useState('en'); // 'en' | 'th'
  const [theme, setTheme] = useState('light'); // 'light' | 'dark'

  // Sync theme with document element
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  return (
    <div className={`min-h-screen bg-paper-texture text-zinc-900 dark:text-zinc-100 font-sans transition-colors duration-200 selection:bg-zinc-900 selection:text-white dark:selection:bg-white dark:selection:text-zinc-900 relative`}>
      {/* Subtle Paper Wrinkle / Depth Overlay */}
      <div className="fixed inset-0 paper-wrinkle-overlay pointer-events-none z-10" />

      {/* Sticky Top Navbar */}
      <Navbar
        lang={lang}
        setLang={setLang}
        theme={theme}
        setTheme={setTheme}
      />

      {/* Main Page Content (No dividing borders between sections) */}
      <main className="relative z-20">
        {/* 1. Hero Section */}
        <HeroSection lang={lang} />

        {/* 2. Projects Section */}
        <ProjectsSection lang={lang} />

        {/* 3. Experience Section */}
        <ExperienceSection lang={lang} />

        {/* 4. Tech Stack Section */}
        <StackSection lang={lang} />

        {/* 5. Contact Section */}
        <ContactSection lang={lang} />
      </main>
    </div>
  );
}

export default App;
