import React, { useState } from 'react';

export default function ProblemSection() {
  const [activeChapter, setActiveChapter] = useState(0);

  const nextChapter = () => {
    setActiveChapter((prev) => (prev + 1) % chapters.length);
  };

  const prevChapter = () => {
    setActiveChapter((prev) => (prev - 1 + chapters.length) % chapters.length);
  };

  const chapters = [
    {
      id: 'sowing',
      number: '01',
      phase: 'Sowing',
      seasonWindow: 'Pre-Monsoon (June – July)',
      icon: '/logos/leaf.png',
      rameshQuestion:
        '“A light drizzle fell yesterday, but will the monsoon hold? If I plant today and the dry spell lasts, the seeds will scorch. But if I wait, am I losing precious growing days? When should I sow?”',
      headline: 'Late sowing costs up to 51 kg/ha every day',
      stat: '51 kg/ha',
      statLabel: 'Lost Every Single Day',
      narrative:
        'Ramesh has no soil moisture probe or local moisture forecast. Unsure whether the monsoon has truly set in, he hesitates for 7 days. By the time seeds hit the furrow, his yield potential has already dropped by over 350 kg/ha before emergence.',
      theCost: 'Severe yield penalty sets in permanently before the crop even sprouts.',
      tag: 'Chapter 01: Sowing',
      tagColor: 'text-emerald-900 bg-emerald-100 border-emerald-300',
    },
    {
      id: 'irrigation',
      number: '02',
      phase: 'Irrigation',
      seasonWindow: 'Vegetative Growth (August – September)',
      icon: '/logos/water-drop.png',
      rameshQuestion:
        '“The field surface looks baked and cracked under the midday sun. Should I turn on the borewell and flood the whole acre until water stands ankle-deep, or has the root zone already had enough?”',
      headline: 'Flood irrigation wastes 60–70% of the water pumped',
      stat: '60–70%',
      statLabel: 'Water Pumped is Wasted',
      narrative:
        'Root systems only absorb moisture within their upper 30cm root zone. Flooding the field until it ponds chokes root respiration, washes away expensive urea fertilizer, and forces Ramesh’s 7.5 HP pump to drain the village aquifer for 6 redundant hours.',
      theCost: 'Depletes the local water table by 15+ feet every season while drowning roots.',
      tag: 'Chapter 02: Irrigation',
      tagColor: 'text-sky-900 bg-sky-100 border-sky-300',
    },
    {
      id: 'energy',
      number: '03',
      phase: 'Energy',
      seasonWindow: 'Dry Spells & Peak Demand (October – November)',
      icon: '/logos/lightning.png',
      rameshQuestion:
        '“The village power feeder only turns ON around 2:30 AM without warning. If I am asleep, my crops will miss their turn. Should I wedge the pump starter switch permanently ON all night?”',
      headline: "Up to 20% of India's electricity goes to farming, much of it on pumps left running overnight",
      stat: 'Up to 20%',
      statLabel: "Of India's Total Electricity",
      narrative:
        'Because three-phase electricity arrives unpredictably in the dead of night, millions of pumps run unattended for hours after fields are already saturated. Frequent voltage spikes burn out Ramesh’s motor, costing ₹8,500 to rewind while burdening state power utilities.',
      theCost: 'Causes recurrent motor burnouts and severe grid AT&C losses.',
      tag: 'Chapter 03: Energy',
      tagColor: 'text-amber-900 bg-amber-100 border-amber-300',
    },
    {
      id: 'harvest',
      number: '04',
      phase: 'After Harvest',
      seasonWindow: 'Harvest & Mandi Sale (December – January)',
      icon: '/logos/bar-chart.png',
      rameshQuestion:
        '“After five months of backbreaking work, the local trader claims my grain has 17% moisture and cuts the rate by ₹400 per quintal. Do I accept the loss or risk it rotting with nowhere to store it?”',
      headline: '₹1.53 lakh crore lost to post-harvest losses every year',
      stat: '₹1.53L Cr',
      statLabel: 'Lost Nationally Every Year',
      narrative:
        'Without satellite canopy moisture monitoring or localized weather guidance at cutting time, grain is either harvested with excessive moisture or damaged by unseasonal rains. Lacking storage facilities, Ramesh is forced into a distress sale to middlemen.',
      theCost: 'Wipes out operational profits despite record baseline harvest effort.',
      tag: 'Chapter 04: After Harvest',
      tagColor: 'text-orange-900 bg-orange-100 border-orange-300',
    },
  ];

  return (
    <section 
      id="problem" 
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
              A Season in the Life of Ramesh
            </span>
          </div>
        </div>

        {/* 2. SECTION TITLE */}
        <h2 className="font-neris font-black text-4xl sm:text-5xl md:text-6xl text-[#FCF2DF] text-center tracking-tight leading-tight">
          The Problem
        </h2>

        {/* 3. PROLOGUE: MEET RAMESH & HIS FARM (FEATURED PIXEL DIORAMA) */}
        <div className="mt-8 pixel-box-stepped w-full max-w-6xl">
          <div className="pixel-box-inner bg-[#FCF2DF] p-4 sm:p-6 md:p-8 text-stone-900">
            
            {/* Pixel Art Farm Scene + Narration Dialog */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              
              {/* Illustrated Pixel Scene of Ramesh on his farm with pixel animations */}
              <div className="lg:col-span-7 relative overflow-hidden rounded-lg border-2 border-[#121c15] shadow-md group">
                <img 
                  src="/pixel-ramesh-farm.jpg" 
                  alt="Farmer Ramesh on his 1.5 hectare farm next to his water pump"
                  className="w-full h-auto object-cover select-none pointer-events-none block"
                  style={{ imageRendering: 'pixelated' }}
                />

                {/* 1. ANIMATED PUMP STARTER BUTTONS (Red & Green Lights Blinking/Lighting on and off) */}
                {/* Red Indicator Button (x: 66.8%, y: 54.1%) */}
                <div 
                  className="absolute pointer-events-none select-none z-10"
                  style={{
                    left: '66.1%',
                    top: '53.6%',
                    width: '1.9%',
                    height: '3.1%',
                  }}
                >
                  <div className="w-full h-full rounded-full bg-red-600 pixel-pump-red-light" />
                </div>

                {/* Green Active Button (x: 69.3%, y: 54.5%) */}
                <div 
                  className="absolute pointer-events-none select-none z-10"
                  style={{
                    left: '68.5%',
                    top: '54.0%',
                    width: '1.9%',
                    height: '3.1%',
                  }}
                >
                  <div className="w-full h-full rounded-full bg-emerald-500 pixel-pump-green-light" />
                </div>



                {/* HUD Overlay Badge */}
                <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded bg-black/75 backdrop-blur-xs border border-white/20 text-[#FCF2DF] text-[11px] font-neris font-bold flex items-center gap-1.5 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Ramesh's Farmstead • 1.5 Ha</span>
                </div>
              </div>

              {/* Story Narrative Speech Box */}
              <div className="lg:col-span-5 flex flex-col justify-between h-full py-1">
                <div>
                  <div className="inline-block px-2 py-0.5 rounded bg-amber-100 border border-amber-300 font-neris font-bold text-[11px] text-amber-900 uppercase tracking-wide mb-2.5">
                    The Ground Reality
                  </div>

                  <blockquote className="font-neris font-black text-xl sm:text-2xl text-[#09150d] leading-snug tracking-tight">
                    “Meet Ramesh. 1.5 hectares, one pump, a dozen decisions every week, and no one to ask.”
                  </blockquote>

                  <p className="mt-3 font-neris font-medium text-stone-700 text-xs sm:text-sm leading-relaxed">
                    Like 120 million smallholder farmers across India, Ramesh works with tireless devotion. He wakes before dawn, walks his bunds, and tends his crops with generational grit.
                  </p>

                  <p className="mt-2.5 font-neris font-medium text-stone-700 text-xs sm:text-sm leading-relaxed">
                    Yet every single week brings critical dilemmas: <em className="text-stone-900 font-semibold">When to sow? How long to run the pump? How to handle sudden midnight power?</em> With zero data, every decision is an agonizing gamble against the elements.
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-stone-300 flex items-center justify-between">
                  <span className="text-xs font-neris font-bold text-stone-600">
                    Follow his season below:
                  </span>
                  <span className="text-xs font-neris font-black text-emerald-800 flex items-center gap-1">
                    <span>4 Critical Moments</span>
                    <span>↓</span>
                  </span>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* 4. MOMENTS IN HIS SEASON: CARD WITH QUESTION, ANSWER & HIDDEN COST */}
        <div className="mt-8 w-full max-w-6xl">
          
          {/* NAVIGATION CONTROLS (LEFT & RIGHT BUTTONS) */}
          <div className="flex items-center justify-between gap-3 mb-3.5 px-1">
            {/* Left Button */}
            <button
              onClick={prevChapter}
              className="pixel-btn-yellow group cursor-pointer"
              aria-label="Previous Dilemma"
            >
              <div className="pixel-btn-yellow-inner px-3 sm:px-4 py-1.5 flex items-center gap-1.5 sm:gap-2">
                <span className="font-neris font-bold text-sm text-stone-950 transition-transform duration-150 group-hover:-translate-x-1">
                  ←
                </span>
                <span className="font-neris font-bold text-xs sm:text-sm text-stone-950">
                  Previous Dilemma
                </span>
              </div>
            </button>

            {/* Center Moment Indicator */}
            <div className="flex flex-col items-center">
              <span className="font-neris font-black text-xs sm:text-sm text-[#FCF2DF] tracking-wide">
                Moment {chapters[activeChapter].number} of 04 • {chapters[activeChapter].phase}
              </span>
              <div className="flex items-center gap-1.5 mt-1">
                {chapters.map((chap, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveChapter(idx)}
                    className={`h-2 rounded-full transition-all cursor-pointer ${
                      idx === activeChapter 
                        ? 'w-7 bg-[#fbc33c]' 
                        : 'w-2 bg-stone-600 hover:bg-stone-400'
                    }`}
                    title={`Go to ${chap.phase}`}
                    aria-label={`Go to moment ${idx + 1}: ${chap.phase}`}
                  />
                ))}
              </div>
            </div>

            {/* Right Button */}
            <button
              onClick={nextChapter}
              className="pixel-btn-yellow group cursor-pointer"
              aria-label="Next Dilemma"
            >
              <div className="pixel-btn-yellow-inner px-3 sm:px-4 py-1.5 flex items-center gap-1.5 sm:gap-2">
                <span className="font-neris font-bold text-xs sm:text-sm text-stone-950">
                  Next Dilemma
                </span>
                <span className="font-neris font-bold text-sm text-stone-950 transition-transform duration-150 group-hover:translate-x-1">
                  →
                </span>
              </div>
            </button>
          </div>

          {/* ACTIVE CHAPTER DILEMMA CARD */}
          <div className="pixel-box-stepped w-full transition-all duration-300">
            <div className="pixel-box-inner bg-[#FCF2DF] p-4 sm:p-6 md:p-7 text-stone-900 flex flex-col gap-4">

              {/* Top Card Phase & Stat Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-stone-300">
                <div className="flex items-center gap-3.5">
                  {/* Highlighted Number Badge (replacing the image) */}
                  <div className="w-12 h-12 rounded-lg bg-[#0a160e] border-2 border-[#122216] flex items-center justify-center shrink-0 shadow-sm">
                    <span className="font-neris font-black text-2xl text-[#fbc33c] tracking-tight">
                      {chapters[activeChapter].number}
                    </span>
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-neris font-black text-xs text-emerald-900 bg-emerald-100 border border-emerald-300 px-2 py-0.5 rounded">
                        MOMENT {chapters[activeChapter].number}
                      </span>
                      <span className={`font-neris font-bold text-xs px-2 py-0.5 rounded border ${chapters[activeChapter].tagColor}`}>
                        {chapters[activeChapter].seasonWindow}
                      </span>
                    </div>
                    <h3 className="font-neris font-black text-lg sm:text-xl text-[#09150d] mt-0.5 tracking-tight">
                      Phase: {chapters[activeChapter].phase}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-3 self-end sm:self-center">
                  <div className="text-right shrink-0 bg-[#0a160e] text-[#FCF2DF] border border-[#1b2b20] px-3.5 py-1.5 rounded-lg shadow-sm">
                    <div className="font-neris font-black text-base sm:text-lg text-[#fbc33c]">
                      {chapters[activeChapter].stat}
                    </div>
                    <div className="font-neris font-bold text-[10px] text-stone-300">
                      {chapters[activeChapter].statLabel}
                    </div>
                  </div>
                </div>
              </div>

              {/* 1. ABOVE: LIKE A QUESTION — RAMESH'S DILEMMA */}
              <div className="bg-[#f5e9d2] border-2 border-[#121c15] p-3.5 sm:p-4 rounded-lg shadow-xs">
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className="font-neris font-black text-xs sm:text-sm text-amber-900 uppercase tracking-wider">
                    Ramesh's Dilemma
                  </span>
                  <span className="text-[10px] font-neris font-bold text-stone-600 px-2 py-0.5 rounded bg-black/5">
                    The Question
                  </span>
                </div>
                <p className="font-neris font-bold text-stone-900 text-sm sm:text-base italic leading-relaxed">
                  {chapters[activeChapter].rameshQuestion}
                </p>
                <div className="mt-2 pt-1.5 border-t border-[#dfd0b2] text-[10px] font-neris font-semibold text-stone-500">
                  Decision made without sensors or predictive data
                </div>
              </div>

              {/* 2. BELOW IT: THE ANSWER & DATA REALITY */}
              <div className="flex flex-col gap-1.5">
                <span className="font-neris font-black text-xs sm:text-sm text-emerald-900 uppercase tracking-wider">
                  The Answer & Reality
                </span>

                <h4 className="font-neris font-black text-base sm:text-lg text-[#0f2a18] leading-snug">
                  {chapters[activeChapter].headline}
                </h4>

                <p className="font-neris text-stone-700 text-xs sm:text-sm leading-relaxed font-medium">
                  {chapters[activeChapter].narrative}
                </p>
              </div>

              {/* 3. BOTTOM LINE: THE HIDDEN COST */}
              <div className="p-3 sm:py-2.5 sm:px-4 bg-[#e8dac0] border-2 border-[#121c15] rounded-lg flex items-center shadow-xs">
                <div className="flex-1 text-xs sm:text-sm">
                  <span className="font-neris font-black text-stone-900 uppercase tracking-wide mr-2">
                    The Hidden Cost:
                  </span>
                  <span className="font-neris font-bold text-rose-950">
                    {chapters[activeChapter].theCost}
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* 5. CORE GAP IN ONE PUNCHY LINE */}
        <div className="mt-16 w-full max-w-6xl">
          <div className="pixel-box-stepped w-full">
            <div className="pixel-box-inner bg-[#FCF2DF] p-6 sm:p-8 md:p-10 text-stone-900 text-center flex flex-col items-center">
              <span className="font-neris font-bold text-xs text-amber-900 uppercase tracking-widest bg-amber-100 border border-amber-300 px-3 py-1 rounded">
                The Core Truth
              </span>

              <h3 className="mt-4 font-neris font-black text-2xl sm:text-3xl md:text-4xl text-[#09150d] tracking-tight leading-snug">
                “The problem isn't effort. It's deciding without data.”
              </h3>

              <p className="mt-3 font-neris font-medium text-stone-600 text-xs sm:text-sm md:text-base max-w-2xl leading-relaxed">
                Ramesh and 120 million farmers like him put in backbreaking labor from dawn to dusk. What they lack isn't sweat, grit, or devotion—it's real-time visibility into root-zone moisture, crop stress, and grid synchronization.
              </p>

              <div className="mt-6">
                <button 
                  onClick={() => {
                    const el = document.getElementById('how-it-works');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="pixel-btn-yellow cursor-pointer group"
                  aria-label="See how Agrivue provides data"
                >
                  <div className="pixel-btn-yellow-inner px-5 py-2.5 flex items-center gap-2">
                    <span className="font-neris font-bold text-sm sm:text-base text-stone-950 tracking-wide">
                      See How Agrivue Guides Ramesh
                    </span>
                    <span className="font-neris font-bold text-sm sm:text-base text-stone-950 transition-transform duration-150 group-hover:translate-x-1">
                      &rarr;
                    </span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
