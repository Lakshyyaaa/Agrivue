import React from 'react';

export default function Footer({ onNavigate }) {
  const scrollToTop = () => {
    if (onNavigate) {
      onNavigate('home');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'problem', label: 'The Problem' },
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'features', label: 'Features' },
    { id: 'impact', label: 'Impact' },
  ];

  const featuresList = [
    'Crop Analysis & Climate Fit',
    'Resource-Optimized Weekly To-Do',
    'Gamified Multi-Crop Farm Twin',
    'Early Infection Detection',
    'Multilingual Agronomic Chatbot',
    'Inventory & Shelf Life Control',
  ];

  const impactHighlights = [
    '~370 kWh Saved Per Farm / Season',
    '59% Water Saved vs Blind Flooding',
    '51 kg/ha Daily Delay Penalty Shield',
    '₹1.53 Lakh Crore Harvest Loss Defense',
  ];

  return (
    <footer className="relative w-full bg-[#d8ecfd] text-sky-950 pt-6 sm:pt-8 pb-10 px-4 sm:px-6 lg:px-12 border-t-4 border-[#075985] overflow-hidden font-neris">
      <div className="relative max-w-7xl mx-auto flex flex-col gap-10">

        {/* 1. MAIN 4-COLUMN FOOTER CONTENT */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          
          {/* Column 1: Brand & Identity */}
          <div className="space-y-4">
            <div 
              onClick={scrollToTop}
              className="flex items-center gap-2.5 cursor-pointer select-none max-w-fit"
            >
              <img 
                src="/logo.png" 
                alt="Agrivue" 
                className="h-8 sm:h-9 w-auto object-contain select-none pointer-events-none"
                style={{ imageRendering: 'pixelated' }}
              />
            </div>
            
            <p className="text-xs sm:text-sm text-sky-900 leading-relaxed font-medium">
              Autonomous agronomic intelligence, root-depth telemetry, and rural solar feeder dispatch designed specifically for Indian smallholders.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#bde0fe] border border-[#90caf9] text-[11px] font-bold text-sky-950">
              <span className="w-2 h-2 rounded-full bg-sky-600 animate-pulse" />
              <span>Platform Active • Kharif & Rabi Sync</span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-3">
            <span className="text-[11px] font-black text-sky-950 uppercase tracking-wider block">
              Quick Navigation
            </span>
            <ul className="space-y-2 text-xs sm:text-sm font-bold">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate && onNavigate(link.id)}
                    className="text-sky-900 hover:text-sky-600 transition-colors cursor-pointer flex items-center gap-1.5 font-bold"
                  >
                    <span className="text-sky-600 font-black">›</span>
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Platform Capabilities */}
          <div className="space-y-3">
            <span className="text-[11px] font-black text-sky-950 uppercase tracking-wider block">
              Core Capabilities
            </span>
            <ul className="space-y-2 text-xs text-sky-900 font-medium">
              {featuresList.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <span className="text-sky-600 font-black shrink-0 mt-0.5">•</span>
                  <span className="leading-snug">{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Measured Impact */}
          <div className="space-y-3">
            <span className="text-[11px] font-black text-sky-950 uppercase tracking-wider block">
              Measured Scale
            </span>
            <ul className="space-y-2 text-xs text-sky-900 font-medium">
              {impactHighlights.map((imp, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <span className="text-sky-600 font-black shrink-0 mt-0.5">✓</span>
                  <span className="leading-snug">{imp}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* 2. BOTTOM BAR (Copyright & National Pride) */}
        <div className="pt-6 border-t-2 border-[#b9defc] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-sky-900 font-medium">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span>Built for Bharat • Empowering farmers across Maharashtra, Punjab, Haryana & Telangana</span>
            <span>🇮🇳</span>
          </div>

          <div className="flex items-center gap-4 text-sky-800 font-bold text-[11px]">
            <span>© 2026 Agrivue Agritech Technologies Pvt. Ltd.</span>
            <span>•</span>
            <span className="text-sky-950">All Rights Reserved</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
