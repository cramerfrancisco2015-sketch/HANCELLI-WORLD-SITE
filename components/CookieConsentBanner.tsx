'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { type Language, translations } from '@/lib/translations';
import { getInitialLanguage } from '@/lib/language';
import { initMetaPixel, trackMetaPageView, grantMetaConsent, revokeMetaConsent } from '@/lib/metaPixel';

interface CookieConsentBannerProps {
  lang?: Language;
}

export default function CookieConsentBanner({ lang }: CookieConsentBannerProps) {
  const [langState, setLangState] = useState<Language>('pt');
  const [isVisible, setIsVisible] = useState(false);
  const t = translations[langState].cookieConsent;

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Resolve language dynamically inside requestAnimationFrame to avoid cascading renders
    const frameLang = requestAnimationFrame(() => {
      if (lang) {
        setLangState(lang);
      } else {
        const initial = getInitialLanguage();
        setLangState(initial);
      }
    });

    const handleOpenSettings = () => {
      setIsVisible(true);
    };
    window.addEventListener("hancelli:open-cookie-settings", handleOpenSettings);

    const consent = localStorage.getItem('hancelli_cookie_consent');
    let frameConsent: number | undefined;

    if (!consent) {
      // First visit, show the banner
      frameConsent = requestAnimationFrame(() => {
        setIsVisible(true);
      });
    } else {
      try {
        const parsed = JSON.parse(consent);
        if (parsed.marketing === true) {
          // Initialize and track PageView for returning consenting users
          grantMetaConsent();
          initMetaPixel();
          trackMetaPageView();
        }
      } catch {
        frameConsent = requestAnimationFrame(() => {
          setIsVisible(true);
        });
      }
    }

    return () => {
      window.removeEventListener("hancelli:open-cookie-settings", handleOpenSettings);
      cancelAnimationFrame(frameLang);
      if (frameConsent !== undefined) {
        cancelAnimationFrame(frameConsent);
      }
    };
  }, [lang]);

  const handleConsent = (marketingGranted: boolean) => {
    const consentValue = {
      marketing: marketingGranted,
      version: 1,
      updatedAt: new Date().toISOString()
    };
    
    localStorage.setItem('hancelli_cookie_consent', JSON.stringify(consentValue));
    setIsVisible(false);

    if (marketingGranted) {
      grantMetaConsent();
      initMetaPixel();
      trackMetaPageView();
    } else {
      revokeMetaConsent();
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-md z-[99999] bg-black/95 border border-white/10 p-5 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.85)] backdrop-blur-xl flex flex-col gap-4 text-white animate-fade-in">
      <div className="flex flex-col gap-1.5">
        <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-300 font-bold">
          {t.cookieTitle}
        </h4>
        <p className="text-[11px] text-zinc-400 leading-relaxed font-sans font-light">
          {t.cookieDescription}
          <Link href="/cookies" className="underline hover:text-white transition-colors ml-1 font-mono uppercase text-[9px] tracking-wider shrink-0">
            {t.cookieLearnMore}
          </Link>
        </p>
      </div>
      <div className="flex gap-2.5 justify-end">
        <button
          onClick={() => handleConsent(false)}
          className="bg-transparent hover:bg-white/5 border border-white/10 text-white font-semibold text-[9px] uppercase tracking-[0.15em] px-4 py-2 rounded-full transition-all duration-200 cursor-pointer"
        >
          {t.cookieReject}
        </button>
        <button
          onClick={() => handleConsent(true)}
          className="bg-[#F2F0E9] hover:bg-white text-black font-semibold text-[9px] uppercase tracking-[0.15em] px-4 py-2 rounded-full transition-all duration-200 cursor-pointer"
        >
          {t.cookieAccept}
        </button>
      </div>
    </div>
  );
}
