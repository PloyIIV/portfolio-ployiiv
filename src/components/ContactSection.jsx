import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Mail, Linkedin, Github, MapPin, ArrowUpRight } from 'lucide-react';

export const ContactSection = ({ lang }) => {
  const { profile } = portfolioData;

  return (
    <section id="contact" className="py-16 sm:py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading (Open to work badge removed from header) */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-10 sm:mb-14 border-b-2 border-zinc-900 dark:border-zinc-100 pb-4">
          <div>
            <h2 className="font-black text-3xl sm:text-5xl text-zinc-900 dark:text-zinc-100 uppercase tracking-tight">
              {lang === 'en' ? "Let's Connect." : "ติดต่อร่วมงาน."}
            </h2>
          </div>
        </div>

        {/* Direct Channels (Horizontal Row, Equal Height Buttons, Largest Email Button) */}
        <div className="bg-white dark:bg-[#141416] border-3 border-zinc-900 dark:border-zinc-700 rounded-lg p-5 sm:p-10 shadow-brutal dark:shadow-none">
          
          <div className="mb-6">
            {/* <h3 className="font-black text-xl sm:text-2xl text-zinc-900 dark:text-zinc-100 uppercase mb-2">
              {lang === 'en' ? "Direct Channels" : "ช่องทางติดต่อตรง"}
            </h3> */}
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 max-w-xl leading-relaxed">
              {lang === 'en'
                ? "Looking for a Junior Software Developer with frontend & motion design expertise? Reach out directly via email."
                : "กำลังมองหา Junior Software Developer ที่มีทักษะ Frontend และ Motion Graphic? สามารถส่งอีเมลติดต่อได้ทันทีค่ะ"}
            </p>
          </div>

          {/* Strictly Horizontal Action Bar: Equal height on all buttons (h-14 sm:h-16) */}
          <div className="flex flex-row items-center gap-2.5 sm:gap-4 w-full">
            
            {/* Email Button (Largest Primary Button, flex-1, same height) */}
            <a
              href={`mailto:${profile.email}`}
              className="flex-1 min-w-0 h-14 sm:h-16 flex items-center justify-between px-3 sm:px-5 rounded-lg bg-zinc-900 text-[#F4F4EE] dark:bg-zinc-100 dark:text-[#121214] border-2 border-zinc-900 dark:border-zinc-700 shadow-brutal dark:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all group"
            >
              <div className="flex items-center gap-2.5 sm:gap-3.5 min-w-0">
                <div className="p-1.5 sm:p-2 rounded-md bg-zinc-800 dark:bg-zinc-200 text-white dark:text-zinc-900 shrink-0">
                  <Mail size={18} className="sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-[9px] sm:text-[11px] font-bold text-zinc-400 dark:text-zinc-600 uppercase tracking-widest block truncate">
                    {lang === 'en' ? "SEND EMAIL" : "ส่งอีเมล"}
                  </span>
                  <strong className="text-xs sm:text-base font-black tracking-tight truncate block">
                    {profile.email}
                  </strong>
                </div>
              </div>
              <ArrowUpRight size={18} className="shrink-0 text-zinc-400 group-hover:text-white dark:group-hover:text-zinc-900 ml-1 sm:ml-2" />
            </a>

            {/* LinkedIn (Icon Only, same height: h-14 sm:h-16) */}
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn Profile"
              className="w-14 sm:w-16 h-14 sm:h-16 shrink-0 flex items-center justify-center rounded-lg bg-[#F4F4EE] dark:bg-[#121214] border-2 border-zinc-900 dark:border-zinc-700 shadow-brutal-sm dark:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all text-zinc-900 dark:text-zinc-100 hover:bg-zinc-200 dark:hover:bg-zinc-800"
            >
              <Linkedin size={22} className="sm:w-6 sm:h-6" />
            </a>

            {/* GitHub (Icon Only, same height: h-14 sm:h-16) */}
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              title="GitHub Profile"
              className="w-14 sm:w-16 h-14 sm:h-16 shrink-0 flex items-center justify-center rounded-lg bg-[#F4F4EE] dark:bg-[#121214] border-2 border-zinc-900 dark:border-zinc-700 shadow-brutal-sm dark:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all text-zinc-900 dark:text-zinc-100 hover:bg-zinc-200 dark:hover:bg-zinc-800"
            >
              <Github size={22} className="sm:w-6 sm:h-6" />
            </a>

          </div>

          {/* Location info indicator */}
          <div className="flex items-center gap-2 mt-6 pt-4 border-t border-zinc-900/10 dark:border-zinc-800 text-xs font-semibold text-zinc-500 dark:text-zinc-400">
            <MapPin size={15} className="text-zinc-400" />
            <span>{profile.location[lang]}</span>
          </div>

        </div>

        {/* Global Footer */}
        <footer className="mt-16 sm:mt-24 pt-8 border-t-2 border-zinc-900/10 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-zinc-500 dark:text-zinc-400">
          <div>{profile.fullName[lang]}
            {/* © {profile.year}  — {profile.title[lang]} */}
          </div>
          <div className="flex items-center gap-4">
            <a href="#about" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
              {lang === 'en' ? "Back to top ↑" : "กลับขึ้นบนสุด ↑"}
            </a>
          </div>
        </footer>

      </div>
    </section>
  );
};

export default ContactSection;
