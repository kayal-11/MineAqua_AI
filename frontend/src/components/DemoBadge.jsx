import React from 'react';
import { AlertCircle, ShieldAlert } from 'lucide-react';

export const DemoBadge = ({ variant = "banner", text = "DEMO DATA — Replace with ESP32 sensor readings during hardware integration." }) => {
  if (variant === "badge") {
    return (
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200 shadow-xs">
        <AlertCircle className="w-3.5 h-3.5 text-amber-500 shrink-0" />
        <span>DEMO MODE</span>
      </span>
    );
  }

  return (
    <div className="w-full bg-gradient-to-r from-amber-500/10 via-amber-400/5 to-amber-500/10 border-y border-amber-500/20 px-4 py-2.5 text-amber-800 text-xs sm:text-sm font-medium flex items-center justify-center gap-2 text-center shadow-xs">
      <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0" />
      <span>{text}</span>
    </div>
  );
};

export default DemoBadge;
