import React from 'react';
import {
  Sparkles, Download, ArrowRight, Verified, MapPin,
  Briefcase, Code, FolderGit2, Mail, ExternalLink, ChevronRight, CheckCircle2, Trophy
} from 'lucide-react';
import { PROFILE, PROJECTS, EXPERIENCES, SKILLS, getTotalExperienceYears } from '../../data/portfolioData';
import { Project } from '../../types';
import { ExperienceTimeline } from '../ExperienceTimeline';

interface HomeViewProps {
  onNavigateTab: (tab: 'home' | 'projects' | 'about' | 'contact') => void;
  onSelectProject: (proj: Project) => void;
  onDownloadResume: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigateTab,
  onSelectProject,
  onDownloadResume,
}) => {
  // Select top recruiter-relevant projects
  const featuredProjects = PROJECTS.slice(0, 4);

  return (
    <div className="space-y-4 animate-fadeIn">
      {/* TOP ROW: Compact Recruiter Hero Card + Live Metric Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

        {/* Main Hero Card (2 cols) */}
        <div className="lg:col-span-2 p-5 md:p-6 rounded-2xl bg-zinc-900/95 border border-zinc-800 shadow-xl relative overflow-hidden flex flex-col justify-between gap-4">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-2xl p-0.5 bg-amber-500/80 shadow-md shrink-0">
                <img
                  src={PROFILE.avatar}
                  alt={PROFILE.name}
                  className="w-full h-full object-cover rounded-[14px]"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/assets/sj.png';
                  }}
                />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-xl md:text-2xl font-chakra font-extrabold text-white">
                    {PROFILE.name}
                  </h1>
                  <Verified className="w-4 h-4 text-amber-400" />
                </div>
                <div className="text-xs font-chakra text-amber-300 font-semibold">
                  AI Engineer @ Negenux <span className="text-zinc-500 font-normal">| Ex-SDE @ Decimal Point Analytics</span>
                </div>
              </div>
            </div>


          </div>

          <p className="text-xs text-zinc-300 leading-relaxed font-normal">
            Specializing in <strong className="text-white">Agentic AI, FastAPI microservices, and cloud-native backend architecture</strong>. Shipped multi-agent AI platforms and 100+ production REST APIs using Python, C++, Docker, and AWS - optimizing systems at scale.
          </p>



          <div className="pt-3 border-t border-zinc-800 flex flex-wrap items-center justify-between gap-3 text-xs font-chakra">
            <div className="flex items-center gap-3 text-zinc-400">
              <span className="flex items-center gap-1 text-zinc-300">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                {PROFILE.location}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={onDownloadResume}
                className="px-3 py-1.5 bg-amber-500 hover:bg-amber-400 text-zinc-950 rounded-xl text-xs font-bold transition-all shadow-md flex items-center gap-1.5 active:scale-95"
              >
                <Download className="w-3.5 h-3.5 text-zinc-950" />
                <span>Download Resume</span>
              </button>
              <button
                onClick={() => onNavigateTab('contact')}
                className="px-3 py-1.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 rounded-xl text-xs font-semibold transition-all border border-zinc-700 flex items-center gap-1"
              >
                <span>Contact Me</span>
                <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
              </button>
            </div>
          </div>
        </div>

        {/* Technical Overview Metric Strip */}
        <div className="p-5 rounded-2xl bg-zinc-900/95 border border-zinc-800 shadow-xl flex flex-col justify-between gap-3">
          <div className="flex items-center justify-between pb-2 border-b border-zinc-800">
            <span className="text-xs font-chakra font-bold text-white flex items-center gap-1.5">
              <Trophy className="w-4 h-4 text-amber-400" />
              Technical Overview
            </span>
            <span className="text-[10px] font-chakra text-amber-400 bg-zinc-950 px-2 py-0.5 rounded border border-zinc-800">
              Core Highlights
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="p-2.5 rounded-xl bg-zinc-950/80 border border-zinc-800">
              <div className="text-lg font-chakra font-extrabold text-white">{getTotalExperienceYears(EXPERIENCES, { mode: 'full' })}</div>
              <div className="text-[10px] text-zinc-400 font-chakra">SDE & AI Experience</div>
            </div>
            <div className="p-2.5 rounded-xl bg-zinc-950/80 border border-zinc-800">
              <div className="text-lg font-chakra font-extrabold text-amber-400 font-chakra">GenAI / LLM</div>
              <div className="text-[10px] text-zinc-400 font-chakra">Agentic Workflows</div>
            </div>
            <div className="p-2.5 rounded-xl bg-zinc-950/80 border border-zinc-800">
              <div className="text-lg font-chakra font-extrabold text-amber-300">{PROJECTS.length}+</div>
              <div className="text-[10px] text-zinc-400 font-chakra">Projects Built</div>
            </div>
            <div className="p-2.5 rounded-xl bg-zinc-950/80 border border-zinc-800">
              <div className="text-lg font-chakra font-extrabold text-emerald-400 font-chakra">AWS & Docker</div>
              <div className="text-[10px] text-zinc-400 font-chakra">Cloud & DevOps Stack</div>
            </div>
          </div>

          <div className="flex flex-wrap gap-1 pt-1">
            {['Python', 'C++', 'Agentic AI', 'Generative AI', 'FastAPI', 'AWS', 'Docker', 'Spring Boot'].map(s => (
              <span key={s} className="px-2 py-0.5 bg-zinc-950 rounded text-[10px] font-chakra text-zinc-300 border border-zinc-800">
                {s}
              </span>
            ))}
          </div>
        </div>

      </div>

      {/* MIDDLE SECTION: Featured High-Impact Projects */}
      <div className="p-5 rounded-2xl bg-zinc-900/95 border border-zinc-800 shadow-xl space-y-3">
        <div className="flex items-center justify-between pb-2 border-b border-zinc-800">
          <div>
            <h2 className="text-base font-chakra font-bold text-white flex items-center gap-2">
              <FolderGit2 className="w-4 h-4 text-amber-400" />
              Featured High-Impact Projects
            </h2>
            <p className="text-[11px] text-zinc-400">Click any project for deep technical architecture breakdown</p>
          </div>
          <button
            onClick={() => onNavigateTab('projects')}
            className="text-xs font-chakra font-bold text-amber-400 hover:underline flex items-center gap-1"
          >
            View All {PROJECTS.length} Projects <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {featuredProjects.map((proj) => (
            <div
              key={proj.id}
              onClick={() => onSelectProject(proj)}
              className="p-3.5 rounded-xl bg-zinc-950/80 hover:bg-zinc-800/60 border border-zinc-800 hover:border-amber-500/50 transition-all cursor-pointer flex flex-col justify-between space-y-3 group"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="px-2 py-0.5 rounded bg-zinc-900 text-[10px] font-chakra font-semibold text-amber-300 border border-zinc-800">
                    {proj.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <img src={proj.flutterSvg} alt="tech" className="w-3.5 h-3.5 object-contain" />
                    <img src={proj.dartSvg} alt="tech" className="w-3.5 h-3.5 object-contain" />
                  </div>
                </div>

                <div className="relative aspect-video rounded-lg overflow-hidden border border-zinc-800 bg-zinc-900">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/assets/project/portfolio.png';
                    }}
                  />
                </div>

                <h3 className="text-xs font-chakra font-bold text-white group-hover:text-amber-400 transition-colors line-clamp-1">
                  {proj.title}
                </h3>
                <p className="text-[11px] text-zinc-400 line-clamp-2 leading-tight">
                  {proj.description}
                </p>
              </div>

              <div className="pt-2 border-t border-zinc-800 flex items-center justify-between text-[10px] font-chakra text-amber-400 font-semibold">
                <span>View Specs</span>
                <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* BOTTOM ROW: Career Experience Snapshot + Technical Skills */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

        {/* Career Timeline Card */}
        <div className="p-5 rounded-2xl bg-zinc-900/95 border border-zinc-800 shadow-xl flex flex-col justify-between space-y-4">
          <div className="flex items-center justify-between pb-2.5 border-b border-zinc-800">
            <h2 className="text-sm font-chakra font-bold text-white flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-amber-400" />
              <span>Professional Career Timeline</span>
            </h2>
            <button
              onClick={() => onNavigateTab('about')}
              className="text-xs font-chakra text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1 hover:underline transition-colors"
            >
              <span>Full Details</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="pt-1 flex-1 flex flex-col justify-center">
            <ExperienceTimeline showHeader={false} short={true} />
          </div>

          <div className="pt-2.5 border-t border-zinc-800 flex items-center justify-between text-[11px] font-chakra text-zinc-400">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Active Role at Negenux</span>
            </span>
            <span className="text-amber-400 font-bold">{getTotalExperienceYears(EXPERIENCES, { mode: 'full' })}</span>
          </div>
        </div>

        {/* Core Skills & Stack Card */}
        <div className="p-5 rounded-2xl bg-zinc-900/95 border border-zinc-800 shadow-xl flex flex-col justify-between space-y-4">
          <div className="flex items-center justify-between pb-2.5 border-b border-zinc-800">
            <h2 className="text-sm font-chakra font-bold text-white flex items-center gap-2">
              <Code className="w-4 h-4 text-amber-400" />
              <span>Core Technical Stack</span>
            </h2>
            <button
              onClick={() => onNavigateTab('about')}
              className="text-xs font-chakra text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1 hover:underline transition-colors"
            >
              <span>All Skills</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 py-1 flex-1">
            {SKILLS.slice(0, 12).map((sk) => (
              <div
                key={sk.name}
                className="p-2.5 rounded-xl bg-zinc-950/80 border border-zinc-800 hover:border-amber-500/50 hover:bg-zinc-800/60 transition-all flex flex-col items-center justify-center text-center group"
              >
                <div className="w-6 h-6 flex items-center justify-center">
                  <img
                    src={sk.svgPath}
                    alt={sk.name}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                </div>
                <span className="text-xs font-chakra font-bold text-white mt-1.5 truncate w-full">
                  {sk.name}
                </span>
                <span className="text-[10px] text-amber-300/80 font-chakra mt-0.5 truncate w-full">
                  {sk.category || 'Tech'}
                </span>
              </div>
            ))}
          </div>

          <div className="pt-2.5 border-t border-zinc-800 flex items-center justify-between text-[11px] font-chakra text-zinc-400">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span>Microservices, AI & Mobile Apps</span>
            </span>
            <span className="text-amber-400 font-bold">{SKILLS.slice(0, 12).length} Core Technologies</span>
          </div>
        </div>

      </div>
    </div>
  );
};
