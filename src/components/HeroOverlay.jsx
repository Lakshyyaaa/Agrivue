import React, { useState } from 'react';
import { 
  Sprout, 
  ArrowRight, 
  Activity, 
  Layers, 
  Compass, 
  ChevronDown, 
  ChevronUp, 
  Sparkles,
  ShieldCheck,
  TrendingUp,
  Volume2
} from 'lucide-react';
import { soundEngine } from '../utils/soundEngine';

export default function HeroOverlay({ 
  onOpenTelemetry, 
  onOpenFeatures, 
  onOpenPilot,
  onOpenStory,
  onHighlightHotspot,
  isMuted,
  onToggleMute
}) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="fixed top-20 left-4 md:top-24 md:left-8 z-30 max-w-sm md:max-w-md pointer-events-auto transition-all duration-300">
      {collapsed ? (
        /* Collapsed Minimal Pill */
        <div 
          onClick={() => {
            soundEngine.playPixelClick();
            setCollapsed(false);
          }}
          className="group flex items-center gap-2.5 px-3.5 py-2 bg-slate-950/90 border border-emerald-500/50 hover:border-emerald-400 shadow-xl backdrop-blur-md cursor-pointer transition-all hover:scale-105"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-[11px] font-pixel text-emerald-300 uppercase tracking-wider">
            AGRIVUE OVERVIEW
          </span>
          <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-400 ml-1" />
        </div>
      ) : (
        /* Full Minimal Modern Hero Card */
        <div 
          className="relative bg-slate-950/85 border border-slate-800 hover:border-slate-700 shadow-[0_10px_35px_rgba(0,0,0,0.7)] backdrop-blur-xl p-5 md:p-6 text-slate-100 transition-all"
          style={{
            borderLeft: '4px solid #10b981',
          }}
        >
          {/* Card Top Pill & Minimize Button */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2 px-2.5 py-0.5 bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-[10px] font-pixel uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>INDIAN COUNTRYSIDE VISTA</span>
            </div>
            <button
              onClick={() => {
                soundEngine.playPixelClick();
                setCollapsed(true);
              }}
              className="p-1 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              title="Minimize Overview"
            >
              <ChevronUp className="w-4 h-4" />
            </button>
          </div>

          {/* Headline */}
          <h1 className="text-lg md:text-xl font-pixel text-white uppercase tracking-tight leading-snug mb-2">
            Where Ancient Soils Meet <span className="text-amber-400">Edge Intelligence</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xs text-slate-300 font-sans leading-relaxed mb-4">
            Harmonizing 5,000 years of regenerative Indian farm wisdom with autonomous IoT soil moisture probes, alternate wet-paddy drainage, and orbital NDVI canopy diagnostics.
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-3 gap-2 py-2.5 px-3 bg-slate-900/80 border border-slate-800/80 mb-4 text-center">
            <div>
              <span className="text-sm md:text-base font-pixel text-emerald-400 font-bold block">+28%</span>
              <span className="text-[9px] font-mono text-slate-400 uppercase">Yield Boost</span>
            </div>
            <div className="border-x border-slate-800">
              <span className="text-sm md:text-base font-pixel text-sky-400 font-bold block">-42%</span>
              <span className="text-[9px] font-mono text-slate-400 uppercase">Water Saved</span>
            </div>
            <div>
              <span className="text-sm md:text-base font-pixel text-amber-400 font-bold block">14.2k</span>
              <span className="text-[9px] font-mono text-slate-400 uppercase">Acres Active</span>
            </div>
          </div>

          {/* Interactive CTAs */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  soundEngine.playPixelClick();
                  onOpenTelemetry();
                }}
                className="flex-1 py-2 px-3 bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-pixel text-xs uppercase font-bold tracking-wider shadow-lg flex items-center justify-center gap-1.5 transition-all active:scale-95"
              >
                <Activity className="w-3.5 h-3.5" />
                <span>LIVE TELEMETRY</span>
              </button>

              <button
                onClick={() => {
                  soundEngine.playPixelClick();
                  onOpenFeatures();
                }}
                className="py-2 px-3 bg-slate-900 hover:bg-slate-800 text-amber-300 font-pixel text-xs uppercase border border-amber-500/40 hover:border-amber-400 flex items-center gap-1.5 transition-all active:scale-95"
              >
                <Layers className="w-3.5 h-3.5" />
                <span>TECH</span>
              </button>
            </div>

            <div className="flex items-center justify-between pt-1 text-[11px] font-mono text-slate-400">
              <button
                onClick={() => {
                  soundEngine.playPixelClick();
                  onOpenStory();
                }}
                className="hover:text-emerald-400 flex items-center gap-1 underline underline-offset-4 decoration-emerald-500/40 transition-colors"
              >
                <span>Read the Vedic Heritage Story</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
