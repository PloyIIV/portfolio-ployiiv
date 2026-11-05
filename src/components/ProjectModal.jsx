import React from 'react';
import { X, ExternalLink, Github, CheckCircle2, Layers, Cpu } from 'lucide-react';

export const ProjectModal = ({ project, lang, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl bg-[#F6F6F2] dark:bg-[#18181B] border-3 border-zinc-900 dark:border-zinc-100 rounded-lg p-5 sm:p-7 shadow-brutal-lg dark:shadow-brutal-dark max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded border-2 border-zinc-900 dark:border-zinc-100 bg-[#F6F6F2] dark:bg-[#121214] text-zinc-900 dark:text-zinc-100 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"
          aria-label="Close Modal"
        >
          <X size={18} />
        </button>

        {/* Header */}
        <div className="pr-10 border-b-2 border-zinc-900/10 dark:border-zinc-800 pb-4 mb-5">
          <div className="inline-block px-2.5 py-0.5 rounded text-[11px] font-mono font-bold tracking-wider uppercase bg-zinc-900 dark:bg-zinc-100 text-[#F6F6F2] dark:text-[#121214] mb-2">
            {project.badge}
          </div>
          <h3 className="font-display font-black text-2xl sm:text-3xl text-zinc-900 dark:text-zinc-100">
            {project.title}
          </h3>
          <p className="text-sm font-semibold text-zinc-600 dark:text-zinc-400 mt-1">
            {project.subtitle[lang]}
          </p>
        </div>

        {/* Full Description */}
        <div className="space-y-4 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
          <p className="bg-white/60 dark:bg-zinc-900/60 p-4 rounded border border-zinc-900/10 dark:border-zinc-800">
            {project.description[lang]}
          </p>

          {/* Architecture Details */}
          {project.details?.architecture && (
            <div className="p-4 rounded border-2 border-zinc-900/10 dark:border-zinc-800 bg-white dark:bg-zinc-900">
              <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-100 mb-2">
                <Layers size={14} className="text-zinc-900 dark:text-zinc-100" />
                <span>{lang === 'en' ? "Architecture & Data Flow" : "สถาปัตยกรรม & การจัดการข้อมูล"}</span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
                {project.details.architecture[lang]}
              </p>
            </div>
          )}

          {/* Key Features List */}
          {project.details?.keyFeatures && (
            <div className="space-y-2">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-100 block">
                {lang === 'en' ? "Key Capabilities & Engineering" : "ฟีเจอร์เด่นและไฮไลท์ทางเทคนิค"}:
              </span>
              <ul className="space-y-1.5">
                {project.details.keyFeatures[lang].map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
                    <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack Tags */}
          <div className="pt-2">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-100 block mb-2">
              {lang === 'en' ? "Integrated Stack" : "เครื่องมือที่ใช้พัฒนา"}:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {project.stack.map((tech, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 text-xs font-mono font-bold bg-[#F6F6F2] dark:bg-[#121214] text-zinc-900 dark:text-zinc-100 border border-zinc-900 dark:border-zinc-700 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Action Links */}
        <div className="flex flex-wrap items-center justify-end gap-3 mt-6 pt-4 border-t-2 border-zinc-900/10 dark:border-zinc-800">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-xs font-bold font-mono uppercase bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 border-2 border-zinc-900 dark:border-zinc-100 rounded hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            >
              <Github size={14} />
              <span>{lang === 'en' ? "GitHub Repo" : "ดูซอร์สโค้ด"}</span>
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2 text-xs font-bold font-mono uppercase bg-zinc-900 dark:bg-zinc-100 text-[#F6F6F2] dark:text-[#121214] border-2 border-zinc-900 dark:border-zinc-100 rounded shadow-brutal-sm dark:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
            >
              <ExternalLink size={14} />
              <span>{lang === 'en' ? "Live Demo" : "เปิดดูเว็บจริง"}</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
