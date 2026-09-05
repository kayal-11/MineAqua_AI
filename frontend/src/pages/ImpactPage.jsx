import React from 'react';
import { HeartPulse, DollarSign, Leaf, ShieldCheck, CheckCircle2, Globe, Award } from 'lucide-react';
import DemoBadge from '../components/DemoBadge';

export const ImpactPage = () => {
  const sdgs = [
    {
      code: "SDG 3",
      title: "Good Health and Well-Being",
      color: "bg-emerald-600",
      description: "Protects rural populations from drinking contaminated mining runoff through early water-quality risk detection."
    },
    {
      code: "SDG 6",
      title: "Clean Water and Sanitation",
      color: "bg-cyan-600",
      description: "Provides adaptive physical & carbon filtration, ensuring verified safe drinking water access."
    },
    {
      code: "SDG 7",
      title: "Affordable and Clean Energy",
      color: "bg-amber-500",
      description: "Operates 100% off-grid utilizing solar panel generation and rechargeable battery backup."
    },
    {
      code: "SDG 11",
      title: "Sustainable Cities and Communities",
      color: "bg-blue-600",
      description: "Empowers remote mining-affected communities with autonomous, low-maintenance water infrastructure."
    },
    {
      code: "SDG 13",
      title: "Climate Action",
      color: "bg-teal-700",
      description: "Zero carbon operational footprint with sustainable off-grid renewable energy."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="flex justify-center">
          <DemoBadge variant="badge" />
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Technology With a <span className="water-gradient-text">Community Impact</span>
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Designed to improve water security, public health, and environmental sustainability in rural and mining-affected regions.
        </p>
      </div>

      {/* 3 Impact Categories */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Social Impact */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4 card-hover">
          <div className="w-12 h-12 rounded-2xl bg-cyan-50 text-cyan-600 flex items-center justify-center">
            <HeartPulse className="w-6 h-6" />
          </div>

          <h3 className="font-extrabold text-lg text-slate-900">Social Impact</h3>

          <ul className="space-y-3 text-xs text-slate-600">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
              <span><strong>Improved Water-Safety Monitoring:</strong> Replaces sporadic manual testing with continuous IoT sensing.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
              <span><strong>Early Contamination Alerts:</strong> Instant automated notifications before unsafe water reaches public outlets.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
              <span><strong>Rural Support:</strong> Tailored for off-grid habitations surrounding heavy mining and industrial sites.</span>
            </li>
          </ul>
        </div>

        {/* Economic Impact */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4 card-hover">
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <DollarSign className="w-6 h-6" />
          </div>

          <h3 className="font-extrabold text-lg text-slate-900">Economic Impact</h3>

          <ul className="space-y-3 text-xs text-slate-600">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Low-Cost Architecture:</strong> Utilizes accessible embedded ESP32 hardware and modular filter cartridges.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Easy Maintenance Concept:</strong> Quick-change filter housings designed for community technician servicing.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Scalable Deployment:</strong> Easily scales from bench-top prototype to multi-village water kiosk nodes.</span>
            </li>
          </ul>
        </div>

        {/* Environmental Impact */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4 card-hover">
          <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center">
            <Leaf className="w-6 h-6" />
          </div>

          <h3 className="font-extrabold text-lg text-slate-900">Environmental Impact</h3>

          <ul className="space-y-3 text-xs text-slate-600">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
              <span><strong>Solar-Powered Operation:</strong> Zero grid electricity dependency and zero carbon emission operation.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
              <span><strong>Sustainable Energy Usage:</strong> Efficient low-power DC pump actuation driven by battery storage.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
              <span><strong>Responsible Resource Management:</strong> Re-treatment loop minimizes water discharge waste.</span>
            </li>
          </ul>
        </div>

      </div>

      {/* UN Sustainable Development Goals (SDGs) */}
      <div className="space-y-6 pt-6 border-t border-slate-200">
        <div>
          <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
            Alignment with UN Sustainable Development Goals
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            MineAqua AI supports global sustainability targets across health, clean water, renewable energy, and climate action.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {sdgs.map((sdg) => (
            <div key={sdg.code} className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm space-y-2 card-hover">
              <div className={`px-2.5 py-1 rounded-lg ${sdg.color} text-white font-extrabold text-xs inline-block`}>
                {sdg.code}
              </div>
              <h4 className="font-bold text-slate-900 text-xs leading-tight">{sdg.title}</h4>
              <p className="text-[11px] text-slate-500 leading-relaxed">{sdg.description}</p>
            </div>
          ))}
        </div>

        <p className="text-[11px] text-slate-400 italic text-center">
          * Note: SDG icons and titles are presented for conceptual framework alignment and do not imply official UN endorsement or certification.
        </p>
      </div>

    </div>
  );
};

export default ImpactPage;
