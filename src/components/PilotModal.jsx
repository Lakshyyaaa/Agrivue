import React, { useState } from 'react';
import { X, CheckCircle, Send, Sprout, MapPin, Mail, Phone, User } from 'lucide-react';
import { soundEngine } from '../utils/soundEngine';

export default function PilotModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    district: '',
    cropType: 'Basmati Rice & Paddy',
    acreage: '10 - 50 Acres'
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    soundEngine.playChime();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md select-none">
      <div 
        className="relative w-full max-w-lg bg-slate-900 border-2 border-amber-400 shadow-[0_0_40px_rgba(251,191,36,0.3)] text-slate-100 flex flex-col overflow-hidden"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-amber-950/80 border-b border-amber-400/50">
          <div className="flex items-center gap-2">
            <Sprout className="w-5 h-5 text-amber-400" />
            <h3 className="text-xs md:text-sm font-pixel tracking-wider text-amber-300 uppercase">
              DEPLOY AGRIVUE // 2026 PILOT HARVEST
            </h3>
          </div>
          <button
            onClick={() => {
              soundEngine.playPixelClick();
              onClose();
            }}
            className="p-1 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 md:p-6 overflow-y-auto">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-14 h-14 bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center mx-auto text-emerald-400 animate-bounce">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h4 className="font-pixel text-emerald-400 text-sm uppercase">
                PILOT APPLICATION DISPATCHED!
              </h4>
              <p className="text-xs text-slate-300 font-sans max-w-xs mx-auto leading-relaxed">
                Thank you, <strong>{formData.name || 'Agri Leader'}</strong>. Our field agronomist will review your plot coordinates in <strong>{formData.district || 'your region'}</strong> within 24 hours.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => {
                    soundEngine.playPixelClick();
                    setSubmitted(false);
                    onClose();
                  }}
                  className="px-5 py-2 bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-pixel text-xs uppercase font-bold"
                >
                  RETURN TO VISTA
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-xs text-slate-300 font-sans leading-relaxed">
                Equip your farmland with Agrivue's autonomous soil moisture probes, LoRaWAN mesh gateways, and satellite NDVI monitoring.
              </p>

              <div className="space-y-3 font-sans text-xs">
                <div>
                  <label className="block text-[10px] font-pixel text-slate-400 uppercase mb-1">
                    Farmer / FPO Lead Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Patel"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-800 focus:border-amber-400 text-slate-100 text-xs outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[10px] font-pixel text-slate-400 uppercase mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="farmer@agrivue.in"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2 bg-slate-950 border border-slate-800 focus:border-amber-400 text-slate-100 text-xs outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-pixel text-slate-400 uppercase mb-1">
                      District / State
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Nashik, MH"
                      value={formData.district}
                      onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                      className="w-full px-3 py-2 bg-slate-950 border border-slate-800 focus:border-amber-400 text-slate-100 text-xs outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[10px] font-pixel text-slate-400 uppercase mb-1">
                      Primary Crop
                    </label>
                    <select
                      value={formData.cropType}
                      onChange={(e) => setFormData({ ...formData, cropType: e.target.value })}
                      className="w-full px-3 py-2 bg-slate-950 border border-slate-800 focus:border-amber-400 text-slate-100 text-xs outline-none"
                    >
                      <option>Basmati Rice & Paddy</option>
                      <option>Wheat & Millets</option>
                      <option>Cotton & Soybean</option>
                      <option>Sugarcane & Horticulture</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] font-pixel text-slate-400 uppercase mb-1">
                      Land Holding
                    </label>
                    <select
                      value={formData.acreage}
                      onChange={(e) => setFormData({ ...formData, acreage: e.target.value })}
                      className="w-full px-3 py-2 bg-slate-950 border border-slate-800 focus:border-amber-400 text-slate-100 text-xs outline-none"
                    >
                      <option>Under 10 Acres</option>
                      <option>10 - 50 Acres</option>
                      <option>50 - 250 Acres</option>
                      <option>Cooperative / FPO (500+ Acres)</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-2.5 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-200 text-slate-950 font-pixel text-xs font-bold uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 active:scale-95 transition-all"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>SUBMIT PILOT APPLICATION</span>
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Footer */}
        <div className="px-5 py-2.5 bg-slate-950 border-t border-slate-800 text-[10px] font-mono text-slate-500 text-center">
          100% PRIVATE • ZERO COMMITMENT TELEMETRY AUDIT
        </div>
      </div>
    </div>
  );
}
