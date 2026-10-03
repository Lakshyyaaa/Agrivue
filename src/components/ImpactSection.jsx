import React, { useState } from 'react';

export default function ImpactSection() {
  const [activeTab, setActiveTab] = useState('farmers');



  const lenses = {
    farmers: {
      id: 'farmers',
      title: 'For Farmers & Households',
      subtitle: 'Real economic security, peaceful nights, and healthy crop harvests',
      tag: 'Household Economics',
      highlights: [
        {
          title: '₹42,000+ Extra Profit Per Season',
          subtitle: 'From input savings & Grade-A harvest',
          description:
            'By eliminating unnecessary fertilizer washes, reducing pump motor repairs, and timing the harvest precisely at 100% grain fill, farmers take home record market rates at the mandi.',
          badge: '+35% Net Profit',
          badgeColor: 'bg-emerald-100 text-emerald-900 border-emerald-300',
        },
        {
          title: 'Zero Burnt Motors & Rewinds',
          subtitle: 'Saved ₹25,000/year in repair costs',
          description:
            'Frequent voltage fluctuations and running dry borewells used to burn Ramesh’s 7.5 HP motor 3 times every season. Automated dry-run cutoffs keep motors running trouble-free.',
          badge: '100% Motor Protection',
          badgeColor: 'bg-amber-100 text-amber-900 border-amber-300',
        },
        {
          title: 'End of 2:30 AM Midnight Pumping',
          subtitle: 'Daylight solar & feeder scheduling',
          description:
            'No more trekking across snake-prone fields in pitch darkness at 2:30 AM. Pumping runs during safe daylight hours synchronized with the local agricultural power feeder.',
          badge: 'Safe Daylight Farming',
          badgeColor: 'bg-sky-100 text-sky-900 border-sky-300',
        },
        {
          title: 'Early 48-Hour Disease Shield',
          subtitle: '32% reduction in pesticide expense',
          description:
            'Catching fungal rust spots when only 11% of outer leaves are affected allows light organic treatment before infection spreads across the entire field.',
          badge: 'Targeted Protection',
          badgeColor: 'bg-rose-100 text-rose-900 border-rose-300',
        },
      ],
    },
    discoms: {
      id: 'discoms',
      title: 'For State Power Utilities (DISCOMs)',
      subtitle: 'Lower subsidy losses, balanced rural feeders, and grid reliability',
      tag: 'Power Grid Infrastructure',
      highlights: [
        {
          title: '28% Peak Load Flattening',
          subtitle: 'Automated feeder dispatch',
          description:
            'Instead of all village pumps starting at the exact second the night feeder turns on, Agrivue staggers pump demand dynamically, smoothing the grid load curve.',
          badge: '-28% Peak Surge',
          badgeColor: 'bg-purple-100 text-purple-900 border-purple-300',
        },
        {
          title: '65% Reduction in Transformer Failures',
          subtitle: 'Preventing DTR burnouts',
          description:
            'Rural Distribution Transformers (DTRs) frequently explode under unmanaged inductive motor load. Thermal cutoffs and staged pump start times preserve expensive equipment.',
          badge: '65% Fewer Burnouts',
          badgeColor: 'bg-amber-100 text-amber-900 border-amber-300',
        },
        {
          title: 'Subsidy Burden Relief',
          subtitle: 'Curtailing unmetered electricity waste',
          description:
            'Agricultural power is heavily subsidized by state governments. Cutting wasted pumping hours directly lowers DISCOM commercial losses and state exchequer liability.',
          badge: 'Fiscal Preservation',
          badgeColor: 'bg-emerald-100 text-emerald-900 border-emerald-300',
        },
        {
          title: 'Solar Feeder Synchronization',
          subtitle: 'Greening rural agricultural demand',
          description:
            'Synchronizes water pump operations with peak daytime solar production from local rural PM-KUSUM feeder plants, maximizing renewable energy utilization.',
          badge: 'Solar Power Synced',
          badgeColor: 'bg-sky-100 text-sky-900 border-sky-300',
        },
      ],
    },
    ecology: {
      id: 'ecology',
      title: 'For Groundwater & Climate',
      subtitle: 'Preserving village aquifers and rebuilding resilient soil ecology',
      tag: 'Ecological Regeneration',
      highlights: [
        {
          title: '18.4 Million Litres / Village',
          subtitle: 'Groundwater table stabilization',
          description:
            'Replacing 6-hour blind flood irrigation with root-depth precision prevents aquifer collapse. Over two crop cycles, local monitoring wells recorded a 2.4-meter water table rebound.',
          badge: 'Aquifer Rebound',
          badgeColor: 'bg-sky-100 text-sky-900 border-sky-300',
        },
        {
          title: '1.2 Tonnes CO2e Avoided / Hectare',
          subtitle: 'Slashing thermal power generation draw',
          description:
            'Every hour an electric pump motor is turned off on a well-hydrated field directly reduces coal combustion at regional thermal power stations feeding the state grid.',
          badge: 'Decarbonized Pumping',
          badgeColor: 'bg-emerald-100 text-emerald-900 border-emerald-300',
        },
        {
          title: 'Healthy Soil Microbiology',
          subtitle: 'No root suffocating or fertilizer runoff',
          description:
            'Over-irrigation creates waterlogged root zones that drown beneficial mycorrhizae and wash expensive nitrogen into waterways. Soil retains vital aerobic aeration.',
          badge: 'Active Soil Health',
          badgeColor: 'bg-amber-100 text-amber-900 border-amber-300',
        },
        {
          title: 'Climate Resilience',
          subtitle: 'Surviving erratic monsoon dry spells',
          description:
            'Crops with healthy, deep root systems and tailored sowing windows show 3x greater drought tolerance during extended breaks in the summer monsoon.',
          badge: 'Drought Buffer',
          badgeColor: 'bg-purple-100 text-purple-900 border-purple-300',
        },
      ],
    },
  };

  const comparisons = [
    {
      factor: 'Sowing Timing',
      before: '7-day hesitation, losing 51 kg/ha yield every single day',
      after: 'Live moisture window signal: sowed on Day 1 for maximum vegetative vigor',
    },
    {
      factor: 'Water Usage',
      before: 'Flood field 6 hours until ankle-deep (95,000 L / cycle wasted)',
      after: 'Exact root replenishment: 2 hrs 45 mins (38,500 L / cycle saves 59%)',
    },
    {
      factor: 'Night Routine',
      before: 'Wake up 2:30 AM, dangerous dark walk to pump starter switch',
      after: 'Peaceful full night sleep; daylight watering scheduled at 10:45 AM',
    },
    {
      factor: 'Pest & Blight',
      before: 'Detected late after entire acre turns yellow; heavy chemical spray',
      after: 'Early leaf scan detects rust at 11% outer foliage; light organic cure',
    },
    {
      factor: 'Harvest & Mandi Sale',
      before: 'Cut too early/late; discounted -₹400/quintal for high moisture',
      after: 'Harvested on Best Day (Nov 14) at 100% peak weight; top market price',
    },
  ];

  return (
    <section 
      id="impact" 
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

      <div className="relative max-w-7xl mx-auto flex flex-col items-start w-full">

        {/* 1. SECTION BADGE */}
        <div className="pixel-box-stepped max-w-fit mb-4">
          <div className="pixel-box-inner bg-[#FCF2DF] px-4 py-1 flex items-center justify-center">
            <span className="font-neris font-bold text-xs sm:text-sm text-stone-900 tracking-wider uppercase select-none">
              Measured Results & Field Outcomes
            </span>
          </div>
        </div>

        {/* 2. SECTION TITLE */}
        <h2 className="font-neris font-black text-4xl sm:text-5xl md:text-6xl text-[#FCF2DF] text-left tracking-tight leading-tight">
          Impact
        </h2>

        {/* 3. PARAGRAPH: White boundary with rounded edges pixelated, end-to-end proper passage */}
        <div className="relative z-10 w-full mt-6 mb-10 pixel-box-white-stepped">
          <div className="pixel-box-inner !bg-black p-6 sm:p-8 md:p-10 text-left" style={{ backgroundColor: '#000000' }}>
            <p className="font-neris text-base sm:text-lg md:text-xl text-stone-100 leading-relaxed font-normal text-left">
              <strong className="text-white font-bold">Small decisions, big savings.</strong>{' '}
              On a single farm, skipping just one unnecessary hour of pumping per irrigation day saves about{' '}
              <span className="text-sky-400 font-bold">370 kWh</span> of electricity a season from a typical 5 HP pump, along with the water it would have wasted. Across{' '}
              <span className="text-sky-400 font-bold">1 lakh farmers</span>, that adds up to roughly{' '}
              <span className="text-sky-400 font-bold">37 GWh</span> every season, easing the load on DISCOMs and slowing the drain on groundwater. Timely sowing protects yields that can drop by up to{' '}
              <span className="text-sky-400 font-bold">51 kg per hectare</span> for every day of delay, and early pest detection catches problems before they spread across the field. After harvest, smarter storage and selling help farmers hold on to more of the{' '}
              <span className="text-sky-400 font-bold">₹1.53 lakh crore</span> India loses to post-harvest losses every year.
            </p>
          </div>
        </div>

        {/* 5. THREE-LENS IMPACT TABS */}
        <div className="w-full mt-14">
          
          {/* Tab Navigation Buttons */}
          <div className="flex flex-wrap items-center justify-start gap-2 sm:gap-3 mb-6">
            {[
              { id: 'farmers', label: '1. For Farmers (Ramesh’s Pocket)', icon: '/logos/bar-chart.png' },
              { id: 'discoms', label: '2. For State DISCOMs & Power Grid', icon: '/logos/lightning.png' },
              { id: 'ecology', label: '3. For Groundwater & Environment', icon: '/logos/water-drop.png' },
            ].map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`font-neris font-black text-xs sm:text-sm px-4 py-2.5 rounded-lg border-2 transition-all cursor-pointer flex items-center gap-2 select-none ${
                    isActive
                      ? 'bg-[#fbc33c] text-stone-950 border-[#121c15] shadow-sm'
                      : 'bg-[#18281d] text-stone-300 border-[#25422e] hover:bg-[#203627]'
                  }`}
                >
                  <img 
                    src={tab.icon} 
                    alt={tab.label} 
                    className="w-4 h-4 object-contain"
                    style={{ imageRendering: 'pixelated' }}
                  />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Active Lens Detail Box */}
          <div className="pixel-box-stepped w-full">
            <div className="pixel-box-inner bg-[#FCF2DF] p-6 sm:p-8 text-stone-900 border-2 border-[#121c15]">
              
              {/* Lens Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 mb-6 border-b-2 border-[#121c15]">
                <div>
                  <span className="font-neris font-black text-xs text-emerald-900 uppercase tracking-wider block mb-1">
                    {lenses[activeTab].tag}
                  </span>
                  <h3 className="font-neris font-black text-xl sm:text-2xl text-stone-950">
                    {lenses[activeTab].title}
                  </h3>
                  <p className="font-neris text-xs sm:text-sm text-stone-700 font-medium mt-0.5">
                    {lenses[activeTab].subtitle}
                  </p>
                </div>
                <span className="self-start sm:self-center font-neris font-black text-xs bg-[#1b7a43] text-white px-3 py-1 rounded-md border border-[#12532d] shadow-xs shrink-0">
                  Verified In Field Trials
                </span>
              </div>

              {/* 4 Cards Grid for Active Lens */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {lenses[activeTab].highlights.map((item, idx) => (
                  <div 
                    key={idx}
                    className="p-4 bg-[#f5e9d2] rounded-lg border-2 border-[#121c15] flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <h4 className="font-neris font-black text-base text-stone-950">
                          {item.title}
                        </h4>
                        <span className={`text-[10px] font-neris font-black px-2 py-0.5 rounded border shrink-0 ${item.badgeColor}`}>
                          {item.badge}
                        </span>
                      </div>
                      <span className="font-neris font-bold text-xs text-emerald-950 block mb-2">
                        {item.subtitle}
                      </span>
                      <p className="font-neris text-xs text-stone-800 font-medium leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>

        {/* 6. BEFORE VS. AFTER COMPARISON TABLE */}
        <div className="w-full mt-14">
          <div className="text-left mb-6">
            <span className="font-neris font-black text-xs text-emerald-400 uppercase tracking-widest block">
              Transformation Breakdown
            </span>
            <h3 className="font-neris font-black text-2xl sm:text-3xl text-[#FCF2DF] mt-1">
              Traditional Farming vs. The Agrivue Method
            </h3>
          </div>

          <div className="pixel-box-stepped w-full">
            <div className="pixel-box-inner bg-[#FCF2DF] p-4 sm:p-6 text-stone-900 overflow-x-auto border-2 border-[#121c15]">
              <table className="w-full text-left border-collapse min-w-[580px]">
                <thead>
                  <tr className="border-b-2 border-[#121c15]">
                    <th className="font-neris font-black text-xs sm:text-sm text-stone-900 pb-3 uppercase tracking-wide w-1/4">
                      Farm Operation
                    </th>
                    <th className="font-neris font-black text-xs sm:text-sm text-rose-900 pb-3 uppercase tracking-wide w-3/8">
                      Traditional Guesswork (Ramesh Before)
                    </th>
                    <th className="font-neris font-black text-xs sm:text-sm text-emerald-950 pb-3 uppercase tracking-wide w-3/8">
                      With Agrivue (Ramesh Today)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#dfd0b2] text-xs font-neris">
                  {comparisons.map((row, idx) => (
                    <tr key={idx} className="hover:bg-[#f2e2c4] transition-colors">
                      <td className="py-3 font-bold text-stone-950 pr-3">
                        {row.factor}
                      </td>
                      <td className="py-3 text-stone-700 font-medium pr-3">
                        <span className="inline-block w-2 h-2 rounded-full bg-rose-500 mr-2" />
                        {row.before}
                      </td>
                      <td className="py-3 text-emerald-950 font-bold">
                        <span className="inline-block w-2 h-2 rounded-full bg-emerald-600 mr-2" />
                        {row.after}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
