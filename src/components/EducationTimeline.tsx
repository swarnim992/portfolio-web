import React from 'react';
import { GraduationCap, Award } from 'lucide-react';
import { EDUCATIONS } from '../data/portfolioData';

interface EducationTimelineProps {
  title?: string;
  showHeader?: boolean;
}

export const EducationTimeline: React.FC<EducationTimelineProps> = ({
  title = "My Education",
  showHeader = true,
}) => {
  return (
    <div className="space-y-4">
      {showHeader && (
        <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
          <h2 className="text-lg md:text-xl font-chakra font-bold text-white flex items-center gap-2">
            My <span className="text-amber-400">Education</span>
          </h2>
          <div className="p-2 rounded-xl bg-zinc-950 border border-zinc-800 text-amber-400">
            <GraduationCap className="w-4 h-4" />
          </div>
        </div>
      )}

      {/* Timeline container */}
      <div className="relative space-y-6 before:absolute before:left-[7px] before:top-2.5 before:bottom-2.5 before:w-[2px] before:bg-zinc-800">
        {EDUCATIONS.map((edu, idx) => {
          const isLatest = idx === 0;

          return (
            <div key={edu.id} className="relative pl-7 group">
              {/* Timeline dot node indicator */}
              <div className="absolute left-[8px] top-1.5 -translate-x-1/2 flex items-center justify-center z-10">
                {isLatest ? (
                  <span className="relative inline-flex rounded-full h-3.5 w-3.5 sm:h-4 sm:w-4 bg-amber-400 border-2 border-zinc-950 ring-2 ring-amber-500/40" />
                ) : (
                  <span className="inline-flex rounded-full h-3.5 w-3.5 sm:h-4 sm:w-4 bg-zinc-900 border-2 border-zinc-700 ring-1 ring-zinc-700/50 group-hover:border-amber-400 transition-all" />
                )}
              </div>

              <div className="space-y-1.5">
                {/* Institution Name and Date Pill Header */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-sm sm:text-base md:text-lg font-chakra font-bold text-white tracking-wide leading-tight">
                    {edu.institutionName}
                  </h3>
                  <span className={`px-3 py-1 rounded-full text-[11px] sm:text-xs font-chakra font-semibold shrink-0 flex items-center gap-1.5 ${
                    isLatest 
                      ? 'bg-amber-500 text-zinc-950 font-bold' 
                      : 'bg-zinc-950 text-zinc-300 border border-zinc-800'
                  }`}>
                    {edu.startTime} - {edu.endTime}
                  </span>
                </div>

                {/* Department / Degree */}
                <div className="text-xs sm:text-sm font-chakra font-semibold text-amber-300/90">
                  {edu.department}
                </div>

                {/* Grade / Score Badge */}
                {edu.grade && (
                  <div className="pt-0.5">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-zinc-950 text-amber-300 border border-amber-500/30 text-xs font-chakra font-bold">
                      <Award className="w-3 h-3 text-amber-400" />
                      {edu.grade}
                    </span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

