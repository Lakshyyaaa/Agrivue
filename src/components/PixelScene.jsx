import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';

export default function PixelScene({ onScrollDown }) {
  const containerRef = useRef(null);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [touchPan, setTouchPan] = useState(0); // Horizontal pan offset for mobile (-1 to 1)
  const [idleTick, setIdleTick] = useState(0);
  const touchStartRef = useRef(null);
  const isTouchingRef = useRef(false);

  // Smooth mouse parallax for desktop
  const handleMouseMove = useCallback((e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 to 0.5
    const ny = (e.clientY - rect.top) / rect.height - 0.5;
    setMouseOffset({ x: nx, y: ny });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setMouseOffset({ x: 0, y: 0 });
  }, []);

  // Touch Pan / Swipe Support for Mobile Phones
  const handleTouchStart = (e) => {
    if (e.touches.length === 1) {
      touchStartRef.current = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
        initialPan: touchPan,
      };
      isTouchingRef.current = true;
    }
  };

  const handleTouchMove = (e) => {
    if (!touchStartRef.current || e.touches.length !== 1) return;
    const deltaX = e.touches[0].clientX - touchStartRef.current.x;
    const deltaY = e.touches[0].clientY - touchStartRef.current.y;

    // Allow natural page scrolling if vertical swipe is detected
    if (Math.abs(deltaY) > Math.abs(deltaX) * 1.2) {
      return;
    }

    const screenWidth = window.innerWidth;
    const sensitivity = 1.35;
    const newPan = Math.max(-0.5, Math.min(0.5, touchStartRef.current.initialPan - (deltaX / screenWidth) * sensitivity));
    setTouchPan(newPan);
    setMouseOffset({
      x: newPan,
      y: 0
    });
  };

  const handleTouchEnd = () => {
    touchStartRef.current = null;
    isTouchingRef.current = false;
  };

  // Device Gyroscope Tilt for Mobile (gentle tilt parallax)
  useEffect(() => {
    const handleOrientation = (e) => {
      if (e.gamma !== null && !isTouchingRef.current) {
        // gamma is left-to-right tilt in degrees [-90, 90]
        // beta is front-to-back tilt [-180, 180]
        const tiltX = Math.max(-0.4, Math.min(0.4, (e.gamma / 45) * 0.4));
        const tiltY = Math.max(-0.25, Math.min(0.25, ((e.beta - 45) / 45) * 0.25));
        setTouchPan((prev) => prev * 0.9 + tiltX * 0.1);
        setMouseOffset((prev) => ({
          x: prev.x * 0.9 + tiltX * 0.1,
          y: prev.y * 0.9 + tiltY * 0.1
        }));
      }
    };

    if (window.DeviceOrientationEvent) {
      window.addEventListener('deviceorientation', handleOrientation);
    }
    return () => {
      if (window.DeviceOrientationEvent) {
        window.removeEventListener('deviceorientation', handleOrientation);
      }
    };
  }, []);

  // Subtle natural idle breathing
  useEffect(() => {
    const timer = setInterval(() => {
      setIdleTick((t) => (t + 1) % 360);
    }, 45);
    return () => clearInterval(timer);
  }, []);

  // Parallax offsets
  const idleSin = Math.sin((idleTick * Math.PI) / 180);
  const idleCos = Math.cos((idleTick * Math.PI) / 180);

  // Parallax calculation considering desktop mouse or phone pan
  const effectiveX = mouseOffset.x || touchPan;
  const parallaxX = effectiveX * 24 + idleSin * 1.5;
  const parallaxY = mouseOffset.y * 14 + idleCos * 1.2;

  // Drifting Leaves generator
  const leaves = useMemo(() => {
    return Array.from({ length: 16 }).map((_, i) => ({
      id: i,
      left: Math.random() * 28,
      top: 8 + Math.random() * 26,
      delay: i * 1.2,
      duration: 8 + (i % 5) * 2,
      size: 4 + (i % 3) * 2,
      color: i % 4 === 0 ? '#facc15' : i % 2 === 0 ? '#4ade80' : '#84cc16'
    }));
  }, []);

  // Drifting Clouds
  const clouds = useMemo(() => {
    return [
      { id: 1, top: '6%', duration: '60s', delay: '0s', scale: 0.9, opacity: 0.75 },
      { id: 2, top: '14%', duration: '80s', delay: '-25s', scale: 1.1, opacity: 0.8 },
      { id: 3, top: '20%', duration: '95s', delay: '-50s', scale: 0.8, opacity: 0.65 },
      { id: 4, top: '10%', duration: '70s', delay: '-12s', scale: 0.85, opacity: 0.7 }
    ];
  }, []);

  // Flying Birds
  const birds = useMemo(() => {
    return [
      { id: 'b1', top: '13%', speed: '22s', delay: '0s', size: 1.1, color: '#166534' },
      { id: 'b2', top: '15%', speed: '22s', delay: '0.4s', size: 0.95, color: '#15803d' },
      { id: 'b3', top: '14%', speed: '22s', delay: '0.9s', size: 1.0, color: '#14532d' },
      { id: 'b4', top: '24%', speed: '30s', delay: '11s', size: 0.85, color: '#ffffff' },
      { id: 'b5', top: '26%', speed: '30s', delay: '11.6s', size: 0.8, color: '#f1f5f9' },
      { id: 'b6', top: '18%', speed: '26s', delay: '18s', size: 0.9, color: '#1e3a5f' }
    ];
  }, []);

  // Water ripples
  const ripples = useMemo(() => {
    return [
      { id: 'r1', left: '46%', top: '60.5%', delay: '0s' },
      { id: 'r2', left: '62%', top: '61.5%', delay: '1.4s' },
      { id: 'r3', left: '74%', top: '60%', delay: '2.8s' },
      { id: 'r4', left: '53%', top: '62%', delay: '4.2s' },
      { id: 'r5', left: '81%', top: '61%', delay: '2.1s' }
    ];
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-full min-h-screen min-h-[100dvh] overflow-hidden select-none bg-slate-950 font-sans cursor-default"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{
        touchAction: 'pan-y'
      }}
    >
      {/* 
        RESPONSIVE PANORAMA WRAPPER:
        On desktop: 104% width & height with smooth parallax.
        On phone / portrait screens (aspect ratio < 16:9):
        The container expands horizontally to preserve the 16:9 ratio and pixel art fidelity,
        centered on the farmer, oxen and fields, and pans smoothly with touch swipe or phone tilt!
      */}
      <div 
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <div
          className="relative h-full transition-transform duration-200 ease-out"
          style={{
            // Keep at least the 16:9 aspect ratio width on narrow phone screens
            width: 'max(100vw, 177.78vh)',
            transform: `translate(${-touchPan * 35 + parallaxX}px, ${parallaxY}px)`,
            willChange: 'transform'
          }}
        >
          {/* 1. MORNING SUN GLOW & RAYS */}
          <div 
            className="absolute pointer-events-none z-10 transition-transform duration-300 ease-out"
            style={{
              right: '18%',
              top: '6%',
              transform: `translate(${parallaxX * -0.3}px, ${parallaxY * -0.3}px)`
            }}
          >
            <div className="relative">
              <div className="w-24 md:w-32 h-24 md:h-32 rounded-full bg-amber-300/25 blur-md animate-pulse" />
              <div 
                className="absolute inset-0 w-24 md:w-32 h-24 md:h-32 rounded-full border border-amber-200/20 animate-spin" 
                style={{ animationDuration: '45s' }} 
              />
            </div>
          </div>

          {/* 2. DRIFTING PIXEL CLOUDS */}
          <div className="absolute inset-0 pointer-events-none z-15 overflow-hidden">
            {clouds.map((cloud) => (
              <div
                key={cloud.id}
                className="absolute drifting-cloud"
                style={{
                  top: cloud.top,
                  animationDuration: cloud.duration,
                  animationDelay: cloud.delay,
                  transform: `scale(${cloud.scale}) translate(${parallaxX * -0.6}px, ${parallaxY * -0.4}px)`,
                  opacity: cloud.opacity
                }}
              >
                <div className="pixel-cloud-shape">
                  <div className="h-2 w-14 bg-white/60 mx-auto" />
                  <div className="h-2.5 w-24 bg-white/70 mx-auto" />
                  <div className="h-3.5 w-36 bg-white/80 mx-auto shadow-sm" />
                  <div className="h-2.5 w-28 bg-white/75 mx-auto" />
                  <div className="h-1.5 w-16 bg-white/50 mx-auto" />
                </div>
              </div>
            ))}
          </div>

          {/* 3. FLOCK OF FLYING BIRDS */}
          <div className="absolute inset-0 pointer-events-none z-25 overflow-hidden">
            {birds.map((bird) => (
              <div
                key={bird.id}
                className="absolute bird-fly"
                style={{
                  top: bird.top,
                  animationDuration: bird.speed,
                  animationDelay: bird.delay,
                  transform: `scale(${bird.size})`
                }}
              >
                <svg 
                  width="24" 
                  height="16" 
                  viewBox="0 0 24 16" 
                  className="bird-sprite"
                  style={{ filter: 'drop-shadow(0 1px 1px rgba(0,0,0,0.25))' }}
                >
                  <path
                    className="bird-wing-path"
                    d="M 2,8 Q 6,2 12,8 Q 18,2 22,8 L 19,10 Q 12,5 5,10 Z"
                    fill={bird.color}
                  />
                  <circle cx="12" cy="8" r="1.5" fill="#fef08a" />
                </svg>
              </div>
            ))}
          </div>

          {/* 4. MAIN PIXEL-ART PANORAMA IMAGE */}
          <img 
            src="/panorama.png" 
            alt="Pixel-Art Indian Countryside Panorama"
            className="w-full h-full object-cover object-bottom select-none pointer-events-none"
            style={{
              imageRendering: 'pixelated',
              filter: 'brightness(1.02) contrast(1.03)',
            }}
          />

          {/* 5. CROPS SWAYING IN THE WIND */}
          {/* Shimmering wind wave bands across golden harvest fields */}
          <div 
            className="absolute pointer-events-none z-12 overflow-hidden"
            style={{
              left: '46%',
              top: '51%',
              width: '54%',
              height: '24%',
            }}
          >
            <div className="crop-wind-wave wave-1" />
            <div className="crop-wind-wave wave-2" />
            <div className="crop-wind-wave wave-3" />

            <svg className="absolute bottom-0 w-full h-12 overflow-visible opacity-80" preserveAspectRatio="none">
              {Array.from({ length: 28 }).map((_, i) => (
                <g 
                  key={i} 
                  className="crop-stalk"
                  style={{ 
                    transformOrigin: 'bottom center',
                    animationDelay: `${(i * 0.16) % 2.4}s` 
                  }}
                >
                  <rect x={`${i * 3.6}%`} y="10" width="2" height="18" fill="#fde047" />
                  <rect x={`${i * 3.6 - 1}%`} y="6" width="4" height="6" fill="#eab308" />
                  <rect x={`${i * 3.6}%`} y="2" width="2" height="4" fill="#ca8a04" />
                </g>
              ))}
            </svg>
          </div>

          {/* Swaying green shoots in foreground tilled soil */}
          <div 
            className="absolute pointer-events-none z-13 overflow-hidden"
            style={{
              left: '38%',
              top: '72%',
              width: '62%',
              height: '24%',
            }}
          >
            <svg className="w-full h-full opacity-65">
              {Array.from({ length: 32 }).map((_, i) => (
                <g 
                  key={i} 
                  className="crop-stalk"
                  style={{ 
                    transformOrigin: 'bottom center',
                    animationDelay: `${(i * 0.14) % 2}s`,
                    animationDuration: '2.8s'
                  }}
                >
                  <rect x={`${5 + (i * 3.1) % 90}%`} y={`${30 + ((i * 19) % 55)}%`} width="2" height="7" fill="#86efac" />
                  <rect x={`${5 + (i * 3.1) % 90 - 1}%`} y={`${30 + ((i * 19) % 55) - 3}%`} width="4" height="3" fill="#22c55e" />
                </g>
              ))}
            </svg>
          </div>

          {/* 6. WATER RIPPLING & GLINTS */}
          <div 
            className="absolute pointer-events-none z-14"
            style={{
              left: '41%',
              top: '58.5%',
              width: '48%',
              height: '7%',
            }}
          >
            {ripples.map((rip) => (
              <div
                key={rip.id}
                className="absolute water-ripple"
                style={{
                  left: rip.left,
                  top: rip.top,
                  animationDelay: rip.delay
                }}
              >
                <div className="water-pixel-ring" />
              </div>
            ))}

            <div className="water-glint glint-1" style={{ left: '25%', top: '35%' }} />
            <div className="water-glint glint-2" style={{ left: '55%', top: '55%' }} />
            <div className="water-glint glint-3" style={{ left: '80%', top: '25%' }} />
            <div className="water-glint glint-4" style={{ left: '40%', top: '70%' }} />
          </div>

          {/* 7. LEAVES MOVING & FLOATING FROM BANYAN TREE */}
          <div className="absolute inset-0 pointer-events-none z-18 overflow-hidden">
            {leaves.map((leaf) => (
              <div
                key={leaf.id}
                className="absolute falling-leaf"
                style={{
                  left: `${leaf.left}%`,
                  top: `${leaf.top}%`,
                  animationDuration: `${leaf.duration}s`,
                  animationDelay: `${leaf.delay}s`,
                }}
              >
                <div 
                  className="pixel-leaf"
                  style={{
                    width: `${leaf.size}px`,
                    height: `${leaf.size}px`,
                    backgroundColor: leaf.color,
                    boxShadow: '1px 1px 0px rgba(0,0,0,0.25)'
                  }}
                />
              </div>
            ))}

            <div 
              className="absolute banyan-sway pointer-events-none"
              style={{
                left: '8%',
                top: '5%',
                width: '26%',
                height: '35%',
                background: 'radial-gradient(ellipse at 40% 40%, rgba(74, 222, 128, 0.06) 0%, transparent 70%)',
                mixBlendMode: 'screen'
              }}
            />
          </div>

          {/* 8. TEMPLE SAFFRON FLAG FLUTTERING */}
          <div 
            className="absolute pointer-events-none z-14 temple-flag"
            style={{
              left: '89.1%',
              top: '32.6%',
              width: '9px',
              height: '6px',
              backgroundColor: '#ea580c',
              clipPath: 'polygon(0 0, 100% 50%, 0 100%)',
              boxShadow: '0 0 4px rgba(234, 88, 12, 0.6)'
            }}
          />

          {/* 9. HEARTH CHIMNEY SMOKE */}
          <div 
            className="absolute pointer-events-none z-14"
            style={{
              left: '12.8%',
              top: '47.5%',
              width: '12px',
              height: '40px'
            }}
          >
            <div className="chimney-smoke smoke-1" />
          </div>
        </div>
      </div>

      {/* 9.5 CENTER HERO (Title Logo + Badge + Tagline + Action Buttons) */}
      <div className="absolute top-[10%] sm:top-[12%] md:top-[13%] lg:top-[14%] left-0 right-0 z-25 pointer-events-none select-none flex justify-center items-center px-4">
        <div 
          className="transition-transform duration-150 ease-out flex flex-col items-center max-w-2xl w-full"
          style={{
            transform: `translate(${parallaxX * 0.3}px, ${parallaxY * 0.3}px)`
          }}
        >
          {/* A. TITLE LOGO (Toned down ~10–15%) */}
          <div className="animate-title-float flex justify-center">
            <img 
              src="/pixel-title-logo.png" 
              alt="Agrivue Title Logo" 
              className="w-[195px] xs:w-[240px] sm:w-[310px] md:w-[380px] lg:w-[430px] max-w-[85vw] h-auto object-contain filter drop-shadow-[0_8px_24px_rgba(0,0,0,0.3)] select-none pointer-events-none"
              style={{ imageRendering: 'pixelated' }}
            />
          </div>

          {/* B. STEPPED PIXEL BADGE: Smarter Farming. Brighter Tomorrows. */}
          <div className="mt-1.5 sm:mt-2 pixel-box-stepped max-w-fit pointer-events-auto">
            <div className="pixel-box-inner bg-[#FCF2DF] px-3.5 sm:px-5 md:px-6 py-1 sm:py-1.5 flex items-center justify-center">
              <span className="font-neris font-semibold text-xs sm:text-sm md:text-[15px] text-stone-900 tracking-wide select-none">
                Smarter Farming. Brighter Tomorrows.
              </span>
            </div>
          </div>

          {/* C. SUBTITLE DESCRIPTION (Lightly translucent cream panel + dark pixel text outline) */}
          <div className="mt-2 sm:mt-2.5 px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-md bg-[#FCF2DF]/18 backdrop-blur-[2px] border border-[#FCF2DF]/30 shadow-[0_3px_12px_rgba(0,0,0,0.25)] max-w-lg select-none">
            <p className="font-neris text-center text-white text-[12.5px] sm:text-[14px] md:text-[15px] font-medium leading-snug sm:leading-relaxed [text-shadow:_1px_1px_0_#0a140d,_-1px_-1px_0_#0a140d,_1px_-1px_0_#0a140d,_-1px_1px_0_#0a140d,_0_2px_4px_rgba(0,0,0,0.85)]">
              AI-powered crop guidance, irrigation scheduling
              <br className="hidden sm:inline" /> and resource optimization for every acre.
            </p>
          </div>

          {/* D. ACTION BUTTONS: Get Started & Watch Video */}
          <div className="mt-2.5 sm:mt-3.5 flex items-center gap-2.5 sm:gap-4 pointer-events-auto">
            {/* 1. Yellow CTA: Get Started */}
            <button 
              onClick={() => {
                if (onScrollDown) {
                  onScrollDown();
                } else {
                  const el = document.getElementById('problem');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="pixel-btn-yellow cursor-pointer group"
              aria-label="Get Started"
            >
              <div className="pixel-btn-yellow-inner px-3.5 sm:px-5 py-1.5 sm:py-2 md:py-2.5 flex items-center gap-1.5 sm:gap-2">
                <span className="font-neris font-bold text-xs sm:text-sm md:text-[15px] text-stone-950 tracking-wide">
                  Get Started
                </span>
                <span className="font-neris font-bold text-sm sm:text-base text-stone-950 transition-transform duration-150 group-hover:translate-x-1">
                  &rarr;
                </span>
              </div>
            </button>

            {/* 2. Dark Green CTA: Watch Video */}
            <button 
              onClick={() => {
                alert('Agrivue demo walkthrough coming soon!');
              }}
              className="pixel-btn-dark cursor-pointer group"
              aria-label="Watch Video"
            >
              <div className="pixel-btn-dark-inner px-3.5 sm:px-5 py-1.5 sm:py-2 md:py-2.5 flex items-center gap-1.5 sm:gap-2">
                <span className="font-neris font-semibold text-xs sm:text-sm md:text-[15px] text-white tracking-wide">
                  Watch Video
                </span>
                <svg 
                  width="13" 
                  height="13" 
                  viewBox="0 0 16 16" 
                  fill="none" 
                  className="text-white transition-transform duration-150 group-hover:scale-110"
                >
                  <path 
                    d="M4 2L13 8L4 14V2Z" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinejoin="miter" 
                  />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* 10. BOTTOM PARAMETER METRICS CARDS (Horizontal Rectangles with Stepped Pixel Borders) */}
      <div className="absolute bottom-3 md:bottom-6 left-0 right-0 z-30 px-3 sm:px-6 pointer-events-auto flex justify-center">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3 md:gap-4 max-w-5xl w-full justify-items-center">
          
          {/* Card 1: Water Usage */}
          <div className="pixel-box-stepped w-full max-w-[215px] sm:max-w-[250px] md:max-w-[285px] h-[66px] sm:h-[74px] md:h-[82px] transition-transform duration-200 hover:-translate-y-1">
            <div className="pixel-box-inner bg-[#FCF2DF] flex items-center gap-2.5 sm:gap-3.5 px-3 sm:px-4 py-1.5 sm:py-2">
              <div className="shrink-0 w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 flex items-center justify-center">
                <img 
                  src="/logos/water-drop.png" 
                  alt="Water Usage Icon" 
                  className="w-full h-full object-contain mix-blend-multiply select-none pointer-events-none"
                  style={{ imageRendering: 'pixelated' }}
                />
              </div>
              <div className="min-w-0 flex-1">
                <div className="font-neris font-bold text-sm sm:text-base md:text-lg text-[#09150d] tracking-tight leading-snug">
                  30-40%
                </div>
                <div className="font-neris font-semibold text-xs sm:text-[13px] md:text-sm text-[#142819] leading-snug mt-0.5 truncate">
                  Less Water Usage
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Energy Costs */}
          <div className="pixel-box-stepped w-full max-w-[215px] sm:max-w-[250px] md:max-w-[285px] h-[66px] sm:h-[74px] md:h-[82px] transition-transform duration-200 hover:-translate-y-1">
            <div className="pixel-box-inner bg-[#FCF2DF] flex items-center gap-2.5 sm:gap-3.5 px-3 sm:px-4 py-1.5 sm:py-2">
              <div className="shrink-0 w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 flex items-center justify-center">
                <img 
                  src="/logos/lightning.png" 
                  alt="Energy Costs Icon" 
                  className="w-full h-full object-contain mix-blend-multiply select-none pointer-events-none"
                  style={{ imageRendering: 'pixelated' }}
                />
              </div>
              <div className="min-w-0 flex-1">
                <div className="font-neris font-bold text-sm sm:text-base md:text-lg text-[#09150d] tracking-tight leading-snug">
                  20-30%
                </div>
                <div className="font-neris font-semibold text-xs sm:text-[13px] md:text-sm text-[#142819] leading-snug mt-0.5 truncate">
                  Lower Energy Costs
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Higher Yields */}
          <div className="pixel-box-stepped w-full max-w-[215px] sm:max-w-[250px] md:max-w-[285px] h-[66px] sm:h-[74px] md:h-[82px] transition-transform duration-200 hover:-translate-y-1">
            <div className="pixel-box-inner bg-[#FCF2DF] flex items-center gap-2.5 sm:gap-3.5 px-3 sm:px-4 py-1.5 sm:py-2">
              <div className="shrink-0 w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 flex items-center justify-center">
                <img 
                  src="/logos/leaf.png" 
                  alt="Higher Yields Icon" 
                  className="w-full h-full object-contain mix-blend-multiply select-none pointer-events-none"
                  style={{ imageRendering: 'pixelated' }}
                />
              </div>
              <div className="min-w-0 flex-1">
                <div className="font-neris font-bold text-sm sm:text-base md:text-lg text-[#09150d] tracking-tight leading-snug">
                  Higher Yields
                </div>
                <div className="font-neris font-semibold text-xs sm:text-[13px] md:text-sm text-[#142819] leading-snug mt-0.5 truncate">
                  Healthier Crops
                </div>
              </div>
            </div>
          </div>

          {/* Card 4: Lower Losses */}
          <div className="pixel-box-stepped w-full max-w-[215px] sm:max-w-[250px] md:max-w-[285px] h-[66px] sm:h-[74px] md:h-[82px] transition-transform duration-200 hover:-translate-y-1">
            <div className="pixel-box-inner bg-[#FCF2DF] flex items-center gap-2.5 sm:gap-3.5 px-3 sm:px-4 py-1.5 sm:py-2">
              <div className="shrink-0 w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 flex items-center justify-center">
                <img 
                  src="/logos/bar-chart.png" 
                  alt="Lower Losses Icon" 
                  className="w-full h-full object-contain mix-blend-multiply select-none pointer-events-none"
                  style={{ imageRendering: 'pixelated' }}
                />
              </div>
              <div className="min-w-0 flex-1">
                <div className="font-neris font-bold text-sm sm:text-base md:text-lg text-[#09150d] tracking-tight leading-snug">
                  Lower Losses
                </div>
                <div className="font-neris font-semibold text-xs sm:text-[13px] md:text-sm text-[#142819] leading-snug mt-0.5 truncate">
                  Better Incomes
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
