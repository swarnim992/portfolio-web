import React, { useState, useEffect } from 'react';
import { 
  Download, FolderGit2, Mail, User, Home, 
  Github, Linkedin, Verified, Code2, X, Sparkles, Briefcase, Award
} from 'lucide-react';
import { PROFILE, PROJECTS, EXPERIENCES, getTotalExperienceYears } from '../data/portfolioData';

export type TabType = 'home' | 'projects' | 'about' | 'contact';

interface NavbarProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
  onDownloadResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  onTabChange,
  onDownloadResume,
}) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Check initial scroll
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Hide navbar on home page by default, show when scrolled. Always visible on other tabs.
  const isVisible = activeTab !== 'home' || scrolled;

  const navItems: {
    id: TabType;
    label: string;
    icon: React.ElementType;
    badge?: string;
  }[] = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'projects', label: 'Projects', icon: FolderGit2, badge: `${PROJECTS.length}` },
    { id: 'about', label: 'About', icon: User },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  return (
    <>
      {/* FLOATING ISLAND NAVIGATION DOCK */}
      <header
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-auto max-w-[96vw] transition-all duration-300 ease-out ${
          isVisible
            ? 'opacity-100 pointer-events-auto translate-y-0 scale-100'
            : 'opacity-0 pointer-events-none -translate-y-8 scale-95'
        }`}
      >
        <div className="backdrop-blur-2xl bg-zinc-950/90 border border-zinc-800/90 rounded-full p-1.5 shadow-2xl flex items-center gap-1 sm:gap-2 ring-1 ring-white/10">
          
          {/* Left Avatar / Brand Pill */}
          <button
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="flex items-center gap-2 pl-1 pr-2 py-1 rounded-full bg-zinc-900/90 hover:bg-zinc-800/90 border border-zinc-800 transition-all group shrink-0"
            title="Click for Profile Overview"
          >
            <div className="relative w-7 h-7 rounded-full p-0.5 bg-amber-500/80 shrink-0">
              <img
                src={PROFILE.avatar}
                alt={PROFILE.name}
                className="w-full h-full object-cover rounded-full"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/assets/sj.png';
                }}
              />
              <span className="absolute bottom-0 right-0 w-2 h-2 bg-emerald-500 rounded-full border border-zinc-950" />
            </div>
            <span className="font-chakra font-bold text-xs text-zinc-200 group-hover:text-amber-400 transition-colors hidden md:inline">
              SJ
            </span>
          </button>

          <div className="h-4 w-px bg-zinc-800 hidden sm:block" />

          {/* Center Navigation Tabs */}
          <nav className="flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => {
                    onTabChange(item.id);
                    setIsProfileOpen(false);
                  }}
                  className={`px-3 py-1.5 text-xs font-chakra font-semibold rounded-full transition-all flex items-center gap-1.5 relative ${
                    isActive
                      ? 'bg-amber-500 text-zinc-950 shadow-md font-bold'
                      : 'text-zinc-400 hover:text-white hover:bg-zinc-900/80'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">{item.label}</span>
                  {item.badge && (
                    <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-chakra font-bold ${
                      isActive ? 'bg-zinc-950/20 text-zinc-950' : 'bg-zinc-900 text-amber-400 border border-amber-500/30'
                    }`}>
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          <div className="h-4 w-px bg-zinc-800" />

          {/* Right Action: Download Resume */}
          <button
            onClick={onDownloadResume}
            className="px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500 text-amber-400 hover:text-zinc-950 text-xs font-chakra font-bold rounded-full transition-all border border-amber-500/30 flex items-center gap-1.5 shrink-0 active:scale-95"
            title="Download Resume"
          >
            <Download className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Resume</span>
          </button>
        </div>
      </header>

      {/* QUICK OVERVIEW MODAL ON BRAND CLICK */}
      {isProfileOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-md animate-fadeIn">
          <div className="absolute inset-0" onClick={() => setIsProfileOpen(false)} />
          <div className="relative z-10 w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-3xl p-6 shadow-2xl overflow-hidden animate-scaleUp">
            <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
              <div className="flex items-center gap-2 text-xs font-chakra font-semibold text-amber-400">
                <Sparkles className="w-4 h-4" />
                <span>Professional Profile</span>
              </div>
              <button
                onClick={() => setIsProfileOpen(false)}
                className="p-1.5 rounded-xl bg-zinc-950 text-zinc-400 hover:text-white border border-zinc-800 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="mt-4 flex items-center gap-4">
              <img
                src={PROFILE.avatar}
                alt={PROFILE.name}
                className="w-16 h-16 rounded-2xl object-cover border-2 border-amber-500/40 shadow-lg"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/assets/sj.png';
                }}
              />
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="font-chakra font-bold text-base text-white">{PROFILE.name}</h3>
                  <Verified className="w-4 h-4 text-amber-400" />
                </div>
                <p className="text-xs text-amber-300 font-chakra">{PROFILE.role}</p>
                <p className="text-[11px] text-zinc-400 font-chakra mt-0.5">{PROFILE.location}</p>
              </div>
            </div>

            <p className="text-xs text-zinc-300 mt-4 leading-relaxed font-sans">
              {PROFILE.summary}
            </p>

            <div className="grid grid-cols-2 gap-2 mt-4">
              <div className="p-2.5 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center gap-2.5">
                <Briefcase className="w-4 h-4 text-amber-400 shrink-0" />
                <div>
                  <div className="font-chakra font-bold text-xs text-white">{getTotalExperienceYears(EXPERIENCES, { mode: 'full' })}</div>
                  <div className="text-[10px] text-zinc-400">Experience</div>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center gap-2.5">
                <Award className="w-4 h-4 text-amber-400 shrink-0" />
                <div>
                  <div className="font-chakra font-bold text-xs text-white">100+ APIs</div>
                  <div className="text-[10px] text-zinc-400">Built & Deployed</div>
                </div>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-zinc-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-zinc-950 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800 transition-colors"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-zinc-950 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={PROFILE.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-zinc-950 hover:bg-zinc-800 text-zinc-400 hover:text-amber-400 border border-zinc-800 transition-colors"
                >
                  <Code2 className="w-4 h-4" />
                </a>
              </div>

              <button
                onClick={onDownloadResume}
                className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-zinc-950 text-xs font-chakra font-bold rounded-xl shadow-md transition-all flex items-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Resume</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};



