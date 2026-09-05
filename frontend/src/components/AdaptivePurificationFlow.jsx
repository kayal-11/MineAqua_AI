import React, { useState } from 'react';
import { Filter, ShieldCheck, RefreshCw, CheckCircle2, AlertTriangle, ArrowDown, ArrowRight, ShieldAlert } from 'lucide-react';
import DemoBadge from './DemoBadge';

export const AdaptivePurificationFlow = () => {
  const [activeTab, setActiveTab] = useState('pass');

  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="font-bold text-slate-900 text-lg">Purification That Adapts to the Risk</h3>
            <DemoBadge variant="badge" />
          </div>
          <p className="text-xs text-slate-500">
            Instead of following a single fixed treatment path, MineAqua AI is designed to select the required purification process based on the assessed water risk.
          </p>
        </div>

        <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl text-xs font-semibold">
          <button
            onClick={() => setActiveTab('pass')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeTab === 'pass' ? 'bg-white text-emerald-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Verification Pass Flow
          </button>
          <button
            onClick={() => setActiveTab('fail')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeTab === 'fail' ? 'bg-white text-amber-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Re-Treatment Loop
          </button>
        </div>
      </div>

      {/* Decision Flow Tree */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-3 text-center">
        
        {/* Step 1 */}
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col items-center justify-center space-y-2">
          <span className="text-[10px] font-bold uppercase text-cyan-600 tracking-wider">Step 1</span>
          <h4 className="text-xs font-bold text-slate-900">Water Assessment</h4>
          <p className="text-[11px] text-slate-500">pH, TDS, Turbidity Sensing</p>
        </div>

        {/* Step 2 */}
        <div className="p-4 rounded-xl bg-slate-900 text-white flex flex-col items-center justify-center space-y-2 shadow-sm">
          <span className="text-[10px] font-bold uppercase text-cyan-400 tracking-wider">Step 2</span>
          <h4 className="text-xs font-bold">AI Risk Assessment</h4>
          <p className="text-[11px] text-slate-300">LOW / MED / HIGH Categorization</p>
        </div>

        {/* Step 3 */}
        <div className="p-4 rounded-xl bg-cyan-50 border border-cyan-200 flex flex-col items-center justify-center space-y-2">
          <span className="text-[10px] font-bold uppercase text-cyan-700 tracking-wider">Step 3</span>
          <h4 className="text-xs font-bold text-cyan-900">Required Treatment</h4>
          <p className="text-[11px] text-cyan-700">Sediment & Carbon Filter Activation</p>
        </div>

        {/* Step 4 */}
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col items-center justify-center space-y-2">
          <span className="text-[10px] font-bold uppercase text-cyan-600 tracking-wider">Step 4</span>
          <h4 className="text-xs font-bold text-slate-900">Post-Verification</h4>
          <p className="text-[11px] text-slate-500">Inline Secondary Sensor Check</p>
        </div>

        {/* Step 5 */}
        <div className={`p-4 rounded-xl border flex flex-col items-center justify-center space-y-2 ${
          activeTab === 'pass'
            ? 'bg-emerald-50 border-emerald-300 text-emerald-900'
            : 'bg-amber-50 border-amber-300 text-amber-900'
        }`}>
          <span className="text-[10px] font-bold uppercase tracking-wider">
            {activeTab === 'pass' ? 'PASS' : 'RE-TREATMENT'}
          </span>
          <h4 className="text-xs font-bold">
            {activeTab === 'pass' ? 'Safe Water Supply' : 'Relay Re-treatment Loop'}
          </h4>
          <p className="text-[11px]">
            {activeTab === 'pass' ? 'Delivered to Community' : 'Re-routed for Secondary Pass'}
          </p>
        </div>

      </div>

      {/* Verification Comparative Table (Section 11) */}
      <div className="pt-4 border-t border-slate-100 space-y-3">
        <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          Verify Before You Deliver — Post-Treatment Verification Log
        </h4>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left text-slate-600 border-collapse">
            <thead className="bg-slate-100 text-slate-700 font-bold uppercase text-[10px] tracking-wider">
              <tr>
                <th className="py-2.5 px-4 rounded-l-lg">Parameter</th>
                <th className="py-2.5 px-4">Before Treatment (Raw Intake)</th>
                <th className="py-2.5 px-4">After Treatment (Filter Output)</th>
                <th className="py-2.5 px-4">Verification Baseline</th>
                <th className="py-2.5 px-4 rounded-r-lg">Status Result</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td className="py-3 px-4 font-bold text-slate-900">pH Level</td>
                <td className="py-3 px-4 text-amber-700 font-semibold">6.2 pH (Slightly Acidic)</td>
                <td className="py-3 px-4 text-emerald-700 font-semibold">7.2 pH (Neutral)</td>
                <td className="py-3 px-4 text-slate-500">6.5 – 8.5 pH</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-0.5 rounded-full text-[11px] font-bold bg-emerald-100 text-emerald-800">
                    PASS
                  </span>
                </td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-bold text-slate-900">TDS (Total Dissolved Solids)</td>
                <td className="py-3 px-4 text-amber-700 font-semibold">410 ppm</td>
                <td className="py-3 px-4 text-emerald-700 font-semibold">320 ppm</td>
                <td className="py-3 px-4 text-slate-500">&lt; 500 ppm</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-0.5 rounded-full text-[11px] font-bold bg-emerald-100 text-emerald-800">
                    PASS
                  </span>
                </td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-bold text-slate-900">Turbidity (Clarity)</td>
                <td className="py-3 px-4 text-amber-700 font-semibold">5.8 NTU</td>
                <td className="py-3 px-4 text-emerald-700 font-semibold">2.8 NTU</td>
                <td className="py-3 px-4 text-slate-500">&lt; 5.0 NTU</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-0.5 rounded-full text-[11px] font-bold bg-emerald-100 text-emerald-800">
                    PASS
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdaptivePurificationFlow;
