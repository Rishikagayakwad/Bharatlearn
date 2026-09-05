import React from 'react';
import { useApp } from '../context/AppContext';
import { SUPPORTED_LANGUAGES } from '../data/translations';
import { LanguageCode } from '../types';
import { Globe2, Sparkles, Check, ArrowRight, Mic, Volume2 } from 'lucide-react';

export const MultilingualSection: React.FC = () => {
  const { language, setLanguage, t, showToast } = useApp();

  const handleSelectLanguage = (code: LanguageCode, nativeName: string) => {
    setLanguage(code);
    showToast(`Interface switched to ${nativeName}`, 'success');
  };

  return (
    <section id="multilingual-india-section" className="py-16 sm:py-20 border-t border-slate-800/80 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold">
            <Globe2 className="w-3.5 h-3.5" />
            12 Official Indian Languages Supported
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white font-display">
            Education in Your Language
          </h2>
          <p className="text-base font-semibold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-sky-300 to-emerald-400">
            “{t.languageBarrierMessage}”
          </p>
          <p className="text-sm text-slate-400 max-w-2xl mx-auto leading-relaxed">
            India’s greatest scientific, technological, and creative minds think, dream, and conceptualize in their mother tongues. BharatLearn delivers unified STEM & humanities curriculum across major Indian scripts.
          </p>
        </div>

        {/* 12 Interactive Language Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-10">
          {SUPPORTED_LANGUAGES.map((lang) => {
            const isSelected = language === lang.code;
            return (
              <button
                key={lang.code}
                onClick={() => handleSelectLanguage(lang.code, lang.nativeName)}
                className={`p-4 rounded-2xl text-center transition-all duration-200 flex flex-col items-center justify-between min-h-[110px] cursor-pointer ${
                  isSelected
                    ? 'bg-gradient-to-b from-amber-500/20 to-sky-500/10 border-2 border-amber-400 text-white shadow-xl shadow-amber-500/10 scale-105'
                    : 'bg-slate-900/90 border border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-850'
                }`}
              >
                <div className="w-full flex items-center justify-between mb-1">
                  <span className="text-[10px] uppercase font-bold text-slate-500">
                    {lang.code.toUpperCase()}
                  </span>
                  {isSelected && (
                    <span className="w-4 h-4 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center text-[10px] font-bold">
                      ✓
                    </span>
                  )}
                </div>

                <div className="my-auto">
                  <span className="text-xl sm:text-2xl font-bold font-display block leading-tight text-slate-100">
                    {lang.nativeName}
                  </span>
                  <span className="text-[11px] text-slate-400 block mt-0.5">
                    {lang.name}
                  </span>
                </div>

                <span className="text-[10px] font-semibold text-sky-400/90 mt-2 block">
                  {lang.speakersDemo}
                </span>
              </button>
            );
          })}
        </div>

        {/* Live Multilingual Translation Preview Banner */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-[11px] font-bold text-sky-400 uppercase tracking-wider">
              Active Language Preview • {SUPPORTED_LANGUAGES.find((l) => l.code === language)?.nativeName}
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-white font-display">
              {t.heroHeadline}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
              {t.heroSubheadline}
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <div className="text-right hidden sm:block">
              <span className="text-xs font-semibold text-emerald-400 block">Indic Neural TTS</span>
              <span className="text-[10px] text-slate-500">Bhashini AI Pipeline Compatible</span>
            </div>
            <button
              onClick={() => {
                if ('speechSynthesis' in window) {
                  window.speechSynthesis.cancel();
                  const utt = new SpeechSynthesisUtterance(t.heroHeadline);
                  window.speechSynthesis.speak(utt);
                }
              }}
              className="p-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-400 border border-slate-700 flex items-center gap-2 text-xs font-semibold cursor-pointer"
              title="Listen in active language"
            >
              <Volume2 className="w-4 h-4" />
              <span>Pronounce</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
