"use client";
import React from "react";
import FundingGauge from "./FundingGauge";

interface CockpitHeroSectionProps {
  health: number;
}

export default function CockpitHeroSection({ health }: CockpitHeroSectionProps) {
  return (
    <section className="relative z-20 py-12 px-6 text-center">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-platinum tracking-tight mb-4">
        Precision-Engineered{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-bolt to-emerald">
          Funding Excellence
        </span>
      </h1>
      <p className="text-platinum/70 text-lg md:text-xl max-w-2xl mx-auto mb-8">
        Where AI-driven analytics meet bespoke financial solutions
      </p>
      <FundingGauge value={health} />
    </section>
  );
}
