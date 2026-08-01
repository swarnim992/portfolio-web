import React, { useState } from 'react';
import { Search, FolderGit2, Github, ExternalLink, Sparkles, Filter, Layers } from 'lucide-react';
import { PROJECTS } from '../../data/portfolioData';
import { Project } from '../../types';

interface ProjectsViewProps {
  onSelectProject: (proj: Project) => void;
}

export const ProjectsView: React.FC<ProjectsViewProps> = ({ onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'All',
    'Mobile App',
    'Backend / Cloud',
    'AI & Analytics',
    'Fullstack Web',
    'Backend Services',
    'Game / Flutter',
    'Android Native',
    'Automation & Tools',
  ];

  const filteredProjects = PROJECTS.filter((proj) => {
    const matchesCategory =
      selectedCategory === 'All' ||
      (proj.category && proj.category.toLowerCase().includes(selectedCategory.toLowerCase()));
    
    const matchesSearch =
      searchQuery.trim() === '' ||
      proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.keyFeatures.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header Bar */}
      <div className="p-6 rounded-3xl bg-zinc-900/90 border border-zinc-800 shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-zinc-950 border border-zinc-800 text-amber-400">
              <FolderGit2 className="w-5 h-5" />
            </span>
            <h1 className="text-2xl font-chakra font-bold text-white">
              Projects & <span className="text-amber-400">Portfolio</span>
            </h1>
          </div>
          <p className="text-xs text-zinc-400 mt-1">
            Explore {PROJECTS.length}+ real-world backend APIs, microservices, mobile apps, and developer tools.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search projects by tech, title..."
            className="w-full pl-9 pr-4 py-2 bg-zinc-950 border border-zinc-800 rounded-xl text-xs font-chakra text-white placeholder-zinc-500 focus:outline-none focus:border-amber-500/60 transition-colors"
          />
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar text-xs font-chakra">
        <span className="text-zinc-500 font-semibold flex items-center gap-1 shrink-0 mr-1">
          <Filter className="w-3.5 h-3.5 text-amber-400" /> Filter:
        </span>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1.5 rounded-xl transition-all shrink-0 font-medium ${
              selectedCategory === cat
                ? 'bg-amber-500 text-zinc-950 font-bold shadow-md'
                : 'bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      {filteredProjects.length === 0 ? (
        <div className="p-12 text-center bg-zinc-900/60 border border-zinc-800 rounded-2xl">
          <Layers className="w-10 h-10 text-zinc-600 mx-auto mb-3" />
          <h3 className="text-base font-chakra font-bold text-zinc-300">No matching projects found</h3>
          <p className="text-xs text-zinc-500 mt-1">Try resetting your search query or filter category.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              onClick={() => onSelectProject(proj)}
              className="p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800 hover:border-amber-500/50 hover:bg-zinc-800/60 transition-all shadow-xl cursor-pointer flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                {/* Tech & Category Badge */}
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-md bg-zinc-950 border border-zinc-800 text-[10px] font-chakra font-semibold text-amber-300">
                    {proj.category || 'Project'}
                  </span>
                  <div className="flex items-center gap-1.5 p-1 bg-zinc-950 rounded-lg border border-zinc-800">
                    <img src={proj.flutterSvg} alt="tech" className="w-4 h-4 object-contain" />
                    <img src={proj.dartSvg} alt="tech" className="w-4 h-4 object-contain" />
                  </div>
                </div>

                {/* Project Image Preview */}
                <div 
                  className="relative aspect-video rounded-xl overflow-hidden border border-zinc-800 flex items-center justify-center"
                  style={{ backgroundColor: proj.bgColor || '#09090b' }}
                >
                  {proj.image ? (
                    <>
                      <img
                        src={proj.image}
                        alt={proj.title}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-60 pointer-events-none" />
                    </>
                  ) : (
                    <div className="w-full h-full bg-zinc-950 p-4 flex flex-col items-center justify-center text-center space-y-2 relative">
                      <div className="flex items-center gap-2 relative z-10">
                        {proj.flutterSvg && <img src={proj.flutterSvg} alt="tech" className="w-6 h-6 object-contain" />}
                        {proj.dartSvg && <img src={proj.dartSvg} alt="tech" className="w-6 h-6 object-contain" />}
                      </div>
                      <span className="text-[10px] font-chakra text-amber-400 font-semibold tracking-wider uppercase relative z-10">
                        {proj.category || 'Backend / Microservice'}
                      </span>
                    </div>
                  )}
                </div>

                {/* Title & Description */}
                <div>
                  <h3 className="text-base font-chakra font-bold text-white group-hover:text-amber-400 transition-colors line-clamp-1">
                    {proj.title}
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1 line-clamp-2 leading-relaxed">
                    {proj.description}
                  </p>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-3 border-t border-zinc-800 flex items-center justify-between text-xs font-chakra">
                <span className="text-amber-400 font-semibold group-hover:underline flex items-center gap-1">
                  View Details
                </span>
                <div className="flex items-center gap-2 text-zinc-400">
                  {proj.githubLink && <Github className="w-4 h-4 hover:text-white" />}
                  {proj.demoVideoLink && <ExternalLink className="w-4 h-4 hover:text-white" />}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
