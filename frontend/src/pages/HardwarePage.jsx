import React from 'react';
import SystemHealthPanel from '../components/SystemHealthPanel';
import { MOCK_SYSTEM_HEALTH } from '../data/mockData';

export const HardwarePage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Hardware System Architecture
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Real-time embedded component status, layer separation, and hardware module telemetry.
        </p>
      </div>

      {/* System Hardware Status Section (Exclusively on Hardware Page) */}
      <SystemHealthPanel components={MOCK_SYSTEM_HEALTH} />

    </div>
  );
};

export default HardwarePage;
