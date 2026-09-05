import React from 'react';
import { Cpu, Activity, Zap, Eye, RotateCw, ToggleRight, Filter, ShieldCheck, Sun, BatteryCharging, CheckCircle, AlertCircle } from 'lucide-react';
import DemoBadge from './DemoBadge';

const iconMap = {
  Cpu,
  Activity,
  Zap,
  Eye,
  RotateCw,
  ToggleRight,
  Filter,
  ShieldCheck,
  Sun,
  BatteryCharging
};

export const SystemHealthPanel = ({ components = [] }) => {
  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="font-bold text-slate-900 text-lg">System Hardware Status</h3>
            <DemoBadge variant="badge" />
          </div>
          <p className="text-xs text-slate-500">Real-time status of embedded sensors, actuators, and solar modules.</p>
        </div>
        <span className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          Hardware Layer Online
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2">
        {components.map((comp) => {
          const IconComponent = iconMap[comp.icon] || Cpu;
          const isEmerald = comp.color === 'emerald';

          return (
            <div key={comp.id} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between hover:bg-slate-100 transition-colors">
              <div className="flex items-center gap-3">
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                  isEmerald ? 'bg-emerald-100 text-emerald-700' : 'bg-cyan-100 text-cyan-700'
                }`}>
                  <IconComponent className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">{comp.name}</h4>
                  <p className="text-[10px] font-medium text-slate-500">{comp.layer}</p>
                </div>
              </div>

              <div className="text-right">
                <span className={`inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-md ${
                  isEmerald ? 'bg-emerald-100 text-emerald-800' : 'bg-cyan-100 text-cyan-800'
                }`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${isEmerald ? 'bg-emerald-500' : 'bg-cyan-500'}`} />
                  {comp.state}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SystemHealthPanel;
