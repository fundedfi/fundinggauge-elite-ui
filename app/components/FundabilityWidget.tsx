"use client";
import React from "react";
import Gauge from "./Gauge";

export default function FundabilityWidget() {
  return (
    <div
      data-fundability-widget
      className="glass-card p-8 md:p-12 max-w-lg w-full hover:shadow-2xl hover:shadow-bolt/20 transition-shadow"
    >
      {/* Header */}
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-platinum mb-2">
          Fundability Assessment
        </h2>
        <p className="text-sm text-platinum/60">
          Real-time intelligence • AI-powered scoring
        </p>
      </div>

      {/* Gauge */}
      <Gauge />

      {/* Score Label */}
      <div className="text-center mt-6 p-4 rounded-lg bg-sapphire-deep/50 border border-champagne/20">
        <p className="text-sm text-platinum/70 mb-1">Current Assessment</p>
        <p className="text-xl font-bold text-champagne">Excellent Fundability</p>
      </div>
    </div>
  );
}
