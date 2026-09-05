import React, { useState } from 'react';
import { 
  Filter, ShieldCheck, RefreshCw, CheckCircle2, AlertTriangle, ArrowRight, ArrowDown, ShieldAlert, Cpu, Activity, Droplets, Info, Check, AlertCircle 
} from 'lucide-react';
import DemoBadge from '../components/DemoBadge';

export const PurificationPage = () => {
  const [selectedRiskScenario, setSelectedRiskScenario] = useState('LOW');
  const [verificationResult, setVerificationResult] = useState('PASS');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Prominent Demo Mode Banner */}
      <DemoBadge variant="banner" text="DEMO MODE — Water purification pathways and post-verification values are simulated demonstration data." />

      {/* Main Page Title & Intro */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-6">
          <div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl water-gradient flex items-center justify-center text-white shadow-md">
                <Filter className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    Purification That Adapts to the Risk
                  </h1>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-800 border border-amber-300">
                    DEMO MODE
                  </span>
                </div>
                <p className="text-sm font-medium text-slate-600 mt-1 max-w-3xl leading-relaxed">
                  Instead of following a single fixed treatment path, MineAqua AI is designed to select the required purification process based on the assessed water risk.
                </p>
              </div>
            </div>
          </div>

          {/* Scenario Selector for Demo */}
          <div className="p-2 rounded-xl bg-slate-100 border border-slate-200 space-y-1.5 self-start md:self-auto">
            <span className="text-[10px] font-extrabold uppercase text-slate-500 tracking-wider block px-1">
              Simulate Risk Scenario
            </span>
            <div className="flex items-center gap-1">
              {['LOW', 'MEDIUM', 'HIGH'].map((level) => (
                <button
                  key={level}
                  onClick={() => setSelectedRiskScenario(level)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    selectedRiskScenario === level
                      ? level === 'HIGH' 
                        ? 'bg-red-600 text-white shadow-xs' 
                        : level === 'MEDIUM' 
                          ? 'bg-amber-500 text-white shadow-xs' 
                          : 'bg-emerald-600 text-white shadow-xs'
                      : 'text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {level} Risk
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Dynamic Adaptive Flow Pipeline Header & Steps */}
        <div className="pt-2 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <Activity className="w-4 h-4 text-cyan-600" />
              <span>Adaptive Purification Decision Flow</span>
            </h2>
            <div className="flex items-center gap-2 text-xs">
              <span className="text-slate-500 font-medium">Verification Outcome Toggle:</span>
              <button
                onClick={() => setVerificationResult('PASS')}
                className={`px-2.5 py-1 rounded-md font-bold transition-all ${
                  verificationResult === 'PASS' 
                    ? 'bg-emerald-100 text-emerald-800 border border-emerald-300' 
                    : 'bg-slate-100 text-slate-600'
                }`}
              >
                PASS Flow
              </button>
              <button
                onClick={() => setVerificationResult('FAIL')}
                className={`px-2.5 py-1 rounded-md font-bold transition-all ${
                  verificationResult === 'FAIL' 
                    ? 'bg-amber-100 text-amber-800 border border-amber-300' 
                    : 'bg-slate-100 text-slate-600'
                }`}
              >
                FAIL (Re-Treatment)
              </button>
            </div>
          </div>

          {/* Visual Step-by-Step Flow */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            
            {/* Step 1 */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between space-y-3 relative group hover:border-cyan-400 transition-all shadow-xs">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase bg-cyan-100 text-cyan-800">
                  Step 1
                </span>
                <Droplets className="w-5 h-5 text-cyan-600" />
              </div>
              <div>
                <h3 className="font-extrabold text-slate-900 text-sm">Water Assessment</h3>
                <p className="text-xs text-slate-600 font-medium mt-1">pH, TDS, Turbidity Sensing</p>
              </div>
              <div className="p-2 rounded-lg bg-white border border-slate-200 text-[11px] font-medium text-slate-500 space-y-0.5">
                <div className="flex justify-between"><span>pH Sensor</span><span className="font-bold text-slate-700">6.2 pH</span></div>
                <div className="flex justify-between"><span>TDS Sensor</span><span className="font-bold text-slate-700">410 ppm</span></div>
                <div className="flex justify-between"><span>Turbidity</span><span className="font-bold text-slate-700">5.8 NTU</span></div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="p-5 rounded-2xl bg-slate-900 text-white flex flex-col justify-between space-y-3 relative shadow-md">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase bg-cyan-900 text-cyan-300 border border-cyan-700">
                  Step 2
                </span>
                <Cpu className="w-5 h-5 text-cyan-400 animate-pulse" />
              </div>
              <div>
                <h3 className="font-extrabold text-white text-sm">AI Risk Assessment</h3>
                <p className="text-xs text-slate-300 font-medium mt-1">Evaluates Risk Level</p>
              </div>
              <div className={`p-2 rounded-lg border text-[11px] font-extrabold text-center uppercase tracking-wider ${
                selectedRiskScenario === 'HIGH'
                  ? 'bg-red-950/80 border-red-700 text-red-300'
                  : selectedRiskScenario === 'MEDIUM'
                    ? 'bg-amber-950/80 border-amber-700 text-amber-300'
                    : 'bg-emerald-950/80 border-emerald-700 text-emerald-300'
              }`}>
                Assessed: {selectedRiskScenario} RISK
              </div>
            </div>

            {/* Step 3 */}
            <div className="p-5 rounded-2xl bg-cyan-50/70 border border-cyan-200 flex flex-col justify-between space-y-3 relative group hover:border-cyan-400 transition-all shadow-xs">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase bg-cyan-200 text-cyan-900">
                  Step 3
                </span>
                <Filter className="w-5 h-5 text-cyan-700" />
              </div>
              <div>
                <h3 className="font-extrabold text-cyan-950 text-sm">Required Treatment</h3>
                <p className="text-xs text-cyan-800 font-medium mt-1">Dynamic Filter Path Selection</p>
              </div>
              <div className="p-2.5 rounded-lg bg-white border border-cyan-200 text-[11px] font-semibold text-cyan-900 space-y-1">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 shrink-0" />
                  <span>Sediment Filter</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 shrink-0" />
                  <span>Activated Carbon Filter</span>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between space-y-3 relative group hover:border-cyan-400 transition-all shadow-xs">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase bg-cyan-100 text-cyan-800">
                  Step 4
                </span>
                <ShieldCheck className="w-5 h-5 text-slate-700" />
              </div>
              <div>
                <h3 className="font-extrabold text-slate-900 text-sm">Post-Treatment Verification</h3>
                <p className="text-xs text-slate-600 font-medium mt-1">Secondary Sensor Check</p>
              </div>
              <div className="p-2 rounded-lg bg-white border border-slate-200 text-[11px] font-medium text-slate-600 space-y-0.5">
                <div className="flex justify-between"><span>pH Check</span><span className="font-bold text-emerald-600">7.2 (PASS)</span></div>
                <div className="flex justify-between"><span>TDS Check</span><span className="font-bold text-emerald-600">320 ppm</span></div>
                <div className="flex justify-between"><span>Turbidity</span><span className="font-bold text-emerald-600">2.8 NTU</span></div>
              </div>
            </div>

            {/* Outcome Step */}
            <div className={`p-5 rounded-2xl border flex flex-col justify-between space-y-3 relative shadow-md ${
              verificationResult === 'PASS'
                ? 'bg-gradient-to-br from-emerald-900 to-slate-900 text-white border-emerald-700'
                : 'bg-gradient-to-br from-amber-900 to-slate-900 text-white border-amber-700'
            }`}>
              <div className="flex items-center justify-between">
                <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase ${
                  verificationResult === 'PASS' ? 'bg-emerald-900 text-emerald-300 border border-emerald-600' : 'bg-amber-900 text-amber-300 border border-amber-600'
                }`}>
                  {verificationResult === 'PASS' ? 'PASS' : 'FAIL'}
                </span>
                {verificationResult === 'PASS' ? (
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                ) : (
                  <RefreshCw className="w-5 h-5 text-amber-400 animate-spin" />
                )}
              </div>
              <div>
                <h3 className="font-extrabold text-white text-sm">
                  {verificationResult === 'PASS' ? 'Safe Water Supply' : 'Re-Treatment Loop'}
                </h3>
                <p className="text-xs text-slate-300 font-medium mt-1">
                  {verificationResult === 'PASS' 
                    ? 'Outcome: Delivery to Community' 
                    : 'Outcome: Re-routed for secondary pass'}
                </p>
              </div>
              <div className={`p-2 rounded-lg text-[11px] font-extrabold text-center uppercase tracking-wider ${
                verificationResult === 'PASS' ? 'bg-emerald-950/90 text-emerald-300 border border-emerald-800' : 'bg-amber-950/90 text-amber-300 border border-amber-800'
              }`}>
                {verificationResult === 'PASS' ? 'SAFE WATER READY' : 'RE-TREATMENT REQUIRED'}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Verification Section */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
          <div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              <h2 className="text-lg font-extrabold text-slate-900 tracking-tight">
                Verify Before You Deliver — Post-Treatment Verification
              </h2>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              Comparison between pre-treatment raw intake readings and post-filtration secondary sensor validation.
            </p>
          </div>

          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold bg-amber-50 text-amber-800 border border-amber-200 self-start sm:self-auto">
            <ShieldAlert className="w-3.5 h-3.5 text-amber-600 shrink-0" />
            DEMO DATA LOG
          </span>
        </div>

        {/* Verification Table */}
        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full text-xs text-left text-slate-600 border-collapse">
            <thead className="bg-slate-100 text-slate-800 font-extrabold uppercase text-[11px] tracking-wider border-b border-slate-200">
              <tr>
                <th className="py-3 px-4">Parameter</th>
                <th className="py-3 px-4">Before Treatment</th>
                <th className="py-3 px-4">After Treatment</th>
                <th className="py-3 px-4">Demo Baseline</th>
                <th className="py-3 px-4 text-center">Result</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white font-medium">
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-3.5 px-4 font-bold text-slate-900 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-500" />
                  pH
                </td>
                <td className="py-3.5 px-4 text-amber-700 font-semibold">6.2</td>
                <td className="py-3.5 px-4 text-emerald-700 font-extrabold">7.2</td>
                <td className="py-3.5 px-4 text-slate-500 font-medium">6.5–8.5</td>
                <td className="py-3.5 px-4 text-center">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-extrabold bg-emerald-100 text-emerald-800 border border-emerald-300">
                    <Check className="w-3 h-3 stroke-[3]" />
                    PASS
                  </span>
                </td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-3.5 px-4 font-bold text-slate-900 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500" />
                  TDS
                </td>
                <td className="py-3.5 px-4 text-amber-700 font-semibold">410 ppm</td>
                <td className="py-3.5 px-4 text-emerald-700 font-extrabold">320 ppm</td>
                <td className="py-3.5 px-4 text-slate-500 font-medium">&lt;500 ppm</td>
                <td className="py-3.5 px-4 text-center">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-extrabold bg-emerald-100 text-emerald-800 border border-emerald-300">
                    <Check className="w-3 h-3 stroke-[3]" />
                    PASS
                  </span>
                </td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-3.5 px-4 font-bold text-slate-900 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-teal-500" />
                  Turbidity
                </td>
                <td className="py-3.5 px-4 text-amber-700 font-semibold">5.8 NTU</td>
                <td className="py-3.5 px-4 text-emerald-700 font-extrabold">2.8 NTU</td>
                <td className="py-3.5 px-4 text-slate-500 font-medium">&lt;5.0 NTU</td>
                <td className="py-3.5 px-4 text-center">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-extrabold bg-emerald-100 text-emerald-800 border border-emerald-300">
                    <Check className="w-3 h-3 stroke-[3]" />
                    PASS
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Clear Demo Data Disclaimer */}
        <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200 flex items-start gap-3 text-xs text-amber-900">
          <Info className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="font-bold text-amber-950 uppercase tracking-wide text-[11px]">
              DEMO DATA DISCLAIMER
            </p>
            <p className="text-amber-900/90 leading-relaxed font-medium">
              All numbers, parameter values, and baseline ranges shown in this verification table are strictly <span className="font-bold">DEMO DATA</span> for prototype demonstration purposes. They do not represent actual field measurements or official safety thresholds.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default PurificationPage;
