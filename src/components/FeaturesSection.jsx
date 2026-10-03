import React, { useState, useEffect, useRef } from 'react';

export default function FeaturesSection() {
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);

  // 6 Core Platform Features with User's Row-Wise Images
  const features = [
    {
      id: 'crop-analysis',
      stepNum: '01',
      code: 'FEAT-01',
      title: 'Crop Selection, Location & Climate Suitability',
      subtitle: 'Comprehensive Suitability Report from GPS, Soil Physics & 14-Day Weather',
      stat: '94% Suitability',
      statSub: 'Multi-Factor Farm Fit Score',
      image: '/features/row-1.png',
      icon: '/icons/pixel-weather.png',
      stageIcon: '/icons/pixel-weather.png',
      badge: 'Feature 01 • Crop Analysis',
      badgeColor: 'bg-emerald-100 text-emerald-950 border-emerald-300',
      description:
        'Combines crop variety selection with hyper-local farm GPS coordinates, topsoil vertisol characteristics, and 14-day weather forecasts to generate an overall crop suitability report before a single seed is sown.',
      specs: [
        'Synthesizes micro-climate, rainfall probability, and soil drainage',
        'Analyzes root-zone depth and moisture-holding capacity for chosen crops',
        'Evaluates seed varieties to guarantee prime germination and yield viability',
      ],
      liveTag: 'Wardha, MH • Vertisol Profile',
      advice: 'Suitability Verdict: Highly favorable sowing window. Thermal VPD (1.15 kPa) primed for rapid seed emergence.',
    },
    {
      id: 'weekly-todo',
      stepNum: '02',
      code: 'FEAT-02',
      title: 'Resource-Optimized Weekly To-Do Schedule',
      subtitle: 'Water, Fertilizer & Power Optimization with Timed Precautionary Alerts',
      stat: '59% Water Saved',
      statSub: 'Zero Wasted Sprays & Runs',
      image: '/features/row-2.png',
      icon: '/icons/pixel-calendar.png',
      stageIcon: '/icons/pixel-calendar.png',
      badge: 'Feature 02 • Weekly To-Do',
      badgeColor: 'bg-sky-100 text-sky-950 border-sky-300',
      description:
        'A dynamic, intelligence-driven weekly to-do list designed to optimize resource usage, farmer time, and precautionary measures. Coordinates irrigation schedules, fertilizer applications, and spray timings to protect crop health.',
      specs: [
        'Schedules irrigation cycles to sync with rural solar feeder power',
        'Precautionary alerts prevent chemical wash-off by delaying sprays ahead of rain',
        'Cuts manual pump operations and saves up to 14 hours of farmer labor weekly',
      ],
      liveTag: 'Week 04 • 4 Tasks Scheduled',
      advice: 'Efficiency Gain: Synchronized with rural feeder power. 14 hours manual labor eliminated this week.',
    },
    {
      id: 'visual-farm',
      stepNum: '03',
      code: 'FEAT-03',
      title: 'Gamified Multi-Crop Farm Dashboard',
      subtitle: 'Visual Bird’s-Eye Twin of the Entire Farm & Multi-Crop Growth Canopy',
      stat: '100% Whole Farm',
      statSub: 'Visual Multi-Crop Coverage',
      image: '/features/row-3.png',
      icon: '/crops/paddy.png',
      stageIcon: '/crops/paddy.png',
      badge: 'Feature 03 • Visual Farm',
      badgeColor: 'bg-amber-100 text-amber-950 border-amber-300',
      description:
        'A gamified visual interface displaying the farmer’s entire acreage and all planted crops simultaneously. Tracks multi-crop vegetative growth, canopy development, and harvest timelines in an intuitive pixel dashboard.',
      specs: [
        'Visual bird’s-eye perspective shows all farm quadrants and crop varieties',
        'Simultaneous growth indicators for multi-crop setups (Paddy, Soybean, Cotton)',
        'Gamified progress bars and canopy health scores reward optimal management',
      ],
      liveTag: '3 Plots Active • Canopy Level 4',
      advice: 'Farm Canopy Level 4: Whole-field multi-crop synchronization unlocked +18% harvest logistics efficiency.',
    },
    {
      id: 'infection-detection',
      stepNum: '04',
      code: 'FEAT-04',
      title: 'Early Infection Detection & Rapid Mitigation',
      subtitle: 'Weekly Leaf Scans, Early Disease Spotting & Targeted Loss Minimization',
      stat: '48-Hr Alert',
      statSub: 'Stops 35% Yield Loss',
      image: '/features/row-4.png',
      icon: '/logos/leaf.png',
      stageIcon: '/logos/leaf.png',
      badge: 'Feature 04 • Infection Detection',
      badgeColor: 'bg-rose-100 text-rose-950 border-rose-300',
      description:
        'Weekly leaf and canopy camera captures detect fungal infections, rust, and pests at the microscopic stage (<11% coverage). Instantly prescribes targeted organic or chemical mitigation recipes to minimize losses before spread.',
      specs: [
        'Weekly smartphone/camera scan analyzes 40+ Indian crop pathogens',
        'Provides immediate curative spray recipes with precise dosage calculations',
        'Prevents outbreak escalations that could destroy up to 35% of standing yield',
      ],
      liveTag: 'Weekly Scan #03 • Rust Detected',
      advice: 'Immediate Curative Measure: Spray 2.5ml Mancozeb/L tomorrow at 07:00 AM. 35% crop loss averted.',
    },
    {
      id: 'multilingual-chatbot',
      stepNum: '05',
      code: 'FEAT-05',
      title: 'Multilingual Agronomic Voice & Chatbot',
      subtitle: 'Conversational AI Asking & Answering Daily To-Do and Crop Queries',
      stat: '10+ Languages',
      statSub: 'Hindi, Marathi, Telugu & More',
      image: '/features/row-5.png',
      icon: '/icons/life-cycle/chatbot-pixel.png',
      stageIcon: '/icons/life-cycle/chatbot-pixel.png',
      badge: 'Feature 05 • Multilingual Chatbot',
      badgeColor: 'bg-purple-100 text-purple-950 border-purple-300',
      description:
        'A 24/7 multilingual conversational chatbot that proactively asks and answers questions regarding daily to-dos, spray timings, fertilizer queries, and weather precautions in the farmer’s native language.',
      specs: [
        'Native voice & text support in Hindi, Marathi, Telugu, Tamil, and English',
        'Proactively queries farmers on task completion and crop observations',
        'Provides instant agronomic advice without waiting for physical extension officers',
      ],
      liveTag: 'AI Active • Voice / Text Q&A',
      advice: 'Multilingual Intelligence: Instant dialect voice guidance for rain precautions and daily fertilizer mixing.',
    },
    {
      id: 'inventory-shelflife',
      stepNum: '06',
      code: 'FEAT-06',
      title: 'Inventory & Shelf Life Management System',
      subtitle: 'Moisture Threshold Curing, Spoilage Prevention & Prime Mandi Window',
      stat: '180 Days Safe',
      statSub: 'Zero Spoilage Guarantee',
      image: '/features/row-6.png',
      icon: '/icons/life-cycle/inventory-pixel.png',
      stageIcon: '/icons/life-cycle/inventory-pixel.png',
      badge: 'Feature 06 • Inventory & Storage',
      badgeColor: 'bg-emerald-100 text-emerald-950 border-emerald-300',
      description:
        'End-to-end post-harvest inventory and shelf-life tracking. Monitors storage moisture (<12%) to prevent fungal aflatoxin and weevil attacks, while analyzing mandi price trends to guide farmers on the optimal selling window.',
      specs: [
        'Real-time moisture and humidity tracking prevents post-harvest storage rot',
        'Calculates safe storage shelf life and hermetic bagging longevity',
        'Aligns sales with regional mandi price peaks to eliminate distress selling',
      ],
      liveTag: 'Bin #02 • 11.8% Safe Moisture',
      advice: 'Net Mandi Gain: Avoided distress sale. Estimated ₹47,600 additional profit by holding under hermetic storage.',
    },
  ];

  // Track scroll position to update center line height and active feature
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate progress relative to the features list
      const totalHeight = rect.height;
      const visibleOffset = windowHeight * 0.5 - rect.top;
      const progress = Math.min(100, Math.max(0, (visibleOffset / totalHeight) * 100));

      setScrollProgress(progress);

      // Determine active feature
      const stepFraction = 100 / features.length;
      const activeIdx = Math.min(
        features.length - 1,
        Math.max(0, Math.floor(progress / stepFraction))
      );
      setActiveFeatureIndex(activeIdx);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [features.length]);

  return (
    <section 
      id="features" 
      className="relative w-full bg-black text-[#FCF2DF] pt-6 sm:pt-8 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-12 overflow-hidden border-t-4 border-stone-900"
    >
      {/* Background Pixel Grid Pattern (Clean White Grids on Black) */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.22) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.22) 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="relative max-w-7xl mx-auto flex flex-col items-center">

        {/* 1. SECTION BADGE */}
        <div className="pixel-box-stepped max-w-fit mb-4">
          <div className="pixel-box-inner bg-[#FCF2DF] px-4 py-1 flex items-center justify-center">
            <span className="font-neris font-bold text-xs sm:text-sm text-stone-900 tracking-wider uppercase select-none">
              Platform Features • 6 Core Capabilities
            </span>
          </div>
        </div>

        {/* 2. SECTION TITLE */}
        <h2 className="font-neris font-black text-4xl sm:text-5xl md:text-6xl text-[#FCF2DF] text-center tracking-tight leading-tight">
          Platform Features
        </h2>

        {/* Subtitle with solid black backdrop to mask grid lines */}
        <div className="relative z-10 max-w-3xl mx-auto mt-4 mb-8 text-center px-6 py-4 bg-black rounded-xl shadow-[0_0_40px_20px_rgba(0,0,0,1)]">
          <p className="font-neris text-sm sm:text-base md:text-lg text-stone-200 leading-relaxed font-normal">
            From <span className="text-sky-400 font-bold">crop analysis</span> and <span className="text-sky-400 font-bold">weekly to-do schedules</span> to <span className="text-sky-400 font-bold">gamified farm visuals</span>, <span className="text-sky-400 font-bold">infection detection</span>, <span className="text-sky-400 font-bold">multilingual AI chat</span>, and <span className="text-sky-400 font-bold">inventory shelf life control</span>.
          </p>
        </div>

        {/* 3. VERTICAL CENTER TIMELINE CONTAINER */}
        <div ref={containerRef} className="relative w-full max-w-6xl mt-4">

          {/* Central Background Track Line */}
          <div className="absolute left-6 md:left-1/2 top-6 bottom-6 w-1 -translate-x-1/2 bg-[#1b3424] border-x border-[#284f36]" />

          {/* Active Animated Progress Fill Line */}
          <div 
            className="absolute left-6 md:left-1/2 top-6 w-1.5 -translate-x-1/2 bg-gradient-to-b from-[#10b981] via-[#fbc33c] to-[#10b981] shadow-[0_0_14px_rgba(251,195,60,0.7)] transition-all duration-150 rounded-full"
            style={{ height: `${Math.max(4, Math.min(100, scrollProgress))}%` }}
          />

          {/* Feature Rows (Row by Row) */}
          <div className="space-y-16 sm:space-y-24">
            {features.map((feat, idx) => {
              const isEven = idx % 2 === 1;
              const isPassed = activeFeatureIndex >= idx;
              const isCurrent = activeFeatureIndex === idx;

              return (
                <div 
                  key={feat.id}
                  className="relative flex flex-col md:flex-row items-center gap-6 md:gap-0"
                >
                  {/* LEFT COLUMN (Desktop: Card for Odd / Visual for Even) */}
                  <div className="w-full md:w-1/2 md:pr-14 pl-16 md:pl-0 order-2 md:order-1">
                    {!isEven ? (
                      /* Main Feature Card (Left for Odd Rows: 1, 3, 5) */
                      <div className="pixel-box-stepped w-full transition-all duration-300">
                        <div className="pixel-box-inner bg-[#FCF2DF] p-5 sm:p-6 text-stone-900 border-2 border-[#121c15] shadow-md">
                          
                          {/* Card Header */}
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-[11px] font-neris font-black text-stone-600 uppercase tracking-wider">
                              ROW {feat.stepNum} // {feat.code}
                            </span>
                            <span className={`text-[10px] font-neris font-black px-2 py-0.5 rounded border ${feat.badgeColor}`}>
                              {feat.badge}
                            </span>
                          </div>

                          {/* Icon & Title */}
                          <div className="flex items-start gap-3 mb-3">
                            <div className="w-12 h-12 rounded-lg bg-[#ede0c7] border border-[#dfd0b2] flex items-center justify-center p-2 shrink-0">
                              <img 
                                src={feat.icon} 
                                alt={feat.title} 
                                className="w-full h-full object-contain select-none pointer-events-none"
                                style={{ imageRendering: 'pixelated' }}
                              />
                            </div>
                            <div>
                              <h3 className="font-neris font-black text-base sm:text-lg text-stone-950 leading-snug">
                                {feat.title}
                              </h3>
                              <span className="font-neris font-bold text-xs text-emerald-950 block mt-0.5">
                                {feat.subtitle}
                              </span>
                            </div>
                          </div>

                          {/* Description */}
                          <p className="font-neris text-xs sm:text-sm text-stone-800 font-medium leading-relaxed mb-4">
                            {feat.description}
                          </p>

                          {/* Bullet Specs */}
                          <div className="space-y-1.5 pt-3 border-t border-[#dfd0b2] mb-4">
                            {feat.specs.map((spec, sIdx) => (
                              <div key={sIdx} className="flex items-start gap-1.5 text-[11.5px] font-neris text-stone-900">
                                <span className="text-emerald-800 font-black mt-0.5 shrink-0">•</span>
                                <span className="leading-snug">{spec}</span>
                              </div>
                            ))}
                          </div>

                          {/* Card Footer Stat */}
                          <div className="pt-3 border-t-2 border-[#121c15] flex items-center justify-between gap-2">
                            <div>
                              <span className="font-neris font-black text-sm sm:text-base text-stone-950 block leading-tight">
                                {feat.stat}
                              </span>
                              <span className="text-[10px] font-neris font-medium text-stone-600 block">
                                {feat.statSub}
                              </span>
                            </div>
                            <span className="text-[10px] font-neris font-bold bg-[#142619] text-[#FCF2DF] px-2 py-1 rounded border border-[#2b4d34] shrink-0">
                              {feat.liveTag}
                            </span>
                          </div>

                        </div>
                      </div>
                    ) : (
                      /* Clean Image with Padding (Left for Even Rows: 2, 4, 6) */
                      <div className="w-full p-2 sm:p-4 flex items-center justify-center">
                        <img 
                          src={feat.image} 
                          alt={`Row ${feat.stepNum} - ${feat.title}`} 
                          className="w-full h-auto max-h-[420px] object-contain rounded-xl select-none pointer-events-none drop-shadow-2xl transition-transform duration-300 hover:scale-[1.02]"
                          style={{ imageRendering: 'pixelated' }}
                          loading="lazy"
                        />
                      </div>
                    )}
                  </div>

                  {/* CENTER LINE NODE: Pixel Image Icon (NO Title Clutter) */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
                    <div 
                      className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center p-2.5 transition-all duration-300 border-2 select-none shadow-md ${
                        isCurrent
                          ? 'bg-[#FCF2DF] border-[#fbc33c] scale-110 shadow-[0_0_24px_rgba(251,195,60,0.85)] ring-4 ring-emerald-400/50'
                          : isPassed
                          ? 'bg-[#FCF2DF] border-emerald-600 shadow-sm'
                          : 'bg-[#FCF2DF]/90 border-stone-800'
                      }`}
                    >
                      <img
                        src={feat.stageIcon}
                        alt={`Row ${feat.stepNum}`}
                        className="w-full h-full object-contain pointer-events-none select-none"
                        style={{ imageRendering: 'pixelated' }}
                      />
                    </div>
                  </div>

                  {/* RIGHT COLUMN (Desktop: Visual for Odd / Card for Even) */}
                  <div className="w-full md:w-1/2 md:pl-14 pl-16 md:pl-0 order-3 md:order-2">
                    {isEven ? (
                      /* Main Feature Card (Right for Even Rows: 2, 4, 6) */
                      <div className="pixel-box-stepped w-full transition-all duration-300">
                        <div className="pixel-box-inner bg-[#FCF2DF] p-5 sm:p-6 text-stone-900 border-2 border-[#121c15] shadow-md">
                          
                          {/* Card Header */}
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-[11px] font-neris font-black text-stone-600 uppercase tracking-wider">
                              ROW {feat.stepNum} // {feat.code}
                            </span>
                            <span className={`text-[10px] font-neris font-black px-2 py-0.5 rounded border ${feat.badgeColor}`}>
                              {feat.badge}
                            </span>
                          </div>

                          {/* Icon & Title */}
                          <div className="flex items-start gap-3 mb-3">
                            <div className="w-12 h-12 rounded-lg bg-[#ede0c7] border border-[#dfd0b2] flex items-center justify-center p-2 shrink-0">
                              <img 
                                src={feat.icon} 
                                alt={feat.title} 
                                className="w-full h-full object-contain select-none pointer-events-none"
                                style={{ imageRendering: 'pixelated' }}
                              />
                            </div>
                            <div>
                              <h3 className="font-neris font-black text-base sm:text-lg text-stone-950 leading-snug">
                                {feat.title}
                              </h3>
                              <span className="font-neris font-bold text-xs text-emerald-950 block mt-0.5">
                                {feat.subtitle}
                              </span>
                            </div>
                          </div>

                          {/* Description */}
                          <p className="font-neris text-xs sm:text-sm text-stone-800 font-medium leading-relaxed mb-4">
                            {feat.description}
                          </p>

                          {/* Bullet Specs */}
                          <div className="space-y-1.5 pt-3 border-t border-[#dfd0b2] mb-4">
                            {feat.specs.map((spec, sIdx) => (
                              <div key={sIdx} className="flex items-start gap-1.5 text-[11.5px] font-neris text-stone-900">
                                <span className="text-emerald-800 font-black mt-0.5 shrink-0">•</span>
                                <span className="leading-snug">{spec}</span>
                              </div>
                            ))}
                          </div>

                          {/* Card Footer Stat */}
                          <div className="pt-3 border-t-2 border-[#121c15] flex items-center justify-between gap-2">
                            <div>
                              <span className="font-neris font-black text-sm sm:text-base text-stone-950 block leading-tight">
                                {feat.stat}
                              </span>
                              <span className="text-[10px] font-neris font-medium text-stone-600 block">
                                {feat.statSub}
                              </span>
                            </div>
                            <span className="text-[10px] font-neris font-bold bg-[#142619] text-[#FCF2DF] px-2 py-1 rounded border border-[#2b4d34] shrink-0">
                              {feat.liveTag}
                            </span>
                          </div>

                        </div>
                      </div>
                    ) : (
                      /* Clean Image with Padding (Right for Odd Rows: 1, 3, 5) */
                      <div className="w-full p-2 sm:p-4 flex items-center justify-center">
                        <img 
                          src={feat.image} 
                          alt={`Row ${feat.stepNum} - ${feat.title}`} 
                          className="w-full h-auto max-h-[420px] object-contain rounded-xl select-none pointer-events-none drop-shadow-2xl transition-transform duration-300 hover:scale-[1.02]"
                          style={{ imageRendering: 'pixelated' }}
                          loading="lazy"
                        />
                      </div>
                    )}
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
