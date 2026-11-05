import React from 'react';
import { portfolioData } from '../data/portfolioData';
import HeroName from './HeroName';
import { Download, ArrowDown } from 'lucide-react';

export const HeroSection = ({ lang }) => {
  const { profile } = portfolioData;

  return (
    <section id="about" className="relative pt-24 sm:pt-32 pb-16 sm:pb-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ============================================================ */}
        {/* TOP BAR: "Open to work" badge with location under it         */}
        {/* ============================================================ */}
        <div className="flex flex-col items-start gap-1.5 pb-2 mb-6 sm:mb-8">
          {/* Open to work pill: rounded border + soft faded background */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-emerald-500/30 dark:border-emerald-500/40 bg-emerald-500/10 dark:bg-emerald-500/15">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-emerald-700 dark:text-emerald-400 font-bold uppercase tracking-widest text-[11px] sm:text-xs">
              {profile.status[lang]}
            </span>
          </div>

          {/* Location & Remote Availability */}
          <span className="text-xs sm:text-sm font-medium text-zinc-500 dark:text-zinc-400 tracking-wide pl-1">
            based in Bangkok, Thailand or Remote
          </span>
        </div>

        {/* ============================================================ */}
        {/* CENTER NAME: CHADAPAN & YUKKRIROEK                           */}
        {/* Pixel-perfect edge-to-edge alignment matching reference      */}
        {/* ============================================================ */}
        <div className="relative text-center mt-4 sm:mt-6 mb-4 sm:mb-5">
          <HeroName />
        </div>

        {/* ============================================================ */}
        {/* ROLE & CONCISE BIO (BALANCED, EQUAL SPACING RHYTHM)           */}
        {/* ============================================================ */}
        <div className="max-w-2xl mx-auto text-center">
          
          {/* Role: Plain text, balanced equal spacing from name */}
          <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-zinc-600 dark:text-zinc-400 mb-4 sm:mb-5">
            {profile.title[lang]}
          </p>

          {/* Concise Bio Paragraph: Equal spacing from role */}
          <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed font-normal mb-8 sm:mb-10">
            {profile.bio[lang]}
          </p>

          {/* Action Buttons: Direct PDF Download CV & Explore Projects */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <a
              href="/Chadapan_Yukkriroek_CV.pdf"
              download="Chadapan_Yukkriroek_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider bg-zinc-900 dark:bg-zinc-100 text-[#F4F4EE] dark:text-[#121214] border-2 border-zinc-900 dark:border-zinc-100 rounded hover:translate-x-1 hover:translate-y-1 transition-all"
            >
              <Download size={15} />
              <span>{lang === 'en' ? "Download CV" : "ดาวน์โหลด CV"}</span>
            </a>

            <a
              href="#projects"
              className="flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider bg-white dark:bg-[#18181B] text-zinc-900 dark:text-zinc-100 border-2 border-zinc-900 dark:border-zinc-100 rounded hover:translate-x-1 hover:translate-y-1 transition-all"
            >
              <span>{lang === 'en' ? "Explore Projects" : "ดูผลงานทั้งหมด"}</span>
              <ArrowDown size={15} />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

export default HeroSection;
