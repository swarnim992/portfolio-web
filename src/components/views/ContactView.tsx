import React, { useState } from 'react';
import {
  Mail, MapPin, Copy, Check, Send, ExternalLink, Download, Sparkles
} from 'lucide-react';
import { PROFILE } from '../../data/portfolioData';

interface ContactViewProps {
  onDownloadResume: () => void;
  onShowToast: (msg: string) => void;
}

export const ContactView: React.FC<ContactViewProps> = ({ onDownloadResume, onShowToast }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE.email);
    setCopied(true);
    onShowToast(`Copied ${PROFILE.email} to clipboard!`);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSendEmail = () => {
    const mailtoUrl = `mailto:${PROFILE.email}?subject=${encodeURIComponent('Portfolio Inquiry')}`;
    window.open(mailtoUrl, '_blank');
  };

  return (
    <div className="animate-fadeIn">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* ── Column 1: Tall Hyderabad Location & Photo (Col Span 1, Row Span 2 on lg) ── */}
        <div className="lg:col-span-1 lg:row-span-2 relative rounded-3xl overflow-hidden border border-zinc-800 shadow-xl group min-h-[450px] lg:min-h-full flex flex-col justify-end">
          <img
            src={PROFILE.locationImage}
            alt={PROFILE.location}
            className="absolute inset-0 w-full h-full object-cover object-bottom group-hover:scale-105 transition-transform duration-700"
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                'https://images.unsplash.com/photo-1605379399642-870262d3d051?auto=format&fit=crop&w=800&q=80';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/30 to-transparent" />
          <div className="relative p-6 z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/90 backdrop-blur-md border border-zinc-700 text-xs font-chakra font-semibold text-white">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              {PROFILE.locationFull}
            </div>
          </div>
        </div>

        {/* ── Row 1 Columns 2-3: Connect / Email Hub Card (Col Span 2 on lg) ── */}
        <div className="lg:col-span-2 flex flex-col justify-between p-6 md:p-8 rounded-3xl bg-zinc-900/90 border border-zinc-800 shadow-2xl overflow-hidden relative min-h-[300px]">
          {/* Decorative radial gradient */}
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="p-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-amber-400">
                <Mail className="w-6 h-6" />
              </span>
              <div>
                <h1 className="text-2xl font-chakra font-bold text-white">
                  Get In <span className="text-amber-400">Touch</span>
                </h1>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[10px] font-chakra font-semibold text-emerald-400 uppercase tracking-wider">Available for Opportunities</span>
                </div>
              </div>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed max-w-xl">
              I am currently looking for full-time AI/SDE roles and freelance collaborations. Whether you have a project in mind, a job opportunity, or just want to connect-reach out!
            </p>
          </div>

          <div className="mt-6 pt-6 border-t border-zinc-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            {/* Email Address Presentation */}
            <div className="flex-1 p-4 rounded-2xl bg-zinc-950/80 border border-zinc-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="font-chakra">
                <span className="text-[10px] text-zinc-500 uppercase tracking-wider">Direct Email Address</span>
                <p className="text-sm font-bold text-white select-all break-all">{PROFILE.email}</p>
              </div>
              <button
                onClick={handleCopyEmail}
                className="w-full sm:w-auto px-4 py-2.5 bg-zinc-900 hover:bg-zinc-800 text-zinc-200 hover:text-white rounded-xl text-xs font-chakra font-bold transition-all border border-zinc-700/80 hover:border-zinc-600 flex items-center justify-center gap-2 active:scale-95 shrink-0"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-amber-400" />}
                <span>{copied ? 'Copied' : 'Copy Email'}</span>
              </button>
            </div>

            {/* Primary Action Button */}
            <button
              onClick={handleSendEmail}
              className="px-6 py-4 bg-amber-500 hover:bg-amber-400 text-zinc-950 rounded-2xl text-xs font-chakra font-bold transition-all shadow-xl shadow-amber-500/5 hover:shadow-amber-500/10 flex items-center justify-center gap-2 border border-amber-400/20 active:scale-95 shrink-0"
            >
              <Send className="w-4 h-4 text-zinc-950" />
              <span>Send Email</span>
            </button>
          </div>
        </div>

        {/* ── Row 2 Column 2: Social Profiles & Competitive Coding (Col Span 1 on lg) ── */}
        <div className="lg:col-span-1 p-6 md:p-8 rounded-3xl bg-zinc-900/90 border border-zinc-800 shadow-2xl space-y-4 flex flex-col justify-between">
          <div className="space-y-3">
            <h3 className="text-sm font-chakra font-bold text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              Profiles
            </h3>
            <p className="text-[11px] text-zinc-400 leading-relaxed">
              Find me on competitive coding &amp; professional networks.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5 pt-1">
            <a href={PROFILE.github} target="_blank" rel="noopener noreferrer"
              className="p-3 rounded-xl bg-zinc-950/80 hover:bg-zinc-800/60 border border-zinc-800 hover:border-amber-500/50 transition-all flex items-center justify-between text-white font-chakra group">
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-7 h-7 rounded-lg bg-zinc-900 border border-zinc-850 flex items-center justify-center shrink-0">
                  <img src="/assets/svg/github.svg" alt="GitHub" className="w-3.5 h-3.5 object-contain" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold group-hover:text-amber-400 transition-colors truncate">GitHub</div>
                  <div className="text-[9px] text-zinc-500 truncate">Open-source codebases</div>
                </div>
              </div>
              <ExternalLink className="w-3 h-3 text-zinc-600 group-hover:text-amber-400 transition-colors shrink-0" />
            </a>

            <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer"
              className="p-3 rounded-xl bg-zinc-950/80 hover:bg-zinc-800/60 border border-zinc-800 hover:border-amber-500/50 transition-all flex items-center justify-between text-white font-chakra group">
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-7 h-7 rounded-lg bg-zinc-900 border border-zinc-850 flex items-center justify-center shrink-0">
                  <img src="/assets/svg/linkedin.svg" alt="LinkedIn" className="w-3.5 h-3.5 object-contain" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold group-hover:text-amber-400 transition-colors truncate">LinkedIn</div>
                  <div className="text-[9px] text-zinc-500 truncate">Professional network</div>
                </div>
              </div>
              <ExternalLink className="w-3 h-3 text-zinc-600 group-hover:text-amber-400 transition-colors shrink-0" />
            </a>

            <a href={PROFILE.leetcode} target="_blank" rel="noopener noreferrer"
              className="p-3 rounded-xl bg-zinc-950/80 hover:bg-zinc-800/60 border border-zinc-800 hover:border-amber-500/50 transition-all flex items-center justify-between text-white font-chakra group">
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-7 h-7 rounded-lg bg-zinc-900 border border-zinc-850 flex items-center justify-center shrink-0">
                  <img src="/assets/svg/x.svg" alt="LeetCode" className="w-3.5 h-3.5 object-contain" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold group-hover:text-amber-400 transition-colors truncate">LeetCode</div>
                  <div className="text-[9px] text-zinc-500 truncate font-chakra">1600+ Rating</div>
                </div>
              </div>
              <ExternalLink className="w-3 h-3 text-zinc-600 group-hover:text-amber-400 transition-colors shrink-0" />
            </a>

            <a href={PROFILE.codechef} target="_blank" rel="noopener noreferrer"
              className="p-3 rounded-xl bg-zinc-950/80 hover:bg-zinc-800/60 border border-zinc-800 hover:border-amber-500/50 transition-all flex items-center justify-between text-white font-chakra group">
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-7 h-7 rounded-lg bg-zinc-900 border border-zinc-850 flex items-center justify-center shrink-0">
                  <img src="/assets/svg/codechef.svg" alt="CodeChef" className="w-3.5 h-3.5 object-contain" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold group-hover:text-amber-400 transition-colors truncate">CodeChef</div>
                  <div className="text-[9px] text-zinc-500 truncate font-chakra">3-Star • 1771 Max</div>
                </div>
              </div>
              <ExternalLink className="w-3 h-3 text-zinc-600 group-hover:text-amber-400 transition-colors shrink-0" />
            </a>
          </div>
        </div>

        {/* ── Row 2 Column 3: Resume Card (Col Span 1 on lg) ── */}
        <div className="p-6 md:p-8 rounded-3xl bg-zinc-900/90 border border-zinc-800 shadow-2xl flex flex-col justify-between gap-4">
          <div className="space-y-3">
            <h3 className="text-sm font-chakra font-bold text-white flex items-center gap-2">
              <Download className="w-4 h-4 text-amber-400" />
              Resume
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Access my CV outlining my SDE &amp; AI experiences, stack, and achievements.
            </p>
            <div className="text-[10px] font-chakra text-zinc-500 uppercase tracking-wider">Format: PDF</div>
          </div>

          <button
            onClick={onDownloadResume}
            className="w-full p-4 rounded-2xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-chakra font-bold text-xs transition-all shadow-xl flex items-center justify-between border border-amber-400/40 active:scale-95 group mt-2"
          >
            <span className="flex items-center gap-2">
              <Download className="w-4 h-4 text-zinc-950" />
              <span>Download Resume</span>
            </span>
            <ExternalLink className="w-4 h-4 text-zinc-950 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </div>
  );
};
