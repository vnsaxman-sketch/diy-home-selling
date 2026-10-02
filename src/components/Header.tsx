import { Bot, Globe } from 'lucide-react';
import type { Language } from '../types/fsbo';

interface HeaderProps {
  lang: Language;
  onLanguageChange: (lang: Language) => void;
}

export const Header = ({ lang, onLanguageChange }: HeaderProps) => {
  return (
    <header className="bg-slate-900 text-white border-b border-slate-800 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 py-3.5 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-indigo-600 rounded-xl">
            <Bot className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="font-bold text-lg leading-tight">U.S. FSBO Assistant</h1>
            <p className="text-xs text-slate-400">
              {lang === 'vi' ? 'Hướng Dẫn Tự Bán Nhà Tại Mỹ' : 'U.S. Home Selling AI Companion'}
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-2 bg-slate-800 p-1 rounded-xl border border-slate-700">
          <Globe className="h-4 w-4 text-slate-400 ml-2" />
          <button
            onClick={() => onLanguageChange('vi')}
            className={`px-3 py-1 rounded-lg text-xs font-semibold transition ${
              lang === 'vi' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            Tiếng Việt (Mỹ)
          </button>
          <button
            onClick={() => onLanguageChange('en')}
            className={`px-3 py-1 rounded-lg text-xs font-semibold transition ${
              lang === 'en' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            English
          </button>
        </div>
      </div>
    </header>
  );
};

