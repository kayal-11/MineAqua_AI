import React, { useState } from 'react';
import { SYSTEM_STAGES } from '../data/mockData';
import { 
  Droplet, Activity, Cpu, BrainCircuit, Sliders, ToggleRight, Filter, ShieldCheck, CheckCircle2, CheckCheck, ArrowRight, Info
} from 'lucide-react';

const iconMap = {
  Droplets: Droplet,
  Activity: Activity,
  Cpu: Cpu,
  BrainCircuit: BrainCircuit,
  Sliders: Sliders,
  ToggleRight: ToggleRight,
  Filter: Filter,
  ShieldCheck: ShieldCheck,
  CheckCircle2: CheckCircle2,
  CheckCheck: CheckCheck
};

export const ProcessPipeline = ({ interactive = true, compact = false }) => {
  const [selectedStage, setSelectedStage] = useState(SYSTEM_STAGES[0]);

  return (
    <div className="w-full space-y-6">
      {/* Horizontal / Grid Flow */}
      <div className="bg-white rounded-2xl p-4 sm:p-6 border border-slate-200 shadow-sm overflow-x-auto">
        <div className="flex items-center justify-between min-w-[900px] gap-2 pb-2">
          {SYSTEM_STAGES.map((stage, idx) => {
            const IconComponent = iconMap[stage.icon] || Droplet;
            const isSelected = selectedStage.id === stage.id;

            return (
              <React.Fragment key={stage.id}>
                {/* Stage Node */}
                <button
                  onClick={() => interactive && setSelectedStage(stage)}
                  className={`flex flex-col items-center p-3 rounded-xl transition-all min-w-[80px] max-w-[100px] text-center group ${
                    isSelected
                      ? 'bg-slate-900 text-white shadow-md ring-2 ring-cyan-500 scale-105'
                      : 'bg-slate-50 hover:bg-cyan-50 text-slate-700 border border-slate-200'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-1.5 transition-colors ${
                    isSelected ? 'bg-cyan-500 text-white' : 'bg-white text-slate-600 group-hover:text-cyan-600 shadow-xs'
                  }`}>
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-0.5">
                    Step {stage.id}
                  </span>
                  <span className="text-xs font-semibold leading-tight line-clamp-2">
                    {stage.short}
                  </span>
                </button>

                {/* Connecting Arrow */}
                {idx < SYSTEM_STAGES.length - 1 && (
                  <div className="flex items-center text-slate-300 shrink-0">
                    <ArrowRight className="w-4 h-4 animate-pulse text-cyan-500/60" />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Selected Stage Details */}
      {interactive && selectedStage && (
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-6 shadow-md border border-slate-700 animate-in fade-in duration-200">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 flex items-center justify-center">
                {React.createElement(iconMap[selectedStage.icon] || Droplet, { className: "w-6 h-6" })}
              </div>
              <div>
                <span className="text-xs font-bold uppercase text-cyan-400 tracking-wider">
                  Stage {selectedStage.id} • {selectedStage.category}
                </span>
                <h3 className="text-lg font-bold text-white">{selectedStage.title}</h3>
              </div>
            </div>
            <span className="text-xs px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 border border-slate-700">
              Interactive View
            </span>
          </div>

          <p className="mt-4 text-sm text-slate-300 leading-relaxed bg-slate-900/60 p-4 rounded-xl border border-slate-800">
            {selectedStage.description}
          </p>

          <div className="mt-4 flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-800">
            <span className="flex items-center gap-1.5">
              <Info className="w-3.5 h-3.5 text-cyan-400" />
              Click any stage in the top pipeline to view technical explanation.
            </span>
            <span className="font-semibold text-cyan-400">MineAqua AI Flow Architecture</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProcessPipeline;
