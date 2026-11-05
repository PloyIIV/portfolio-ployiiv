import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import { ExternalLink, Github, Info, ArrowUpRight } from 'lucide-react';

export const ProjectsSection = ({ lang }) => {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-16 sm:py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-10 sm:mb-14 border-b-2 border-zinc-900 dark:border-zinc-700 pb-4">
          <div>
            <h2 className="font-black text-3xl sm:text-5xl text-zinc-900 dark:text-zinc-100 uppercase tracking-tight">
              {lang === 'en' ? "Projects." : "ผลงาน."}
            </h2>
          </div>
          {/* <div className="text-xs sm:text-sm font-semibold text-zinc-600 dark:text-zinc-400">
            {projects.length} {lang === 'en' ? "DEPLOYED APPLICATIONS" : "โปรเจกต์พร้อมทดลองใช้งาน"}
          </div> */}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col justify-between bg-white dark:bg-[#141416] border-3 border-zinc-900 dark:border-zinc-700 rounded-lg p-5 sm:p-7 hover:translate-x-1 hover:translate-y-1 transition-all"
            >
              <div>
                {/* Top Badge (Numbers removed) */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase bg-zinc-900 dark:bg-zinc-100 text-[#F4F4EE] dark:text-[#121214]">
                    {project.badge}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="font-black text-2xl sm:text-3xl text-zinc-900 dark:text-zinc-100 uppercase tracking-tight group-hover:underline underline-offset-4 mb-1">
                  {project.title}
                </h3>

                {/* Subtitle */}
                <p className="text-xs sm:text-sm font-semibold text-zinc-600 dark:text-zinc-400 mb-3">
                  {project.subtitle[lang]}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed mb-5 line-clamp-3">
                  {project.description[lang]}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.stack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 text-[11px] font-bold bg-[#F4F4EE] dark:bg-[#121214] text-zinc-800 dark:text-zinc-200 border border-zinc-900/30 dark:border-zinc-700 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons Row */}
              <div className="pt-4 border-t-2 border-zinc-900/10 dark:border-zinc-800 flex flex-wrap items-center justify-between gap-2">
                {/* View Details Button */}
                <button
                  onClick={() => setSelectedProject(project)}
                  className="flex items-center gap-1.5 text-xs font-bold uppercase text-zinc-900 dark:text-zinc-100 hover:text-amber-600 dark:hover:text-amber-400 py-1"
                >
                  <Info size={14} />
                  <span>{lang === 'en' ? "View Details" : "ดูรายละเอียด"}</span>
                </button>

                {/* Buttons with exact matching height (h-9) */}
                <div className="flex items-center gap-2">
                  {/* GitHub Repo Button (h-9 w-9) */}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-9 w-9 flex items-center justify-center rounded border-2 border-zinc-900 dark:border-zinc-700 bg-[#F4F4EE] dark:bg-[#121214] text-zinc-900 dark:text-zinc-100 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"
                      title={lang === 'en' ? "View GitHub Repo" : "ดูซอร์สโค้ด GitHub"}
                    >
                      <Github size={16} />
                    </a>
                  )}

                  {/* Live Demo Button (h-9 px-3.5) */}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-9 px-3.5 flex items-center gap-1.5 rounded text-xs font-bold uppercase bg-zinc-900 dark:bg-zinc-100 text-[#F4F4EE] dark:text-[#121214] border-2 border-zinc-900 dark:border-zinc-700 hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
                    >
                      <span>{lang === 'en' ? "Live Demo" : "ชมเว็บจริง"}</span>
                      <ArrowUpRight size={14} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Viewport */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            lang={lang}
            onClose={() => setSelectedProject(null)}
          />
        )}

      </div>
    </section>
  );
};

export default ProjectsSection;
