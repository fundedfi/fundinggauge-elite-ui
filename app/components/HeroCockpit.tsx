"use client";
import React from "react";

export default function HeroCockpit() {
  const scrollToGauge = () => {
    const widget = document.querySelector('[data-fundability-widget]');
    if (widget) {
      widget.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section className="text-center max-w-4xl mx-auto">
      {/* Main Headline */}
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-platinum via-champagne to-platinum animate-shimmer">
          Ultra-Luxury Funding
        </span>
        <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-champagne via-amber to-champagne">
          Intelligence Cockpit
        </span>
      </h1>

      {/* Subheadline */}
      <p className="text-lg md:text-xl text-platinum/70 mb-12 max-w-2xl mx-auto">
        Where AI-driven analytics meet bespoke financial solutions
      </p>

      {/* CTA Cluster */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <button
          onClick={scrollToGauge}
          className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-champagne to-amber text-sapphire-deep font-bold text-lg hover:shadow-xl hover:shadow-champagne/40 transition-all active:scale-95"
        >
          <span className="relative z-10">Begin Assessment</span>
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-amber to-champagne opacity-0 group-hover:opacity-100 blur-xl transition-opacity" />
        </button>

        <button className="px-8 py-4 rounded-full border-2 border-platinum/30 text-platinum font-semibold text-lg hover:border-champagne hover:text-champagne hover:shadow-lg hover:shadow-champagne/20 transition-all active:scale-95">
          Schedule Demo
        </button>
      </div>
    </section>
  );
}
