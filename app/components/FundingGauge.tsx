"use client";
import React, { useEffect, useState } from "react";

interface FundingGaugeProps {
  value: number; // 0-100
}

export default function FundingGauge({ value }: FundingGaugeProps) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const target = Math.min(100, Math.max(0, value));
    const dur = 1000;
    const t0 = performance.now();

    function tick(t: number) {
      const k = Math.min(1, (t - t0) / dur);
      const eased = 1 - Math.pow(1 - k, 3);
      setDisplayValue(Math.round(target * eased));
      if (k < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }, [value]);

  // Color based on health
  const getColor = () => {
    if (displayValue >= 80) return "#50c878"; // emerald
    if (displayValue >= 50) return "#ffbf00"; // amber
    return "#dc143c"; // crimson
  };

  // Calculate arc and needle
  const strokeDashoffset = 314 - (314 * displayValue) / 100;
  const needleAngle = -90 + (180 * displayValue) / 100;

  return (
    <div className="glass-card p-6 w-full max-w-xs mx-auto">
      <h3 className="text-platinum text-sm font-medium text-center mb-4 tracking-wide">
        FUNDING HEALTH
      </h3>
      <svg viewBox="0 0 280 160" className="w-full">
        <defs>
          <linearGradient id="gaugeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={getColor()} stopOpacity="0.3" />
            <stop offset="100%" stopColor={getColor()} />
          </linearGradient>
        </defs>

        {/* Background arc */}
        <path
          d="M 40 120 A 100 100 0 0 1 240 120"
          fill="none"
          stroke="rgba(229, 228, 226, 0.1)"
          strokeWidth="12"
          strokeLinecap="round"
        />

        {/* Foreground arc */}
        <path
          d="M 40 120 A 100 100 0 0 1 240 120"
          fill="none"
          stroke="url(#gaugeGrad)"
          strokeWidth="12"
          strokeLinecap="round"
          strokeDasharray="314"
          strokeDashoffset={strokeDashoffset}
          style={{ transition: "stroke-dashoffset 0.3s ease" }}
        />

        {/* Needle */}
        <g transform={`translate(140, 120) rotate(${needleAngle})`}>
          <line
            x1="0"
            y1="0"
            x2="70"
            y2="0"
            stroke={getColor()}
            strokeWidth="3"
            strokeLinecap="round"
          />
          <circle cx="0" cy="0" r="6" fill="#e5e4e2" />
        </g>

        {/* Value display */}
        <text
          x="140"
          y="145"
          textAnchor="middle"
          className="fill-platinum"
          fontSize="24"
          fontWeight="bold"
          fontFamily="ui-monospace, monospace"
        >
          {displayValue}
        </text>
      </svg>
    </div>
  );
}
