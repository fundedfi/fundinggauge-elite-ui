"use client";
import React, { useState } from "react";

interface FundingConfiguratorProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FundingConfigurator({ isOpen, onClose }: FundingConfiguratorProps) {
  const [fundingAmount, setFundingAmount] = useState(250000);
  const [timeframe, setTimeframe] = useState(30);
  const [creditScore, setCreditScore] = useState(720);
  const [businessRevenue, setBusinessRevenue] = useState(500000);
  const [collateral, setCollateral] = useState(false);

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity"
        onClick={onClose}
      />

      {/* Slide-out Panel */}
      <aside
        className={`fixed top-0 right-0 h-full w-full md:w-[480px] bg-sapphire-base border-l border-platinum/20 z-50 overflow-y-auto transform transition-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 md:p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-champagne">Funding Configurator</h2>
            <button
              onClick={onClose}
              className="text-platinum/60 hover:text-platinum text-3xl leading-none"
              aria-label="Close"
            >
              ×
            </button>
          </div>

          {/* Funding Amount */}
          <div className="mb-8">
            <label className="block text-sm text-platinum/80 mb-2">
              Funding Amount
            </label>
            <input
              type="range"
              min="50000"
              max="5000000"
              step="10000"
              value={fundingAmount}
              onChange={(e) => setFundingAmount(Number(e.target.value))}
              className="w-full h-2 bg-sapphire-deep rounded-lg appearance-none cursor-pointer slider-champagne"
            />
            <div className="mt-2 text-right text-2xl font-bold text-champagne">
              ${fundingAmount.toLocaleString()}
            </div>
          </div>

          {/* Timeframe */}
          <div className="mb-8">
            <label className="block text-sm text-platinum/80 mb-2">
              Timeframe (days)
            </label>
            <input
              type="range"
              min="7"
              max="180"
              step="1"
              value={timeframe}
              onChange={(e) => setTimeframe(Number(e.target.value))}
              className="w-full h-2 bg-sapphire-deep rounded-lg appearance-none cursor-pointer slider-champagne"
            />
            <div className="mt-2 text-right text-xl font-bold text-platinum">
              {timeframe} days
            </div>
          </div>

          {/* Credit Score */}
          <div className="mb-8">
            <label className="block text-sm text-platinum/80 mb-2">
              Credit Score
            </label>
            <input
              type="range"
              min="300"
              max="850"
              step="10"
              value={creditScore}
              onChange={(e) => setCreditScore(Number(e.target.value))}
              className="w-full h-2 bg-sapphire-deep rounded-lg appearance-none cursor-pointer slider-champagne"
            />
            <div className="mt-2 text-right text-xl font-bold text-platinum">
              {creditScore}
            </div>
          </div>

          {/* Business Revenue */}
          <div className="mb-8">
            <label className="block text-sm text-platinum/80 mb-2">
              Annual Business Revenue
            </label>
            <input
              type="range"
              min="0"
              max="10000000"
              step="50000"
              value={businessRevenue}
              onChange={(e) => setBusinessRevenue(Number(e.target.value))}
              className="w-full h-2 bg-sapphire-deep rounded-lg appearance-none cursor-pointer slider-champagne"
            />
            <div className="mt-2 text-right text-xl font-bold text-platinum">
              ${businessRevenue.toLocaleString()}
            </div>
          </div>

          {/* Collateral Toggle */}
          <div className="mb-8">
            <label className="flex items-center justify-between cursor-pointer">
              <span className="text-sm text-platinum/80">Collateral Available</span>
              <div className="relative">
                <input
                  type="checkbox"
                  checked={collateral}
                  onChange={(e) => setCollateral(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-14 h-7 bg-sapphire-deep rounded-full peer peer-checked:bg-champagne transition-colors"></div>
                <div className="absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition-transform peer-checked:translate-x-7"></div>
              </div>
            </label>
          </div>

          {/* CTA */}
          <button className="w-full py-4 rounded-full bg-gradient-to-r from-champagne to-amber text-sapphire-deep font-bold text-lg hover:shadow-xl hover:shadow-champagne/40 transition-all active:scale-95">
            Generate Funding Plan
          </button>

          {/* Info Note */}
          <p className="mt-6 text-xs text-platinum/50 text-center">
            Adjust parameters to optimize your funding strategy
          </p>
        </div>
      </aside>
    </>
  );
}
