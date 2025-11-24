"use client";
import React from "react";

interface Lender {
  id: string;
  name: string;
  code: string;
  summary: string;
  stackSlots: number;
  activeSlots: number;
}

interface LenderPanelProps {
  lenders: Lender[];
}

export default function LenderPanel({ lenders }: LenderPanelProps) {
  return (
    <div className="glass-card p-5">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-platinum font-semibold tracking-wide">
          Lender Intelligence
        </h3>
        {lenders.length > 0 && (
          <span className="text-xs bg-emerald/20 text-emerald px-2 py-1 rounded-full">
            Active
          </span>
        )}
      </div>

      <div className="space-y-3 max-h-64 overflow-y-auto pr-2 scrollbar-thin">
        {lenders.map((lender) => (
          <div
            key={lender.id}
            className="flex items-center gap-3 p-3 rounded-lg bg-sapphire-deep/50 hover:bg-sapphire-base/70 hover:translate-x-1 transition-all cursor-pointer"
          >
            {/* Lender code badge */}
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-bolt to-emerald flex items-center justify-center flex-shrink-0">
              <span className="text-xs font-bold text-white">{lender.code}</span>
            </div>

            {/* Lender info */}
            <div className="flex-1 min-w-0">
              <div className="text-platinum text-sm font-medium truncate">
                {lender.name}
              </div>
              <div className="text-platinum/60 text-xs truncate">
                {lender.summary}
              </div>
            </div>

            {/* Stack indicators */}
            <div className="flex gap-1">
              {Array.from({ length: lender.stackSlots }).map((_, i) => (
                <span
                  key={i}
                  className={`w-2 h-2 rounded-full ${
                    i < lender.activeSlots ? "bg-emerald" : "bg-platinum/20"
                  }`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
