import React from 'react';
import { AlertCircle, ShieldAlert, Cpu, Radio } from 'lucide-react';

export const DemoBadge = ({
  variant = "banner",
  mode = "DEMO_MODE",
  isLive = false,
  text
}) => {
  const activeLive = isLive || mode === "LIVE_MODE";

  if (activeLive) {
    if (variant === "badge") {
      return (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-300 shadow-xs">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>LIVE MODE</span>
        </span>
      );
    }

    return (
      <div className="w-full bg-gradient-to-r from-emerald-500/15 via-emerald-400/10 to-emerald-500/15 border-y border-emerald-500/30 px-4 py-2.5 text-emerald-900 text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 text-center shadow-xs">
        <Radio className="w-4 h-4 text-emerald-600 animate-pulse shrink-0" />
        <span>{text || "LIVE MODE — Physical ESP32 hardware & sensors actively streaming real-time telemetry."}</span>
      </div>
    );
  }

  // Fallback DEMO MODE
  if (variant === "badge") {
    return (
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-800 border border-amber-200 shadow-xs">
        <AlertCircle className="w-3.5 h-3.5 text-amber-500 shrink-0" />
        <span>DEMO MODE</span>
      </span>
    );
  }

  return (
    <div className="w-full bg-gradient-to-r from-amber-500/10 via-amber-400/5 to-amber-500/10 border-y border-amber-500/20 px-4 py-2.5 text-amber-800 text-xs sm:text-sm font-medium flex items-center justify-center gap-2 text-center shadow-xs">
      <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0" />
      <span>{text || "DEMO MODE — Hardware not connected. Showing simulated telemetry parameters."}</span>
    </div>
  );
};

export default DemoBadge;
