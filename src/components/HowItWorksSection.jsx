import React, { useState } from 'react';

export default function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0);

  // Step 1: Crop Carousel State
  const crops = [
    {
      id: 'paddy',
      name: 'Paddy (Rice)',
      variety: 'Basmati / IR-64',
      season: 'Kharif',
      duration: '125–135 Days',
      waterNeed: 'High (1100–1250 mm)',
      soilPref: 'Clay / Vertisol',
      tag: 'Cereal Staple',
      image: '/crops/paddy.png',
    },
    {
      id: 'cotton',
      name: 'Cotton',
      variety: 'Bt Cotton Hybrid',
      season: 'Kharif',
      duration: '150–175 Days',
      waterNeed: 'Medium (650–800 mm)',
      soilPref: 'Deep Black Soil',
      tag: 'Cash Crop',
      image: '/crops/cotton.png',
    },
    {
      id: 'wheat',
      name: 'Wheat',
      variety: 'Sharbati / Lok-1',
      season: 'Rabi',
      duration: '110–125 Days',
      waterNeed: 'Moderate (400–500 mm)',
      soilPref: 'Loam / Clay Loam',
      tag: 'Winter Cereal',
      image: '/crops/wheat.png',
    },
    {
      id: 'soybean',
      name: 'Soybean',
      variety: 'JS 335 / JS 95-60',
      season: 'Kharif',
      duration: '90–105 Days',
      waterNeed: 'Moderate (450–550 mm)',
      soilPref: 'Well-Drained Loam',
      tag: 'Oilseed Legume',
      image: '/crops/soybean.png',
    },
    {
      id: 'maize',
      name: 'Maize',
      variety: 'Hybrid Sweet Corn',
      season: 'Kharif / Rabi',
      duration: '95–110 Days',
      waterNeed: 'Medium (500–600 mm)',
      soilPref: 'Deep Fertile Loam',
      tag: 'High Biomass',
      image: '/crops/maize.png',
    },
    {
      id: 'mustard',
      name: 'Mustard',
      variety: 'Pusa Bold',
      season: 'Rabi',
      duration: '105–120 Days',
      waterNeed: 'Low (250–350 mm)',
      soilPref: 'Light to Medium Loam',
      tag: 'Oilseed',
      image: '/crops/mustard.png',
    },
  ];

  // Dynamic Multi-Factor Suitability Data per Crop (Clean Numbers for Circular Badges)
  const cropAnalyses = {
    paddy: {
      overallScore: '92',
      weather: {
        score: '94',
        current: '28°C • 62% Humidity • Warm & Sunny',
        status: 'Optimal thermal range for vegetative tillering',
        metric: 'VPD: 1.15 kPa (Healthy)',
      },
      location: {
        score: '91',
        current: 'Sehore, MP • Deep Black Vertisol (pH 7.2)',
        status: 'High clay moisture retention reduces irrigation frequency',
        metric: 'Field Capacity: 41%',
      },
      time: {
        score: '88',
        current: 'Pre-Monsoon Window • 5 Days Remaining',
        status: 'Early furrowing synchronizes flowering before dry spells',
        metric: 'Optimal Sowing Window',
      },
      suggestions: {
        seed: 'Inoculate seed with Trichoderma (4g/kg) before furrowing to protect roots.',
        spacing: 'Target 32 kg/ha seed rate with 20cm row spacing for canopy closure.',
        nutrition: 'Apply 50 kg DAP at sowing; defer urea 21 days for best nitrogen uptake.',
      },
    },
    cotton: {
      overallScore: '89',
      weather: {
        score: '92',
        current: '31°C • 55% Humidity • Dry & Sunny',
        status: 'Abundant sunshine drives vegetative square formation',
        metric: 'Zero Mildew Risk',
      },
      location: {
        score: '95',
        current: 'Black Cotton Vertisol • High Aeration',
        status: 'Deep taproot penetration without subsoil compaction',
        metric: 'Organic Carbon: 0.62%',
      },
      time: {
        score: '82',
        current: 'Early Kharif Window • 3 Days Left',
        status: 'Furrow immediately before heavy rainfall to avoid seed rot',
        metric: 'Priority Sowing Window',
      },
      suggestions: {
        seed: 'Treat delinted seeds with Imidacloprid (5g/kg) to repel early sap-sucking pests.',
        spacing: 'Maintain 90cm x 60cm wide spacing to maximize sunlight into lower bolls.',
        nutrition: 'Apply 60 kg N, 30 kg P, 30 kg K split into three balanced applications.',
      },
    },
    wheat: {
      overallScore: '95',
      weather: {
        score: '96',
        current: '22°C Day / 14°C Night • Cool & Crisp',
        status: 'Cool nights boost tillering and crown root vigor',
        metric: 'Thermal Range: Prime',
      },
      location: {
        score: '92',
        current: 'Well-Drained Loamy Silt • Neutral pH',
        status: 'Prevents water stagnation during early rooting stage',
        metric: 'Percolation Rate: Good',
      },
      time: {
        score: '94',
        current: 'November Rabi Window • Prime Entry',
        status: 'Sowing now shields grain filling from late season heat',
        metric: 'Zero Terminal Heat Risk',
      },
      suggestions: {
        seed: 'Treat seed with Carboxin (2g/kg) to eliminate loose smut and soil fungi.',
        spacing: 'Drill at 100 kg/ha with 20cm line spacing at 4–5cm depth into moist soil.',
        nutrition: 'Apply full P & K + 1/3rd N as basal; top-dress remaining N at first watering.',
      },
    },
    soybean: {
      overallScore: '90',
      weather: {
        score: '91',
        current: '27°C • 68% Humidity • Intermittent Drizzle',
        status: 'Moist seedbed ensures 90%+ rapid uniform emergence',
        metric: 'Ambient Moisture: Ideal',
      },
      location: {
        score: '93',
        current: 'Medium Deep Vertisol • Well Tilled',
        status: 'Favors natural nitrogen-fixing rhizobia nodulation',
        metric: 'Soil Texture: Medium Loam',
      },
      time: {
        score: '87',
        current: 'Monsoon Break Window • 4 Days Left',
        status: 'Timely planting matches 95-day maturity cycle',
        metric: 'Optimal Entry Window',
      },
      suggestions: {
        seed: 'Inoculate with Rhizobium japonicum and PSB culture 2 hours prior to furrowing.',
        spacing: 'Sow at 70 kg/ha with 45cm row spacing for rapid canopy weed suppression.',
        nutrition: 'Apply 20 kg N + 60 kg P2O5 + 20 kg Sulphur/ha as basal starter dressing.',
      },
    },
    maize: {
      overallScore: '88',
      weather: {
        score: '90',
        current: '29°C • 60% Humidity • High Sunshine',
        status: 'High solar radiation accelerates photosynthesis and biomass',
        metric: 'Solar Index: 8.5 kWh/m²',
      },
      location: {
        score: '86',
        current: 'Deep Fertile Loam • Raised Bed',
        status: 'Good drainage protects sensitive root nodes from logging',
        metric: 'Drainage Score: High',
      },
      time: {
        score: '91',
        current: 'Pre-Monsoon Window • 6 Days Remaining',
        status: 'Ensures tassel emergence before mid-season peak rain',
        metric: 'GDD Accumulation: On Track',
      },
      suggestions: {
        seed: 'Seed treatment with Thiram (2g/kg) prevents damping-off in warm soils.',
        spacing: 'Plant 60cm row-to-row and 20cm plant-to-plant on ridges for drainage.',
        nutrition: 'Split nitrogen: 1/3rd at sowing, 1/3rd knee-high stage, 1/3rd at tasseling.',
      },
    },
    mustard: {
      overallScore: '93',
      weather: {
        score: '95',
        current: '23°C Mild Day / 13°C Night • Dry Weather',
        status: 'Dry air prevents early aphid pest infestation',
        metric: 'Aphid Risk: Very Low',
      },
      location: {
        score: '90',
        current: 'Light to Medium Loam • Residual Moisture',
        status: 'High root efficiency with minimal water input',
        metric: 'Residual Water: 35%',
      },
      time: {
        score: '94',
        current: 'Mid-October Window • Prime Rabi Window',
        status: 'Maximizes oil content and golden blossom density',
        metric: 'Peak Season Entry',
      },
      suggestions: {
        seed: 'Treat seed with Apron 35 SD (6g/kg) to shield against white rust disease.',
        spacing: 'Maintain 30cm row spacing; thin seedlings to 10cm apart at 15 days.',
        nutrition: 'Apply 40 kg Sulphur/ha alongside balanced NPK to boost oil synthesis.',
      },
    },
  };

  const [selectedCropIndex, setSelectedCropIndex] = useState(0);
  const [addedCrops, setAddedCrops] = useState(['Paddy (Rice)']);
  const [showAddSuccess, setShowAddSuccess] = useState(false);

  const currentCropId = crops[selectedCropIndex]?.id || 'paddy';
  const currAnalysis = cropAnalyses[currentCropId] || cropAnalyses.paddy;

  const handleAddCrop = () => {
    const cropName = crops[selectedCropIndex].name;
    if (!addedCrops.includes(cropName)) {
      setAddedCrops((prev) => [...prev, cropName]);
    }
    setShowAddSuccess(true);
    setTimeout(() => setShowAddSuccess(false), 2800);
  };

  // Step 3: Interactive To-Do List state (Simple, farmer-friendly daily routine)
  const [todos, setTodos] = useState([
    {
      id: 1,
      time: '06:30 AM',
      task: 'Check field soil — top layer is damp and healthy from overnight dew',
      tag: 'Morning Walk',
      metric: 'Soil is Damp',
      done: true,
    },
    {
      id: 2,
      time: '10:45 AM',
      task: 'Turn on water pump for 2 hours 45 mins (gives crops 38,500 L)',
      tag: 'Watering',
      metric: 'Reminder: 10:45 AM',
      done: true,
    },
    {
      id: 3,
      time: '01:30 PM',
      task: 'Turn off the pump — field is fully watered, saves power & prevents pooling',
      tag: 'Pump Off',
      metric: 'Auto-Off Alert',
      done: false,
    },
    {
      id: 4,
      time: '05:00 PM',
      task: 'Spread 1 bag of fertilizer along crop rows before tomorrow’s rain',
      tag: 'Fertilizer',
      metric: 'Before Rain',
      done: false,
    },
  ]);

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
  };

  const nextStep = () => {
    setActiveStep((prev) => (prev + 1) % steps.length);
  };

  const prevStep = () => {
    setActiveStep((prev) => (prev - 1 + steps.length) % steps.length);
  };

  const steps = [
    {
      number: '01',
      title: 'Profile Building',
      badge: 'Step 01 • Intake & Environment',
      summary:
        'Select target crops through an interactive carousel with farm location and real-time localized weather updates.',
    },
    {
      number: '02',
      title: 'Crop Analysis',
      badge: 'Step 02 • Multi-Factor AI Report',
      summary:
        'A comprehensive suitability report evaluating localized weather, soil physics, and seasonal timing with customized agronomic recommendations.',
    },
    {
      number: '03',
      title: 'Daily Routine Planner',
      badge: 'Step 03 • Actionable Operations',
      summary:
        'Precision to-do calendar with optimized numbers (litres of water, pump runtime, feeder timings) and weather-triggered precautionary safeguards.',
    },
    {
      number: '04',
      title: 'Weekly Visual Analysis',
      badge: 'Step 04 • Growth & Pest Surveillance',
      summary:
        'Macro-canopy inspection from afar to model growth steps until harvest, coupled with close-up computer vision for immediate pest mitigation.',
    },
  ];

  return (
    <section 
      id="how-it-works" 
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
              The Agrivue Workflow
            </span>
          </div>
        </div>

        {/* 2. SECTION TITLE */}
        <h2 className="font-neris font-black text-4xl sm:text-5xl md:text-6xl text-[#FCF2DF] text-center tracking-tight leading-tight">
          How It Works
        </h2>

        {/* 3. SUBTITLE */}
        <p className="mt-3 font-neris font-medium text-stone-300 text-center text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed">
          From crop selection and environmental analysis to daily optimized routines and computer vision inspection.
        </p>

        {/* 4. WORKFLOW CONTAINER (MATCHING MAX-W-6XL OF THE PROBLEM SECTION) */}
        <div className="mt-10 w-full max-w-6xl">

          {/* TOP NAVIGATION BAR WITH LEFT/RIGHT BUTTONS & STEP INDICATORS */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-4 px-1">
            
            {/* Left Button */}
            <button
              onClick={prevStep}
              className="pixel-btn-yellow group cursor-pointer w-full sm:w-auto"
              aria-label="Previous Step"
            >
              <div className="pixel-btn-yellow-inner px-4 py-1.5 flex items-center justify-center gap-2">
                <span className="font-neris font-bold text-sm text-stone-950 transition-transform duration-150 group-hover:-translate-x-1">
                  ←
                </span>
                <span className="font-neris font-bold text-xs sm:text-sm text-stone-950">
                  Previous Step
                </span>
              </div>
            </button>

            {/* Clickable Step Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              {steps.map((st, idx) => (
                <button
                  key={st.number}
                  onClick={() => setActiveStep(idx)}
                  className={`font-neris text-xs font-bold px-3 py-1.5 rounded transition-all cursor-pointer border ${
                    idx === activeStep
                      ? 'bg-[#fbc33c] text-stone-950 border-[#fbc33c] shadow-sm font-black'
                      : 'bg-stone-900/90 text-stone-300 border-stone-800 hover:border-stone-600 hover:text-white'
                  }`}
                >
                  <span className="opacity-75 mr-1.5">{st.number}</span>
                  <span>{st.title}</span>
                </button>
              ))}
            </div>

            {/* Right Button */}
            <button
              onClick={nextStep}
              className="pixel-btn-yellow group cursor-pointer w-full sm:w-auto"
              aria-label="Next Step"
            >
              <div className="pixel-btn-yellow-inner px-4 py-1.5 flex items-center justify-center gap-2">
                <span className="font-neris font-bold text-xs sm:text-sm text-stone-950">
                  Next Step
                </span>
                <span className="font-neris font-bold text-sm text-stone-950 transition-transform duration-150 group-hover:translate-x-1">
                  →
                </span>
              </div>
            </button>

          </div>

          {/* MAIN STEP CARD IN CREAM #FCF2DF (STEPPED PIXEL BOX) */}
          <div className="pixel-box-stepped w-full transition-all duration-300">
            <div className="pixel-box-inner bg-[#FCF2DF] p-5 sm:p-7 md:p-8 text-stone-900 flex flex-col gap-5">

              {/* CARD HEADER: HIGHLIGHTED NUMBER + TITLE + BADGE */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-stone-300">
                <div className="flex items-center gap-3.5">
                  
                  {/* Highlighted Number Badge */}
                  <div className="w-12 h-12 rounded-lg bg-[#0a160e] border-2 border-[#122216] flex items-center justify-center shrink-0 shadow-sm">
                    <span className="font-neris font-black text-2xl text-[#fbc33c] tracking-tight">
                      {steps[activeStep].number}
                    </span>
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-neris font-black text-xs text-emerald-900 bg-emerald-100 border border-emerald-300 px-2 py-0.5 rounded">
                        STAGE {steps[activeStep].number}
                      </span>
                      <span className="font-neris font-bold text-xs text-stone-700 bg-stone-200/80 border border-stone-300 px-2 py-0.5 rounded">
                        {steps[activeStep].badge}
                      </span>
                    </div>
                    <h3 className="font-neris font-black text-xl sm:text-2xl text-[#09150d] mt-0.5 tracking-tight">
                      {steps[activeStep].title}
                    </h3>
                  </div>

                </div>

                <div className="text-left sm:text-right shrink-0 bg-[#0a160e] text-[#FCF2DF] border border-[#1b2b20] px-3.5 py-1.5 rounded-lg shadow-sm max-w-sm">
                  <div className="font-neris font-black text-xs sm:text-sm text-[#fbc33c]">
                    Operational Flow
                  </div>
                  <div className="font-neris font-medium text-[11px] text-stone-300 leading-tight">
                    {steps[activeStep].summary}
                  </div>
                </div>
              </div>

              {/* ==============================================================
                  STAGE 1: PROFILE BUILDING (CAROUSEL + LOCATION & WEATHER)
                  ============================================================== */}
              {activeStep === 0 && (() => {
                const prevIndex = (selectedCropIndex - 1 + crops.length) % crops.length;
                const centerIndex = selectedCropIndex;
                const nextIndex = (selectedCropIndex + 1) % crops.length;

                return (
                  <div className="flex flex-col gap-4">
                    
                    {/* 1. CAROUSEL HEADER */}
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2">
                        <span className="font-neris font-black text-xs sm:text-sm text-stone-900 uppercase tracking-wider">
                          Crop Selection Carousel
                        </span>
                        <span className="text-[10px] font-neris font-bold text-amber-900 bg-amber-100 border border-amber-300 px-2 py-0.5 rounded">
                          Center in Focus
                        </span>
                      </div>

                      {/* Step dot indicator */}
                      <div className="flex items-center gap-1.5">
                        {crops.map((c, i) => (
                          <button
                            key={i}
                            onClick={() => setSelectedCropIndex(i)}
                            className={`h-2 rounded-full transition-all cursor-pointer ${
                              i === selectedCropIndex 
                                ? 'w-6 bg-[#0a160e]' 
                                : 'w-2 bg-stone-300 hover:bg-stone-400'
                            }`}
                            title={`Go to ${c.name}`}
                            aria-label={`Go to ${c.name}`}
                          />
                        ))}
                      </div>
                    </div>

                    {/* 2. THE 3-ELEMENT CAROUSEL: SOFT-BLURRED PREVIOUS - [←] - HIGHLIGHTED CENTER - [→] - SOFT-BLURRED NEXT */}
                    <div className="relative flex items-center justify-center gap-2 sm:gap-4 md:gap-5 py-3 overflow-hidden select-none">
                      
                      {/* Left / Previous Card (Subtly Softened, Readable, Scaled 0.92) */}
                      <div
                        onClick={() => setSelectedCropIndex(prevIndex)}
                        className="w-1/4 sm:w-1/3 max-w-[220px] shrink-0 p-3 sm:p-4 rounded-xl bg-[#f5e9d2] border-2 border-stone-400/80 filter blur-[0.75px] opacity-70 scale-[0.92] transition-all duration-300 cursor-pointer hover:opacity-100 hover:blur-none hover:scale-[0.95] hidden sm:flex flex-col justify-between shadow-xs"
                        title={`Click to select ${crops[prevIndex].name}`}
                      >
                        <div>
                          <div className="flex items-center justify-between gap-1 mb-2">
                            <span className="text-[10px] font-neris font-bold px-2 py-0.5 rounded bg-stone-300 text-stone-700">
                              {crops[prevIndex].season}
                            </span>
                            <span className="text-[10px] font-neris font-bold text-stone-500">
                              {crops[prevIndex].tag}
                            </span>
                          </div>

                          {/* Pixel Crop Image Thumbnail - Full size, no padding, no boundaries */}
                          <div className="w-16 h-16 sm:w-18 sm:h-18 mx-auto mb-2 flex items-center justify-center">
                            <img
                              src={crops[prevIndex].image}
                              alt={crops[prevIndex].name}
                              className="w-full h-full object-contain select-none pointer-events-none"
                              style={{ imageRendering: 'pixelated' }}
                            />
                          </div>

                          <div className="font-neris font-black text-sm sm:text-base text-stone-900 leading-tight text-center">
                            {crops[prevIndex].name}
                          </div>
                          <div className="text-[11px] font-neris font-medium text-stone-600 mt-0.5 text-center">
                            {crops[prevIndex].variety}
                          </div>
                        </div>

                        <div className="mt-3 pt-2 border-t border-stone-300 text-[10px] font-neris font-bold text-stone-500 text-center">
                          {crops[prevIndex].duration}
                        </div>
                      </div>

                      {/* LEFT ARROW CIRCULAR BUTTON */}
                      <button
                        onClick={() => setSelectedCropIndex(prevIndex)}
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#fbc33c] hover:bg-[#ffd25e] text-stone-950 border-2 border-[#121c15] shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-150 flex items-center justify-center shrink-0 z-20 mx-1 sm:mx-3 cursor-pointer group"
                        aria-label="Previous Crop"
                        title="Previous Crop"
                      >
                        <span className="font-neris font-black text-lg sm:text-xl transition-transform duration-150 group-hover:-translate-x-0.5 select-none leading-none">
                          ←
                        </span>
                      </button>

                      {/* Center Card (HIGHLIGHTED, Full Focus, Scaled Up, Active Ring with Pixel Image) */}
                      <div className="w-full sm:w-2/5 max-w-[340px] shrink-0 p-4 sm:p-5 rounded-2xl bg-[#0a160e] text-[#FCF2DF] border-3 border-[#121c15] shadow-2xl scale-100 sm:scale-105 transition-all duration-300 relative z-10 ring-4 ring-[#fbc33c]/90">
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <span className="font-neris font-black text-xs text-stone-950 bg-[#fbc33c] px-2.5 py-1 rounded shadow-xs uppercase tracking-wider">
                            {crops[centerIndex].season} Season
                          </span>
                          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-400 text-[10px] font-neris font-bold">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                            <span>In Focus</span>
                          </div>
                        </div>

                        {/* Pixel Crop Image & Title Header - Full size, no padding, no boundaries */}
                        <div className="flex items-center gap-3.5 my-2.5">
                          <div className="w-20 h-20 sm:w-24 sm:h-24 shrink-0 flex items-center justify-center">
                            <img
                              src={crops[centerIndex].image}
                              alt={crops[centerIndex].name}
                              className="w-full h-full object-contain select-none pointer-events-none drop-shadow-md"
                              style={{ imageRendering: 'pixelated' }}
                            />
                          </div>

                          <div className="min-w-0 flex-1">
                            <h4 className="font-neris font-black text-2xl sm:text-2xl text-[#FCF2DF] tracking-tight leading-tight">
                              {crops[centerIndex].name}
                            </h4>
                            <div className="font-neris font-semibold text-xs sm:text-sm text-amber-200/90 mt-0.5 truncate">
                              Variety: {crops[centerIndex].variety}
                            </div>
                            <div className="mt-1.5 inline-block px-2 py-0.5 rounded bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 font-neris font-bold text-[10px]">
                              {crops[centerIndex].tag}
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-2 mt-3 pt-2.5 border-t border-white/15 text-xs font-neris">
                          <div className="bg-white/5 border border-white/10 p-2 rounded-lg">
                            <span className="text-[10px] text-stone-400 uppercase block">Duration</span>
                            <span className="font-black text-[#FCF2DF]">{crops[centerIndex].duration}</span>
                          </div>
                          <div className="bg-white/5 border border-white/10 p-2 rounded-lg">
                            <span className="text-[10px] text-stone-400 uppercase block">Water Demand</span>
                            <span className="font-black text-[#fbc33c]">{crops[centerIndex].waterNeed}</span>
                          </div>
                          <div className="bg-white/5 border border-white/10 p-2 rounded-lg">
                            <span className="text-[10px] text-stone-400 uppercase block">Soil Preference</span>
                            <span className="font-bold text-[#FCF2DF] text-[11px]">{crops[centerIndex].soilPref}</span>
                          </div>
                          <div className="bg-white/5 border border-white/10 p-2 rounded-lg">
                            <span className="text-[10px] text-stone-400 uppercase block">Classification</span>
                            <span className="font-bold text-emerald-400 text-[11px]">{crops[centerIndex].tag}</span>
                          </div>
                        </div>
                      </div>

                      {/* RIGHT ARROW CIRCULAR BUTTON */}
                      <button
                        onClick={() => setSelectedCropIndex(nextIndex)}
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#fbc33c] hover:bg-[#ffd25e] text-stone-950 border-2 border-[#121c15] shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-150 flex items-center justify-center shrink-0 z-20 mx-1 sm:mx-3 cursor-pointer group"
                        aria-label="Next Crop"
                        title="Next Crop"
                      >
                        <span className="font-neris font-black text-lg sm:text-xl transition-transform duration-150 group-hover:translate-x-0.5 select-none leading-none">
                          →
                        </span>
                      </button>

                      {/* Right / Next Card (Subtly Softened, Readable, Scaled 0.92) */}
                      <div
                        onClick={() => setSelectedCropIndex(nextIndex)}
                        className="w-1/4 sm:w-1/3 max-w-[220px] shrink-0 p-3 sm:p-4 rounded-xl bg-[#f5e9d2] border-2 border-stone-400/80 filter blur-[0.75px] opacity-70 scale-[0.92] transition-all duration-300 cursor-pointer hover:opacity-100 hover:blur-none hover:scale-[0.95] hidden sm:flex flex-col justify-between shadow-xs"
                        title={`Click to select ${crops[nextIndex].name}`}
                      >
                        <div>
                          <div className="flex items-center justify-between gap-1 mb-2">
                            <span className="text-[10px] font-neris font-bold px-2 py-0.5 rounded bg-stone-300 text-stone-700">
                              {crops[nextIndex].season}
                            </span>
                            <span className="text-[10px] font-neris font-bold text-stone-500">
                              {crops[nextIndex].tag}
                            </span>
                          </div>

                          {/* Pixel Crop Image Thumbnail - Full size, no padding, no boundaries */}
                          <div className="w-16 h-16 sm:w-18 sm:h-18 mx-auto mb-2 flex items-center justify-center">
                            <img
                              src={crops[nextIndex].image}
                              alt={crops[nextIndex].name}
                              className="w-full h-full object-contain select-none pointer-events-none"
                              style={{ imageRendering: 'pixelated' }}
                            />
                          </div>

                          <div className="font-neris font-black text-sm sm:text-base text-stone-900 leading-tight text-center">
                            {crops[nextIndex].name}
                          </div>
                          <div className="text-[11px] font-neris font-medium text-stone-600 mt-0.5 text-center">
                            {crops[nextIndex].variety}
                          </div>
                        </div>

                        <div className="mt-3 pt-2 border-t border-stone-300 text-[10px] font-neris font-bold text-stone-500 text-center">
                          {crops[nextIndex].duration}
                        </div>
                      </div>

                    </div>

                    {/* 3. BELOW: THE LOCATION & WEATHER WRITTEN (CENTER ALIGNED WITH PIXEL EMOJIS) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                      
                      {/* Location Written - Centered Heading with Pixel Emoji */}
                      <div className="bg-[#f5e9d2] border-2 border-[#121c15] p-3.5 sm:p-4 rounded-lg shadow-xs flex flex-col items-center text-center">
                        <div className="flex items-center justify-center gap-2 mb-1.5">
                          <img
                            src="/icons/pixel-pin.png"
                            alt="Location Icon"
                            className="w-10 h-10 sm:w-12 sm:h-12 object-contain select-none pointer-events-none shrink-0"
                            style={{ imageRendering: 'pixelated' }}
                          />
                          <span className="font-neris font-black text-sm sm:text-base text-amber-900 uppercase tracking-wide">
                            Location
                          </span>
                        </div>
                        <p className="font-neris font-bold text-xs sm:text-sm text-stone-900 mt-0.5 text-center leading-relaxed">
                          Sehore District, Central Madhya Pradesh (23.20° N, 77.08° E) • Soil: Deep Vertisol • Area: 1.5 Ha
                        </p>
                      </div>

                      {/* Weather Written - Centered Heading with Pixel Emoji */}
                      <div className="bg-[#f5e9d2] border-2 border-[#121c15] p-3.5 sm:p-4 rounded-lg shadow-xs flex flex-col items-center text-center">
                        <div className="flex items-center justify-center gap-2 mb-1.5">
                          <img
                            src="/icons/pixel-weather.png"
                            alt="Current Weather Icon"
                            className="w-10 h-10 sm:w-12 sm:h-12 object-contain select-none pointer-events-none shrink-0"
                            style={{ imageRendering: 'pixelated' }}
                          />
                          <span className="font-neris font-black text-sm sm:text-base text-emerald-900 uppercase tracking-wide">
                            Current Weather
                          </span>
                        </div>
                        <p className="font-neris font-bold text-xs sm:text-sm text-stone-900 mt-0.5 text-center leading-relaxed">
                          31°C • Partly Sunny • Humidity: 62% • Wind: 11 km/h ENE • 3-Day Forecast: 18mm rain expected in 48h
                        </p>
                      </div>

                    </div>

                    {/* 4. BUTTON TO ADD CROP TO YOUR FARM */}
                    <div className="p-3.5 sm:p-4 bg-[#e8dac0] border-2 border-[#121c15] rounded-lg shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div className="flex items-center gap-2.5 flex-wrap">
                        <img
                          src={crops[centerIndex].image}
                          alt=""
                          className="w-9 h-9 object-contain select-none pointer-events-none shrink-0"
                          style={{ imageRendering: 'pixelated' }}
                        />
                        <span className="font-neris font-bold text-xs text-stone-700">
                          Selected for Farm Profile:
                        </span>
                        <span className="font-neris font-black text-sm text-stone-950">
                          {crops[centerIndex].name} ({crops[centerIndex].variety})
                        </span>
                        {addedCrops.includes(crops[centerIndex].name) && (
                          <span className="text-[10px] font-neris font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                            ✓ Active On Farm
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-2 self-end sm:self-center">
                        {showAddSuccess && (
                          <span className="text-xs font-neris font-bold text-emerald-800 bg-emerald-100 border border-emerald-300 px-2.5 py-1.5 rounded">
                            ✓ {crops[centerIndex].name} added to farm!
                          </span>
                        )}

                        <button
                          onClick={handleAddCrop}
                          className="pixel-btn-yellow group cursor-pointer"
                          aria-label="Add Crop to Your Farm"
                        >
                          <div className="pixel-btn-yellow-inner px-5 py-2 flex items-center justify-center gap-2">
                            <span className="font-neris font-black text-xs sm:text-sm text-stone-950">
                              + Add Crop to Your Farm
                            </span>
                            <span className="font-neris font-bold text-sm text-stone-950 transition-transform duration-150 group-hover:translate-x-1">
                              →
                            </span>
                          </div>
                        </button>
                      </div>
                    </div>

                    {/* Farm Crops Profile Strip */}
                    {addedCrops.length > 0 && (
                      <div className="pt-2 border-t border-stone-300 flex items-center justify-between gap-2 flex-wrap text-xs font-neris">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-bold text-stone-600">Your Farmstead Crops:</span>
                          {addedCrops.map((cName) => (
                            <span
                              key={cName}
                              className="font-black text-[#0a160e] bg-[#f5e9d2] border border-[#dfd0b2] px-2.5 py-0.5 rounded"
                            >
                              {cName}
                            </span>
                          ))}
                        </div>

                        <button
                          onClick={() => setActiveStep(1)}
                          className="font-neris font-bold text-emerald-800 hover:text-emerald-950 cursor-pointer flex items-center gap-1"
                        >
                          <span>Proceed to Crop Analysis</span>
                          <span>→</span>
                        </button>
                      </div>
                    )}

                  </div>
                );
              })()}

              {/* ==============================================================
                  STAGE 2: CROP ANALYSIS (FACTORS + SUITABILITY REPORT)
                  ============================================================== */}
              {activeStep === 1 && (
                <div className="flex flex-col gap-4">

                  {/* Top Summary Banner */}
                  <div className="bg-[#e8dac0] border-2 border-[#121c15] p-3.5 sm:p-4 rounded-xl shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex items-center gap-3.5">
                      <img
                        src={crops[selectedCropIndex].image}
                        alt={crops[selectedCropIndex].name}
                        className="w-16 h-16 sm:w-20 sm:h-20 object-contain select-none pointer-events-none shrink-0 drop-shadow-sm"
                        style={{ imageRendering: 'pixelated' }}
                      />
                      <div>
                        <div className="font-neris font-black text-xs sm:text-[13px] text-amber-900 uppercase tracking-wide">
                          Comprehensive Agronomic Report
                        </div>
                        <div className="font-neris font-black text-lg sm:text-xl text-stone-900 mt-0.5">
                          Crop Suitability Profile: {crops[selectedCropIndex].name} ({crops[selectedCropIndex].variety})
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 self-end sm:self-center bg-[#0a160e] text-[#FCF2DF] border border-[#1b2b20] px-3.5 py-1.5 rounded-xl shadow-xs">
                      <div className="w-10 h-10 rounded-full bg-[#1b7a43] text-white border-2 border-[#229553] flex items-center justify-center shrink-0 shadow-xs">
                        <span className="font-neris font-black text-lg leading-none">
                          {currAnalysis.overallScore}
                        </span>
                      </div>
                      <div className="text-left">
                        <div className="text-[10px] font-neris font-bold text-stone-300 uppercase leading-none">Composite Score</div>
                        <div className="font-neris font-bold text-xs text-[#fbc33c] mt-0.5">High Suitability</div>
                      </div>
                    </div>
                  </div>

                  {/* 3 FACTOR CARDS: WEATHER, LOCATION/SOIL, TIME */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
                    
                    {/* Factor 1: Weather Suitability */}
                    <div className="bg-[#f5e9d2] border-2 border-[#121c15] p-3.5 sm:p-4 rounded-xl shadow-xs flex flex-col justify-between">
                      <div>
                        {/* Header: Pixel Icon + Title + Green Circle Score */}
                        <div className="flex items-center justify-between gap-2 pb-2.5 border-b border-[#dfd0b2]">
                          <div className="flex items-center gap-3">
                            <img
                              src="/icons/pixel-weather.png"
                              alt="Weather Icon"
                              className="w-14 h-14 sm:w-16 sm:h-16 object-contain select-none pointer-events-none shrink-0"
                              style={{ imageRendering: 'pixelated' }}
                            />
                            <div>
                              <span className="font-neris font-black text-sm sm:text-base text-sky-950 uppercase tracking-wide block">
                                1. Weather
                              </span>
                              <span className="text-xs font-neris font-bold text-stone-600">
                                Temperature & Rain
                              </span>
                            </div>
                          </div>

                          {/* Green circle with score without % */}
                          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#1b7a43] text-[#f4fbf6] border-2 border-[#12532d] shadow-sm flex items-center justify-center shrink-0">
                            <span className="font-neris font-black text-base sm:text-lg leading-none tracking-tight">
                              {currAnalysis.weather.score}
                            </span>
                          </div>
                        </div>

                        {/* Current & Interpretation */}
                        <div className="mt-3 space-y-2">
                          <div className="bg-[#ede0c7] p-2.5 rounded-lg border border-[#dfd0b2]">
                            <span className="text-[10px] font-neris font-black text-stone-500 uppercase block tracking-wider">
                              Current
                            </span>
                            <span className="font-neris font-black text-xs sm:text-sm text-stone-900 block mt-0.5">
                              {currAnalysis.weather.current}
                            </span>
                          </div>

                          <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200">
                            <span className="text-[10px] font-neris font-black text-emerald-800 uppercase block tracking-wider">
                              Status
                            </span>
                            <p className="font-neris font-bold text-xs text-emerald-950 mt-0.5 leading-snug">
                              {currAnalysis.weather.status}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="mt-3 pt-2 border-t border-[#dfd0b2] flex items-center justify-between text-[11px] font-neris">
                        <span className="text-stone-500 font-semibold">Diagnostic:</span>
                        <span className="font-black text-emerald-800">{currAnalysis.weather.metric}</span>
                      </div>
                    </div>

                    {/* Factor 2: Location & Soil */}
                    <div className="bg-[#f5e9d2] border-2 border-[#121c15] p-3.5 sm:p-4 rounded-xl shadow-xs flex flex-col justify-between">
                      <div>
                        {/* Header: Pixel Icon + Title + Green Circle Score */}
                        <div className="flex items-center justify-between gap-2 pb-2.5 border-b border-[#dfd0b2]">
                          <div className="flex items-center gap-3">
                            <img
                              src="/icons/pixel-soil.png"
                              alt="Soil Icon"
                              className="w-14 h-14 sm:w-16 sm:h-16 object-contain select-none pointer-events-none shrink-0"
                              style={{ imageRendering: 'pixelated' }}
                            />
                            <div>
                              <span className="font-neris font-black text-sm sm:text-base text-amber-950 uppercase tracking-wide block">
                                2. Location & Soil
                              </span>
                              <span className="text-xs font-neris font-bold text-stone-600">
                                Soil Type & Moisture
                              </span>
                            </div>
                          </div>

                          {/* Green circle with score without % */}
                          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#1b7a43] text-[#f4fbf6] border-2 border-[#12532d] shadow-sm flex items-center justify-center shrink-0">
                            <span className="font-neris font-black text-base sm:text-lg leading-none tracking-tight">
                              {currAnalysis.location.score}
                            </span>
                          </div>
                        </div>

                        {/* Current & Interpretation */}
                        <div className="mt-3 space-y-2">
                          <div className="bg-[#ede0c7] p-2.5 rounded-lg border border-[#dfd0b2]">
                            <span className="text-[10px] font-neris font-black text-stone-500 uppercase block tracking-wider">
                              Current
                            </span>
                            <span className="font-neris font-black text-xs sm:text-sm text-stone-900 block mt-0.5">
                              {currAnalysis.location.current}
                            </span>
                          </div>

                          <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200">
                            <span className="text-[10px] font-neris font-black text-emerald-800 uppercase block tracking-wider">
                              Status
                            </span>
                            <p className="font-neris font-bold text-xs text-emerald-950 mt-0.5 leading-snug">
                              {currAnalysis.location.status}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="mt-3 pt-2 border-t border-[#dfd0b2] flex items-center justify-between text-[11px] font-neris">
                        <span className="text-stone-500 font-semibold">Diagnostic:</span>
                        <span className="font-black text-emerald-800">{currAnalysis.location.metric}</span>
                      </div>
                    </div>

                    {/* Factor 3: Sowing Window & Time */}
                    <div className="bg-[#f5e9d2] border-2 border-[#121c15] p-3.5 sm:p-4 rounded-xl shadow-xs flex flex-col justify-between">
                      <div>
                        {/* Header: Pixel Icon + Title + Green Circle Score */}
                        <div className="flex items-center justify-between gap-2 pb-2.5 border-b border-[#dfd0b2]">
                          <div className="flex items-center gap-3">
                            <img
                              src="/icons/pixel-calendar.png"
                              alt="Sowing Window Icon"
                              className="w-14 h-14 sm:w-16 sm:h-16 object-contain select-none pointer-events-none shrink-0"
                              style={{ imageRendering: 'pixelated' }}
                            />
                            <div>
                              <span className="font-neris font-black text-sm sm:text-base text-emerald-950 uppercase tracking-wide block">
                                3. Sowing Window
                              </span>
                              <span className="text-xs font-neris font-bold text-stone-600">
                                Timing & Calendar
                              </span>
                            </div>
                          </div>

                          {/* Green circle with score without % */}
                          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#1b7a43] text-[#f4fbf6] border-2 border-[#12532d] shadow-sm flex items-center justify-center shrink-0">
                            <span className="font-neris font-black text-base sm:text-lg leading-none tracking-tight">
                              {currAnalysis.time.score}
                            </span>
                          </div>
                        </div>

                        {/* Current & Interpretation */}
                        <div className="mt-3 space-y-2">
                          <div className="bg-[#ede0c7] p-2.5 rounded-lg border border-[#dfd0b2]">
                            <span className="text-[10px] font-neris font-black text-stone-500 uppercase block tracking-wider">
                              Current
                            </span>
                            <span className="font-neris font-black text-xs sm:text-sm text-stone-900 block mt-0.5">
                              {currAnalysis.time.current}
                            </span>
                          </div>

                          <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200">
                            <span className="text-[10px] font-neris font-black text-emerald-800 uppercase block tracking-wider">
                              Status
                            </span>
                            <p className="font-neris font-bold text-xs text-emerald-950 mt-0.5 leading-snug">
                              {currAnalysis.time.status}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="mt-3 pt-2 border-t border-[#dfd0b2] flex items-center justify-between text-[11px] font-neris">
                        <span className="text-stone-500 font-semibold">Diagnostic:</span>
                        <span className="font-black text-emerald-800">{currAnalysis.time.metric}</span>
                      </div>
                    </div>

                  </div>

                  {/* AI AGRONOMIC SUGGESTIONS & PROFILE CREATION */}
                  <div className="bg-[#f5e9d2] border-2 border-[#121c15] p-3.5 sm:p-4 rounded-xl shadow-xs">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-neris font-black text-xs text-emerald-900 uppercase tracking-wide">
                        Actionable Agronomy Suggestions & Crop Baseline
                      </span>
                      <span className="text-[10px] font-neris font-bold text-stone-600 bg-white/60 px-2 py-0.5 rounded">
                        Agrivue Guidance
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs font-neris">
                      <div className="bg-[#ede0c7] p-2.5 sm:p-3 rounded-lg border border-[#dfd0b2]">
                        <span className="font-black text-stone-900 block mb-0.5">Seed Treatment</span>
                        <p className="text-stone-700 leading-snug font-medium">
                          {currAnalysis.suggestions.seed}
                        </p>
                      </div>
                      <div className="bg-[#ede0c7] p-2.5 sm:p-3 rounded-lg border border-[#dfd0b2]">
                        <span className="font-black text-stone-900 block mb-0.5">Density & Spacing</span>
                        <p className="text-stone-700 leading-snug font-medium">
                          {currAnalysis.suggestions.spacing}
                        </p>
                      </div>
                      <div className="bg-[#ede0c7] p-2.5 sm:p-3 rounded-lg border border-[#dfd0b2]">
                        <span className="font-black text-stone-900 block mb-0.5">Basal Nutrition</span>
                        <p className="text-stone-700 leading-snug font-medium">
                          {currAnalysis.suggestions.nutrition}
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              )}

              {/* ==============================================================
                  STAGE 3: DAILY ROUTINE PLANNER (OPTIMISED NUMBERS + TO-DO)
                  ============================================================== */}
              {activeStep === 2 && (
                <div className="flex flex-col gap-4">

                  {/* 4 OPTIMISED NUMBER CARDS */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5">
                    
                    <div className="bg-[#0a160e] text-[#FCF2DF] border border-[#1b2b20] p-3 rounded-lg shadow-xs">
                      <div className="text-[10px] font-neris font-bold text-stone-400 uppercase">
                        Target Water Volume
                      </div>
                      <div className="font-neris font-black text-xl text-[#fbc33c] mt-0.5">
                        38,500 Litres
                      </div>
                      <div className="text-[10px] font-neris font-medium text-stone-300">
                        Exact for 1.5 Ha root-zone depth
                      </div>
                    </div>

                    <div className="bg-[#0a160e] text-[#FCF2DF] border border-[#1b2b20] p-3 rounded-lg shadow-xs">
                      <div className="text-[10px] font-neris font-bold text-stone-400 uppercase">
                        Optimal Pump Runtime
                      </div>
                      <div className="font-neris font-black text-xl text-emerald-400 mt-0.5">
                        2h 45m
                      </div>
                      <div className="text-[10px] font-neris font-medium text-stone-300">
                        7.5 HP Motor @ 4.2 L/sec rate
                      </div>
                    </div>

                    <div className="bg-[#0a160e] text-[#FCF2DF] border border-[#1b2b20] p-3 rounded-lg shadow-xs">
                      <div className="text-[10px] font-neris font-bold text-stone-400 uppercase">
                        Solar Feeder Window
                      </div>
                      <div className="font-neris font-black text-xl text-[#fbc33c] mt-0.5">
                        10:45 AM – 1:30 PM
                      </div>
                      <div className="text-[10px] font-neris font-medium text-stone-300">
                        High solar daylight grid sync
                      </div>
                    </div>

                    <div className="bg-[#0a160e] text-[#FCF2DF] border border-[#1b2b20] p-3 rounded-lg shadow-xs">
                      <div className="text-[10px] font-neris font-bold text-stone-400 uppercase">
                        Excess Water Saved
                      </div>
                      <div className="font-neris font-black text-xl text-emerald-400 mt-0.5">
                        62,000 Litres
                      </div>
                      <div className="text-[10px] font-neris font-medium text-stone-300">
                        Compared to unmetered flood run
                      </div>
                    </div>

                  </div>

                  {/* INTERACTIVE TO-DO LIST WITH TIMINGS & REMINDERS */}
                  <div className="bg-[#f5e9d2] border-2 border-[#121c15] p-4 sm:p-5 rounded-lg shadow-xs">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <span className="font-neris font-black text-xs text-amber-900 uppercase tracking-wide">
                          Daily Farm Routine
                        </span>
                        <h4 className="font-neris font-black text-base text-stone-900">
                          Today's Checklist & Reminders
                        </h4>
                      </div>
                      <span className="text-[10px] font-neris font-bold text-stone-600 bg-white/70 px-2 py-0.5 rounded">
                        Tap task to mark completed
                      </span>
                    </div>

                    <div className="flex flex-col gap-2">
                      {todos.map((item) => (
                        <div
                          key={item.id}
                          onClick={() => toggleTodo(item.id)}
                          className={`p-3 rounded-md border transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 ${
                            item.done
                              ? 'bg-[#e2d5bd] border-stone-400 opacity-90'
                              : 'bg-[#FCF2DF] border-[#dfd0b2] hover:border-stone-500 shadow-xs'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <input
                              type="checkbox"
                              checked={item.done}
                              onChange={() => toggleTodo(item.id)}
                              className="w-4 h-4 rounded text-emerald-800 cursor-pointer accent-emerald-800"
                            />
                            <div>
                              <div className="flex items-center gap-2">
                                <span className="font-neris font-black text-xs text-[#0a160e]">
                                  {item.time}
                                </span>
                                <span className="text-[10px] font-neris font-bold bg-[#f5e9d2] px-1.5 py-0.5 rounded border border-stone-300 text-stone-800">
                                  {item.tag}
                                </span>
                              </div>
                              <p className={`font-neris text-xs sm:text-sm mt-0.5 ${item.done ? 'line-through text-stone-500' : 'font-bold text-stone-900'}`}>
                                {item.task}
                              </p>
                            </div>
                          </div>

                          <div className="text-right shrink-0">
                            <span className={`text-[11px] font-neris font-bold px-2.5 py-1 rounded shadow-xs ${
                              item.done
                                ? 'text-stone-600 bg-stone-200/80 border border-stone-300'
                                : 'text-emerald-900 bg-emerald-100 border border-emerald-300'
                            }`}>
                              {item.metric}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* PRECAUTIONARY MEASURES (WEATHER SYNC ALERT) */}
                  <div className="p-3.5 sm:p-4 bg-[#e8dac0] border-2 border-[#121c15] rounded-lg shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-neris font-black text-xs text-rose-950 uppercase tracking-wide">
                          Weather Advice:
                        </span>
                        <span className="text-[10px] font-neris font-black text-rose-900 bg-rose-100 border border-rose-300 px-1.5 py-0.5 rounded">
                          Rain Expected Tomorrow
                        </span>
                      </div>
                      <p className="font-neris font-bold text-xs sm:text-sm text-stone-900 mt-1">
                        Heavy rain (about 24mm) is forecasted for tomorrow afternoon.
                      </p>
                      <p className="font-neris font-medium text-xs text-stone-700 mt-0.5">
                        Skip tomorrow's watering! The natural rainfall will soak your fields, saving pump electricity and keeping water from pooling around crop roots.
                      </p>
                    </div>

                    <div className="shrink-0 bg-stone-900 text-[#FCF2DF] px-3.5 py-2 rounded-lg text-xs font-neris font-bold text-center">
                      Watering Paused: Next 2 Days
                    </div>
                  </div>

                </div>
              )}

              {/* ==============================================================
                  STAGE 4: WEEKLY ANALYSIS & PEST SURVEILLANCE
                  ============================================================== */}
              {activeStep === 3 && (
                <div className="flex flex-col gap-4">

                  {/* 2-COLUMN VIEW: MACRO FAR CANOPY VS MICRO CLOSE-UP SCAN */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    
                    {/* 1. Macro Analysis: Far Canopy Photo & Growth Modeling */}
                    <div className="bg-[#f5e9d2] border-2 border-[#121c15] p-4 rounded-xl shadow-xs flex flex-col justify-between">
                      <div>
                        {/* Header */}
                        <div className="flex items-center justify-between mb-2.5">
                          <div>
                            <span className="font-neris font-black text-xs text-emerald-950 uppercase tracking-wide block">
                              1. Canopy From Far
                            </span>
                            <h4 className="font-neris font-black text-sm sm:text-base text-stone-900">
                              Whole Field Crop Photo & Harvest Timeline
                            </h4>
                          </div>
                          <span className="text-[10px] font-neris font-black text-emerald-900 bg-emerald-100 border border-emerald-300 px-2 py-0.5 rounded shrink-0">
                            Growth Status: Healthy
                          </span>
                        </div>

                        {/* Whole field crop photo provided by user */}
                        <div className="relative w-full h-48 sm:h-56 rounded-lg overflow-hidden border-2 border-[#121c15] mb-3.5 shadow-xs bg-[#162a1c]">
                          <img
                            src="/canopy-far.jpg"
                            alt="Whole field crop photo at canopy level"
                            className="w-full h-full object-cover select-none pointer-events-none"
                            style={{ imageRendering: 'pixelated' }}
                          />
                          <div className="absolute top-2 left-2 bg-[#0a160e]/90 backdrop-blur-xs text-[#FCF2DF] text-[10px] font-neris font-bold px-2 py-0.5 rounded border border-[#2b4834] flex items-center gap-1.5 shadow-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            <span>Whole Field Crop Photo</span>
                          </div>
                          <div className="absolute bottom-2 right-2 bg-[#fbc33c] text-stone-950 text-[10px] font-neris font-black px-2 py-0.5 rounded shadow-sm border border-[#121c15]">
                            Full Canopy Visual Scan
                          </div>
                        </div>

                        {/* Real Joined Line Graph with Pixelism Effect */}
                        <div className="bg-[#ede0c7] p-3 sm:p-4 rounded-lg border border-[#dfd0b2] mb-3">
                          <div className="flex items-center justify-between mb-2">
                            <div>
                              <span className="font-neris font-black text-xs text-stone-900 uppercase tracking-wide block">
                                Crop Growth Curve & Optimal Harvest
                              </span>
                              <span className="text-[11px] font-neris font-medium text-stone-600">
                                Real joined line graph of crop growth over dates
                              </span>
                            </div>
                            <span className="inline-flex items-center gap-1 text-[10px] font-neris font-bold bg-[#fbc33c] text-stone-950 px-2 py-0.5 rounded border border-stone-900 shadow-xs">
                              ★ Nov 14 Peak Harvest
                            </span>
                          </div>

                          {/* SVG Joined Line Graph */}
                          <div className="relative w-full overflow-hidden">
                            <svg
                              viewBox="0 0 540 215"
                              className="w-full h-48 sm:h-56 select-none"
                              style={{ imageRendering: 'pixelated' }}
                            >
                              <defs>
                                <linearGradient id="growthAreaGradient" x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="0%" stopColor="#fbc33c" stopOpacity="0.35" />
                                  <stop offset="40%" stopColor="#10b981" stopOpacity="0.25" />
                                  <stop offset="100%" stopColor="#10b981" stopOpacity="0.02" />
                                </linearGradient>

                                <pattern id="pixelGrid" width="16" height="16" patternUnits="userSpaceOnUse">
                                  <path d="M 16 0 L 0 0 0 16" fill="none" stroke="#d5c4a5" strokeWidth="0.6" strokeDasharray="1 3" />
                                </pattern>
                              </defs>

                              {/* Grid Pattern */}
                              <rect x="44" y="24" width="478" height="132" fill="url(#pixelGrid)" opacity="0.6" />

                              {/* Y-Axis Gridlines & Labels (% of growth) */}
                              {[
                                { pct: '100%', y: 28 },
                                { pct: '75%', y: 61 },
                                { pct: '50%', y: 94 },
                                { pct: '25%', y: 127 },
                                { pct: '0%', y: 156 },
                              ].map((lvl, idx) => (
                                <g key={idx}>
                                  <text
                                    x="38"
                                    y={lvl.y + 3}
                                    textAnchor="end"
                                    className="fill-stone-600 font-neris font-bold text-[10px]"
                                  >
                                    {lvl.pct}
                                  </text>
                                  <line
                                    x1="44"
                                    y1={lvl.y}
                                    x2="522"
                                    y2={lvl.y}
                                    stroke="#c8b594"
                                    strokeWidth="1"
                                    strokeDasharray="2 3"
                                  />
                                </g>
                              ))}

                              {/* Y-Axis Label: % of growth */}
                              <text
                                x="14"
                                y="92"
                                textAnchor="middle"
                                transform="rotate(-90, 14, 92)"
                                className="fill-stone-800 font-neris font-black text-[10px] tracking-wider"
                              >
                                % of growth
                              </text>

                              {/* Area fill under the joined line graph */}
                              <polygon
                                points="
                                  58,156
                                  58,133
                                  135,102
                                  215,70
                                  295,44
                                  375,28
                                  450,38
                                  515,58
                                  515,156
                                "
                                fill="url(#growthAreaGradient)"
                              />

                              {/* DOTTED LINE FOR BEST HARVEST DAY (X=375, Nov 14) */}
                              <line
                                x1="375"
                                y1="20"
                                x2="375"
                                y2="156"
                                stroke="#b45309"
                                strokeWidth="2.5"
                                strokeDasharray="4 4"
                              />

                              {/* REAL JOINED LINE GRAPH - Continuous joined line across all dates */}
                              <polyline
                                fill="none"
                                stroke="#047857"
                                strokeWidth="3.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                points="
                                  58,133
                                  135,102
                                  215,70
                                  295,44
                                  375,28
                                  450,38
                                  515,58
                                "
                              />

                              {/* PIXELISM EFFECT: Square Pixel Node Markers along the joined line */}
                              <rect x="54" y="129" width="8" height="8" fill="#10b981" stroke="#064e3b" strokeWidth="1.5" />
                              <rect x="131" y="98" width="8" height="8" fill="#10b981" stroke="#064e3b" strokeWidth="1.5" />
                              <rect x="211" y="66" width="8" height="8" fill="#10b981" stroke="#064e3b" strokeWidth="1.5" />
                              <rect x="291" y="40" width="8" height="8" fill="#10b981" stroke="#064e3b" strokeWidth="1.5" />

                              {/* DOTTED RING & HIGHLIGHT FOR THE BEST HARVEST DAY NODE */}
                              <circle cx="375" cy="28" r="14" fill="none" stroke="#d97706" strokeWidth="1.8" strokeDasharray="3 3" />
                              <circle cx="375" cy="28" r="8" fill="#fbc33c" fillOpacity="0.4" className="animate-ping" />
                              <rect x="370" y="23" width="10" height="10" fill="#fbc33c" stroke="#0a160e" strokeWidth="2" />

                              <rect x="446" y="34" width="8" height="8" fill="#f59e0b" stroke="#78350f" strokeWidth="1.5" />
                              <rect x="511" y="54" width="8" height="8" fill="#ef4444" stroke="#7f1d1d" strokeWidth="1.5" />

                              {/* Callout Tag on Best Harvest Day Peak with Dotted Accent */}
                              <g transform="translate(375, 14)">
                                <rect x="-68" y="-14" width="136" height="17" rx="3" fill="#0a160e" stroke="#fbc33c" strokeWidth="1.2" strokeDasharray="3 2" />
                                <text x="0" y="-2" textAnchor="middle" className="fill-[#fbc33c] font-neris font-black text-[9px] tracking-tight">
                                  ★ BEST HARVEST DAY: 100%
                                </text>
                              </g>

                              {/* X-Axis Horizontal Baseline */}
                              <line x1="44" y1="156" x2="522" y2="156" stroke="#121c15" strokeWidth="1.5" />

                              {/* X-Axis Dates & Subtitles */}
                              {[
                                { date: 'Oct 05', sub: 'Today (18%)', x: 58, isPeak: false },
                                { date: 'Oct 18', sub: 'Tillering (42%)', x: 135, isPeak: false },
                                { date: 'Oct 30', sub: 'Flowering (68%)', x: 215, isPeak: false },
                                { date: 'Nov 09', sub: 'Grain Fill (89%)', x: 295, isPeak: false },
                                { date: 'Nov 14', sub: '★ Best Harvest (100%)', x: 375, isPeak: true },
                                { date: 'Nov 24', sub: 'Mature (94%)', x: 450, isPeak: false },
                                { date: 'Dec 05', sub: 'Over-ripe (80%)', x: 515, isPeak: false },
                              ].map((item, idx) => (
                                <g key={idx}>
                                  <line
                                    x1={item.x}
                                    y1="156"
                                    x2={item.x}
                                    y2={item.isPeak ? "165" : "161"}
                                    stroke={item.isPeak ? "#b45309" : "#121c15"}
                                    strokeWidth={item.isPeak ? "2" : "1.5"}
                                  />
                                  <text
                                    x={item.x}
                                    y="174"
                                    textAnchor="middle"
                                    className={`font-neris font-black text-[10px] ${item.isPeak ? 'fill-[#b45309]' : 'fill-stone-900'}`}
                                  >
                                    {item.date}
                                  </text>
                                  <text
                                    x={item.x}
                                    y="187"
                                    textAnchor="middle"
                                    className={`font-neris text-[9px] ${item.isPeak ? 'font-black fill-[#b45309]' : 'font-medium fill-stone-600'}`}
                                  >
                                    {item.sub}
                                  </text>
                                </g>
                              ))}

                              {/* X-Axis Title: Dates */}
                              <text
                                x="283"
                                y="206"
                                textAnchor="middle"
                                className="fill-stone-800 font-neris font-black text-[10px] tracking-wider uppercase"
                              >
                                Dates
                              </text>
                            </svg>
                          </div>

                          {/* Clear Interpretation Footer under Graph */}
                          <div className="mt-2 pt-2 border-t border-[#dfd0b2] flex items-center justify-between gap-2 text-xs font-neris flex-wrap">
                            <div className="flex items-center gap-2">
                              <span className="w-2.5 h-2.5 rounded-xs bg-[#fbc33c] border border-stone-900 inline-block shrink-0" />
                              <span className="font-bold text-stone-900 text-xs">
                                <strong>Best Harvest Day:</strong> Nov 14 (Dotted Line) • 100% Peak Growth
                              </span>
                            </div>
                            <span className="text-[11px] font-neris font-black text-emerald-900 bg-emerald-100 border border-emerald-300 px-2 py-0.5 rounded">
                              Max Yield: ~48.5 Q/Ha
                            </span>
                          </div>
                        </div>

                        {/* Plain steps summary */}
                        <div className="text-xs font-neris text-stone-700 space-y-1 font-medium bg-[#f5e9d2] pt-1">
                          <p>
                            • <strong>Next Step (Oct 20):</strong> Crops enter flowering. Keep watering light and consistent.
                          </p>
                          <p>
                            • <strong>Harvest Window (Nov 14):</strong> Peak 100% growth reached with golden maturity. Cut now for maximum weight & market price!
                          </p>
                        </div>
                      </div>

                      <div className="mt-3 pt-2.5 border-t border-[#dfd0b2] text-[11px] font-neris font-bold text-emerald-900 flex items-center justify-between">
                        <span>Harvest Countdown: 42 Days to Prime Window</span>
                        <span className="text-stone-600 font-semibold">Field: 1.5 Hectares</span>
                      </div>
                    </div>

                    {/* 2. Micro Inspection: Close-up Photo for Pest & Infection */}
                    <div className="bg-[#f5e9d2] border-2 border-[#121c15] p-4 rounded-xl shadow-xs flex flex-col justify-between">
                      <div>
                        {/* Header */}
                        <div className="flex items-center justify-between mb-2.5">
                          <div>
                            <span className="font-neris font-black text-xs text-rose-950 uppercase tracking-wide block">
                              2. Leaf & Plant Close-Up
                            </span>
                            <h4 className="font-neris font-black text-sm sm:text-base text-stone-900">
                              Close-Up Leaf Photo & Disease Diagnosis
                            </h4>
                          </div>
                          <span className="text-[10px] font-neris font-black text-amber-950 bg-amber-200 border border-amber-400 px-2 py-0.5 rounded shrink-0">
                            Warning: Early Infection
                          </span>
                        </div>

                        {/* Close-up leaf photo provided by user */}
                        <div className="relative w-full h-48 sm:h-56 rounded-lg overflow-hidden border-2 border-[#121c15] mb-3.5 shadow-xs bg-[#1f301d]">
                          <img
                            src="/leaf-infection-scan.jpg"
                            alt="Close-up crop photo showing leaf rust and lesion spots"
                            className="w-full h-full object-cover select-none pointer-events-none"
                            style={{ imageRendering: 'pixelated' }}
                          />
                          <div className="absolute top-2 left-2 bg-[#0a160e]/90 backdrop-blur-xs text-[#FCF2DF] text-[10px] font-neris font-bold px-2 py-0.5 rounded border border-[#2b4834] flex items-center gap-1.5 shadow-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                            <span>Micro Leaf Inspection</span>
                          </div>
                          <div className="absolute bottom-2 right-2 bg-rose-600 text-white text-[10px] font-neris font-black px-2 py-0.5 rounded shadow-sm border border-[#121c15]">
                            Rust & Blight Lesions Detected
                          </div>
                        </div>

                        {/* Diagnosis Card */}
                        <div className="p-3 bg-[#ede0c7] border border-[#dfd0b2] rounded-lg mb-3">
                          <div className="flex items-center justify-between text-xs font-neris font-bold text-stone-900 mb-1">
                            <span className="text-stone-800 uppercase tracking-wide text-[11px] font-black">AI Diagnosis Result</span>
                            <span className="text-rose-900 font-black bg-rose-100 border border-rose-300 px-2 py-0.5 rounded text-[10px]">
                              Southern Leaf Rust (Blight)
                            </span>
                          </div>
                          <p className="text-xs font-neris text-stone-800 font-medium leading-relaxed">
                            Yellow & orange-brown spore pustules detected along main leaf veins. Damage is currently confined to <strong>~11% of outer foliage</strong>.
                          </p>
                          <div className="mt-2 pt-2 border-t border-[#dfd0b2] flex items-center justify-between text-[11px] font-neris text-stone-700">
                            <span>Spread Risk: <strong className="text-amber-900">Moderate</strong></span>
                            <span>Yield Impact if untreated: <strong className="text-rose-800">-8% to -15%</strong></span>
                          </div>
                        </div>

                        {/* Immediate Actions Header */}
                        <h4 className="font-neris font-black text-xs uppercase tracking-wide text-stone-900 mb-2">
                          Immediate Treatment Steps (Next 48 Hours)
                        </h4>
                        
                        {/* Farmer-friendly Action Steps */}
                        <div className="space-y-2 text-xs font-neris text-stone-800 font-medium">
                          <div className="p-2.5 bg-[#fdf8ee] rounded-md border border-[#e8dbbf] flex items-start gap-2.5">
                            <span className="w-5 h-5 rounded-full bg-emerald-800 text-white text-[11px] font-black flex items-center justify-center shrink-0 mt-0.5">
                              1
                            </span>
                            <div>
                              <strong className="text-stone-950 font-bold block">Spray Organic Neem or Mancozeb:</strong>
                              <span className="text-stone-700 text-[11.5px] leading-snug">
                                Mix 2.5 ml fungicide (or 5% Neem seed kernel extract) per liter of water. Spray on leaf tops and undersides tomorrow at 7:00 AM.
                              </span>
                            </div>
                          </div>

                          <div className="p-2.5 bg-[#fdf8ee] rounded-md border border-[#e8dbbf] flex items-start gap-2.5">
                            <span className="w-5 h-5 rounded-full bg-emerald-800 text-white text-[11px] font-black flex items-center justify-center shrink-0 mt-0.5">
                              2
                            </span>
                            <div>
                              <strong className="text-stone-950 font-bold block">Keep Water at Ground Level:</strong>
                              <span className="text-stone-700 text-[11.5px] leading-snug">
                                Do not use overhead sprinkler/splashing. Wet leaves make fungal spores multiply 3x faster. Irrigate via root furrow.
                              </span>
                            </div>
                          </div>

                          <div className="p-2.5 bg-[#fdf8ee] rounded-md border border-[#e8dbbf] flex items-start gap-2.5">
                            <span className="w-5 h-5 rounded-full bg-emerald-800 text-white text-[11px] font-black flex items-center justify-center shrink-0 mt-0.5">
                              3
                            </span>
                            <div>
                              <strong className="text-stone-950 font-bold block">Re-Scan in 4 Days:</strong>
                              <span className="text-stone-700 text-[11.5px] leading-snug">
                                Take another close-up photo on Oct 09 to verify spores are drying up and healthy new green tissue has formed.
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="mt-3 pt-2.5 border-t border-[#dfd0b2] text-[11px] font-neris font-bold text-stone-900 flex items-center justify-between">
                        <span className="text-emerald-950">
                          Treatment Window: <strong>Actionable Today / Tomorrow Morning</strong>
                        </span>
                        <span className="text-stone-600 font-semibold">AI Confidence: 96%</span>
                      </div>
                    </div>

                  </div>

                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
