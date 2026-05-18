import React from 'react';
import { type Language, translations } from '@/lib/translations';
import LanguageSwitcher from '@/components/LanguageSwitcher';

interface CheckoutProps {
  lang: Language;
  onLanguageChange?: (lang: Language) => void;
}

export default function Checkout({ lang, onLanguageChange }: CheckoutProps) {
  const t = translations[lang].checkout;

  return (
    <footer id="contacto" className="relative border-t border-white/10 bg-zinc-950/50 backdrop-blur-md pt-20 pb-12 px-6 overflow-hidden scroll-mt-20 md:scroll-mt-24">
      {/* Background soft glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>

      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        {/* UPPER CALL TO ACTION ROW */}
        <div className="flex flex-col items-center text-center">
          <span className="text-[10px] uppercase tracking-[0.28em] text-white/30 font-mono mb-5">ARCHIVE PT.01</span>
          <h2
            className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-5 text-white"
            style={{ fontFamily: 'Oswald, sans-serif' }}
          >
            {t.footerTitle}
          </h2>
          <p className="max-w-sm text-sm text-zinc-400 leading-relaxed mb-8">
            {t.footerDesc}
          </p>
          <a
            href="#pre-lista"
            className={`inline-flex items-center justify-center px-10 py-4 bg-white text-black hover:bg-zinc-100 text-xs uppercase font-bold transition-all hover:scale-105 rounded-full ${
              lang === 'zh' ? 'tracking-normal' : 'tracking-widest'
            }`}
            style={{ fontFamily: 'Oswald, sans-serif' }}
          >
            {t.footerBtn}
          </a>
        </div>

        {/* BOTTOM MULTI-COLUMN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 pt-16 border-t border-white/5 text-left">
          {/* Column 1: Brand Info */}
          <div className="flex flex-col gap-4">
            <span
              className="font-bold uppercase text-white text-base tracking-[0.22em] select-none"
              style={{ fontFamily: 'Oswald, sans-serif' }}
            >
              HANCELLI WORLD
            </span>
            <p className="text-xs text-zinc-400 leading-relaxed max-w-xs">
              {t.brandDesc}
            </p>
            {onLanguageChange && (
              <div className="md:hidden mt-2 relative z-20 pointer-events-auto">
                <span className="text-[8px] text-zinc-600 uppercase font-mono block mb-1 select-none pointer-events-none">Language / Idioma</span>
                <LanguageSwitcher currentLang={lang} onLanguageChange={onLanguageChange} />
              </div>
            )}
          </div>

          {/* Column 2: Contacto */}
          <div className="flex flex-col gap-4">
            <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-mono font-bold">{t.columnContact}</span>
            <div className="flex flex-col gap-2.5">
              <a
                href="mailto:hancelliworld@gmail.com?subject=HANCELLI%20WORLD%20%E2%80%94%20Contacto"
                className="inline-flex items-center justify-center w-full px-5 py-3.5 border border-white/10 hover:border-white/35 bg-white/[0.02] hover:bg-white/[0.06] text-white text-[10px] font-bold tracking-[0.2em] uppercase transition-all duration-300 rounded-full text-center relative z-20 pointer-events-auto touch-manipulation cursor-pointer mt-1"
                style={{ fontFamily: 'Oswald, sans-serif' }}
              >
                {t.btnContact}
              </a>
            </div>
          </div>

          {/* Column 3: Redes */}
          <div className="flex flex-col gap-4">
            <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-mono font-bold">{t.columnSocial}</span>
            <div className="flex flex-col gap-2 text-xs text-zinc-300">
              <a
                href="https://www.instagram.com/hancelliworld"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-zinc-400 hover:text-white transition-colors animate-pulse-subtle"
              >
                Instagram: <span className="font-mono text-zinc-300">@hancelliworld</span>
              </a>
              <a
                href="https://www.tiktok.com/@hancelliworld"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-zinc-400 hover:text-white transition-colors animate-pulse-subtle"
              >
                TikTok: <span className="font-mono text-zinc-300">@hancelliworld</span>
              </a>
            </div>
          </div>

          {/* Column 4: Links Legais */}
          <div className="flex flex-col gap-4">
            <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-mono font-bold">{t.columnLegal}</span>
            <div className="flex flex-col gap-2 text-xs text-zinc-400">
              <a href="/termos" className="block hover:text-white transition-colors">
                {t.linkTerms}
              </a>
              <a href="/privacidade" className="block hover:text-white transition-colors">
                {t.linkPrivacy}
              </a>
              <a href="/cookies" className="block hover:text-white transition-colors">
                {t.linkCookies}
              </a>
            </div>
          </div>
        </div>

        {/* RIGHTS RESERVED ROW */}
        <div className={`flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/5 text-center md:text-left text-[10px] text-zinc-500 uppercase font-mono ${
          lang === 'zh' ? 'tracking-normal' : 'tracking-widest'
        }`}>
          <span>{t.rightsReserved}</span>
          <span className="text-zinc-600">{t.editionTag}</span>
        </div>
      </div>
    </footer>
  );
}
