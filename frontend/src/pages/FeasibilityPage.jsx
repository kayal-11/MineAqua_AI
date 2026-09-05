import React from 'react';
import { CheckCircle2, AlertTriangle, ShieldCheck, Cpu, Battery, RefreshCw, Sun, WifiOff, Activity } from 'lucide-react';
import DemoBadge from '../components/DemoBadge';

export const FeasibilityPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="flex justify-center">
          <DemoBadge variant="badge" />
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Feasibility, Technical Risks & Mitigations
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          A realistic technical analysis evaluating operational feasibility, deployment challenges, and risk mitigation strategies.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Feasibility Strengths */}
        <div className="bg-white rounded-3xl p-6 border border-emerald-200 shadow-sm space-y-4">
          <div className="flex items-center gap-3 border-b border-emerald-100 pb-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-lg text-slate-900">Feasibility Strengths</h3>
              <p className="text-xs text-slate-500">Core architectural advantages</p>
            </div>
          </div>

          <ul className="space-y-3 text-xs text-slate-700">
            <li className="p-3 rounded-2xl bg-emerald-50/60 border border-emerald-100 space-y-1">
              <span className="font-bold text-emerald-900 block">Low-Cost Component Selection</span>
              <p className="text-slate-600">Uses accessible ESP32 microcontrollers and standard industrial sensor interfaces to keep unit cost minimal.</p>
            </li>
            <li className="p-3 rounded-2xl bg-emerald-50/60 border border-emerald-100 space-y-1">
              <span className="font-bold text-emerald-900 block">Modular Filter Design</span>
              <p className="text-slate-600">Separates sediment and carbon filter stages for easy individual replacement without discarding the entire system.</p>
            </li>
            <li className="p-3 rounded-2xl bg-emerald-50/60 border border-emerald-100 space-y-1">
              <span className="font-bold text-emerald-900 block">Off-Grid Solar-Powered Operation</span>
              <p className="text-slate-600">Integrates solar panel and battery storage, eliminating dependence on unreliable rural electricity grids.</p>
            </li>
            <li className="p-3 rounded-2xl bg-emerald-50/60 border border-emerald-100 space-y-1">
              <span className="font-bold text-emerald-900 block">Remote Deployment Suitability</span>
              <p className="text-slate-600">Autonomous microcontroller logic operates reliably even in off-grid remote mining habitations.</p>
            </li>
            <li className="p-3 rounded-2xl bg-emerald-50/60 border border-emerald-100 space-y-1">
              <span className="font-bold text-emerald-900 block">Scalable Architecture</span>
              <p className="text-slate-600">Designed for straightforward scaling from single prototype units to community-wide purification nodes.</p>
            </li>
          </ul>
        </div>

        {/* Technical Challenges */}
        <div className="bg-white rounded-3xl p-6 border border-amber-200 shadow-sm space-y-4">
          <div className="flex items-center gap-3 border-b border-amber-100 pb-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-lg text-slate-900">Technical Challenges</h3>
              <p className="text-xs text-slate-500">Field environment obstacles</p>
            </div>
          </div>

          <ul className="space-y-3 text-xs text-slate-700">
            <li className="p-3 rounded-2xl bg-amber-50/60 border border-amber-100 space-y-1">
              <span className="font-bold text-amber-900 block">Sensor Calibration Drift</span>
              <p className="text-slate-600">Continuous exposure to heavy mineral runoff can cause bio-fouling or calibration drift in analog pH/TDS probes.</p>
            </li>
            <li className="p-3 rounded-2xl bg-amber-50/60 border border-amber-100 space-y-1">
              <span className="font-bold text-amber-900 block">Limited Rural Connectivity</span>
              <p className="text-slate-600">Intermittent cellular or Wi-Fi coverage in deep mining regions can disrupt real-time cloud data transmission.</p>
            </li>
            <li className="p-3 rounded-2xl bg-amber-50/60 border border-amber-100 space-y-1">
              <span className="font-bold text-amber-900 block">Variable Water Contamination</span>
              <p className="text-slate-600">Sudden heavy rain or flash runoff from mining pits causes unpredictable spikes in turbidity and dissolved solids.</p>
            </li>
            <li className="p-3 rounded-2xl bg-amber-50/60 border border-amber-100 space-y-1">
              <span className="font-bold text-amber-900 block">Intermittent Solar Power</span>
              <p className="text-slate-600">Extended cloudy monsoon periods reduce solar panel generation capacity.</p>
            </li>
          </ul>
        </div>

        {/* Mitigation Strategies */}
        <div className="bg-white rounded-3xl p-6 border border-cyan-200 shadow-sm space-y-4">
          <div className="flex items-center gap-3 border-b border-cyan-100 pb-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-100 text-cyan-700 flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-lg text-slate-900">Mitigation Strategies</h3>
              <p className="text-xs text-slate-500">Engineering solutions</p>
            </div>
          </div>

          <ul className="space-y-3 text-xs text-slate-700">
            <li className="p-3 rounded-2xl bg-cyan-50/60 border border-cyan-100 space-y-1">
              <span className="font-bold text-cyan-900 block">Regular Sensor Calibration & Auto-Validation</span>
              <p className="text-slate-600">Implement periodic buffer calibration routines and dual-sensor baseline verification to detect drift.</p>
            </li>
            <li className="p-3 rounded-2xl bg-cyan-50/60 border border-cyan-100 space-y-1">
              <span className="font-bold text-cyan-900 block">Offline Local Flash Storage + Sync</span>
              <p className="text-slate-600">ESP32 logs telemetry locally on non-volatile flash memory during outages, auto-syncing when connection restores.</p>
            </li>
            <li className="p-3 rounded-2xl bg-cyan-50/60 border border-cyan-100 space-y-1">
              <span className="font-bold text-cyan-900 block">Quick-Replaceable Filter Cartridges</span>
              <p className="text-slate-600">Standardized twist-lock filter media allowing local community technicians to replace saturated units easily.</p>
            </li>
            <li className="p-3 rounded-2xl bg-cyan-50/60 border border-cyan-100 space-y-1">
              <span className="font-bold text-cyan-900 block">Intelligent Battery & Load Management</span>
              <p className="text-slate-600">Power management circuit toggles low-power sleep modes during dark hours while keeping essential sensing active.</p>
            </li>
          </ul>
        </div>

      </div>

    </div>
  );
};

export default FeasibilityPage;
