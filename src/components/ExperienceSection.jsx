import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

export const ExperienceSection = ({ lang }) => {
  const { experience } = portfolioData;
  const [activeFilter, setActiveFilter] = useState('ALL'); // 'ALL' | 'WORK' | 'EDUCATION'

  const workItems = experience.filter((e) => e.type === 'work');
  const eduItems = experience.filter((e) => e.type === 'education');

  const displayedItems = 
    activeFilter === 'WORK' ? workItems :
    activeFilter === 'EDUCATION' ? eduItems :
    experience;

  return (
    <section id="experience" className="py-16 sm:py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading (Upper tag like "// CAREER & KNOWLEDGE LOG" removed) */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-10 sm:mb-14 border-b-2 border-zinc-900 dark:border-zinc-700 pb-4">
          <div>
            <h2 className="font-black text-3xl sm:text-5xl text-zinc-900 dark:text-zinc-100 uppercase tracking-tight">
              {lang === 'en' ? "Experience." : "ประสบการณ์."}
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 p-1 bg-zinc-200 dark:bg-zinc-800 rounded-md border border-zinc-900/10 dark:border-zinc-700 text-xs font-bold">
            <button
              onClick={() => setActiveFilter('ALL')}
              className={`px-3 py-1 rounded transition-colors ${
                activeFilter === 'ALL'
                  ? 'bg-zinc-900 dark:bg-zinc-100 text-[#F4F4EE] dark:text-[#121214]'
                  : 'text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white'
              }`}
            >
              {lang === 'en' ? "ALL" : "ทั้งหมด"}
            </button>
            <button
              onClick={() => setActiveFilter('WORK')}
              className={`px-3 py-1 rounded transition-colors ${
                activeFilter === 'WORK'
                  ? 'bg-zinc-900 dark:bg-zinc-100 text-[#F4F4EE] dark:text-[#121214]'
                  : 'text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white'
              }`}
            >
              {lang === 'en' ? "WORK" : "การทำงาน"}
            </button>
            <button
              onClick={() => setActiveFilter('EDUCATION')}
              className={`px-3 py-1 rounded transition-colors ${
                activeFilter === 'EDUCATION'
                  ? 'bg-zinc-900 dark:bg-zinc-100 text-[#F4F4EE] dark:text-[#121214]'
                  : 'text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white'
              }`}
            >
              {lang === 'en' ? "EDUCATION" : "การศึกษา"}
            </button>
          </div>
        </div>

        {/* Timeline List (Strictly Chronological) */}
        <div className="space-y-6 sm:space-y-8">
          {displayedItems.map((item) => {
            const isWork = item.type === 'work';
            return (
              <div
                key={item.id}
                className="relative bg-white dark:bg-[#141416] border-3 border-zinc-900 dark:border-zinc-700 rounded-lg p-5 sm:p-7 dark:shadow-none transition-transform hover:-translate-y-0.5"
              >
                {/* Category & Period Row */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-zinc-900/10 dark:border-zinc-800 pb-3 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="p-1.5 rounded bg-zinc-100 dark:bg-zinc-800 border border-zinc-900/10 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100">
                      {isWork ? <Briefcase size={14} /> : <GraduationCap size={14} />}
                    </span>
                    <span className="text-[10px] sm:text-xs font-bold tracking-wider uppercase text-zinc-600 dark:text-zinc-400">
                      {item.category[lang]}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded bg-[#F4F4EE] dark:bg-[#121214] text-zinc-800 dark:text-zinc-200 border border-zinc-900/20 dark:border-zinc-700">
                    <Calendar size={12} className="text-zinc-500" />
                    <span>{item.period}</span>
                  </div>
                </div>

                {/* Role Title */}
                <h3 className="font-black text-xl sm:text-2xl text-zinc-900 dark:text-zinc-100">
                  {item.role[lang]}
                </h3>

                {/* Organization */}
                <div className="text-xs sm:text-sm font-semibold text-zinc-600 dark:text-zinc-400 mt-1 mb-3">
                  {item.company[lang]}
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                  {item.description[lang]}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ExperienceSection;
