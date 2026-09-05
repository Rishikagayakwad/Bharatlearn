import React from 'react';
import { useApp } from '../context/AppContext';
import { Wifi, WifiOff, Eye, Type, ShieldCheck, UserCheck, Sun, Moon } from 'lucide-react';
import { UserRole } from '../types';

export const AccessibilityBar: React.FC = () => {
  const {
    lowDataMode,
    setLowDataMode,
    highContrast,
    setHighContrast,
    fontSize,
    setFontSize,
    currentUser,
    switchRole,
    theme,
    toggleTheme
  } = useApp();

  const cycleFontSize = () => {
    if (fontSize === 'normal') setFontSize('large');
    else if (fontSize === 'large') setFontSize('xlarge');
    else setFontSize('normal');
  };

  return (
    <div
      id="accessibility-bar"
      className="w-full border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-md text-xs py-1.5 px-4 z-40 transition-colors"
    >
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
        {/* National initiative badge */}
        <div className="flex items-center gap-1.5 sm:gap-2 text-slate-400">
          <span className="inline-flex items-center gap-1.5 px-2 sm:px-2.5 py-0.5 rounded-full bg-slate-900 border border-slate-800 text-amber-400 font-medium text-[10px] sm:text-[11px]">
            <ShieldCheck className="w-3 h-3 text-amber-400 shrink-0" />
            <span className="truncate max-w-[140px] xs:max-w-[200px] sm:max-w-none"><span className="text-bharat font-bold">Bharat</span> Digital Learning Ecosystem</span>
          </span>
          <span className="hidden md:inline text-slate-600">•</span>
          <span className="hidden md:inline text-slate-400 text-[11px]">
            Universal NEP 2020 Aligned Portal
          </span>
        </div>

        {/* Accessibility & Role Switcher */}
        <div className="flex items-center gap-1.5 sm:gap-3 ml-auto">
          {/* Low Bandwidth Mode */}
          <button
            id="toggle-low-data-btn"
            onClick={() => setLowDataMode((prev) => !prev)}
            className={`inline-flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 py-1 rounded-md transition-all font-medium text-[11px] sm:text-xs ${
              lowDataMode
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900 border border-transparent'
            }`}
            title="Low Data Mode compresses visuals, removes heavy animations, and prioritizes text for low-bandwidth networks."
          >
            {lowDataMode ? <WifiOff className="w-3.5 h-3.5 text-emerald-400" /> : <Wifi className="w-3.5 h-3.5 text-slate-400" />}
            <span className="hidden xs:inline">Low Data</span>
            <span className={`text-[10px] px-1 rounded ${lowDataMode ? 'bg-emerald-500/30 text-emerald-200 font-bold' : 'text-slate-500'}`}>
              {lowDataMode ? 'ON' : 'OFF'}
            </span>
          </button>

          {/* High Contrast Mode */}
          <button
            id="toggle-high-contrast-btn"
            onClick={() => setHighContrast((prev) => !prev)}
            className={`inline-flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 py-1 rounded-md transition-all font-medium text-[11px] sm:text-xs ${
              highContrast
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/50'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900 border border-transparent'
            }`}
            title="High Contrast mode sharpens borders, increases contrast, and enhances readability for low-vision learners."
          >
            <Eye className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Contrast</span>
          </button>

          {/* Font Size Scaling */}
          <button
            id="toggle-font-size-btn"
            onClick={cycleFontSize}
            className="inline-flex items-center gap-1 px-2 sm:px-2.5 py-1 rounded-md text-slate-400 hover:text-slate-200 hover:bg-slate-900 transition-colors text-[11px] sm:text-xs"
            title="Adjust text size (Normal, Large, Extra Large)"
          >
            <Type className="w-3.5 h-3.5" />
            <span><strong className="text-slate-200 uppercase">{fontSize}</strong></span>
          </button>

          {/* Light / Dark Mode Toggle */}
          <button
            id="toggle-theme-accessibility-btn"
            onClick={toggleTheme}
            className="inline-flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 py-1 rounded-md transition-all font-medium text-[11px] sm:text-xs text-slate-400 hover:text-slate-200 hover:bg-slate-900 border border-transparent"
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
          >
            {theme === 'dark' ? (
              <>
                <Sun className="w-3.5 h-3.5 text-amber-400" />
                <span className="hidden sm:inline">Light Mode</span>
              </>
            ) : (
              <>
                <Moon className="w-3.5 h-3.5 text-sky-500" />
                <span className="hidden sm:inline">Dark Mode</span>
              </>
            )}
          </button>

          {/* Quick Role Switcher */}
          <div className="hidden lg:flex items-center gap-1 pl-2 border-l border-slate-800">
            <span className="text-slate-500 text-[11px] flex items-center gap-1">
              <UserCheck className="w-3 h-3 text-slate-400" /> Role:
            </span>
            {(['student', 'teacher', 'parent', 'admin'] as UserRole[]).map((r) => (
              <button
                key={r}
                id={`quick-role-${r}-btn`}
                onClick={() => switchRole(r)}
                className={`px-2 py-0.5 text-[11px] capitalize rounded transition-colors ${
                  currentUser.role === r
                    ? 'bg-amber-500 text-slate-950 font-bold'
                    : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800'
                }`}
              >
                {r}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
