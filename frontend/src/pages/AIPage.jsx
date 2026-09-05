import React from 'react';
import { BrainCircuit, ArrowRight, ShieldAlert, Cpu, Sliders, CheckCircle2, Info } from 'lucide-react';
import DemoBadge from '../components/DemoBadge';

export const AIPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="flex justify-center">
          <DemoBadge variant="badge" />
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Mining-Aware <span className="water-gradient-text">AI Risk Assessment</span>
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Evaluating multi-parameter sensor metrics and mining context to select dynamic treatment pathways.
        </p>
      </div>

      {/* Professional Warning / Disclaimer Card (Req #14) */}
      <div className="p-6 rounded-3xl bg-slate-900 text-white border border-slate-700 shadow-md space-y-3">
        <div className="flex items-center gap-3 text-amber-400">
          <ShieldAlert className="w-6 h-6 shrink-0" />
          <h3 className="font-bold text-base">AI Model Specification Notice</h3>
        </div>
        <p className="text-xs text-slate-300 leading-relaxed bg-slate-800/80 p-4 rounded-2xl border border-slate-700">
          Specific machine-learning algorithm, training dataset, model accuracy, and feature-engineering methodology are <span className="font-bold text-amber-400 underline">not specified</span> in the current prototype documentation. Risk evaluation logic is currently implemented as an expert-system rule engine for hardware proof-of-concept testing.
        </p>
      </div>

      {/* Input -> Processing -> Output Architecture Pipeline */}
      <div className="space-y-6">
        <h2 className="text-xl font-extrabold text-slate-900">AI Processing Flow Pipeline</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* INPUT */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <span className="text-xs font-bold uppercase text-cyan-600 tracking-wider">Phase 1</span>
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-cyan-50 text-cyan-700">INPUT DATA</span>
            </div>

            <h3 className="font-extrabold text-lg text-slate-900">Multi-Parameter Features</h3>

            <ul className="space-y-3 text-xs text-slate-600">
              <li className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between font-medium">
                <span>pH Reading (Acidity/Alkalinity)</span>
                <span className="font-bold text-slate-900">Sensor Stream</span>
              </li>
              <li className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between font-medium">
                <span>TDS Value (Total Dissolved Solids)</span>
                <span className="font-bold text-slate-900">Sensor Stream</span>
              </li>
              <li className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between font-medium">
                <span>Turbidity Index (Clarity)</span>
                <span className="font-bold text-slate-900">Sensor Stream</span>
              </li>
              <li className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between font-medium">
                <span>Mining-Related Water-Risk Context</span>
                <span className="font-bold text-cyan-700">Environmental Flag</span>
              </li>
            </ul>
          </div>

          {/* PROCESSING */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-3xl p-6 border border-slate-700 shadow-md space-y-4">
            <div className="flex items-center justify-between border-b border-slate-700 pb-3">
              <span className="text-xs font-bold uppercase text-cyan-400 tracking-wider">Phase 2</span>
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800">PROCESSING</span>
            </div>

            <h3 className="font-extrabold text-lg">AI Risk Evaluation Engine</h3>

            <div className="space-y-3 text-xs text-slate-300">
              <div className="p-3 rounded-xl bg-slate-800 border border-slate-700">
                <span className="font-bold text-cyan-400 block mb-1">Risk Classification Matrix:</span>
                <p>Calculates cumulative risk index combining raw sensor variance and regional mining severity factors.</p>
              </div>

              <div className="p-3 rounded-xl bg-slate-800 border border-slate-700">
                <span className="font-bold text-cyan-400 block mb-1">Risk Tiers:</span>
                <div className="flex items-center gap-2 pt-1">
                  <span className="px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300 text-[10px] font-bold">LOW</span>
                  <span className="px-2 py-0.5 rounded-md bg-amber-500/20 text-amber-300 text-[10px] font-bold">MEDIUM</span>
                  <span className="px-2 py-0.5 rounded-md bg-red-500/20 text-red-300 text-[10px] font-bold">HIGH</span>
                </div>
              </div>
            </div>
          </div>

          {/* OUTPUT */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <span className="text-xs font-bold uppercase text-teal-600 tracking-wider">Phase 3</span>
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-teal-50 text-teal-700">OUTPUT ACTION</span>
            </div>

            <h3 className="font-extrabold text-lg text-slate-900">Actuation & Routing Decision</h3>

            <ul className="space-y-3 text-xs text-slate-600">
              <li className="p-3 rounded-xl bg-teal-50/60 border border-teal-200 space-y-1">
                <span className="font-bold text-teal-900 block">Water Risk Assessment Rating</span>
                <p className="text-slate-600">Assigns LOW, MEDIUM, or HIGH risk classification label.</p>
              </li>
              <li className="p-3 rounded-xl bg-teal-50/60 border border-teal-200 space-y-1">
                <span className="font-bold text-teal-900 block">Required Purification Selection</span>
                <p className="text-slate-600">Triggers sediment filter or dual sediment + carbon filter stage.</p>
              </li>
              <li className="p-3 rounded-xl bg-teal-50/60 border border-teal-200 space-y-1">
                <span className="font-bold text-teal-900 block">Post-Verification Loop Decision</span>
                <p className="text-slate-600">Engages safe delivery valve or opens automated re-treatment relay.</p>
              </li>
            </ul>
          </div>

        </div>
      </div>

    </div>
  );
};

export default AIPage;
