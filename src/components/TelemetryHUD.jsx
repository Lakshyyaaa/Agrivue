import React, { useState, useEffect } from 'react';
import { 
  Activity, 
  Droplets, 
  Sun, 
  Wind, 
  Sprout, 
  TrendingUp, 
  Sliders, 
  X, 
  CheckCircle2, 
  RefreshCw,
  Zap,
  Leaf
} from 'lucide-react';
import { soundEngine } from '../utils/soundEngine';

export default function TelemetryHUD({ isOpen, onClose }) {
  const [soilMoisture, setSoilMoisture] = useState(64);
  const [windLevel, setWindLevel] = useState('Gentle (12 km/h)');
  const [ndviScore, setNdviScore] = useState(0.84);
  const [isIrrigating, setIsIrrigating] = useState(false);
  const [activeTab, setActiveTab] = useState('sensors'); // 'sensors' | 'simulation' | 'log'

  // Micro-fluctuations for realistic live sensor feel
  useEffect(() => {
    if (!isOpen) return;
    const interval = setInterval(() => {
      setNdviScore((prev) => +(prev + (Math.random() * 0.02 - 0.01)).toFixed(2));
      setSoilMoisture((prev) => Math.min(85, Math.max(45, prev + (Math.floor(Math.random() * 3) - 1))));
    }, 2800);
    return () => clearInterval(interval);
  }, [isOpen]);

  const triggerIrrigationPulse = () => {
    soundEngine.playChime();
    setIsIrrigating(true);
    setSoilMoisture((prev) => Math.min(88, prev + 12));
    setTimeout(() => {
      setIsIrrigating(false);
    }, 2200);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm select-none">
      {/* HUD Window with pixel-art framing */}
      <div 
        className="relative w-full max-w-2xl bg-slate-900 border-2 border-emerald-500 shadow-[0_0_35px_rgba(16,185,129,0.25)] text-slate-100 flex flex-col max-h-[90vh] overflow-hidden"
        style={{
          boxShadow: '0 0 0 2px #0f172a, 0 10px 30px rgba(0,0,0,0.8), inset 0 0 15px rgba(16,185,129,0.1)'
        }}
      >
        {/* HUD Header Bar */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-emerald-950/90 border-b border-emerald-500/40">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-emerald-400 rounded-none animate-pulse" />
            <h3 className="text-xs font-pixel tracking-wider text-emerald-300 uppercase">
              AGRIVUE LIVE TELEMETRY CORE // PROTOCOL 0.94
            </h3>
          </div>
          <button
            onClick={() => {
              soundEngine.playPixelClick();
              onClose();
            }}
            className="p-1 hover:bg-emerald-800/60 text-emerald-300 hover:text-white border border-transparent hover:border-emerald-400 transition-all"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex border-b border-slate-800 bg-slate-950/80 px-4 pt-2 gap-2 text-[11px] font-pixel">
          <button
            onClick={() => setActiveTab('sensors')}
            className={`px-3 py-1.5 border-b-2 uppercase tracking-wide transition-all ${
              activeTab === 'sensors'
                ? 'border-emerald-400 text-emerald-300 bg-slate-900'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Real-Time Sensors
          </button>
          <button
            onClick={() => setActiveTab('simulation')}
            className={`px-3 py-1.5 border-b-2 uppercase tracking-wide transition-all ${
              activeTab === 'simulation'
                ? 'border-emerald-400 text-emerald-300 bg-slate-900'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            IoT Actuators & Sluice
          </button>
          <button
            onClick={() => setActiveTab('log')}
            className={`px-3 py-1.5 border-b-2 uppercase tracking-wide transition-all ${
              activeTab === 'log'
                ? 'border-emerald-400 text-emerald-300 bg-slate-900'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Mandi & Yield Forecast
          </button>
        </div>

        {/* Main Content Area */}
        <div className="p-4 md:p-6 overflow-y-auto space-y-5">
          {activeTab === 'sensors' && (
            <>
              {/* Top Sensor Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {/* NDVI Index */}
                <div className="p-3 bg-slate-950/60 border border-emerald-500/30">
                  <div className="flex items-center justify-between text-slate-400 mb-1">
                    <span className="text-[10px] font-pixel uppercase">Canopy NDVI</span>
                    <Leaf className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <div className="text-xl font-pixel text-emerald-400 font-bold">{ndviScore}</div>
                  <span className="text-[10px] text-emerald-500/90 font-sans">Vigorous Crop Health</span>
                </div>

                {/* Soil Hydration */}
                <div className="p-3 bg-slate-950/60 border border-sky-500/30">
                  <div className="flex items-center justify-between text-slate-400 mb-1">
                    <span className="text-[10px] font-pixel uppercase">Hydration</span>
                    <Droplets className="w-3.5 h-3.5 text-sky-400" />
                  </div>
                  <div className="text-xl font-pixel text-sky-400 font-bold">{soilMoisture}%</div>
                  <span className="text-[10px] text-sky-500/90 font-sans">AWD Saturated</span>
                </div>

                {/* Solar Irradiance */}
                <div className="p-3 bg-slate-950/60 border border-amber-500/30">
                  <div className="flex items-center justify-between text-slate-400 mb-1">
                    <span className="text-[10px] font-pixel uppercase">Solar Flux</span>
                    <Sun className="w-3.5 h-3.5 text-amber-400" />
                  </div>
                  <div className="text-xl font-pixel text-amber-400 font-bold">780 W/m²</div>
                  <span className="text-[10px] text-amber-500/90 font-sans">Full Sunlight</span>
                </div>

                {/* Wind Velocity */}
                <div className="p-3 bg-slate-950/60 border border-indigo-500/30">
                  <div className="flex items-center justify-between text-slate-400 mb-1">
                    <span className="text-[10px] font-pixel uppercase">Breeze</span>
                    <Wind className="w-3.5 h-3.5 text-indigo-400" />
                  </div>
                  <div className="text-sm font-pixel text-indigo-300 font-bold pt-1.5">{windLevel}</div>
                  <span className="text-[10px] text-indigo-400/90 font-sans">Crop Aeration Optimal</span>
                </div>
              </div>

              {/* 24-Hour Diurnal Curves (ASCII / 8-bit Visualizer) */}
              <div className="p-4 bg-slate-950/80 border border-slate-800">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-pixel text-slate-400 uppercase tracking-wider">
                    24-Hour Photosynthetic Activity & Soil Moisture Gradient
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400">SYNCED LIVE</span>
                </div>

                {/* Pixelated Bar Graph */}
                <div className="h-24 flex items-end gap-1.5 pt-3 border-b border-slate-800 pb-1">
                  {[28, 35, 42, 50, 68, 85, 92, 98, 95, 88, 76, 62, 54, 48, 42, 38].map((val, idx) => (
                    <div key={idx} className="flex-1 flex flex-col items-center gap-1 h-full justify-end group">
                      <div 
                        className={`w-full transition-all duration-500 ${
                          idx >= 6 && idx <= 10 
                            ? 'bg-amber-400 group-hover:bg-amber-300' 
                            : 'bg-emerald-500/80 group-hover:bg-emerald-400'
                        }`}
                        style={{ height: `${val}%` }}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex justify-between text-[9px] font-mono text-slate-500 pt-1">
                  <span>04:00 (Dawn)</span>
                  <span>10:00 (Solar Peak)</span>
                  <span>16:00 (Godhuli)</span>
                  <span>22:00 (Dewpoint)</span>
                </div>
              </div>

              {/* Soil Composition Matrix */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3 bg-slate-950/50 border border-slate-800">
                  <span className="text-[10px] font-pixel text-slate-400 block mb-1">NITROGEN (N)</span>
                  <div className="w-full bg-slate-800 h-2 mb-1.5">
                    <div className="bg-emerald-400 h-full w-[78%]" />
                  </div>
                  <span className="text-[11px] font-mono text-slate-300">142 kg/ha • High</span>
                </div>

                <div className="p-3 bg-slate-950/50 border border-slate-800">
                  <span className="text-[10px] font-pixel text-slate-400 block mb-1">PHOSPHORUS (P)</span>
                  <div className="w-full bg-slate-800 h-2 mb-1.5">
                    <div className="bg-amber-400 h-full w-[62%]" />
                  </div>
                  <span className="text-[11px] font-mono text-slate-300">46 kg/ha • Balanced</span>
                </div>

                <div className="p-3 bg-slate-950/50 border border-slate-800">
                  <span className="text-[10px] font-pixel text-slate-400 block mb-1">POTASSIUM (K)</span>
                  <div className="w-full bg-slate-800 h-2 mb-1.5">
                    <div className="bg-sky-400 h-full w-[85%]" />
                  </div>
                  <span className="text-[11px] font-mono text-slate-300">188 kg/ha • Rich</span>
                </div>
              </div>
            </>
          )}

          {activeTab === 'simulation' && (
            <div className="space-y-4">
              <div className="p-4 bg-slate-950 border border-emerald-500/40">
                <h4 className="text-xs font-pixel text-emerald-400 uppercase mb-2 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-emerald-400" />
                  Remote Micro-Canal Gate Sluice Control
                </h4>
                <p className="text-xs text-slate-300 mb-4 leading-relaxed font-sans">
                  Execute precision water gate pulses into flooded terrace plot #2. Monitors soil hydration threshold to prevent over-saturation.
                </p>

                <div className="flex items-center gap-3">
                  <button
                    onClick={triggerIrrigationPulse}
                    disabled={isIrrigating}
                    className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-pixel text-xs uppercase tracking-wider font-bold border-2 border-emerald-300 shadow-lg active:scale-95 disabled:opacity-50"
                  >
                    {isIrrigating ? 'OPENING CANAL SLUICE...' : 'DISPATCH WATER PULSE (+12%)'}
                  </button>

                  <span className="text-xs font-mono text-sky-400">
                    Current Level: {soilMoisture}%
                  </span>
                </div>
              </div>

              <div className="p-4 bg-slate-950 border border-slate-800">
                <h4 className="text-xs font-pixel text-amber-400 uppercase mb-2">
                  Simulated Wind Condition
                </h4>
                <div className="grid grid-cols-3 gap-2">
                  {['Gentle (12 km/h)', 'Moderate (22 km/h)', 'Monsoon Gust (38 km/h)'].map((lvl) => (
                    <button
                      key={lvl}
                      onClick={() => {
                        soundEngine.playPixelClick();
                        setWindLevel(lvl);
                      }}
                      className={`p-2 text-[10px] font-pixel border uppercase ${
                        windLevel === lvl 
                          ? 'border-amber-400 bg-amber-950/60 text-amber-200' 
                          : 'border-slate-800 bg-slate-900/60 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {lvl.split(' ')[0]}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'log' && (
            <div className="space-y-3">
              <div className="p-4 bg-slate-950 border border-slate-800 space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-pixel text-amber-400 uppercase">Crop: Basmati Super-Kernel</span>
                  <span className="text-xs font-mono text-emerald-400">Stage: Grain Hardening</span>
                </div>
                <div className="text-xs text-slate-300 font-sans space-y-1">
                  <p>• Estimated Harvest Yield: <strong className="text-white">4.8 Tonnes / Hectare</strong> (+24% vs regional baseline)</p>
                  <p>• Projected Mandi Realization: <strong className="text-white">₹3,450 / Quintal</strong></p>
                  <p>• Quality Index: <strong className="text-emerald-400">A+ Export Grade</strong> (Moisture verified at 12.8%)</p>
                </div>
              </div>

              <div className="p-3 bg-emerald-950/30 border border-emerald-500/20 text-xs text-emerald-300 font-sans">
                💡 <em>Agrivue advisory: Forecasted rainfall in 36 hours. Postpone chemical foliar spraying; allow canal drains to open automatically.</em>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-4 py-2.5 bg-slate-950 border-t border-slate-800 flex justify-between items-center text-[10px] font-mono text-slate-500">
          <span>LAT: 15.3173° N • LON: 75.7139° E</span>
          <span className="text-emerald-400">TELEMETRY ENCRYPTED • LORAWAN OK</span>
        </div>
      </div>
    </div>
  );
}
