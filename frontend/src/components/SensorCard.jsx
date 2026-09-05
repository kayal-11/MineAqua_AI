import React from 'react';
import { Activity, Zap, Eye, AlertCircle } from 'lucide-react';
import DemoBadge from './DemoBadge';

export const SensorCard = ({ title, value, unit, status, type, description }) => {
  const getIcon = () => {
    switch (type) {
      case 'ph':
        return <Activity className="w-5 h-5 text-cyan-600" />;
      case 'tds':
        return <Zap className="w-5 h-5 text-blue-600" />;
      case 'turbidity':
        return <Eye className="w-5 h-5 text-teal-600" />;
      default:
        return <Activity className="w-5 h-5 text-cyan-600" />;
    }
  };

  const getStatusBadge = () => {
    switch (status?.toLowerCase()) {
      case 'normal':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Normal
          </span>
        );
      case 'monitoring':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-cyan-50 text-cyan-700 border border-cyan-200">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
            Monitoring
          </span>
        );
      case 'warning':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-50 text-amber-700 border border-amber-200">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            Warning
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-700">
            {status}
          </span>
        );
    }
  };

  return (
    <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm hover:shadow-md transition-all space-y-4 card-hover">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center">
            {getIcon()}
          </div>
          <div>
            <h3 className="font-bold text-slate-900 text-base">{title}</h3>
            <p className="text-xs text-slate-500">{description}</p>
          </div>
        </div>
        {getStatusBadge()}
      </div>

      <div className="pt-2 border-t border-slate-100 flex items-baseline justify-between">
        <div>
          <div className="flex items-baseline gap-1.5">
            <span className="text-3xl font-extrabold text-slate-900 tracking-tight">{value}</span>
            <span className="text-xs font-semibold text-slate-500">{unit}</span>
          </div>
        </div>

        <DemoBadge variant="badge" />
      </div>
    </div>
  );
};

export default SensorCard;
