'use client';
import Image from "next/image";
import { useEffect } from 'react';
import '../src/fg-effects.js';
import Starfield from "./components/Starfield";
import Gauge from "./components/Gauge";
import ThemeToggle from "./components/ThemeToggle";

export default function Page() {
  // --- FundingGauge Start button listener ---
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handler = () => {
      console.log('FundingGauge Start button clicked');
      // Optional: redirect or trigger modal
      // window.location.href = '/run';
    };

    document.addEventListener('fundinggauge:start', handler);
    return () => document.removeEventListener('fundinggauge:start', handler);
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden" style={{
      background: `
        radial-gradient(circle at top center, rgba(0, 245, 255, 0.22), transparent 60%),
        radial-gradient(circle at bottom center, rgba(57, 255, 150, 0.18), transparent 55%),
        #020712
      `
    }}>
      <Starfield />
      <ThemeToggle />

      <header className="relative z-10 flex items-center gap-3 p-6">
        <Image
          src="/img/logo-gauge.png"
          alt="FUNDINGGAUGE™"
          width={160}
          height={48}
          className="pointer-events-none select-none"
        />
        <h1 className="fg-wordmark text-4xl font-black">
          FUNDINGGAUG≡™
        </h1>
      </header>

      <section className="relative z-10 px-6">
        <h2 className="text-center text-6xl font-extrabold text-white drop-shadow-[0_0_30px_var(--fg-accent)] tracking-[.12em]">
          FUNDABILITY INTELLIGENCE
        </h2>
        <Gauge />
      </section>

      <section
        className="relative z-10 mx-auto mt-8 max-w-6xl rounded-3xl border border-white/10 bg-neutral-900/60 p-6 backdrop-blur-xl"
        style={{ boxShadow: "0 0 28px rgba(0,0,0,.6), 0 0 40px var(--fg-accent)" }}
      >
        <h3 className="text-3xl font-semibold text-white drop-shadow-[0_0_16px_var(--fg-accent)] mb-4 tracking-wide">
          <span className="fg-wordmark">FUNDINGGAUG≡™</span> Advantage
        </h3>
        <p className="text-neutral-300 mb-6">
          Fundability intelligence that actually moves the needle. Consistent green/blue accents via theme toggle.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          {[
            { k: 'Live', h: 'Real-Time Fundability', p: 'Live scoring adapts as inputs change.' },
            { k: '<1m', h: '47-Second Processing', p: 'Parallelized pipeline for near-instant results.' },
            { k: '500+', h: 'Lender Network', p: 'Banks, fintechs, and niche programs.' },
            { k: 'AI', h: 'Predictive Modeling', p: 'Approval odds + stack order via ensembles.' },
            { k: '3.2β', h: 'Lift', p: 'Higher approvals and better terms on average.' },
            { k: 'Secure', h: 'Bank-Level Security', p: 'AES-256, TLS 1.3, least-privilege, audits.' },
          ].map((it) => (
            <div
              key={it.h}
              className="rounded-2xl p-5 bg-black/60 border border-white/10 backdrop-blur"
              style={{
                boxShadow: "0 20px rgba(0,0,0,.4), 0 0 22px var(--fg-accent-soft)"
              }}
            >
              <div className="text-xs text-neutral-300 mb-1">{it.k}</div>
              <div className="text-lg font-semibold text-white">{it.h}</div>
              <div className="text-sm text-neutral-400 mt-1">{it.p}</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}