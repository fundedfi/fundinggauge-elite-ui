"use client";
import React from "react";

interface PipelineItem {
  id: string;
  title: string;
  amount: string;
  dueLabel: string;
  scoreLabel: string;
  lendersCount: number;
}

interface PipelineCardProps {
  items: PipelineItem[];
}

export default function PipelineCard({ items }: PipelineCardProps) {
  return (
    <div className="glass-card p-5">
      <h3 className="text-platinum font-semibold tracking-wide mb-4">
        Live Pipeline
      </h3>

      <div className="space-y-3 max-h-64 overflow-y-auto pr-2">
        {items.map((item) => (
          <div
            key={item.id}
            className="p-3 rounded-lg bg-sapphire-deep/50 border border-platinum/5"
          >
            <div className="flex items-start justify-between mb-2">
              <span className="text-platinum text-sm font-medium">
                {item.title}
              </span>
              <span className="text-champagne text-sm font-bold">
                {item.amount}
              </span>
            </div>
            <div className="flex items-center gap-4 text-xs text-platinum/60">
              <span>{item.dueLabel}</span>
              <span>{item.scoreLabel}</span>
              <span>{item.lendersCount} lenders</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
