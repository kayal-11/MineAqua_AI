import React, { useState } from 'react';
import { Settings, Sliders, Bell, Cpu, RefreshCw, Shield, Save, Check } from 'lucide-react';
import DemoBadge from '../components/DemoBadge';

export const SettingsPage = () => {
  const [telemetryInterval, setTelemetryInterval] = useState('5');
  const [demoMode, setDemoMode] = useState(true);
  const [notifications, setNotifications] = useState(true);
  const [saved, setSaved] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <DemoBadge variant="banner" text="DEMO MODE — Configuration settings apply to local simulated telemetry environment." />

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              System Settings & Configuration
            </h1>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Manage IoT telemetry polling intervals, alert thresholds, and demo mode settings.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-6">
          <h2 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
            <Sliders className="w-4 h-4 text-cyan-600" />
            <span>Telemetry & Sensor Preferences</span>
          </h2>

          <form onSubmit={handleSave} className="space-y-6 text-xs">
            <div>
              <label className="block font-bold text-slate-700 mb-1">
                IoT Telemetry Refresh Interval (seconds)
              </label>
              <select
                value={telemetryInterval}
                onChange={(e) => setTelemetryInterval(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2.5 font-medium text-slate-900 focus:ring-2 focus:ring-cyan-500 focus:outline-hidden"
              >
                <option value="1">1 second (Realtime Turbo)</option>
                <option value="5">5 seconds (Standard Demo)</option>
                <option value="15">15 seconds (Power Saving)</option>
                <option value="60">60 seconds (Low Bandwidth)</option>
              </select>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-bold text-slate-900 block">Demonstration Simulation Mode</span>
                  <span className="text-slate-500 block text-[11px]">Generate synthetic ESP32 sensor values for preview</span>
                </div>
                <button
                  type="button"
                  onClick={() => setDemoMode(!demoMode)}
                  className={`w-12 h-6 rounded-full transition-colors relative ${demoMode ? 'bg-cyan-600' : 'bg-slate-300'}`}
                >
                  <span className={`w-5 h-5 rounded-full bg-white absolute top-0.5 transition-transform shadow-xs ${demoMode ? 'left-6.5' : 'left-0.5'}`} />
                </button>
              </div>

              <div className="border-t border-slate-200 pt-3 flex items-center justify-between">
                <div>
                  <span className="font-bold text-slate-900 block">System Alerts & Notifications</span>
                  <span className="text-slate-500 block text-[11px]">Receive popup alerts when pH/TDS exceed baseline</span>
                </div>
                <button
                  type="button"
                  onClick={() => setNotifications(!notifications)}
                  className={`w-12 h-6 rounded-full transition-colors relative ${notifications ? 'bg-cyan-600' : 'bg-slate-300'}`}
                >
                  <span className={`w-5 h-5 rounded-full bg-white absolute top-0.5 transition-transform shadow-xs ${notifications ? 'left-6.5' : 'left-0.5'}`} />
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-slate-900 hover:bg-cyan-700 transition-all shadow-sm"
            >
              {saved ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Settings Saved!</span>
                </>
              ) : (
                <>
                  <Save className="w-4 h-4 text-cyan-400" />
                  <span>Save Configuration</span>
                </>
              )}
            </button>
          </form>
        </div>

        <div className="bg-slate-900 text-white rounded-2xl p-6 border border-slate-800 space-y-4 shadow-sm h-fit">
          <div className="flex items-center gap-2 text-cyan-400">
            <Cpu className="w-5 h-5" />
            <h3 className="font-bold text-white text-sm">System Diagnostics</h3>
          </div>
          <div className="space-y-2 text-xs text-slate-300">
            <div className="flex justify-between py-1 border-b border-slate-800">
              <span className="text-slate-400">Firmware Build</span>
              <span className="font-bold text-cyan-300">v2.4.0-SIH</span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-800">
              <span className="text-slate-400">AI Model Protocol</span>
              <span className="font-bold text-emerald-400">MineAqua-Adaptive-v1</span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-800">
              <span className="text-slate-400">Connection</span>
              <span className="font-bold text-cyan-300">WebSocket / HTTPS</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="text-slate-400">Hardware Target</span>
              <span className="font-bold text-amber-300">ESP32 (Simulated)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
