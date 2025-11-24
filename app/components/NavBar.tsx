"use client";
import React from "react";

interface NavBarProps {
  onConfigureClick: () => void;
}

export default function NavBar({ onConfigureClick }: NavBarProps) {
  return (
    <>
      {/* Metallic top stripe */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-champagne to-transparent opacity-60 z-50" />

      <nav className="fixed top-1 left-0 right-0 z-40 glass-strip">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-2xl md:text-3xl font-bold tracking-wider text-white">
              OPTIMI
            </span>
            <span className="text-2xl md:text-3xl text-bolt animate-bolt-pulse">⚡</span>
            <span className="text-2xl md:text-3xl font-bold tracking-wider text-white">≡R</span>
            <span className="text-xs text-platinum/70">™</span>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="#solutions" className="text-platinum/80 hover:text-champagne transition-colors">
              Solutions
            </a>
            <a href="#platform" className="text-platinum/80 hover:text-champagne transition-colors">
              Platform
            </a>
            <a href="#analytics" className="text-platinum/80 hover:text-champagne transition-colors">
              Analytics
            </a>
            <a href="#partners" className="text-platinum/80 hover:text-champagne transition-colors">
              Partners
            </a>
          </div>

          {/* Configure Button */}
          <button
            onClick={onConfigureClick}
            className="px-4 py-2 md:px-6 md:py-2.5 rounded-full bg-gradient-to-r from-champagne/90 to-amber/90 text-sapphire-deep font-semibold text-sm hover:shadow-lg hover:shadow-champagne/30 transition-all active:scale-95"
          >
            Configure Funding
          </button>
        </div>
      </nav>
    </>
  );
}
