export const META_PIXEL_ID = "1262682624587515";

interface Fbq {
  (...args: unknown[]): void;
  callMethod?: (...args: unknown[]) => void;
  queue: unknown[];
  loaded?: boolean;
  version?: string;
}

declare global {
  interface Window {
    fbq: Fbq;
    _fbq: Fbq;
  }
}

let isInitialized = false;
let lastTrackedPathname = "";
let leadTrackedThisSession = false;

function hasMarketingConsent(): boolean {
  if (typeof window === "undefined") return false;
  const consent = localStorage.getItem("hancelli_cookie_consent");
  if (!consent) return false;
  try {
    const parsed = JSON.parse(consent);
    return !!parsed.marketing;
  } catch {
    return false;
  }
}

function deleteCookie(name: string, path: string = "/", domain?: string): void {
  let cookieString = `${name}=; path=${path}; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
  if (domain) {
    cookieString += `; domain=${domain}`;
  }
  document.cookie = cookieString;
}

export function clearAccessibleMetaCookies(): void {
  if (typeof window === "undefined" || typeof document === "undefined") return;

  const cookies = ["_fbp", "_fbc"];
  const hostname = window.location.hostname;
  const hostParts = hostname.split(".");
  
  // Try clearing with different domain patterns to ensure deletion of both host-only and domain cookies
  const domains: (string | undefined)[] = [undefined, hostname, `.${hostname}`];
  
  if (hostParts.length > 2) {
    const rootDomain = `.${hostParts.slice(-2).join(".")}`;
    domains.push(rootDomain);
  }

  for (const cookie of cookies) {
    for (const domain of domains) {
      deleteCookie(cookie, "/", domain);
    }
  }
}

export function initMetaPixel(): void {
  if (typeof window === "undefined") return;
  if (isInitialized) return;
  if (!hasMarketingConsent()) return;

  // Load connection to Meta only after consent
  const fbqFunction: Fbq = function (...args: unknown[]) {
    if (fbqFunction.callMethod) {
      fbqFunction.callMethod(...args);
    } else {
      fbqFunction.queue.push(args);
    }
  };

  fbqFunction.queue = [];

  if (!window.fbq) {
    window.fbq = fbqFunction;
  }
  if (!window._fbq) {
    window._fbq = fbqFunction;
  }

  window.fbq.loaded = true;
  window.fbq.version = "2.0";
  window.fbq.queue = [];

  const script = document.createElement("script");
  script.async = true;
  script.src = "https://connect.facebook.net/en_US/fbevents.js";

  const firstScript = document.getElementsByTagName("script")[0];
  if (firstScript && firstScript.parentNode) {
    firstScript.parentNode.insertBefore(script, firstScript);
  } else {
    document.head.appendChild(script);
  }

  window.fbq("consent", "grant");
  window.fbq("init", META_PIXEL_ID);
  isInitialized = true;
}

export function grantMetaConsent(): void {
  if (typeof window === "undefined") return;
  if (!isInitialized) {
    initMetaPixel();
  } else if (window.fbq) {
    window.fbq("consent", "grant");
  }
}

export function revokeMetaConsent(): void {
  if (typeof window === "undefined") return;
  if (window.fbq) {
    window.fbq("consent", "revoke");
  }
  lastTrackedPathname = "";
  clearAccessibleMetaCookies();
}

export function trackMetaPageView(pathname?: string): void {
  if (typeof window === "undefined") return;
  if (!hasMarketingConsent()) return;
  if (!isInitialized) {
    initMetaPixel();
  }
  if (isInitialized && window.fbq) {
    const currentPath = pathname || window.location.pathname;
    if (currentPath !== lastTrackedPathname) {
      window.fbq("track", "PageView");
      lastTrackedPathname = currentPath;
    }
  }
}

export function trackMetaLead(): void {
  if (typeof window === "undefined") return;
  if (!hasMarketingConsent()) return;
  if (!isInitialized) {
    initMetaPixel();
  }
  
  const alreadyTracked = localStorage.getItem("hancelli_lead_tracked");
  if (alreadyTracked === "true" || leadTrackedThisSession) {
    return;
  }

  if (isInitialized && window.fbq) {
    window.fbq("track", "Lead");
    localStorage.setItem("hancelli_lead_tracked", "true");
    leadTrackedThisSession = true;
  }
}
