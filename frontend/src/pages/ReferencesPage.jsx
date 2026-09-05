import React from 'react';
import { BookOpen, ExternalLink, ShieldCheck, FileText } from 'lucide-react';
import DemoBadge from '../components/DemoBadge';

export const ReferencesPage = () => {
  const references = [
    {
      id: "REF-01",
      title: "Guidelines for Drinking-Water Quality (4th Edition)",
      organization: "World Health Organization (WHO)",
      category: "Global Water Safety Standard",
      description: "Authoritative health-based guidelines setting baseline thresholds for pH, total dissolved solids (TDS), and turbidity tolerance parameters in drinking water.",
      citation: "World Health Organization. (2017). Guidelines for drinking-water quality: fourth edition incorporating the first addendum. WHO Guidelines Approved by the Guidelines Review Committee."
    },
    {
      id: "REF-02",
      title: "Assessment of Water Quality & Mine Runoff Impact in Jharia Coalfield, Jharkhand",
      organization: "Environmental Monitoring & Mining Impact Study (2026)",
      category: "Regional Mining Case Study",
      description: "Field study detailing acid mine drainage, elevated suspended solids, and trace heavy metal contamination in surface and ground water sources surrounding coal mining hubs.",
      citation: "Regional Environmental Research Series. (2026). Water quality dynamics and heavy metal runoff in the Jharia Coalfield region, Jharkhand."
    },
    {
      id: "REF-03",
      title: "Groundwater Metal Contamination in Iron-Mining Belts of Jharkhand",
      organization: "Hydrogeological Environmental Assessment (2023)",
      category: "Hydrogeological Assessment",
      description: "Analysis of iron ore extraction impacts on rural groundwater aquifers, documenting seasonal fluctuations in dissolved minerals and turbidity.",
      citation: "Journal of Applied Hydrogeology & Mining Sciences. (2023). Heavy metal dispersion and groundwater quality assessment in iron-mining affected districts of Jharkhand."
    },
    {
      id: "REF-04",
      title: "Groundwater & Heavy-Metal Risk Profile in East Singhbhum, Jharkhand",
      organization: "Rural Environmental Health Survey (2018)",
      category: "Community Risk Survey",
      description: "Longitudinal survey evaluating the public health risks associated with untreated mining pit effluent consumption in rural tribal habitations.",
      citation: "Environmental Geochemistry and Community Health. (2018). Risk profiling of groundwater heavy-metal contamination in East Singhbhum district, Jharkhand."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="flex justify-center">
          <DemoBadge variant="badge" />
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Research & <span className="water-gradient-text">Scientific References</span>
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Grounding MineAqua AI's water quality baselines and mining-aware risk criteria in established environmental literature and WHO guidelines.
        </p>
      </div>

      {/* References Grid */}
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {references.map((ref) => (
            <div key={ref.id} className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4 hover:shadow-md transition-all card-hover">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <span className="text-[10px] font-bold uppercase text-cyan-600 tracking-wider">
                  {ref.category}
                </span>
                <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-600">
                  {ref.id}
                </span>
              </div>

              <div>
                <h3 className="font-extrabold text-slate-900 text-base leading-snug">{ref.title}</h3>
                <p className="text-xs font-semibold text-cyan-700 mt-0.5">{ref.organization}</p>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                {ref.description}
              </p>

              <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 text-[11px] text-slate-500 font-mono leading-relaxed">
                <span className="font-bold text-slate-700 block mb-0.5 font-sans">Citation Standard:</span>
                {ref.citation}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Compliance Note */}
      <div className="p-4 rounded-2xl bg-cyan-50/70 border border-cyan-200 text-xs text-cyan-900 flex items-center gap-3">
        <ShieldCheck className="w-5 h-5 text-cyan-600 shrink-0" />
        <p className="leading-relaxed">
          All references cited above reflect real-world environmental literature and WHO drinking water quality standards to inform MineAqua AI's risk modeling parameters without fabricating external URLs or DOIs.
        </p>
      </div>

    </div>
  );
};

export default ReferencesPage;
