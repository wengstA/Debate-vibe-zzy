
import React from 'react';
import { Quote, Speaker } from '../types';

interface QuoteGalleryProps {
  quotes: Quote[];
  speakers: Speaker[];
}

const QuoteGallery: React.FC<QuoteGalleryProps> = ({ quotes, speakers }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {quotes.map((quote, idx) => {
        const speaker = speakers.find(s => s.id === quote.speakerId);
        return (
          <div key={idx} className="group relative bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
            <div className="absolute top-4 left-4 text-slate-100 group-hover:text-indigo-100 transition-colors">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C20.1216 16 21.017 16.8954 21.017 18V21C21.017 22.1046 20.1216 23 19.017 23H16.017C14.9124 23 14.017 22.1046 14.017 21ZM14.017 13H21.017V6C21.017 4.89543 20.1216 4 19.017 4H16.017C14.9124 4 14.017 4.89543 14.017 6V13ZM2.99999 21L2.99999 18C2.99999 16.8954 3.89542 16 4.99999 16H7.99999C9.10456 16 9.99999 16.8954 9.99999 18V21C9.99999 22.1046 9.10456 23 7.99999 23H4.99999C3.89542 23 2.99999 22.1046 2.99999 21ZM2.99999 13H9.99999V6C9.99999 4.89543 9.10456 4 7.99999 4H4.99999C3.89542 4 2.99999 4.89543 2.99999 6V13Z" /></svg>
            </div>
            
            <p className="font-serif italic text-xl text-slate-800 leading-snug relative z-10 pt-4 mb-8">
              "{quote.text}"
            </p>

            <div className="flex items-center gap-3">
              <img src={speaker?.avatar} alt={speaker?.name} className="w-10 h-10 rounded-full object-cover" />
              <div>
                <p className="text-sm font-bold text-slate-900 leading-none">{speaker?.name}</p>
                <p className="text-xs text-slate-500 mt-1">{speaker?.role}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default QuoteGallery;
