
import React, { useState } from 'react';
import { Share2, ArrowLeft, Bookmark, Clock, Calendar, Search, Sparkles } from 'lucide-react';
import { MOCK_SUMMARY } from './constants';
import MindMap from './components/MindMap';
import InsightSection from './components/InsightSection';
import QuoteGallery from './components/QuoteGallery';
import RecommendationSection from './components/RecommendationSection';

const App: React.FC = () => {
  const [showModal, setShowModal] = useState(true);
  const data = MOCK_SUMMARY;

  const handleShare = () => {
    alert("Share functionality triggered! Generating high-res summary card...");
  };

  return (
    <div className="min-h-screen bg-[#fdfcf9] text-slate-900 p-4 md:p-8">
      {/* Background decoration */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-100/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-50/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      </div>

      <header className="max-w-6xl mx-auto mb-12 flex items-center justify-between relative z-10">
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-white rounded-full transition-colors border border-transparent hover:border-slate-100">
            <ArrowLeft className="w-5 h-5 text-slate-600" />
          </button>
          <div className="h-8 w-[1px] bg-slate-200"></div>
          <h1 className="text-lg font-medium text-slate-500 uppercase tracking-widest flex items-center gap-2">
            Insight <span className="text-slate-900 font-bold">Stream</span>
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-slate-100 text-sm font-medium hover:bg-slate-50 transition-colors shadow-sm">
            <Bookmark className="w-4 h-4" /> Save to Library
          </button>
          <button 
            onClick={handleShare}
            className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-full text-sm font-medium hover:bg-slate-800 transition-colors shadow-lg shadow-slate-200"
          >
            <Share2 className="w-4 h-4" /> Share Summary
          </button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto space-y-12 relative z-10 pb-24">
        {/* Hero Section */}
        <section className="text-center md:text-left md:flex gap-12 items-end">
          <div className="md:flex-1">
             <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
               <Sparkles className="w-3 h-3" /> GenUI Summary
             </div>
             <h2 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-6 leading-tight">
               {data.title}
             </h2>
             <p className="text-lg text-slate-500 max-w-2xl leading-relaxed mb-8">
               {data.description}
             </p>
             
             <div className="flex flex-wrap items-center gap-6 text-sm text-slate-400">
               <div className="flex items-center gap-2">
                 <Calendar className="w-4 h-4" /> {data.date}
               </div>
               <div className="flex items-center gap-2">
                 <Clock className="w-4 h-4" /> {data.duration}
               </div>
               <div className="flex -space-x-2">
                 {data.speakers.map(s => (
                   <img key={s.id} src={s.avatar} alt={s.name} className="w-8 h-8 rounded-full border-2 border-[#fdfcf9] bg-slate-100" />
                 ))}
                 <div className="w-8 h-8 rounded-full border-2 border-[#fdfcf9] bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-400">+1</div>
               </div>
             </div>
          </div>
        </section>

        {/* Knowledge Architecture (Mind Map) */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-slate-800">Knowledge Architecture</h3>
            <button className="text-sm font-medium text-indigo-600 hover:text-indigo-700 flex items-center gap-1">
              Explore in 3D <ArrowLeft className="w-3 h-3 rotate-180" />
            </button>
          </div>
          <MindMap data={data.mindMap} />
        </section>

        {/* Insights: Consensus & Divergence */}
        <section className="space-y-6">
          <h3 className="text-xl font-bold text-slate-800">Key Takeaways</h3>
          <InsightSection consensus={data.consensus} divergence={data.divergence} />
        </section>

        {/* Golden Quotes */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-slate-800">Golden Quotes</h3>
            <p className="text-sm text-slate-400">Click to copy/share</p>
          </div>
          <QuoteGallery quotes={data.quotes} speakers={data.speakers} />
        </section>

        {/* Call to Action Recommendations */}
        <section className="pt-8">
          <RecommendationSection recommendations={data.recommendations} />
        </section>

        {/* Further Reading / Related */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 border-t border-slate-100">
          <div className="col-span-1">
            <h4 className="font-bold text-slate-800 mb-2">Deep Dive</h4>
            <p className="text-sm text-slate-500 mb-4">Want to learn more about these specific topics? Our AI agent has curated these resources for you.</p>
          </div>
          <div className="col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
             {["The Death of the Artist - Documentary", "Generative AI Research Lab Monthly", "Ethics in Latent Space - Whitepaper"].map((item, idx) => (
               <div key={idx} className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex items-center gap-4 group cursor-pointer hover:border-indigo-200 transition-colors">
                 <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center shrink-0">
                    <Search className="w-4 h-4 text-slate-400 group-hover:text-indigo-400" />
                 </div>
                 <span className="text-sm font-medium text-slate-700">{item}</span>
               </div>
             ))}
          </div>
        </section>
      </main>

      {/* Floating Action Button for AI Chat */}
      <button className="fixed bottom-8 right-8 w-14 h-14 bg-indigo-600 rounded-full shadow-2xl shadow-indigo-200 flex items-center justify-center text-white hover:scale-110 active:scale-95 transition-all z-50">
        <Sparkles className="w-6 h-6" />
      </button>

    </div>
  );
};

export default App;
