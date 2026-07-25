import React, { useState } from 'react';
import { 
  Download, ArrowUpRight, Check, Copy, MapPin, Mail, 
  Lightbulb, Code, Briefcase, GraduationCap, FolderGit2, 
  Sparkles, ExternalLink, ChevronRight, Verified, Layers, Cpu, Globe
} from 'lucide-react';
import { PROFILE, PROJECTS, SKILLS } from '../data/portfolioData';
import { Project } from '../types';
import { ExperienceTimeline } from './ExperienceTimeline';
import { EducationTimeline } from './EducationTimeline';

interface BentoGridProps {
  onSelectProject: (project: Project) => void;
  onDownloadResume: () => void;
  onShowToast: (msg: string) => void;
}

export const BentoGrid: React.FC<BentoGridProps> = ({
  onSelectProject,
  onDownloadResume,
  onShowToast,
}) => {
  const [aboutFlipped, setAboutFlipped] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeProjectFilter, setActiveProjectFilter] = useState<string>('All');

  const copyEmail = () => {
    navigator.clipboard.writeText(PROFILE.email);
    setCopiedEmail(true);
    onShowToast("Email copied to clipboard: " + PROFILE.email);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const categories = ['All', 'Mobile App', 'Backend / Cloud', 'AI & Analytics', 'Fullstack Web'];

  const filteredProjects = activeProjectFilter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category?.includes(activeProjectFilter) || p.title.toLowerCase().includes(activeProjectFilter.toLowerCase()));

  return (
    <main className="max-w-7xl mx-auto px-4 py-8 space-y-8">
      {/* Top Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* COLUMN 1: Name + Profile Avatar + Contact Me Banner */}
        <div className="space-y-4 flex flex-col justify-between">
          
          {/* Name Tile */}
          <div className="p-6 rounded-2xl bg-zinc-900/90 border border-zinc-800 hover:border-amber-500/40 transition-all shadow-xl group">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-chakra font-semibold text-amber-400 uppercase tracking-widest bg-zinc-950 px-2.5 py-1 rounded-md border border-zinc-800">
                Portfolio
              </span>
              <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-chakra font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                Available for Roles
              </div>
            </div>
            <h1 className="text-3xl lg:text-4xl font-chakra font-extrabold text-white tracking-tight">
              Swarnim <span className="text-amber-400">Jain</span>
            </h1>
            <p className="text-xs text-zinc-400 font-medium mt-1">
              SDE & AI Engineer
            </p>
          </div>

          {/* Profile Avatar Tile */}
          <div className="relative rounded-2xl bg-zinc-900/90 border border-zinc-800 overflow-hidden shadow-xl p-4 flex flex-col items-center justify-between min-h-[280px] group">
            <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 via-transparent to-zinc-950/90 pointer-events-none" />
            <div className="w-full flex justify-end z-10">
              <div className="p-1.5 rounded-full bg-zinc-950 border border-zinc-800 text-amber-400 shadow-md">
                <Verified className="w-4 h-4" />
              </div>
            </div>
            
            <div className="relative z-10 my-2 text-center">
              <div className="w-32 h-32 mx-auto rounded-full p-1 bg-amber-500/80 shadow-xl overflow-hidden">
                <img
                  src={PROFILE.avatar}
                  alt={PROFILE.name}
                  className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/assets/sj.png';
                  }}
                />
              </div>
              <h2 className="text-lg font-chakra font-bold text-white mt-3">Swarnim Jain</h2>
              <p className="text-xs text-amber-300 font-chakra font-medium">{PROFILE.company}</p>
            </div>

            <div className="relative z-10 w-full pt-2 border-t border-zinc-800 flex items-center justify-between text-[11px] text-zinc-400 font-chakra">
              <span className="flex items-center gap-1 text-zinc-300">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                {PROFILE.location}
              </span>
              <span className="text-amber-400 font-semibold">SPPU B.E. 8.8 CGPA</span>
            </div>
          </div>

          {/* Contact Me Box */}
          <div 
            onClick={() => {
              const contactSec = document.getElementById('contact-section');
              contactSec?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800 hover:border-amber-500/50 transition-all shadow-xl cursor-pointer group flex flex-col justify-between min-h-[160px]"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs text-zinc-400 font-chakra font-medium">Have some Questions?</span>
              <div className="p-2 rounded-xl bg-zinc-950 border border-zinc-800 text-amber-400 group-hover:text-zinc-950 group-hover:bg-amber-400 transition-all">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
            <div>
              <div className="text-2xl font-chakra font-bold text-white group-hover:text-amber-300 transition-colors">
                Contact <span className="text-amber-400">Me</span>
              </div>
              <p className="text-xs text-zinc-400 mt-1">Get in touch for projects, roles, or inquiries</p>
            </div>
          </div>

        </div>

        {/* COLUMN 2: About Philosophy / Credentials Toggle + About Me + Download Resume */}
        <div className="space-y-4 flex flex-col justify-between">

          {/* About Interactive Toggle Tile */}
          <div 
            onClick={() => setAboutFlipped(!aboutFlipped)}
            className="p-6 rounded-2xl bg-zinc-900/90 border border-zinc-800 hover:border-amber-500/40 transition-all shadow-xl cursor-pointer relative min-h-[180px] flex flex-col justify-between group"
          >
            <div className="flex items-center justify-between">
              <div className="p-2 rounded-xl bg-zinc-950 border border-zinc-800 text-amber-400">
                <Lightbulb className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-chakra text-zinc-500 uppercase tracking-widest bg-zinc-950 px-2 py-0.5 rounded border border-zinc-800">
                Click to flip
              </span>
            </div>

            {!aboutFlipped ? (
              <div className="animate-fadeIn mt-4">
                <p className="text-xl font-chakra font-bold text-white leading-snug">
                  Bridging creativity, <span className="text-amber-400">and technology</span> through code.
                </p>
              </div>
            ) : (
              <div className="animate-fadeIn mt-2 space-y-1">
                <div className="text-xs font-chakra font-semibold text-amber-400">Current Focus</div>
                <div className="text-sm font-chakra font-bold text-white">AI Engineer @ Negenux Solutions</div>
                <div className="text-xs text-zinc-400">Ex-SDE @ Decimal Point Analytics</div>
                <div className="text-xs text-amber-300">B.E. Computer Engineering • {PROFILE.location}</div>
              </div>
            )}

            <div className="text-[10px] text-zinc-500 font-chakra text-right pt-2 border-t border-zinc-800">
              {aboutFlipped ? 'Show Philosophy' : 'Show Career Info'}
            </div>
          </div>

          {/* About Me Summary Tile */}
          <div className="p-6 rounded-2xl bg-zinc-900/90 border border-zinc-800 shadow-xl flex flex-col justify-between space-y-3 min-h-[220px]" id="about">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-chakra font-bold text-white flex items-center gap-2">
                About <span className="text-amber-400">Me</span>
              </h2>
              <Sparkles className="w-4 h-4 text-amber-400" />
            </div>
            <p className="text-xs text-zinc-300 leading-relaxed font-normal">
              {PROFILE.summary}
            </p>
            <div className="pt-2 border-t border-zinc-800 flex items-center justify-between text-[11px] font-chakra text-zinc-400">
              <span>Full-Stack & Mobile</span>
              <span className="text-amber-400">Agile Delivery</span>
            </div>
          </div>

          {/* Download Resume Tile */}
          <button
            onClick={onDownloadResume}
            className="p-5 rounded-2xl bg-amber-500 hover:bg-amber-400 text-zinc-950 shadow-xl transition-all cursor-pointer group flex items-center justify-between active:scale-98 border border-amber-400/40 font-bold"
          >
            <div>
              <div className="text-lg font-chakra font-extrabold tracking-wide text-zinc-950">
                My Resume
              </div>
              <div className="text-xs text-zinc-900/80 font-chakra">Click to download PDF copy</div>
            </div>
            <div className="p-3 rounded-xl bg-zinc-950/20 border border-zinc-950/30 group-hover:scale-110 transition-transform">
              <Download className="w-5 h-5 text-zinc-950" />
            </div>
          </button>

        </div>

        {/* COLUMN 3: Projects List */}
        <div className="p-6 rounded-2xl bg-zinc-900/90 border border-zinc-800 shadow-xl flex flex-col justify-between space-y-4" id="projects">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-chakra font-bold text-white flex items-center gap-2">
                My <span className="text-amber-400">Projects</span>
              </h2>
              <p className="text-[11px] text-zinc-400">Click any project to view details</p>
            </div>
            <div className="p-2 rounded-xl bg-zinc-950 border border-zinc-800 text-amber-400">
              <FolderGit2 className="w-4 h-4" />
            </div>
          </div>

          {/* Filter badges */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar text-[11px] font-chakra">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveProjectFilter(cat)}
                className={`px-2.5 py-1 rounded-lg transition-all shrink-0 ${
                  activeProjectFilter === cat
                    ? 'bg-amber-500 text-zinc-950 font-semibold'
                    : 'bg-zinc-950 text-zinc-400 hover:text-white border border-zinc-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Project List */}
          <div className="space-y-2.5 max-h-[380px] overflow-y-auto pr-1">
            {filteredProjects.map((proj) => (
              <div
                key={proj.id}
                onClick={() => onSelectProject(proj)}
                className="p-3 rounded-xl bg-zinc-950/80 hover:bg-zinc-800/60 border border-zinc-800 hover:border-amber-500/50 transition-all cursor-pointer flex items-center justify-between group"
              >
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 p-1.5 shrink-0 flex items-center justify-center">
                    <img src={proj.flutterSvg} alt="tech" className="w-full h-full object-contain" />
                  </div>
                  <div className="truncate">
                    <h3 className="text-xs font-chakra font-bold text-white group-hover:text-amber-400 transition-colors truncate">
                      {proj.title}
                    </h3>
                    <p className="text-[10px] text-zinc-400 truncate">
                      {proj.description}
                    </p>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-zinc-500 group-hover:text-amber-400 group-hover:translate-x-0.5 transition-all shrink-0 ml-2" />
              </div>
            ))}
          </div>
        </div>

        {/* COLUMN 4: Experience + Skills Grid */}
        <div className="space-y-4 flex flex-col justify-between">

          {/* Experience Tile */}
          <div className="p-6 rounded-2xl bg-zinc-900/90 border border-zinc-800 shadow-xl space-y-4" id="experience">
            <ExperienceTimeline title="My Experience" />
          </div>

          {/* My Skills Grid Tile */}
          <div className="p-6 rounded-2xl bg-zinc-900/90 border border-zinc-800 shadow-xl space-y-3" id="skills">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-chakra font-bold text-white flex items-center gap-2">
                My <span className="text-amber-400">Skills</span>
              </h2>
              <Code className="w-4 h-4 text-amber-400" />
            </div>

            <div className="grid grid-cols-4 gap-2">
              {SKILLS.map((sk) => (
                <div
                  key={sk.name}
                  className="p-2 rounded-xl bg-zinc-950/80 border border-zinc-800 hover:border-amber-500/50 hover:bg-zinc-800/60 transition-all flex flex-col items-center justify-center text-center group relative"
                  title={sk.name}
                >
                  <img
                    src={sk.svgPath}
                    alt={sk.name}
                    className="w-6 h-6 object-contain group-hover:scale-110 transition-transform"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                  <span className="text-[10px] font-chakra text-zinc-300 font-medium mt-1 truncate w-full">
                    {sk.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* Education Timeline Section */}
      <section className="p-6 rounded-2xl bg-zinc-900/90 border border-zinc-800 shadow-xl space-y-4">
        <EducationTimeline title="My Education" />
      </section>

      {/* Contact Section */}
      <section className="p-6 rounded-2xl bg-zinc-900/90 border border-zinc-800 shadow-xl space-y-6" id="contact-section">
        <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
          <div>
            <h2 className="text-2xl font-chakra font-bold text-white">
              Get In <span className="text-amber-400">Touch</span>
            </h2>
            <p className="text-xs text-zinc-400 mt-0.5">Let's build something remarkable together</p>
          </div>
          <Mail className="w-6 h-6 text-amber-400" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Location Card */}
          <div className="relative rounded-2xl overflow-hidden border border-zinc-800 group h-52 lg:h-auto">
            <img 
              src={PROFILE.locationImage} 
              alt={PROFILE.location} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1605379399642-870262d3d051?auto=format&fit=crop&w=800&q=80';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/30 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/90 backdrop-blur-md border border-zinc-700 text-xs font-chakra font-semibold text-white">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                {PROFILE.locationFull}
              </div>
            </div>
          </div>

          {/* Direct Email Copy & Quick Socials */}
          <div className="lg:col-span-2 space-y-4 flex flex-col justify-between">
            
            {/* Email Bar */}
            <div className="p-4 rounded-xl bg-zinc-950/80 border border-zinc-800 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-amber-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="truncate">
                  <div className="text-[11px] font-chakra text-zinc-400">Direct Email</div>
                  <div className="text-sm font-chakra font-bold text-white truncate">{PROFILE.email}</div>
                </div>
              </div>
              <button
                onClick={copyEmail}
                className="px-3.5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 text-xs font-chakra font-bold transition-all flex items-center gap-2 shrink-0 active:scale-95 shadow-md"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-zinc-950" /> : <Copy className="w-4 h-4" />}
                <span>{copiedEmail ? 'Copied!' : 'Copy Email'}</span>
              </button>
            </div>

            {/* Social Cards Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-zinc-950/80 hover:bg-zinc-800/60 border border-zinc-800 hover:border-amber-500/50 transition-all flex items-center gap-3 text-white font-chakra text-xs font-semibold group"
              >
                <img src="/assets/svg/github.svg" alt="GitHub" className="w-5 h-5 object-contain" />
                <span className="group-hover:text-amber-400">GitHub</span>
              </a>

              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-zinc-950/80 hover:bg-zinc-800/60 border border-zinc-800 hover:border-amber-500/50 transition-all flex items-center gap-3 text-white font-chakra text-xs font-semibold group"
              >
                <img src="/assets/svg/linkedin.svg" alt="LinkedIn" className="w-5 h-5 object-contain" />
                <span className="group-hover:text-amber-400">LinkedIn</span>
              </a>

              <a
                href={PROFILE.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-zinc-950/80 hover:bg-zinc-800/60 border border-zinc-800 hover:border-amber-500/50 transition-all flex items-center gap-3 text-white font-chakra text-xs font-semibold group"
              >
                <img src="/assets/svg/x.svg" alt="LeetCode" className="w-5 h-5 object-contain" />
                <span className="group-hover:text-amber-400">LeetCode</span>
              </a>

              <a
                href={PROFILE.codechef}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-zinc-950/80 hover:bg-zinc-800/60 border border-zinc-800 hover:border-amber-500/50 transition-all flex items-center gap-3 text-white font-chakra text-xs font-semibold group"
              >
                <img src="/assets/svg/codechef.svg" alt="CodeChef" className="w-5 h-5 object-contain" />
                <span className="group-hover:text-amber-400">CodeChef</span>
              </a>
            </div>

            {/* Quick Note */}
            <div className="p-3 rounded-xl bg-zinc-950/90 border border-zinc-800 text-xs text-zinc-300 font-chakra flex items-center justify-between">
              <span>Open for full-time Software Development & AI Engineering opportunities.</span>
              <a href={`mailto:${PROFILE.email}`} className="text-amber-400 font-bold hover:underline flex items-center gap-1">
                Send Mail <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>
      </section>
    </main>
  );
};
