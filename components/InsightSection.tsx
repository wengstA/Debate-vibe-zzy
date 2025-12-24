
import React from 'react';
import { CheckCircle, AlertCircle } from 'lucide-react';

interface InsightSectionProps {
  consensus: string[];
  divergence: string[];
}

const InsightSection: React.FC<InsightSectionProps> = ({ consensus, divergence }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-emerald-50/50 rounded-2xl p-6 border border-emerald-100">
        <div className="flex items-center gap-2 mb-4">
          <CheckCircle className="text-emerald-600 w-5 h-5" />
          <h3 className="font-bold text-emerald-900 text-lg">Points of Consensus</h3>
        </div>
        <ul className="space-y-3">
          {consensus.map((item, idx) => (
            <li key={idx} className="flex gap-3 text-emerald-800/80 text-sm leading-relaxed">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-amber-50/50 rounded-2xl p-6 border border-amber-100">
        <div className="flex items-center gap-2 mb-4">
          <AlertCircle className="text-amber-600 w-5 h-5" />
          <h3 className="font-bold text-amber-900 text-lg">Healthy Divergence</h3>
        </div>
        <ul className="space-y-3">
          {divergence.map((item, idx) => (
            <li key={idx} className="flex gap-3 text-amber-800/80 text-sm leading-relaxed">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default InsightSection;
