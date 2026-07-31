import React from 'react';
import { Briefcase, Sparkles } from 'lucide-react';
import { EXPERIENCES, formatSingleExperienceDuration } from '../data/portfolioData';

interface ExperienceTimelineProps {
  title?: string;
  showHeader?: boolean;
  compact?: boolean;
  short?: boolean;
}

export const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({
  title = "My Experience",
  showHeader = true,
  compact = false,
  short = false,
}) => {
  return (
    <div className="space-y-4">
      {showHeader && (
        <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
          <h2 className="text-lg md:text-xl font-chakra font-bold text-white flex items-center gap-2">
            {title.includes("Experience") ? (
              <>
                My <span className="text-amber-400">Experience</span>
              </>
            ) : (
              title
            )}
          </h2>
          <div className="p-2 rounded-xl bg-zinc-950 border border-zinc-800 text-amber-400">
            <Briefcase className="w-4 h-4" />
          </div>
        </div>
      )}

      {/* Timeline container */}
      <div className="relative space-y-6 before:absolute before:left-[7px] before:top-2.5 before:bottom-2.5 before:w-[2px] before:bg-zinc-800">
        {EXPERIENCES.map((exp) => {
          const isCurrent = exp.endTime.toLowerCase().includes('present');
          const displayText = short
            ? (exp.shortDescription ?? exp.description)
            : exp.description;

          return (
            <div key={exp.id} className="relative pl-7 group">
              {/* Timeline dot node indicator */}
              <div className="absolute left-[8px] top-1.5 -translate-x-1/2 flex items-center justify-center z-10">
                {isCurrent ? (
                  <>
                    <span className="animate-ping absolute inline-flex h-4 w-4 rounded-full bg-amber-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-3.5 w-3.5 sm:h-4 sm:w-4 bg-amber-400 border-2 border-zinc-950 ring-2 ring-amber-500/40" />
                  </>
                ) : (
                  <span className="inline-flex rounded-full h-3.5 w-3.5 sm:h-4 sm:w-4 bg-zinc-900 border-2 border-zinc-700 ring-1 ring-zinc-700/50 group-hover:border-amber-400 transition-all" />
                )}
              </div>

              <div className="space-y-1.5">
                {/* Role Title and Date Pill Header */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm sm:text-base md:text-lg font-chakra font-bold text-white tracking-wide leading-tight">
                      {exp.role}
                    </h3>
                    {isCurrent && (
                      <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-300 border border-amber-500/30 text-[10px] font-chakra font-semibold">
                        <Sparkles className="w-2.5 h-2.5 text-amber-400" /> Active Role
                      </span>
                    )}
                  </div>
                  <span className={`px-3 py-1 rounded-full text-[11px] sm:text-xs font-chakra font-semibold shrink-0 flex items-center gap-1.5 ${
                    isCurrent 
                      ? 'bg-amber-500 text-zinc-950 font-bold' 
                      : 'bg-zinc-950 text-zinc-300 border border-zinc-800'
                  }`}>
                    {isCurrent && <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />}
                    {exp.startTime} - {exp.endTime}
                  </span>
                </div>

                {/* Company & Work Type + Calculated Duration */}
                <div className="text-xs sm:text-sm font-chakra font-semibold text-amber-300/90 flex flex-wrap items-center gap-2">
                  <span>{exp.companyName} <span className="text-zinc-400 font-normal">({exp.workType})</span></span>
                  <span className="text-[10px] font-chakra text-amber-300 bg-zinc-950 px-2 py-0.5 rounded border border-zinc-800">
                    {formatSingleExperienceDuration(exp.startTime, exp.endTime)}
                  </span>
                </div>

                {/* Description - short or full */}
                {displayText && !compact && (
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal pt-1">
                    {displayText}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
