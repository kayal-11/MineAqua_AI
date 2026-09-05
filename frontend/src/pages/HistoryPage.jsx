import React, { useState } from 'react';
import { History as HistoryIcon, Search, Filter, Calendar, CheckCircle2, AlertTriangle, ShieldAlert, RefreshCw } from 'lucide-react';
import DemoBadge from '../components/DemoBadge';

export const HistoryPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRisk, setFilterRisk] = useState('ALL');

  const historyLogs = [
    {
      id: "LOG-908",
      dateTime: "2026-09-01 11:30 AM",
      ph: 7.2,
      tds: 320,
      turbidity: 2.8,
      riskLevel: "LOW",
      riskScore: 10,
      treatmentStatus: "Pass - Delivered to Supply",
      verificationResult: "VERIFIED SAFE",
      node: "Mining Zone Node #01"
    },
    {
      id: "LOG-907",
      dateTime: "2026-09-01 09:15 AM",
      ph: 6.4,
      tds: 410,
      turbidity: 4.2,
      riskLevel: "MEDIUM",
      riskScore: 35,
      treatmentStatus: "Sediment + Activated Carbon Active",
      verificationResult: "VERIFIED SAFE",
      node: "Mining Zone Node #01"
    },
    {
      id: "LOG-906",
      dateTime: "2026-09-01 05:00 AM",
      ph: 5.9,
      tds: 540,
      turbidity: 6.8,
      riskLevel: "HIGH",
      riskScore: 75,
      treatmentStatus: "Re-treatment Loop Engaged",
      verificationResult: "INITIAL FAIL → RE-TREATED",
      node: "Mining Zone Node #01"
    },
    {
      id: "LOG-905",
      dateTime: "2026-08-31 10:45 PM",
      ph: 7.1,
      tds: 315,
      turbidity: 2.5,
      riskLevel: "LOW",
      riskScore: 8,
      treatmentStatus: "Pass - Delivered to Supply",
      verificationResult: "VERIFIED SAFE",
      node: "Mining Zone Node #01"
    },
    {
      id: "LOG-904",
      dateTime: "2026-08-31 04:20 PM",
      ph: 6.7,
      tds: 380,
      turbidity: 3.6,
      riskLevel: "MEDIUM",
      riskScore: 30,
      treatmentStatus: "Dual Filtration Stage Active",
      verificationResult: "VERIFIED SAFE",
      node: "Mining Zone Node #01"
    },
    {
      id: "LOG-903",
      dateTime: "2026-08-31 11:00 AM",
      ph: 7.3,
      tds: 325,
      turbidity: 2.7,
      riskLevel: "LOW",
      riskScore: 12,
      treatmentStatus: "Pass - Delivered to Supply",
      verificationResult: "VERIFIED SAFE",
      node: "Mining Zone Node #01"
    },
    {
      id: "LOG-902",
      dateTime: "2026-08-30 08:30 PM",
      ph: 5.6,
      tds: 590,
      turbidity: 7.4,
      riskLevel: "HIGH",
      riskScore: 85,
      treatmentStatus: "Re-treatment Loop Engaged",
      verificationResult: "INITIAL FAIL → RE-TREATED",
      node: "Mining Zone Node #01"
    }
  ];

  const filteredLogs = historyLogs.filter(log => {
    const matchesRisk = filterRisk === 'ALL' || log.riskLevel === filterRisk;
    const matchesSearch = 
      log.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.dateTime.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.treatmentStatus.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.verificationResult.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesRisk && matchesSearch;
  });

  const getRiskBadge = (level) => {
    switch (level) {
      case 'HIGH':
        return (
          <span className="px-2.5 py-1 rounded-full text-xs font-extrabold bg-red-100 text-red-800 border border-red-200">
            HIGH RISK
          </span>
        );
      case 'MEDIUM':
        return (
          <span className="px-2.5 py-1 rounded-full text-xs font-extrabold bg-amber-100 text-amber-800 border border-amber-200">
            MEDIUM RISK
          </span>
        );
      case 'LOW':
        return (
          <span className="px-2.5 py-1 rounded-full text-xs font-extrabold bg-emerald-100 text-emerald-800 border border-emerald-200">
            LOW RISK
          </span>
        );
      default:
        return <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700">{level}</span>;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Prominent Demo Banner */}
      <DemoBadge variant="banner" text="DEMO DATA — All historical logs below are simulated telemetry for UI demonstration." />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
              <HistoryIcon className="w-7 h-7 text-cyan-600" />
              Historical Telemetry & Treatment Audit
            </h1>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Historical record of past sensor readings, AI risk assessments, adaptive purification routes, and verification checks.
          </p>
        </div>
      </div>

      {/* Search & Risk Level Filter Bar */}
      <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Search Field */}
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by ID, date, or treatment status..."
            className="w-full text-xs font-medium pl-10 pr-4 py-2 rounded-xl bg-slate-50 border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-cyan-500"
          />
        </div>

        {/* Risk Level Filter Buttons */}
        <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl text-xs font-semibold w-full sm:w-auto overflow-x-auto">
          <span className="text-[10px] font-bold uppercase text-slate-400 px-2 shrink-0">Risk Filter:</span>
          {['ALL', 'LOW', 'MEDIUM', 'HIGH'].map((risk) => (
            <button
              key={risk}
              onClick={() => setFilterRisk(risk)}
              className={`px-3 py-1.5 rounded-lg transition-all text-xs font-bold ${
                filterRisk === risk
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {risk}
            </button>
          ))}
        </div>

      </div>

      {/* Historical Logs Table */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left text-slate-600">
            <thead className="bg-slate-50 text-slate-700 font-bold uppercase text-[10px] tracking-wider border-b border-slate-200">
              <tr>
                <th className="py-3.5 px-6">Log ID</th>
                <th className="py-3.5 px-6">Date & Time</th>
                <th className="py-3.5 px-6">Sensors (pH / TDS / Turbidity)</th>
                <th className="py-3.5 px-6">AI Risk Level</th>
                <th className="py-3.5 px-6">Treatment Status</th>
                <th className="py-3.5 px-6">Verification Output</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredLogs.length > 0 ? (
                filteredLogs.map((log) => (
                  <tr key={log.id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-4 px-6 font-bold text-slate-900">{log.id}</td>
                    <td className="py-4 px-6 text-slate-500 whitespace-nowrap flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-cyan-600" />
                      {log.dateTime}
                    </td>
                    <td className="py-4 px-6 font-semibold">
                      <span className="text-slate-900">{log.ph} pH</span> • <span className="text-blue-700">{log.tds} ppm</span> • <span className="text-teal-700">{log.turbidity} NTU</span>
                    </td>
                    <td className="py-4 px-6">{getRiskBadge(log.riskLevel)}</td>
                    <td className="py-4 px-6 font-medium text-slate-700">{log.treatmentStatus}</td>
                    <td className="py-4 px-6">
                      <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-extrabold ${
                        log.verificationResult.includes('VERIFIED')
                          ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                          : 'bg-amber-50 text-amber-800 border border-amber-200'
                      }`}>
                        <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                        {log.verificationResult}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="py-8 text-center text-slate-400">
                    No historical logs match your search and risk filter.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

export default HistoryPage;
