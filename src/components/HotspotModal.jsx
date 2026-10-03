import React from 'react';
import { X, Cpu, CheckCircle2, ChevronRight, Activity, MapPin } from 'lucide-react';
import { soundEngine } from '../utils/soundEngine';

export default function HotspotModal({ hotspot, onClose }) {
  if (!hotspot) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm select-none animate-fadeIn">
      <div 
        className="relative w-full max-w-lg bg-slate-900 border-2 shadow-2xl text-slate-100 flex flex-col overflow-hidden"
        style={{
          borderColor: hotspot.color,
          boxShadow: `0 0 25px ${hotspot.color}50, 0 10px 40px rgba(0,0,0,0.9)`
        }}
      >
        {/* Header */}
        <div 
          className="px-4 py-3 flex items-center justify-between border-b"
          style={{ 
            backgroundColor: `${hotspot.color}15`, 
            borderColor: `${hotspot.color}40` 
          }}
        >
          <div className="flex items-center gap-2.5">
            <span 
              className="w-3 h-3 rounded-none animate-pulse" 
              style={{ backgroundColor: hotspot.color }} 
            />
            <div>
              <span className="text-[10px] font-pixel uppercase tracking-widest block opacity-75">
                {hotspot.tag}
              </span>
              <h3 className="text-sm font-pixel text-white uppercase tracking-wider">
                {hotspot.title}
              </h3>
            </div>
          </div>
          <button
            onClick={() => {
              soundEngine.playPixelClick();
              onClose();
            }}
            className="p-1 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 space-y-4 max-h-[75vh] overflow-y-auto">
          {/* Subtitle / Location */}
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400 pb-1 border-b border-slate-800">
            <MapPin className="w-3.5 h-3.5" style={{ color: hotspot.color }} />
            <span>{hotspot.subtitle}</span>
          </div>

          {/* Description */}
          <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-sans">
            {hotspot.description}
          </p>

          {/* Real-time Telemetry Metrics Grid */}
          <div className="space-y-2 pt-1">
            <span className="text-[10px] font-pixel text-slate-400 uppercase tracking-widest block">
              Active Telemetry Readings
            </span>
            <div className="grid grid-cols-2 gap-2.5">
              {Object.entries(hotspot.metrics).map(([key, value]) => {
                const label = key
                  .replace(/([A-Z])/g, ' $1')
                  .replace(/^./, (str) => str.toUpperCase());
                return (
                  <div 
                    key={key} 
                    className="p-2.5 bg-slate-950/70 border border-slate-800 flex flex-col justify-between"
                  >
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wide">
                      {label}
                    </span>
                    <span 
                      className="text-xs md:text-sm font-pixel font-bold mt-1"
                      style={{ color: hotspot.color }}
                    >
                      {value}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Tech Stack Hardware Note */}
          <div className="p-3 bg-slate-950/90 border border-slate-800/80 flex items-start gap-2.5">
            <Cpu className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <div className="text-[11px] font-mono text-slate-400">
              <span className="text-slate-200 block font-bold mb-0.5">DEPLOYED TELEMETRY HARDWARE</span>
              {hotspot.techStack}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-5 py-3 bg-slate-950 border-t border-slate-800 flex justify-between items-center">
          <div className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-400">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>STATUS: SENSOR ONLINE</span>
          </div>
          <button
            onClick={() => {
              soundEngine.playPixelClick();
              onClose();
            }}
            className="px-3 py-1.5 text-xs font-pixel uppercase tracking-wide bg-slate-800 hover:bg-slate-700 text-white border border-slate-600 transition-all active:scale-95"
          >
            DISMISS
          </button>
        </div>
      </div>
    </div>
  );
}
