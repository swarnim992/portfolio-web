import React from 'react';
import { Code, MapPin } from 'lucide-react';
import { PROFILE, SKILLS, ACHIEVEMENTS } from '../../data/portfolioData';
import { ExperienceTimeline } from '../ExperienceTimeline';
import { EducationTimeline } from '../EducationTimeline';

export const AboutView: React.FC = () => {
  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header Profile Section */}
      <div className="p-6 md:p-8 rounded-3xl bg-zinc-900/90 border border-zinc-800 shadow-2xl flex flex-col md:flex-row items-center md:items-start gap-6">
        <div className="w-28 h-28 md:w-32 md:h-32 rounded-2xl p-1 bg-amber-500/80 shadow-xl overflow-hidden shrink-0">
          <img
            src={PROFILE.avatar}
            alt={PROFILE.name}
            className="w-full h-full object-cover rounded-xl"
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/assets/sj.png';
            }}
          />
        </div>

        <div className="space-y-3 text-center md:text-left flex-1">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
            <h1 className="text-2xl md:text-3xl font-chakra font-bold text-white">
              {PROFILE.name}
            </h1>
            <span className="px-2.5 py-0.5 rounded-full bg-zinc-950 border border-zinc-800 text-xs font-chakra text-amber-300 font-semibold">
              {PROFILE.role}
            </span>
          </div>

          <p className="text-xs text-zinc-300 leading-relaxed max-w-3xl">
            {PROFILE.summary}
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs font-chakra text-zinc-400">
            <span className="flex items-center gap-1.5 text-zinc-300">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              {PROFILE.location}
            </span>
            <span className="text-amber-400 font-semibold">Current: {PROFILE.company}</span>
            <span className="text-zinc-300 font-semibold">Previous: {PROFILE.previousCompany}</span>
          </div>
        </div>
      </div>

      {/* Experience & Education Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Experience Card */}
        <div className="p-6 rounded-3xl bg-zinc-900/90 border border-zinc-800 shadow-2xl">
          <ExperienceTimeline title="Work Experience" />
        </div>

        {/* Education + Achievements Card */}
        <div className="p-6 rounded-3xl bg-zinc-900/90 border border-zinc-800 shadow-2xl space-y-6">
          <EducationTimeline title="Academic Education" />

          {/* Achievements & Highlights */}
          <div className="pt-4 border-t border-zinc-800 space-y-3">
            <h3 className="text-base font-chakra font-bold text-white flex items-center gap-2">
              <span className="text-amber-400">🏅</span>
              Achievements <span className="text-amber-400">& Highlights</span>
            </h3>
            <div className="space-y-2">
              {ACHIEVEMENTS.map((ach) => (
                <div
                  key={ach.id}
                  className="flex items-start gap-3 p-3 rounded-xl bg-zinc-950/60 border border-zinc-800 hover:border-zinc-700 transition-all group"
                >
                  <span className="text-lg shrink-0 mt-0.5">{ach.icon}</span>
                  <div>
                    <div className="text-xs font-chakra font-bold text-white group-hover:text-amber-300 transition-colors">{ach.title}</div>
                    <div className="text-[11px] text-zinc-400 leading-snug mt-0.5">{ach.subtitle}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Technical Skills Section */}
      <div className="p-6 md:p-8 rounded-3xl bg-zinc-900/90 border border-zinc-800 shadow-2xl space-y-5">
        <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-zinc-950 border border-zinc-800 text-amber-400">
              <Code className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-chakra font-bold text-white">
              Skills <span className="text-amber-400">& Technologies</span>
            </h2>
          </div>
          <span className="text-xs font-chakra text-zinc-400">Mobile, Backend, AI & Databases</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {SKILLS.map((sk) => (
            <div
              key={sk.name}
              className="p-3.5 rounded-2xl bg-zinc-950/80 border border-zinc-800 hover:border-amber-500/50 hover:bg-zinc-800/60 transition-all flex flex-col items-center justify-center text-center group"
            >
              <div className="w-8 h-8 flex items-center justify-center">
                <img
                  src={sk.svgPath}
                  alt={sk.name}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              </div>
              <span className="text-xs font-chakra font-bold text-white mt-2">
                {sk.name}
              </span>
              <span className="text-[10px] text-amber-300/80 font-chakra">
                {sk.category || 'Tech'}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
