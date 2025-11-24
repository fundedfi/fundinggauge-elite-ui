"use client";
import React from "react";

interface QuickStatsCardProps {
  totalPipeline: string;
  avgApprovalRate: string;
  activeLenders: number;
  bureauScore: number;
}

export default function QuickStatsCard({
  totalPipeline,
  avgApprovalRate,
  activeLenders,
  bureauScore,
}: QuickStatsCardProps) {
  return (
    <div className="glass-card p-5">
      <h3 className="text-platinum font-semibold tracking-wide mb-4">
        Quick Stats
      </h3>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <div className="text-platinum/60 text-xs mb-1">Total Pipeline</div>
          <div className="text-champagne text-lg font-bold">{totalPipeline}</div>
        </div>
        <div>
          <div className="text-platinum/60 text-xs mb-1">Avg Approval</div>
          <div className="text-emerald text-lg font-bold">{avgApprovalRate}</div>
        </div>
        <div>
          <div className="text-platinum/60 text-xs mb-1">Active Lenders</div>
          <div className="text-bolt text-lg font-bold">{activeLenders}</div>
        </div>
        <div>
          <div className="text-platinum/60 text-xs mb-1">Bureau Score</div>
          <div className="text-platinum text-lg font-bold">{bureauScore}</div>
        </div>
      </div>
    </div>
  );
}
