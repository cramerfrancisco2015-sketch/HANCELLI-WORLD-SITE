import React from 'react';
import { type Language } from '@/lib/translations';
import { SUPPORTED_LANGUAGES, getLanguageCodeDisplay } from '@/lib/language';

interface LanguageSwitcherProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  className?: string;
}

export default function LanguageSwitcher({ currentLang, onLanguageChange, className = '' }: LanguageSwitcherProps) {
  return (
    <div className={`flex items-center gap-1 md:gap-1.5 font-mono text-[9px] md:text-[10px] tracking-widest select-none relative z-20 pointer-events-auto ${className}`}>
      {SUPPORTED_LANGUAGES.map((lang, index) => (
        <React.Fragment key={lang}>
          {index > 0 && <span className="text-white/10 select-none pointer-events-none" aria-hidden="true">/</span>}
          <button
            type="button"
            onClick={() => onLanguageChange(lang)}
            className={`relative pointer-events-auto touch-manipulation cursor-pointer transition-all duration-300 font-medium uppercase px-1.5 py-1 hover:text-white after:absolute after:inset-[-6px] after:content-[''] after:pointer-events-auto ${
              currentLang === lang 
                ? 'text-white font-bold' 
                : 'text-white/35'
            }`}
          >
            {getLanguageCodeDisplay(lang)}
          </button>
        </React.Fragment>
      ))}
    </div>
  );
}
