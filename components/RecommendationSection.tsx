
import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface RecommendationSectionProps {
  recommendations: string[];
}

const RecommendationSection: React.FC<RecommendationSectionProps> = ({ recommendations }) => {
  return (
    <div className="bg-indigo-600 rounded-3xl p-8 text-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl"></div>
      
      <div className="flex flex-col md:flex-row gap-8 items-center relative z-10">
        <div className="md:w-1/3">
          <div className="bg-white/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
            <Sparkles className="text-indigo-200" />
          </div>
          <h3 className="text-2xl font-bold mb-2">Next Steps for You</h3>
          <p className="text-indigo-100 text-sm leading-relaxed">
            Based on the discussion, here's how you can apply these insights today.
          </p>
        </div>

        <div className="md:w-2/3 w-full space-y-3">
          {recommendations.map((rec, idx) => (
            <div key={idx} className="bg-white/10 hover:bg-white/20 transition-colors p-4 rounded-xl flex items-center gap-4 group cursor-default">
              <div className="w-8 h-8 bg-indigo-500/30 rounded-full flex items-center justify-center text-xs font-bold shrink-0">
                {idx + 1}
              </div>
              <p className="text-sm flex-grow">{rec}</p>
              <ArrowRight className="w-4 h-4 text-indigo-300 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecommendationSection;
