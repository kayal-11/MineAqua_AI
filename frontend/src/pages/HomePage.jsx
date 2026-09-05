import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Droplet, Activity, BrainCircuit, Sun, ArrowRight, ShieldCheck, Zap, Battery, Filter, Cpu, CheckCircle2, AlertTriangle, Layers
} from 'lucide-react';
import ProcessPipeline from '../components/ProcessPipeline';

export const HomePage = () => {
  return (
    <div className="space-y-16 pb-16">
      
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden pt-8 pb-12 lg:pt-16 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Left Content */}
            <div className="lg:col-span-7 space-y-6">
              


              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Intelligent Water Purification for a <span className="water-gradient-text">Safer Tomorrow</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                MineAqua AI combines real-time water-quality sensing, AI-driven risk assessment, adaptive purification, and solar-powered operation for rural and mining-affected communities.
              </p>

              {/* Primary Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/how-it-works"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white bg-slate-900 hover:bg-cyan-700 shadow-md hover:shadow-cyan-500/20 transition-all"
                >
                  <span>Explore the System</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/dashboard"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-cyan-900 bg-cyan-50 hover:bg-cyan-100 border border-cyan-200 transition-all"
                >
                  <Activity className="w-4 h-4 text-cyan-600 animate-pulse" />
                  <span>View Live Monitoring</span>
                </Link>
              </div>

              {/* Status Indicators */}
              <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center gap-6 text-xs font-semibold text-slate-600">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>System Online</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-500 animate-pulse" />
                  <span>Solar Powered</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse" />
                  <span>AI Monitoring Active</span>
                </div>
              </div>

            </div>

            {/* Hero Right Visual Graphic */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl navy-gradient p-6 text-white shadow-2xl border border-slate-700 overflow-hidden space-y-6">
                
                {/* Visual Header */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
                    <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">Node #01 • Mining Impacted Zone</span>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded-md bg-slate-800 text-slate-300">ESP32 Controller</span>
                </div>

                {/* System Graphic Cards */}
                <div className="space-y-3">
                  <div className="p-3.5 rounded-xl bg-slate-800/90 border border-slate-700 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Activity className="w-5 h-5 text-cyan-400" />
                      <div>
                        <p className="text-xs text-slate-400 font-medium">Real-Time Sensing</p>
                        <p className="text-sm font-bold text-white">pH: 7.2 | TDS: 320 ppm | Turb: 2.8 NTU</p>
                      </div>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-bold">NORMAL</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-800/90 border border-slate-700 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <BrainCircuit className="w-5 h-5 text-blue-400" />
                      <div>
                        <p className="text-xs text-slate-400 font-medium">AI Risk Model</p>
                        <p className="text-sm font-bold text-white">Low Risk • Standard Filtration</p>
                      </div>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded-md bg-blue-500/20 text-blue-300 border border-blue-500/30 font-bold">ACTIVE</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-800/90 border border-slate-700 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Sun className="w-5 h-5 text-amber-400" />
                      <div>
                        <p className="text-xs text-slate-400 font-medium">Power Source</p>
                        <p className="text-sm font-bold text-white">Solar Panel + Off-Grid Battery</p>
                      </div>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded-md bg-amber-500/20 text-amber-300 border border-amber-500/30 font-bold">SOLAR</span>
                  </div>
                </div>

                {/* Subtitle Card */}
                <div className="p-3 rounded-xl bg-cyan-950/60 border border-cyan-800 text-[11px] text-cyan-200 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Post-treatment verification enabled before community delivery.</span>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Key System Pillars Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-3 card-hover">
            <div className="w-12 h-12 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center">
              <Activity className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-base">Real-Time Sensing</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Continuously measures pH, TDS, and Turbidity sensor metrics via an ESP32 central microcontroller.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-3 card-hover">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <BrainCircuit className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-base">AI Risk Assessment</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Evaluates sensor readings alongside mining-related environmental context to determine water safety levels.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-3 card-hover">
            <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center">
              <Filter className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-base">Adaptive Purification</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Engages DC pump & relays to route water through sediment and activated carbon filters tailored to assessed risk.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-3 card-hover">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
              <Sun className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-base">Solar Powered</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Operates off-grid using solar panel generation and battery backup for remote and rural deployment.
            </p>
          </div>

        </div>
      </section>

      {/* 3. Problem Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm space-y-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold text-cyan-600 uppercase tracking-wider">The Rural & Mining Challenge</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Water Safety Should Never Depend on Location
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Rural and mining-affected regions face unpredictable water contamination, severe infrastructure limits, and lack of continuous monitoring. MineAqua AI bridges this gap with modular, off-grid technology.
            </p>
          </div>

          {/* Traditional vs MineAqua AI Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            
            {/* Traditional */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-slate-400" />
                <h3 className="font-bold text-slate-700 text-lg">Traditional Approach</h3>
              </div>
              <ul className="space-y-3 text-xs text-slate-600">
                <li className="flex items-start gap-2.5">
                  <span className="text-red-500 font-bold">✕</span>
                  <span>Periodic/manual grab sample testing with slow lab turnarounds.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-red-500 font-bold">✕</span>
                  <span>Fixed, inflexible treatment processes regardless of sudden runoff shifts.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-red-500 font-bold">✕</span>
                  <span>Delayed contamination detection leading to community health exposure.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-red-500 font-bold">✕</span>
                  <span>Heavily reliant on vulnerable electrical grid connections.</span>
                </li>
              </ul>
            </div>

            {/* MineAqua AI */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 text-white border border-slate-700 space-y-4 shadow-md">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse" />
                  <h3 className="font-bold text-cyan-300 text-lg">MineAqua AI Platform</h3>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded-md bg-cyan-900 text-cyan-300 font-bold">SIH 2026 SOLUTION</span>
              </div>
              <ul className="space-y-3 text-xs text-slate-200">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Real-time sensing via pH, TDS, and turbidity sensor array.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>AI risk-based purification selection (Sediment & Carbon filter routing).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Early automated alerts upon parameter variance detection.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Off-grid solar panel and battery powered operation.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Post-treatment quality verification & automated re-treatment loop.</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* 4. How MineAqua AI Works Pipeline Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold text-cyan-600 uppercase tracking-wider">System Pipeline</span>
            <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">How MineAqua AI Works</h2>
          </div>
          <Link to="/how-it-works" className="text-xs font-bold text-cyan-700 hover:text-cyan-800 flex items-center gap-1">
            <span>View Full Pipeline Breakdown</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <ProcessPipeline interactive={true} />
      </section>

      {/* 5. Solar Energy Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-cyan-500/10 rounded-3xl p-8 sm:p-10 border border-amber-200 space-y-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800">
                <Sun className="w-3.5 h-3.5 text-amber-600" />
                Sustainable Renewable Theme
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Powered by the Sun. Designed for Remote Communities.
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Solar power and battery storage are intended to support MineAqua AI in remote environments where reliable grid power may not be available.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-amber-200 shadow-sm text-center min-w-[200px]">
              <Sun className="w-8 h-8 text-amber-500 mx-auto mb-1 animate-spin" style={{ animationDuration: '12s' }} />
              <span className="text-xs font-bold text-slate-900 block">Off-Grid Capable</span>
              <span className="text-[10px] text-slate-500">Solar + Battery Storage</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-white border border-amber-200 text-slate-800 space-y-1">
              <h4 className="text-xs font-bold flex items-center gap-1.5">
                <Sun className="w-4 h-4 text-amber-500" /> Solar Power
              </h4>
              <p className="text-[11px] text-slate-600">Captures renewable solar energy to power sensors & control electronics.</p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-amber-200 text-slate-800 space-y-1">
              <h4 className="text-xs font-bold flex items-center gap-1.5">
                <Battery className="w-4 h-4 text-emerald-500" /> Battery Backup
              </h4>
              <p className="text-[11px] text-slate-600">Ensures continuous 24/7 sensing and pump actuation during low sunlight.</p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-amber-200 text-slate-800 space-y-1">
              <h4 className="text-xs font-bold flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-cyan-500" /> Off-Grid Operation
              </h4>
              <p className="text-[11px] text-slate-600">Independent of centralized power grid failures or remote power cuts.</p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-amber-200 text-slate-800 space-y-1">
              <h4 className="text-xs font-bold flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-blue-500" /> Sustainable Impact
              </h4>
              <p className="text-[11px] text-slate-600">Zero carbon footprint operation for clean rural water supply.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default HomePage;
