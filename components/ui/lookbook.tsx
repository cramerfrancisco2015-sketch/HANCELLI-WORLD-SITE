'use client'
import React, { useState, useEffect } from 'react';
import { motion, type Transition, AnimatePresence } from 'framer-motion';
import { type Language, translations } from '@/lib/translations';

const WAITLIST_ENDPOINT = "/api/waitlist";
const isWaitlistDisabled = false;

const imgTransition: Transition = { duration: 1.1, ease: "easeOut" };
const textTransition: Transition = { duration: 0.85, delay: 0.15, ease: "easeOut" };

type ContactCountryOption = {
  countryKey: 'Portugal' | 'Angola' | 'Brazil' | 'France' | 'Germany' | 'UK' | 'USA' | 'China' | 'Other';
  code: string;
};

const CONTACT_COUNTRIES: ContactCountryOption[] = [
  { countryKey: "Portugal", code: "+351" },
  { countryKey: "Angola", code: "+244" },
  { countryKey: "Brazil", code: "+55" },
  { countryKey: "France", code: "+33" },
  { countryKey: "Germany", code: "+49" },
  { countryKey: "UK", code: "+44" },
  { countryKey: "USA", code: "+1" },
  { countryKey: "China", code: "+86" },
  { countryKey: "Other", code: "" },
];

interface LookbookProps {
  lang: Language;
}

export default function Lookbook({ lang }: LookbookProps) {
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error' | 'disabled'>('idle');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [contactCountry, setContactCountry] = useState('Portugal');
  const [contactDialCode, setContactDialCode] = useState('+351');
  const [size, setSize] = useState('Unknown');

  const t = translations[lang].lookbook;

  const getLocalizedCountryName = (countryKey: string) => {
    switch (countryKey) {
      case 'Portugal': return t.contactCountryPortugal;
      case 'Angola': return t.contactCountryAngola;
      case 'Brazil': return t.contactCountryBrazil;
      case 'France': return t.contactCountryFrance;
      case 'Germany': return t.contactCountryGermany;
      case 'UK': return t.contactCountryUK;
      case 'USA': return t.contactCountryUSA;
      case 'China': return t.contactCountryChina;
      default: return t.contactCountryOther;
    }
  };
  const popupMessages = t.popupMessages;

  // Popup states
  const [showPopup, setShowPopup] = useState(false);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [hasScrolledPastHero, setHasScrolledPastHero] = useState(false);
  const [isFormFocused, setIsFormFocused] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.75) {
        setHasScrolledPastHero(true);
      } else {
        setHasScrolledPastHero(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();

    const fallbackTimer = setTimeout(() => {
      if (window.scrollY > 50) {
        setHasScrolledPastHero(true);
      }
    }, 15000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(fallbackTimer);
    };
  }, []);

  // Ensure popup is closed immediately if form is focused, submitted or user is at the top
  const shouldShowPopup = showPopup && hasScrolledPastHero && formStatus !== 'success' && !isFormFocused;

  // Main schedule effect
  useEffect(() => {
    if (!hasScrolledPastHero || formStatus === 'success' || isFormFocused) {
      return;
    }

    let hideTimeout: NodeJS.Timeout;

    const triggerPopupSequence = () => {
      setCurrentMessageIndex(Math.floor(Math.random() * popupMessages.length));
      setShowPopup(true);

      hideTimeout = setTimeout(() => {
        setShowPopup(prev => prev ? false : prev);
      }, 6000);
    };

    const showTimeout = setTimeout(triggerPopupSequence, 3000);

    const interval = setInterval(() => {
      if (!isFormFocused) {
        triggerPopupSequence();
      }
    }, 45000);

    return () => {
      clearTimeout(showTimeout);
      clearTimeout(hideTimeout);
      clearInterval(interval);
    };
  }, [hasScrolledPastHero, formStatus, isFormFocused, popupMessages.length]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isWaitlistDisabled) {
      setFormStatus('disabled');
      return;
    }

    setFormStatus('loading');
    try {
      const res = await fetch(WAITLIST_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          email,
          contactCountry,
          contactDialCode,
          contactNumber: contactNumber.trim(),
          contactFull: contactNumber.trim() ? `${contactDialCode} ${contactNumber.trim()}`.trim() : '',
          whatsapp: contactNumber.trim() ? `${contactDialCode} ${contactNumber.trim()}`.trim() : '',
          size: size === 'Unknown' ? t.sizePlaceholder : size,
          source: "HANCELLI_WORLD_WAITLIST",
          interest: "ARCHIVE_PT_01_HANCELLI_JEANS",
          launchDiscountInterest: true,
          submittedAt: new Date().toISOString(),
          language: lang
        })
      });
      if (res.ok) setFormStatus('success');
      else setFormStatus('error');
    } catch {
      setFormStatus('error');
    }
  };

  return (
    <section id="historia" className="relative overflow-hidden bg-black text-white border-t border-white/5 scroll-mt-20 md:scroll-mt-24">
      
      {/* MANIFESTO BLOCK */}
      <motion.div 
        id="conceito"
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        className="relative min-h-auto lg:min-h-[115svh] flex flex-col items-center justify-center py-24 md:py-36 lg:py-44 px-6 overflow-hidden max-md:!opacity-100 max-md:!transform-none max-md:!filter-none scroll-mt-20 md:scroll-mt-24"
      >
        <h2 className="font-oswald uppercase text-[clamp(2.4rem,5.6vw,6.4rem)] leading-[0.98] tracking-[-0.025em] text-white text-center max-w-[1120px] mx-auto">
          <span className="block">{t.manifestoLine1}</span>
          <span className="block mt-4 md:mt-5">{t.manifestoLine2}</span>
        </h2>
        <p className="mt-8 max-w-2xl mx-auto text-center text-sm md:text-base text-white/58 leading-7">
          {t.manifestoDesc}
        </p>
      </motion.div>

      {/* CHAPTER 01 BLOCK */}
      <motion.div 
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        className="relative min-h-auto lg:min-h-[115svh] flex items-center py-24 md:py-36 lg:py-44 px-6 overflow-hidden max-md:!opacity-100 max-md:!transform-none max-md:!filter-none"
      >
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="flex justify-center lg:justify-end order-2 lg:order-1">
            <motion.div 
              initial={{ opacity: 0, scale: 0.96, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={imgTransition}
              className="relative w-full max-w-[480px] aspect-[3/4] overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-black shadow-[0_30px_100px_rgba(0,0,0,0.45)] ring-1 ring-inset ring-white/[0.06] group max-md:!opacity-100 max-md:!transform-none"
            >
              <img src="/images/hancelli/lookbook-archive.jpg?v=20260516-2" loading="lazy" alt="Poster do Arquivo HANCELLI" className="object-cover object-center w-full h-full grayscale-[20%] group-hover:grayscale-0 transition-all duration-700" />
            </motion.div>
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={textTransition}
            className="flex flex-col items-center text-center lg:items-start lg:text-left order-1 lg:order-2 max-w-md mx-auto lg:mx-0 max-md:!opacity-100 max-md:!transform-none"
          >
            <span className="text-[10px] uppercase tracking-[0.28em] text-white/40 font-mono mb-4">{t.chapter1}</span>
            <h3 className="font-oswald uppercase text-[clamp(2.2rem,4.4vw,5.2rem)] leading-[0.95] tracking-[-0.02em] text-white mb-6 whitespace-pre-line">
              {t.chapter1Title}
            </h3>
            <p className="mt-6 max-w-md text-white/60 leading-7">
              {t.chapter1Desc}
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* CHAPTER 02 BLOCK */}
      <motion.div 
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        className="relative min-h-auto lg:min-h-[115svh] flex items-center py-24 md:py-36 lg:py-44 px-6 overflow-hidden before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.03),transparent_42%)] before:pointer-events-none max-md:!opacity-100 max-md:!transform-none max-md:!filter-none"
      >
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={textTransition}
            className="flex flex-col items-center text-center lg:items-end lg:text-right max-w-md mx-auto lg:mx-0 lg:ml-auto max-md:!opacity-100 max-md:!transform-none"
          >
            <span className="text-[10px] uppercase tracking-[0.28em] text-white/40 font-mono mb-4">{t.chapter2}</span>
            <h3 className="font-oswald uppercase text-[clamp(2.2rem,4.4vw,5.2rem)] leading-[0.95] tracking-[-0.02em] text-white mb-6 whitespace-pre-line">
              {t.chapter2Title}
            </h3>
            <p className="mt-6 max-w-md text-white/60 leading-7">
              {t.chapter2Desc}
            </p>
          </motion.div>
          <div className="flex justify-center lg:justify-start">
            <motion.div 
              initial={{ opacity: 0, scale: 0.96, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={imgTransition}
              className="relative w-full max-w-md aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 shadow-[0_24px_80px_rgba(0,0,0,0.35)] bg-[#0a0a0a] max-md:!opacity-100 max-md:!transform-none"
            >
              <img src="https://i.ibb.co/bR6M0rfx/d5b14a82-9c58-4d61-aaf9-e1017bc078aa.png" loading="lazy" alt="Campanha Cultural HANCELLI" className="object-cover object-center w-full h-full grayscale-[20%] hover:grayscale-0 transition-all duration-700" />
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* PRESAVE BLOCK */}
      <motion.div 
        id="pre-lista"
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        className="relative min-h-auto lg:min-h-[115svh] flex items-center justify-center py-24 md:py-36 lg:py-44 px-6 overflow-hidden max-md:!opacity-100 max-md:!transform-none max-md:!filter-none scroll-mt-20 md:scroll-mt-24"
      >
        <div className="w-full max-w-lg bg-white/[0.025] border border-white/[0.08] p-8 md:p-12 rounded-[2rem] shadow-[0_32px_100px_rgba(0,0,0,0.5)] backdrop-blur-xl flex flex-col items-center">
          <span className="text-[10px] uppercase tracking-[0.28em] text-white/40 font-mono mb-4">{t.waitlistHeader}</span>
          <h3 className="font-oswald text-2xl md:text-4xl leading-[0.95] tracking-tight text-white mb-4 uppercase">{t.waitlistTitle}</h3>
          <p className="font-sans text-sm leading-7 text-white/58 max-w-md text-center mb-8">
            {t.waitlistDesc}
          </p>

          {formStatus === 'success' ? (
            <div className="flex flex-col items-center justify-center py-8 w-full border border-white/10 rounded-2xl bg-white/5 px-6 text-center">
              <p className="text-sm text-white font-medium tracking-wide">
                {name.trim() 
                  ? `${name.trim().split(/\s+/)[0].charAt(0).toUpperCase() + name.trim().split(/\s+/)[0].slice(1).toLowerCase()}, ${t.successTitle}` 
                  : t.successTitleNoName}
              </p>
              <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                {t.successDesc}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4 text-left">
              {/* NOME INPUT */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-[10px] uppercase tracking-widest text-zinc-500 ml-1">{t.labelName}</label>
                <input 
                  type="text" 
                  id="name"
                  required
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onFocus={() => setIsFormFocused(true)}
                  onBlur={() => setIsFormFocused(false)}
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none focus:border-white/30 transition-colors"
                  placeholder={t.placeholderName}
                />
              </div>

              {/* EMAIL INPUT */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-[10px] uppercase tracking-widest text-zinc-500 ml-1">EMAIL</label>
                <input 
                  type="email" 
                  id="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setIsFormFocused(true)}
                  onBlur={() => setIsFormFocused(false)}
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none focus:border-white/30 transition-colors"
                  placeholder={t.placeholderEmail}
                />
              </div>
              
              {/* CONTACT INPUT */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact" className={`text-[10px] uppercase text-zinc-500 ml-1 ${lang === 'zh' ? 'tracking-normal' : 'tracking-widest'}`}>{t.labelContact}</label>
                <div className="grid grid-cols-[135px_1fr] gap-2">
                  <div className="relative">
                    <select 
                      id="country-code"
                      value={contactDialCode}
                      onChange={(e) => {
                        const val = e.target.value;
                        setContactDialCode(val);
                        const matched = CONTACT_COUNTRIES.find(c => c.code === val);
                        if (matched) {
                          setContactCountry(matched.countryKey);
                        }
                      }}
                      onFocus={() => setIsFormFocused(true)}
                      onBlur={() => setIsFormFocused(false)}
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-3 py-3 text-xs text-white outline-none focus:border-white/30 transition-colors appearance-none cursor-pointer pr-8"
                    >
                      {CONTACT_COUNTRIES.map((c) => (
                        <option key={c.countryKey} value={c.code} className="bg-zinc-900 text-xs">
                          {getLocalizedCountryName(c.countryKey)} {c.code}
                        </option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-zinc-500">
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                        <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                      </svg>
                    </div>
                  </div>
                  <input 
                    type="tel" 
                    id="contact"
                    value={contactNumber}
                    onChange={(e) => setContactNumber(e.target.value)}
                    onFocus={() => setIsFormFocused(true)}
                    onBlur={() => setIsFormFocused(false)}
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none focus:border-white/30 transition-colors"
                    placeholder={t.placeholderContact}
                  />
                </div>
              </div>

              {/* SIZE SELECT */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="size" className="text-[10px] uppercase tracking-widest text-zinc-500 ml-1">{t.labelSize}</label>
                <div className="relative">
                  <select 
                    id="size"
                    value={size}
                    onChange={(e) => setSize(e.target.value)}
                    onFocus={() => setIsFormFocused(true)}
                    onBlur={() => setIsFormFocused(false)}
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-white/30 transition-colors appearance-none cursor-pointer pr-10"
                  >
                    <option value="Unknown" className="bg-zinc-900">{t.sizePlaceholder}</option>
                    {['28', '30', '32', '34', '36', '38', '40', '42', '44', '46', '48'].map(s => (
                      <option key={s} value={s} className="bg-zinc-900">{s}</option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-zinc-500">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                    </svg>
                  </div>
                </div>
                <span className="text-[9px] text-zinc-500 ml-1 leading-normal mt-0.5">
                  {t.sizeHint}
                </span>
              </div>

              {formStatus === 'disabled' && (
                <p className="text-xs text-amber-500/80 text-center mt-2">{t.disabledMessage}</p>
              )}
              {formStatus === 'error' && (
                <p className="text-xs text-red-500/80 text-center mt-2">{t.errorMessage}</p>
              )}

              <button 
                type="submit" 
                disabled={formStatus === 'loading' || formStatus === 'disabled'}
                className={`w-full mt-4 min-h-[50px] py-2 px-4 flex items-center justify-center bg-[#F2F0E9] text-black font-semibold text-[11px] uppercase rounded-full hover:bg-white hover:-translate-y-0.5 transition-all shadow-lg disabled:opacity-50 disabled:hover:translate-y-0 whitespace-normal break-keep pointer-events-auto relative z-20 ${
                  lang === 'zh' ? 'tracking-normal' : 'tracking-[0.22em]'
                }`}
              >
                {formStatus === 'loading' ? t.btnLoading : t.btnWaitlist}
              </button>

              <p className="text-[10px] text-zinc-500 leading-normal text-center mt-3 font-sans">
                {t.followUpNotice}
              </p>

              <p className="text-[9px] text-zinc-600 leading-normal text-center mt-1.5 font-sans">
                {t.privacyNotice}{' '}
                <a href="/privacidade" className="underline hover:text-white transition-colors">
                  {t.privacyLink}
                </a>
                .
              </p>
            </form>
          )}

          {/* Benefits */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 mt-10 w-full pt-8 border-t border-white/[0.08]">
            <div className="flex flex-col items-center text-center">
              <span className="text-[10px] tracking-[0.28em] text-white/80 mb-1 uppercase font-mono">{t.benefit1Title}</span>
              <span className="text-xs text-white/40 leading-tight font-sans mt-1">{t.benefit1Desc}</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-[10px] tracking-[0.28em] text-white/80 mb-1 uppercase font-mono">{t.benefit2Title}</span>
              <span className="text-xs text-white/40 leading-tight font-sans mt-1">{t.benefit2Desc}</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-[10px] tracking-[0.28em] text-white/80 mb-1 uppercase font-mono">{t.benefit3Title}</span>
              <span className="text-xs text-white/40 leading-tight font-sans mt-1">{t.benefit3Desc}</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Premium Waitlist Activity Toast */}
      <AnimatePresence>
        {shouldShowPopup && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-6 right-6 z-[99999] max-w-[340px] w-[calc(100vw-32px)] bg-black/95 border border-white/10 p-4 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-xl flex items-center gap-3"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse shrink-0" />
            <p className="font-mono text-[10px] uppercase tracking-[0.08em] text-white/80 leading-normal">
              {popupMessages[currentMessageIndex]}
            </p>
            <button 
              onClick={() => setShowPopup(false)}
              className="text-zinc-500 hover:text-white text-xs ml-auto pl-2 transition-colors font-sans"
            >
              ✕
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  </section>
);
}
