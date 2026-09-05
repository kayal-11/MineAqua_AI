import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DemoBadge from '../components/DemoBadge';
import SensorCard from '../components/SensorCard';
import AIRiskAssessmentModal from '../components/AIRiskAssessmentModal';
import { fetchSensors, fetchSensorHistory } from '../services/api';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { RefreshCw, ArrowRight, ShieldCheck, Filter } from 'lucide-react';

export const DashboardPage = () => {
  const [timeRange, setTimeRange] = useState('24H');
  const [sensorData, setSensorData] = useState(null);
  const [historyData, setHistoryData] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadDashboardData = async () => {
    setLoading(true);
    const hours = timeRange === '1H' ? 1 : timeRange === '6H' ? 6 : timeRange === '24H' ? 24 : 168;
    
    const [sensors, history] = await Promise.all([
      fetchSensors(),
      fetchSensorHistory(hours)
    ]);

    setSensorData(sensors.readings);
    setHistoryData(history.data);
    setLoading(false);
  };

  useEffect(() => {
    loadDashboardData();
  }, [timeRange]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Prominent Demo Banner */}
      <DemoBadge variant="banner" text="DEMO DATA — Replace with ESP32 sensor readings during hardware integration." />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              MineAqua AI — Live Water Monitoring
            </h1>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              System Online
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Real-time IoT sensor telemetry, trend analytics, and automated AI risk management node.
          </p>
        </div>

        <button
          onClick={loadDashboardData}
          disabled={loading}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 transition-all shadow-xs"
        >
          <RefreshCw className={`w-3.5 h-3.5 text-cyan-600 ${loading ? 'animate-spin' : ''}`} />
          <span>Refresh Telemetry</span>
        </button>
      </div>

      {/* 3 Major Sensor Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <SensorCard
          title="pH Level"
          value={sensorData ? sensorData.ph : '7.2'}
          unit="pH"
          status={sensorData ? sensorData.ph_status : 'Normal'}
          type="ph"
          description="Acidity / Alkalinity (Baseline: 6.5 - 8.5)"
        />
        <SensorCard
          title="TDS (Total Dissolved Solids)"
          value={sensorData ? sensorData.tds : '320'}
          unit="ppm"
          status={sensorData ? sensorData.tds_status : 'Monitoring'}
          type="tds"
          description="Mineral & Salt Concentration (Baseline: < 500 ppm)"
        />
        <SensorCard
          title="Turbidity"
          value={sensorData ? sensorData.turbidity : '2.8'}
          unit="NTU"
          status={sensorData ? sensorData.turbidity_status : 'Normal'}
          type="turbidity"
          description="Water Clarity & Suspended Particles (Baseline: < 5.0 NTU)"
        />
      </div>

      {/* Water Quality Charts (Recharts) */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-slate-900 text-lg">Sensor Quality Telemetry Trends</h3>
              <DemoBadge variant="badge" />
            </div>
            <p className="text-xs text-slate-500">Historical trend charts for pH, TDS, and Turbidity over selected timeframe.</p>
          </div>

          {/* Time Filter Buttons */}
          <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl text-xs font-semibold">
            {['1H', '6H', '24H', '7D'].map((range) => (
              <button
                key={range}
                onClick={() => setTimeRange(range)}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  timeRange === range
                    ? 'bg-slate-900 text-white shadow-xs font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {range}
              </button>
            ))}
          </div>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* pH Trend */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <div className="flex justify-between text-xs font-bold text-slate-700">
              <span>pH Trend</span>
              <span className="text-cyan-600 font-extrabold">Current: 7.2 pH</span>
            </div>
            <div className="h-44 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={historyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="time" tick={{ fontSize: 10 }} stroke="#94a3b8" />
                  <YAxis domain={[6.0, 8.5]} tick={{ fontSize: 10 }} stroke="#94a3b8" />
                  <Tooltip contentStyle={{ fontSize: '11px', borderRadius: '8px' }} />
                  <Line type="monotone" dataKey="ph" stroke="#0284c7" strokeWidth={2} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* TDS Trend */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <div className="flex justify-between text-xs font-bold text-slate-700">
              <span>TDS Trend (ppm)</span>
              <span className="text-blue-600 font-extrabold">Current: 320 ppm</span>
            </div>
            <div className="h-44 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={historyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="time" tick={{ fontSize: 10 }} stroke="#94a3b8" />
                  <YAxis domain={[250, 450]} tick={{ fontSize: 10 }} stroke="#94a3b8" />
                  <Tooltip contentStyle={{ fontSize: '11px', borderRadius: '8px' }} />
                  <Line type="monotone" dataKey="tds" stroke="#2563eb" strokeWidth={2} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Turbidity Trend */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <div className="flex justify-between text-xs font-bold text-slate-700">
              <span>Turbidity Trend (NTU)</span>
              <span className="text-teal-600 font-extrabold">Current: 2.8 NTU</span>
            </div>
            <div className="h-44 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={historyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="time" tick={{ fontSize: 10 }} stroke="#94a3b8" />
                  <YAxis domain={[1.0, 5.0]} tick={{ fontSize: 10 }} stroke="#94a3b8" />
                  <Tooltip contentStyle={{ fontSize: '11px', borderRadius: '8px' }} />
                  <Line type="monotone" dataKey="turbidity" stroke="#0d9488" strokeWidth={2} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

        </div>
      </div>

      {/* AI Risk Assessment Card */}
      <AIRiskAssessmentModal />

      {/* Current Treatment Status Card */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-50 border border-cyan-200 text-cyan-700 flex items-center justify-center shadow-xs">
              <Filter className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-lg">Current Treatment Status</h3>
              <p className="text-xs text-slate-500">Live operational summary of the adaptive purification stage.</p>
            </div>
          </div>

          <Link
            to="/purification"
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-slate-900 hover:bg-cyan-700 transition-all shadow-sm group shrink-0"
          >
            <span>View Purification</span>
            <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Risk Level</span>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-sm font-extrabold text-emerald-700">LOW</span>
            </div>
            <p className="text-[11px] text-slate-500">Normal operating baseline</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Treatment</span>
            <div className="text-sm font-extrabold text-slate-900 truncate">
              Sediment Filter / Carbon Filter
            </div>
            <p className="text-[11px] text-slate-500">Current selected treatment</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Verification</span>
            <div className="flex items-center gap-1.5 text-sm font-extrabold text-emerald-700">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Passed</span>
            </div>
            <p className="text-[11px] text-slate-500">Secondary check complete</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default DashboardPage;
