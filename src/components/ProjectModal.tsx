import React from 'react';
import { X, ExternalLink, Github, CheckCircle2, Layers, Sparkles } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  const featuresList = project.keyFeatures
    .split('\n')
    .map(f => f.replace(/^•\s*/, '').trim())
    .filter(Boolean);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-3xl bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-zinc-800 flex items-start justify-between gap-4 bg-zinc-950/40">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center gap-2">
              <img src={project.flutterSvg} alt="tech" className="w-6 h-6 object-contain" />
              <img src={project.dartSvg} alt="tech" className="w-6 h-6 object-contain" />
            </div>
            <div>
              <div className="text-xs font-chakra font-semibold text-amber-400 uppercase tracking-wider">
                {project.category || 'Featured Project'}
              </div>
              <h2 className="text-xl font-chakra font-bold text-white mt-0.5">
                {project.title}
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Project Preview Image / Banner */}
          <div className="relative rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950 p-2 min-h-[200px] max-h-[400px] flex items-center justify-center group shadow-inner">
            {project.image ? (
              <>
                <div 
                  className="absolute inset-0 opacity-15 blur-2xl scale-110 pointer-events-none" 
                  style={{ backgroundImage: `url(${project.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }} 
                />
                <img
                  src={project.image}
                  alt={project.title}
                  className="max-h-[360px] w-auto max-w-full object-contain rounded-xl shadow-2xl relative z-10 transition-transform duration-300 group-hover:scale-[1.01]"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              </>
            ) : (
              <div className="w-full h-48 rounded-xl bg-zinc-950 p-6 flex flex-col items-center justify-center text-center space-y-3 relative border border-zinc-800 overflow-hidden">
                <div className="p-3 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center gap-3 relative z-10 shadow-lg">
                  {project.flutterSvg && <img src={project.flutterSvg} alt="tech" className="w-8 h-8 object-contain" />}
                  {project.dartSvg && <img src={project.dartSvg} alt="tech" className="w-8 h-8 object-contain" />}
                </div>
                <div className="relative z-10">
                  <span className="text-[11px] font-chakra text-amber-400 font-semibold uppercase tracking-wider">
                    {project.category || 'Architecture & Implementation'}
                  </span>
                  <h4 className="text-base font-chakra font-bold text-white mt-0.5">
                    {project.title}
                  </h4>
                </div>
              </div>
            )}
            <div className="absolute bottom-3 right-3 flex items-center gap-2 z-20">
              <span className="px-2.5 py-1 bg-zinc-900/90 border border-zinc-700 rounded-lg text-[11px] font-chakra text-zinc-300 backdrop-blur-md flex items-center gap-1.5 shadow-md">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                {project.category || 'Production Project'}
              </span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-sm font-chakra font-semibold text-zinc-400 mb-2 uppercase tracking-wide flex items-center gap-2">
              <Layers className="w-4 h-4 text-amber-400" />
              Overview
            </h3>
            <p className="text-zinc-300 text-sm leading-relaxed bg-zinc-950/40 p-4 rounded-xl border border-zinc-800">
              {project.description}
            </p>
          </div>

          {/* Key Features */}
          {featuresList.length > 0 && (
            <div>
              <h3 className="text-sm font-chakra font-semibold text-zinc-400 mb-3 uppercase tracking-wide flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                Key Highlights & Features
              </h3>
              <div className="grid grid-cols-1 gap-2.5">
                {featuresList.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3 bg-zinc-950/50 rounded-xl border border-zinc-800 text-zinc-300 text-sm"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer Links */}
        <div className="p-6 border-t border-zinc-800 bg-zinc-950/60 flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs text-zinc-500 font-chakra">
            Built with {project.title.includes('FastAPI') || project.title.includes('Dealer') ? 'Python FastAPI' : 'Flutter & Clean Architecture'}
          </div>
          <div className="flex items-center gap-3">
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-white rounded-xl text-xs font-chakra font-semibold transition-all flex items-center gap-2 border border-zinc-700"
              >
                <Github className="w-4 h-4" />
                Source Code
              </a>
            )}
            {project.demoVideoLink && (
              <a
                href={project.demoVideoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-zinc-950 rounded-xl text-xs font-chakra font-semibold transition-all flex items-center gap-2 shadow-md"
              >
                <ExternalLink className="w-4 h-4 text-zinc-950" />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
