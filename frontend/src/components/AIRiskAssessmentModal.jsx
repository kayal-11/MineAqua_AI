import React, { useState } from 'react';
import { BrainCircuit, Play, AlertTriangle, ShieldCheck, CheckCircle2, Sliders, Info, RefreshCw } from 'lucide-react';
import { runAiAssessment } from '../services/api';
import DemoBadge from './DemoBadge';

export const AIRiskAssessmentModal = () => {
  const [ph, setPh] = useState(7.2);
  const [tds, setTds] = useState(320);
  const [turbidity, setTurbidity] = useState(2.8);
  const [miningContext, setMiningContext] = useState("High Heavy Metals Risk Zone");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleRunAssessment = async () => {
    setLoading(true);
    const data = await runAiAssessment({
      ph: parseFloat(ph),
      tds: parseFloat(tds),
      turbidity: parseFloat(turbidity),
      mining_context: miningContext
    });
    setResult(data.assessment);
    setLoading(false);
  };

  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-6">
      {/* Title Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-slate-900 text-cyan-400 flex items-center justify-center shadow-md">
            <BrainCircuit className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-slate-900 text-lg">AI Water Risk Assessment</h3>
              <DemoBadge variant="badge" />
            </div>
            <p className="text-xs text-slate-500">Mining-aware contextual risk evaluation and adaptive treatment routing.</p>
          </div>
        </div>

        <button
          onClick={handleRunAssessment}
          disabled={loading}
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-slate-900 hover:bg-cyan-700 active:scale-95 transition-all shadow-sm disabled:opacity-50"
        >
          {loading ? (
            <RefreshCw className="w-4 h-4 animate-spin text-cyan-400" />
          ) : (
            <Play className="w-4 h-4 fill-cyan-400 text-cyan-400" />
          )}
          <span>{loading ? 'Evaluating...' : 'Run AI Assessment'}</span>
        </button>
      </div>

      {/* Inputs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">
            pH Input: <span className="text-cyan-600 font-extrabold">{ph}</span>
          </label>
          <input
            type="range"
            min="5.0"
            max="9.5"
            step="0.1"
            value={ph}
            onChange={(e) => setPh(e.target.value)}
            className="w-full accent-cyan-600 cursor-pointer"
          />
          <div className="flex justify-between text-[10px] text-slate-400">
            <span>Acidic (5.0)</span>
            <span>Neutral (7.2)</span>
            <span>Alkaline (9.5)</span>
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">
            TDS (ppm): <span className="text-blue-600 font-extrabold">{tds}</span>
          </label>
          <input
            type="range"
            min="100"
            max="800"
            step="10"
            value={tds}
            onChange={(e) => setTds(e.target.value)}
            className="w-full accent-blue-600 cursor-pointer"
          />
          <div className="flex justify-between text-[10px] text-slate-400">
            <span>100 ppm</span>
            <span>350 ppm</span>
            <span>800 ppm</span>
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">
            Turbidity (NTU): <span className="text-teal-600 font-extrabold">{turbidity}</span>
          </label>
          <input
            type="range"
            min="0.5"
            max="10.0"
            step="0.1"
            value={turbidity}
            onChange={(e) => setTurbidity(e.target.value)}
            className="w-full accent-teal-600 cursor-pointer"
          />
          <div className="flex justify-between text-[10px] text-slate-400">
            <span>0.5 NTU</span>
            <span>3.0 NTU</span>
            <span>10.0 NTU</span>
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">Mining Context</label>
          <select
            value={miningContext}
            onChange={(e) => setMiningContext(e.target.value)}
            className="w-full text-xs font-medium bg-white border border-slate-300 rounded-lg p-2 focus:ring-2 focus:ring-cyan-500 focus:outline-hidden"
          >
            <option value="High Heavy Metals Risk Zone">High Heavy Metals Risk Zone</option>
            <option value="Coal Washout Runoff Region">Coal Washout Runoff Region</option>
            <option value="Standard Rural Groundwater">Standard Rural Groundwater</option>
          </select>
        </div>
      </div>

      {/* Assessment Output Display */}
      {result ? (
        <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 text-white space-y-4 border border-slate-700 animate-in fade-in duration-300">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-700 pb-3">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">Assessment Result</span>
              <h4 className="text-xl font-extrabold">Risk Level: <span className={
                result.risk_level === 'HIGH' ? 'text-red-400' : result.risk_level === 'MEDIUM' ? 'text-amber-400' : 'text-emerald-400'
              }>{result.risk_level}</span></h4>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-600">
                Risk Score: {result.risk_score} / 100
              </span>
            </div>
          </div>

          {/* Contributing Factors */}
          <div className="space-y-2">
            <h5 className="text-xs font-bold text-slate-300 uppercase tracking-wider">Contributing Risk Factors</h5>
            <div className="flex flex-wrap gap-2">
              {result.contributing_factors.map((factor, i) => (
                <span key={i} className="text-xs px-2.5 py-1 rounded-lg bg-slate-800 text-cyan-300 border border-slate-700 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  {factor}
                </span>
              ))}
            </div>
          </div>

          {/* Treatment Recommendation */}
          <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-700 space-y-1">
            <span className="text-xs font-bold text-cyan-400">Selected Adaptive Treatment:</span>
            <p className="text-xs text-slate-200 leading-relaxed font-medium">{result.recommended_treatment}</p>
          </div>
        </div>
      ) : (
        <div className="p-4 rounded-xl bg-cyan-50/60 border border-cyan-100 flex items-start gap-3 text-xs text-slate-700">
          <Info className="w-5 h-5 text-cyan-600 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="font-semibold text-slate-900">
              MineAqua AI is designed to use water-quality measurements and mining-related context for risk assessment and purification-process selection.
            </p>
            <p className="text-slate-500">
              Adjust the sliders above and click <span className="font-bold text-slate-900">"Run AI Assessment"</span> to simulate a real-time risk calculation and view the resulting adaptive treatment pathway.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIRiskAssessmentModal;
