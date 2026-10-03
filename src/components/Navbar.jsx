import React, { useState, useEffect } from 'react';

export default function Navbar({ onNavigate }) {
  const [activeItem, setActiveItem] = useState('Home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Strictly indexed to the sections in App.jsx
  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'problem', label: 'The Problem' },
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'features', label: 'Features' },
    { id: 'impact', label: 'Impact' },
  ];

  // Auto-update active navbar item as user scrolls down the page
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;
      for (let i = navLinks.length - 1; i >= 0; i--) {
        const section = document.getElementById(navLinks[i].id);
        if (section) {
          const top = section.offsetTop;
          if (scrollPosition >= top) {
            setActiveItem(navLinks[i].label);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-3 sm:top-5 left-0 right-0 z-40 flex flex-col items-center px-3 sm:px-6 md:px-10 pointer-events-none">
      {/* Outer Stepped Pixel Frame hugging content snugly like the reference */}
      <nav className="pointer-events-auto pixel-box-stepped w-auto max-w-fit h-[52px] sm:h-[58px] transition-all duration-200">
        <div className="pixel-box-inner bg-[#FCF2DF] h-full flex items-center gap-3.5 sm:gap-5 md:gap-6 px-3.5 sm:px-5 py-1.5">
          
          {/* 1. LEFT: AGRIVUE OFFICIAL LOGO */}
          <div 
            onClick={() => {
              setActiveItem('Home');
              setMobileMenuOpen(false);
              if (onNavigate) onNavigate('home');
            }}
            className="flex items-center gap-2 cursor-pointer select-none shrink-0"
          >
            <img 
              src="/logo.png" 
              alt="Agrivue" 
              className="h-7 sm:h-8 w-auto object-contain select-none pointer-events-none"
              style={{ imageRendering: 'pixelated' }}
            />
          </div>

          {/* 2. CENTER: NAV LINKS (Desktop) */}
          <div className="hidden md:flex items-center gap-1.5 sm:gap-2 md:gap-3 lg:gap-4.5">
            {navLinks.map((link) => {
              const isActive = activeItem === link.label;
              return (
                <button
                  key={link.id}
                  onClick={() => {
                    setActiveItem(link.label);
                    if (onNavigate) onNavigate(link.id);
                  }}
                  className={`font-neris text-[14px] sm:text-[15px] lg:text-[16px] transition-all duration-150 cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'px-3 py-1 bg-[#F9DF9C] text-[#121c15] rounded-md font-bold shadow-xs'
                      : 'px-2 py-1 text-[#142819] hover:text-[#051108] font-bold'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          {/* 3. RIGHT: "Get Started →" PIXEL BUTTON */}
          <div className="flex items-center gap-2.5 shrink-0">
            <button
              onClick={() => {
                if (onNavigate) onNavigate('problem');
              }}
              className="group relative flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 bg-[#092617] hover:bg-[#0c331f] text-white border-2 border-[#121c15] rounded-lg shadow-sm transition-all active:scale-95 cursor-pointer whitespace-nowrap"
            >
              {/* Inner neon green border effect like the reference */}
              <div className="absolute inset-[2px] border border-[#4ade80]/90 rounded-[5px] pointer-events-none" />
              
              <span className="font-neris font-bold text-[13px] sm:text-[14.5px] text-white relative z-10 tracking-wide">
                Get Started
              </span>
              <span className="font-neris font-bold text-sm sm:text-base text-white relative z-10">
                →
              </span>
            </button>

            {/* 4. BURGER BUTTON FOR MOBILE PHONES */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden flex flex-col justify-center items-center w-8 h-8 rounded-md bg-[#121c15]/10 hover:bg-[#121c15]/20 text-[#121c15] border border-[#121c15]/30 cursor-pointer transition-all active:scale-90"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                /* Pixel X icon */
                <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M2 2h3v3H2z M5 5h3v3H5z M8 8h3v3H8z M11 11h3v3h-3z M11 2h3v3h-3z M8 5h3v3H8z M5 8h3v3H5z M2 11h3v3H2z" />
                </svg>
              ) : (
                /* Pixel Burger Bar icon (3 bars) */
                <div className="flex flex-col gap-1 w-4">
                  <span className="h-0.5 w-full bg-[#121c15] rounded-xs" />
                  <span className="h-0.5 w-full bg-[#121c15] rounded-xs" />
                  <span className="h-0.5 w-full bg-[#121c15] rounded-xs" />
                </div>
              )}
            </button>
          </div>

        </div>
      </nav>

      {/* MOBILE DROPDOWN MENU */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 pointer-events-auto pixel-box-stepped w-64 max-w-[90vw] animate-fadeIn shadow-2xl">
          <div className="pixel-box-inner bg-[#FCF2DF] p-3 flex flex-col gap-1.5">
            {navLinks.map((link) => {
              const isActive = activeItem === link.label;
              return (
                <button
                  key={link.id}
                  onClick={() => {
                    setActiveItem(link.label);
                    setMobileMenuOpen(false);
                    if (onNavigate) onNavigate(link.id);
                  }}
                  className={`font-neris text-left px-3 py-2 rounded-md text-sm sm:text-base font-bold transition-all cursor-pointer flex items-center justify-between ${
                    isActive
                      ? 'bg-[#F9DF9C] text-[#121c15] shadow-xs'
                      : 'text-[#142819] hover:bg-[#ecd8ae]/60'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="text-[10px] text-[#09150d]">●</span>}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
