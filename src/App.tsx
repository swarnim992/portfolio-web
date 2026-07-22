import React, { useState } from 'react';
import { Navbar, TabType } from './components/Navbar';
import { HomeView } from './components/views/HomeView';
import { ProjectsView } from './components/views/ProjectsView';
import { AboutView } from './components/views/AboutView';
import { ContactView } from './components/views/ContactView';
import { ProjectModal } from './components/ProjectModal';
import { MarbleGameModal } from './components/MarbleGameModal';
import { Project } from './types';
import { PROFILE } from './data/portfolioData';
import { Sparkles, ArrowUp } from 'lucide-react';

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isGameOpen, setIsGameOpen] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleDownloadResume = async () => {
    showToast("Downloading Swarnim's Resume...");
    try {
      const response = await fetch(PROFILE.resumeUrl);
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'Swarnim_Jain_Resume.pdf';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch {
      showToast("Download failed. Opening in new tab...");
      window.open(PROFILE.resumeUrl, '_blank');
    }
  };

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0c0d12] text-zinc-100 flex flex-col justify-between selection:bg-amber-500/30 selection:text-amber-200 relative">
      {/* Subtle Ambient Top Accent Glow */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-96 bg-amber-500/[0.03] rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-zinc-800/[0.15] rounded-full blur-3xl" />
      </div>

      {/* Top Floating Glass Navbar */}
      <Navbar
        activeTab={activeTab}
        onTabChange={handleTabChange}
        onDownloadResume={handleDownloadResume}
      />

      {/* Main Content Container - Full Width Layout */}
      <div className="flex-1 flex flex-col justify-between min-h-screen">
        <main className={`relative z-10 flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 pb-16 transition-all duration-300 ${
          activeTab === 'home' ? 'pt-6 sm:pt-8' : 'pt-16 sm:pt-20'
        }`}>
          {activeTab === 'home' && (
            <HomeView
              onNavigateTab={handleTabChange}
              onSelectProject={(proj) => setSelectedProject(proj)}
              onDownloadResume={handleDownloadResume}
            />
          )}

          {activeTab === 'projects' && (
            <ProjectsView
              onSelectProject={(proj) => setSelectedProject(proj)}
            />
          )}

          {activeTab === 'about' && (
            <AboutView />
          )}

          {activeTab === 'contact' && (
            <ContactView
              onDownloadResume={handleDownloadResume}
              onShowToast={showToast}
            />
          )}
        </main>

        {/* Footer */}
        <footer className="relative z-10 border-t border-zinc-800/80 bg-zinc-950/80 backdrop-blur-md py-4 text-xs font-chakra text-zinc-400 mt-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-1.5">
              <span>Designed & Engineered by</span>
              <span className="text-zinc-100 font-bold">Swarnim Jain</span>
            </div>

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="p-2 bg-zinc-900 hover:bg-zinc-800 rounded-lg text-zinc-300 transition-colors border border-zinc-800 flex items-center gap-1 text-[11px]"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5 text-amber-400" />
            </button>
          </div>
        </footer>
      </div>

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 px-4 py-3 bg-zinc-900 border border-amber-500/40 text-amber-300 text-xs font-chakra font-semibold rounded-xl shadow-2xl flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Modals */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <MarbleGameModal
        isOpen={isGameOpen}
        onClose={() => setIsGameOpen(false)}
      />
    </div>
  );
};

export default App;
