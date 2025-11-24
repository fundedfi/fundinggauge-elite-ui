"use client";
import React, { useEffect, useRef } from "react";

interface FundingVitalsStripProps {
  health: number;
  opportunities: number;
  alerts: string[];
  onBoost?: () => void;
}

export default function FundingVitalsStrip({
  health,
  opportunities,
  alerts,
  onBoost,
}: FundingVitalsStripProps) {
  const boostedRef = useRef(false);

  useEffect(() => {
    // Trigger starfield boost when conditions are met
    if ((opportunities > 10 || health > 90) && !boostedRef.current) {
      boostedRef.current = true;
      window.postMessage({ type: "STARFIELD_BOOST", speed: 2.5 }, "*");
      onBoost?.();

      // Reset after cooldown
      setTimeout(() => {
        boostedRef.current = false;
      }, 5000);
    }
  }, [opportunities, health, onBoost]);

  const getHealthDotColor = () => {
    if (health >= 80) return "bg-emerald";
    if (health >= 50) return "bg-amber";
    return "bg-crimson";
  };

  const getOpportunitiesDotColor = () => {
    return opportunities > 10 ? "bg-emerald" : "bg-platinum/50";
  };

  const getAlertsDotColor = () => {
    return alerts.length > 0 ? "bg-amber" : "bg-platinum/50";
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-30">
      <div className="glass-strip flex items-center gap-4 px-6 py-3 rounded-full">
        {/* Health chip */}
        <div className="flex items-center gap-2">
          <span className={`w-2 h-2 rounded-full ${getHealthDotColor()}`} />
          <span className="text-platinum text-sm font-medium">
            Health: {health}
          </span>
        </div>

        <div className="w-px h-4 bg-platinum/20" />

        {/* Opportunities chip */}
        <div className="flex items-center gap-2">
          <span className={`w-2 h-2 rounded-full ${getOpportunitiesDotColor()}`} />
          <span className="text-platinum text-sm font-medium">
            Opportunities: {opportunities}
          </span>
        </div>

        <div className="w-px h-4 bg-platinum/20" />

        {/* Alerts chip */}
        <div className="flex items-center gap-2">
          <span className={`w-2 h-2 rounded-full ${getAlertsDotColor()}`} />
          <span className="text-platinum text-sm font-medium">
            Alerts: {alerts.length}
          </span>
        </div>
      </div>
    </div>
  );
}
