import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Layout, Server, Database, Palette, Terminal } from 'lucide-react';

export const StackSection = ({ lang }) => {
  const { stack } = portfolioData;

  const iconMap = {
    layout: Layout,
    server: Server,
    database: Database,
    palette: Palette,
    terminal: Terminal,
  };

  return (
    <section id="stack" className="py-16 sm:py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-10 sm:mb-14 border-b-2 border-zinc-900 dark:border-zinc-700 pb-4">
          <div>
            <h2 className="font-black text-3xl sm:text-5xl text-zinc-900 dark:text-zinc-100 uppercase tracking-tight">
              {lang === 'en' ? "Stack." : "เครื่องมือที่ใช้."}
            </h2>
          </div>
          <div className="text-xs sm:text-sm font-semibold text-zinc-600 dark:text-zinc-400">
            MERN STACK + CREATIVE MOTION
          </div>
        </div>

        {/* Stack Categories Grid (Banner removed, level labels removed) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stack.map((group, idx) => {
            const IconComponent = iconMap[group.icon] || Layout;
            return (
              <div
                key={idx}
                className="bg-white dark:bg-[#141416] border-3 border-zinc-900 dark:border-zinc-700 rounded-lg p-5 sm:p-6 shadow-brutal-sm dark:shadow-none"
              >
                {/* Category Header */}
                <div className="flex items-center gap-2 border-b-2 border-zinc-900/10 dark:border-zinc-800 pb-3 mb-4">
                  <div className="p-2 rounded bg-zinc-100 dark:bg-zinc-800 border border-zinc-900/20 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100">
                    <IconComponent size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-base text-zinc-900 dark:text-zinc-100">
                      {group.category[lang]}
                    </h4>
                    <span className="text-[10px] text-zinc-500 uppercase">
                      {group.items.length} {lang === 'en' ? "Technologies" : "รายการ"}
                    </span>
                  </div>
                </div>

                {/* Items List (Level label removed, clean tech name list) */}
                <ul className="space-y-2">
                  {group.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 p-2.5 rounded bg-[#F4F4EE] dark:bg-[#121214] border border-zinc-900/10 dark:border-zinc-800 text-xs font-bold text-zinc-900 dark:text-zinc-100"
                    >
                      {item.highlight ? (
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></span>
                      ) : (
                        <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 shrink-0"></span>
                      )}
                      <span>{item.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default StackSection;
