import React from 'react';
import { X, BookOpen, Heart, Sun, Feather } from 'lucide-react';
import { soundEngine } from '../utils/soundEngine';

export default function StoryModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md select-none">
      <div 
        className="relative w-full max-w-2xl bg-slate-900 border-2 border-indigo-500/70 shadow-[0_0_40px_rgba(99,102,241,0.25)] text-slate-100 flex flex-col max-h-[90vh] overflow-hidden"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-indigo-950/60 border-b border-indigo-500/40">
          <div className="flex items-center gap-2.5">
            <BookOpen className="w-5 h-5 text-indigo-400" />
            <h3 className="text-xs md:text-sm font-pixel tracking-wider text-indigo-300 uppercase">
              THE AGRIVUE PHILOSOPHY // ROOTS & HORIZONS
            </h3>
          </div>
          <button
            onClick={() => {
              soundEngine.playPixelClick();
              onClose();
            }}
            className="p-1 text-slate-400 hover:text-white hover:bg-indigo-900/40 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 md:p-6 overflow-y-auto space-y-4 font-sans text-xs md:text-sm text-slate-300 leading-relaxed">
          <div className="p-3 bg-indigo-950/30 border border-indigo-500/30 font-pixel text-xs text-indigo-200">
            "We do not inherit the earth from our ancestors; we borrow it from our children." — Indian Agrarian Axiom
          </div>

          <h4 className="font-pixel text-amber-300 text-xs uppercase tracking-wider pt-1">
            Bridging 5,000 Years of Soil Wisdom with Edge Intelligence
          </h4>
          <p>
            When you gaze across the pixel-art Indian countryside, you see centuries of living equilibrium:
            the ploughman and his indigenous Zebu oxen aerating the earth without heavy fossil-fuel machinery, 
            the woman winnowing golden grains on the porch, the whitewashed Shikara mandir serving as the village beacon, 
            and the ancient banyan tree sheltering birds, cattle, and micro-climates alike.
          </p>

          <p>
            Agrivue was founded on the conviction that high-technology should not bulldoze ancestral agricultural traditions. 
            Instead, high-tech should serve as a digital shepherd:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            <div className="p-3 bg-slate-950 border border-slate-800">
              <span className="font-pixel text-[11px] text-emerald-400 block mb-1">ZERO-LOSS HARVEST</span>
              <p className="text-[11px] text-slate-400">
                Empowering smallholder farmers with solar cold storage and transparent Mandi price indices.
              </p>
            </div>
            <div className="p-3 bg-slate-950 border border-slate-800">
              <span className="font-pixel text-[11px] text-sky-400 block mb-1">AQUIFER REJUVENATION</span>
              <p className="text-[11px] text-slate-400">
                Smart sluice valves that sync with Western Ghats monsoon predictions to preserve ground reserves.
              </p>
            </div>
          </div>

          <p>
            Our pixelated interface is an homage to simplicity and timelessness—proving that deep agricultural telemetry can be as joyful and serene as morning birdsong over the paddy fields.
          </p>
        </div>

        {/* Footer */}
        <div className="px-5 py-3 bg-slate-950 border-t border-slate-800 flex justify-between items-center text-xs font-pixel">
          <span className="text-slate-500 text-[10px]">CRAFTED FOR RURAL RESILIENCE</span>
          <button
            onClick={() => {
              soundEngine.playPixelClick();
              onClose();
            }}
            className="px-4 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold uppercase tracking-wider"
          >
            RETURN TO FIELDS
          </button>
        </div>
      </div>
    </div>
  );
}
