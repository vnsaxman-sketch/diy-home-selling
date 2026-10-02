import { useState } from 'react';
import { ShieldCheck } from 'lucide-react';
import type { Language } from '../types/fsbo';
import { DisclaimerModal } from './DisclaimerModal';

export const Footer = ({ lang }: { lang: Language }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <footer className="bg-slate-900 text-slate-400 text-xs py-8 px-4 border-t border-slate-800 mt-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-2">
            <span className="font-semibold text-slate-200">DIY Home Selling Assistant</span>
            <span>&copy; {new Date().getFullYear()}</span>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center space-x-1.5 text-slate-300 hover:text-indigo-400 bg-slate-800 hover:bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700/80 transition underline underline-offset-4 decoration-slate-600 hover:decoration-indigo-400"
          >
            <ShieldCheck className="h-3.5 w-3.5 text-indigo-400" />
            <span>
              {lang === 'vi'
                ? 'Xem miễn trừ trách nhiệm & cảnh báo gian lận'
                : 'View Legal Disclaimer & Fraud Warning'}
            </span>
          </button>
        </div>
      </footer>

      <DisclaimerModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        lang={lang}
      />
    </>
  );
};

