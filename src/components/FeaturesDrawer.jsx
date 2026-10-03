import React from 'react';
import { X, Layers, Droplets, Sun, Satellite, Cpu, ShieldCheck, ArrowRight } from 'lucide-react';
import { soundEngine } from '../utils/soundEngine';

export const PLATFORM_MODULES = [
  {
    code: 'MOD-01',
    name: 'Bhoomi Microbiome Radar',
    tagline: 'Precision Soil Health & Biochar Tracking',
    icon: Cpu,
    color: '#f59e0b',
    description: 'Autonomous multi-depth soil probes quantify active microbial biomass, moisture saturation, and nitrogen-phosphorus-potassium balance, eliminating over-fertilization.',
    impact: 'Reduces chemical input costs by 32%'
  },
  {
    code: 'MOD-02',
    name: 'Varuna Hydro-Automation',
    tagline: 'Alternate Wetting & Drying Canal Gates',
    icon: Droplets,
    color: '#38bdf8',
    description: 'Solar-actuated sluice gates monitor flooded paddy percolation and groundwater recharge, executing automated micro-irrigation cycles triggered by transpiration deficits.',
    impact: 'Conserves 4.2 million liters of water/hectare'
  },
  {
    code: 'MOD-03',
    name: 'Surya Agro-Photovoltaics',
    tagline: 'Decentralized Cold Storage & Rural Grid',
    icon: Sun,
    color: '#eab308',
    description: 'Dual-use solar canopies over canal networks and village mandir commons generate clean electricity to power zero-emission cold chains directly at the farm gate.',
    impact: 'Eliminates 65% of post-harvest spoilage'
  },
  {
    code: 'MOD-04',
    name: 'Drishti Satellite NDVI',
    tagline: 'Multi-Spectral Canopy Disease Forensics',
    icon: Satellite,
    color: '#4ade80',
    description: 'Daily orbital imagery coupled with hyper-spectral drone sweeps detects blast, sheath blight, and hopper infestations 7 to 10 days before visual leaf discoloration.',
    impact: 'Prevents catastrophic yield losses'
  }
];

export default function FeaturesDrawer({ isOpen, onClose, onSelectModule }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md select-none">
      <div 
        className="relative w-full max-w-3xl bg-slate-900 border-2 border-amber-500/70 shadow-[0_0_40px_rgba(245,158,11,0.2)] text-slate-100 flex flex-col max-h-[90vh] overflow-hidden"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-amber-950/60 border-b border-amber-500/40">
          <div className="flex items-center gap-2.5">
            <Layers className="w-5 h-5 text-amber-400" />
            <h3 className="text-xs md:text-sm font-pixel tracking-wider text-amber-300 uppercase">
              AGRIVUE CORE ARCHITECTURE // 4 MODULES
            </h3>
          </div>
          <button
            onClick={() => {
              soundEngine.playPixelClick();
              onClose();
            }}
            className="p-1 text-slate-400 hover:text-white hover:bg-amber-900/40 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content list */}
        <div className="p-5 md:p-6 overflow-y-auto space-y-4">
          <p className="text-xs md:text-sm text-slate-300 font-sans leading-relaxed">
            Agrivue combines ancient regenerative wisdom with modern edge-computing. Our IoT sensors and orbital diagnostics deploy seamlessly across marginal farm holdings without requiring complex training.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            {PLATFORM_MODULES.map((mod) => {
              const Icon = mod.icon;
              return (
                <div 
                  key={mod.code}
                  className="p-4 bg-slate-950/80 border border-slate-800 hover:border-amber-400/60 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-pixel text-slate-500 group-hover:text-amber-400 transition-colors">
                        {mod.code}
                      </span>
                      <Icon className="w-4 h-4" style={{ color: mod.color }} />
                    </div>
                    <h4 className="text-xs font-pixel text-white uppercase tracking-wide mb-1">
                      {mod.name}
                    </h4>
                    <span className="text-[11px] font-mono text-amber-400/90 block mb-2">
                      {mod.tagline}
                    </span>
                    <p className="text-xs text-slate-400 font-sans leading-relaxed mb-3">
                      {mod.description}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-900 flex items-center justify-between text-[11px] font-mono text-emerald-400">
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      {mod.impact}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="px-5 py-3 bg-slate-950 border-t border-slate-800 flex justify-between items-center text-xs font-pixel">
          <span className="text-slate-500 text-[10px]">PATENTED HARVEST PROTOCOLS</span>
          <button
            onClick={() => {
              soundEngine.playPixelClick();
              onClose();
            }}
            className="px-4 py-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold uppercase tracking-wider"
          >
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
}
