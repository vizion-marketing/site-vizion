"use client";

import { useState, useEffect, useCallback } from "react";
import Script from "next/script";

const COOKIE_NAME = "vizion_cc";
const COOKIE_DAYS = 365;

type ConsentState = {
  analytics: boolean;
  accepted: boolean;
};

function getConsent(): ConsentState | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = document.cookie
      .split("; ")
      .find((c) => c.startsWith(`${COOKIE_NAME}=`));
    if (!raw) return null;
    return JSON.parse(decodeURIComponent(raw.split("=")[1]));
  } catch {
    return null;
  }
}

function setConsent(state: ConsentState) {
  const expires = new Date(
    Date.now() + COOKIE_DAYS * 24 * 60 * 60 * 1000
  ).toUTCString();
  document.cookie = `${COOKIE_NAME}=${encodeURIComponent(
    JSON.stringify(state)
  )}; expires=${expires}; path=/; SameSite=Lax`;
}

export function CookieConsent({ gtmId }: { gtmId?: string }) {
  const [visible, setVisible] = useState(false);
  const [consent, setConsentState] = useState<ConsentState | null>(null);

  useEffect(() => {
    const saved = getConsent();
    if (saved) {
      setConsentState(saved);
    } else {
      // Show banner after a short delay
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = useCallback(() => {
    const state: ConsentState = { analytics: true, accepted: true };
    setConsent(state);
    setConsentState(state);
    setVisible(false);
  }, []);

  const refuse = useCallback(() => {
    const state: ConsentState = { analytics: false, accepted: true };
    setConsent(state);
    setConsentState(state);
    setVisible(false);
  }, []);

  return (
    <>
      {/* GTM — only loaded if user accepted analytics */}
      {consent?.analytics && gtmId && (
        <>
          <Script
            id="gtm-script"
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${gtmId}`}
          />
          <Script id="gtm-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gtmId}', {
                anonymize_ip: true,
                cookie_flags: 'SameSite=None;Secure'
              });
            `}
          </Script>
        </>
      )}

      {/* Cookie banner */}
      {visible && (
        <div
          role="dialog"
          aria-label="Gestion des cookies"
          className="fixed bottom-0 inset-x-0 z-[9999] p-4 sm:p-6"
        >
          <div className="max-w-2xl mx-auto bg-black/95 backdrop-blur-xl border border-white/10 rounded-2xl p-5 sm:p-6 shadow-[0_-4px_40px_rgba(0,0,0,0.3)]">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex-1 min-w-0">
                <p className="text-white text-sm leading-relaxed">
                  Nous utilisons des cookies pour analyser le trafic et améliorer
                  votre expérience.{" "}
                  <a
                    href="/politique-confidentialite"
                    className="text-[#EEFF41] underline underline-offset-2 hover:text-[#EEFF41]/80 transition-colors"
                  >
                    Politique de confidentialité
                  </a>
                </p>
              </div>
              <div className="flex gap-3 flex-shrink-0 w-full sm:w-auto">
                <button
                  onClick={refuse}
                  className="flex-1 sm:flex-initial px-5 py-2.5 text-[11px] font-bold uppercase tracking-wider text-white/70 border border-white/20 rounded-xl hover:bg-white/10 transition-all"
                >
                  Refuser
                </button>
                <button
                  onClick={accept}
                  className="flex-1 sm:flex-initial px-5 py-2.5 text-[11px] font-bold uppercase tracking-wider bg-[#EEFF41] text-black rounded-xl hover:bg-[#EEFF41]/90 transition-all"
                >
                  Accepter
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
