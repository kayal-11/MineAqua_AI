import React from 'react';
import ProcessPipeline from '../components/ProcessPipeline';
import { SYSTEM_STAGES } from '../data/mockData';
import { 
  Droplet, Activity, Cpu, BrainCircuit, Sliders, ToggleRight, Filter, ShieldCheck, CheckCircle2, CheckCheck
} from 'lucide-react';
import DemoBadge from '../components/DemoBadge';

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

export const HowItWorksPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="flex justify-center">
          <DemoBadge variant="badge" />
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          How <span className="water-gradient-text">MineAqua AI</span> Works
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Explore the complete 10-stage end-to-end architecture from raw water sensing to adaptive filtration, post-treatment quality verification, and safe delivery.
        </p>
      </div>

      {/* Main Interactive Pipeline */}
      <div className="space-y-4">
        <h2 className="text-sm font-bold uppercase tracking-wider text-cyan-600">Interactive Pipeline Navigator</h2>
        <ProcessPipeline interactive={true} />
      </div>

      {/* Grid of Stage Descriptions */}
      <div className="space-y-6 pt-6 border-t border-slate-200">
        <h2 className="text-xl font-extrabold text-slate-900">Detailed Stage Breakdown</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SYSTEM_STAGES.map((stage) => {
            const IconComponent = iconMap[stage.icon] || Droplet;

            return (
              <div key={stage.id} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all space-y-3 card-hover">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 text-cyan-400 flex items-center justify-center font-bold">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-cyan-50 text-cyan-700 border border-cyan-200">
                    Step {stage.id}
                  </span>
                </div>

                <div>
                  <span className="text-[10px] font-bold uppercase text-slate-400 tracking-wider">{stage.category} Layer</span>
                  <h3 className="font-bold text-slate-900 text-base">{stage.title}</h3>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {stage.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};

export default HowItWorksPage;
