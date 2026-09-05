import React, { useState, useEffect } from 'react';
import SystemHealthPanel from '../components/SystemHealthPanel';
import DemoBadge from '../components/DemoBadge';
import { fetchSystemHealth, toggleHardwareMode, ingestHardwareTelemetry } from '../services/api';
import { MOCK_SYSTEM_HEALTH } from '../data/mockData';
import { Cpu, Radio, RefreshCw, Zap, Play, Check } from 'lucide-react';

export const HardwarePage = () => {
  const [healthData, setHealthData] = useState(MOCK_SYSTEM_HEALTH);
  const [isLive, setIsLive] = useState(false);
  const [mode, setMode] = useState('DEMO_MODE');
  const [loading, setLoading] = useState(false);
  const [simulated, setSimulated] = useState(false);

  const loadData = async () => {
    const res = await fetchSystemHealth();
    if (res?.components) {
      setHealthData(res.components);
    }
    setIsLive(Boolean(res?.is_live || res?.mode === 'LIVE_MODE'));
    setMode(res?.mode || 'DEMO_MODE');
  };

  useEffect(() => {
    loadData();
    const interval = setInterval(loadData, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleToggleSimulatedHardware = async () => {
    setLoading(true);
    const newTarget = !isLive;
    if (newTarget) {
      // Ingest a live ESP32 test packet
      await ingestHardwareTelemetry({
        ph: 7.35,
        tds: 312.0,
        turbidity: 2.3,
        dc_pump: "Active (2.4 L/min)",
        relay: "Engaged (Filter Pass)",
        solar_status: "Generating (19.2V)",
        battery_level: "96% (Charging)",
        device_id: "ESP32-HARDWARE-NODE-01"
      });
    } else {
      await toggleHardwareMode(false);
    }
    await loadData();
    setSimulated(true);
    setTimeout(() => setSimulated(false), 2500);
    setLoading(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Prominent Mode Banner */}
      <DemoBadge variant="banner" isLive={isLive} mode={mode} />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2.5">
              <Cpu className="w-8 h-8 text-cyan-600" />
              Hardware System Architecture & Live Stream
            </h1>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            ESP32 Microcontroller Node → Sensor Data → Backend Ingestion → Real-Time Dashboard
          </p>
        </div>

        {/* Hardware Connection Live Toggle / Test Trigger */}
        <button
          onClick={handleToggleSimulatedHardware}
          disabled={loading}
          className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all shadow-sm ${
            isLive 
              ? 'bg-slate-900 text-amber-300 hover:bg-slate-800' 
              : 'bg-emerald-600 text-white hover:bg-emerald-700'
          }`}
        >
          {loading ? (
            <RefreshCw className="w-4 h-4 animate-spin text-white" />
          ) : isLive ? (
            <Radio className="w-4 h-4 text-emerald-400 animate-pulse" />
          ) : (
            <Play className="w-4 h-4 fill-white" />
          )}
          <span>{isLive ? 'Switch to DEMO MODE' : 'Simulate ESP32 Hardware Stream'}</span>
        </button>
      </div>

      {/* Code / Architecture Placeholder Card */}
      {/* ESP32 HARDWARE READY ARCHITECTURE INTEGRATION POINT */}
      <div className="bg-slate-900 text-slate-200 rounded-2xl p-6 border border-slate-800 space-y-4 shadow-md">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-cyan-400" />
            <h3 className="font-bold text-white text-sm">ESP32 Hardware Pipeline Architecture</h3>
          </div>
          <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${
            isLive ? 'bg-emerald-950 text-emerald-300 border border-emerald-800' : 'bg-slate-800 text-slate-400'
          }`}>
            {isLive ? 'LIVE MODE ACTIVE' : 'DEMO MODE (READY FOR ESP32)'}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs">
          <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/70 space-y-1">
            <span className="text-[10px] font-bold text-cyan-400 block uppercase">1. Sensors & ESP32</span>
            <p className="text-slate-300 font-semibold">pH, TDS, Turbidity</p>
            <p className="text-[10px] text-slate-400">Continuous 1s-5s analog sampling</p>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/70 space-y-1">
            <span className="text-[10px] font-bold text-emerald-400 block uppercase">2. API Ingestion</span>
            <p className="text-slate-300 font-semibold">POST /api/sensors/ingest</p>
            <p className="text-[10px] text-slate-400">Flexible payload with device_id</p>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/70 space-y-1">
            <span className="text-[10px] font-bold text-cyan-400 block uppercase">3. Real-Time Layer</span>
            <p className="text-slate-300 font-semibold">AI Risk & Alerts</p>
            <p className="text-[10px] text-slate-400">Stores historical sensor telemetry</p>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/70 space-y-1">
            <span className="text-[10px] font-bold text-emerald-400 block uppercase">4. Dashboard</span>
            <p className="text-slate-300 font-semibold">Live Mode Display</p>
            <p className="text-[10px] text-slate-400">Instant metric & graph updates</p>
          </div>
        </div>
      </div>

      {/* System Hardware Status Section */}
      <SystemHealthPanel components={healthData} isLive={isLive} mode={mode} />

    </div>
  );
};

export default HardwarePage;
