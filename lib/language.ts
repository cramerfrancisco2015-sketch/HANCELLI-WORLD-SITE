import { type Language } from './translations';

export const SUPPORTED_LANGUAGES: Language[] = ['pt', 'en', 'fr', 'de', 'zh'];

export function getInitialLanguage(): Language {
  if (typeof window === 'undefined') return 'pt';

  try {
    // 1. Check local storage
    const saved = window.localStorage.getItem('hancelli_lang');
    if (saved && SUPPORTED_LANGUAGES.includes(saved as Language)) {
      return saved as Language;
    }

    // 2. Detect from browser navigator
    const browserLang = window.navigator.language.toLowerCase();
    if (browserLang.startsWith('pt')) return 'pt';
    if (browserLang.startsWith('en')) return 'en';
    if (browserLang.startsWith('fr')) return 'fr';
    if (browserLang.startsWith('de')) return 'de';
    if (browserLang.startsWith('zh')) return 'zh';
  } catch (e) {
    console.error('Failed to access localStorage or navigator language:', e);
  }

  return 'pt';
}

export function saveLanguage(lang: Language): void {
  if (typeof window !== 'undefined') {
    try {
      window.localStorage.setItem('hancelli_lang', lang);
    } catch (e) {
      console.error('Failed to save language to localStorage:', e);
    }
  }
}
export function getLanguageCodeDisplay(lang: Language): string {
  switch (lang) {
    case 'pt': return 'PT';
    case 'en': return 'EN';
    case 'fr': return 'FR';
    case 'de': return 'DE';
    case 'zh': return '中文';
  }
}
export function getLanguageTitle(lang: Language): string {
  switch (lang) {
    case 'pt': return 'Português';
    case 'en': return 'English';
    case 'fr': return 'Français';
    case 'de': return 'Deutsch';
    case 'zh': return '简体中文';
  }
}
