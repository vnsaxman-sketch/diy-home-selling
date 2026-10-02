import { useState } from 'react';
import { PROMPT_LIBRARY } from '../data/promptLibrary';
import type { PromptItem } from '../data/promptLibrary';
import type { Language } from '../types/fsbo';
import { Search, Copy, Check, X, BookOpen } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const PromptLibraryModal = ({ isOpen, onClose, lang }: ModalProps) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  if (!isOpen) return null;

  const categories: string[] = [
    'All',
    ...Array.from(new Set(PROMPT_LIBRARY.map((p: PromptItem) => p.category)))
  ];

  const filteredPrompts: PromptItem[] = PROMPT_LIBRARY.filter((p: PromptItem) => {
    const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
    const matchesSearch =
      p.title[lang].toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.promptText.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[85vh] flex flex-col shadow-2xl border border-slate-200">
        
        {/* Header */}
        <div className="p-5 border-b border-slate-200 flex items-center justify-between bg-slate-50 rounded-t-2xl">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-indigo-600 rounded-xl text-white">
              <BookOpen className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                {lang === 'vi' ? 'Thư Viện AI Prompts FSBO' : 'FSBO AI Prompt Library'}
              </h3>
              <p className="text-xs text-slate-500">
                {lang === 'vi' ? 'Sao chép kịch bản tiếng Anh chuẩn cho ChatGPT/Gemini' : 'Copy pre-engineered real estate prompts'}
              </p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 text-slate-400 hover:text-slate-600 rounded-lg cursor-pointer">
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Filter Controls */}
        <div className="p-4 border-b border-slate-100 space-y-3 bg-white">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder={lang === 'vi' ? 'Tìm kiếm prompt...' : 'Search prompts...'}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm border border-slate-200 rounded-xl focus:outline-none focus:border-indigo-500"
            />
          </div>

          <div className="flex flex-wrap gap-1.5">
            {categories.map((cat: string) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-indigo-600 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Prompts List */}
        <div className="p-4 overflow-y-auto space-y-4 flex-1 bg-slate-50">
          {filteredPrompts.map((item: PromptItem) => (
            <div key={item.id} className="bg-white border border-slate-200 rounded-xl p-4 space-y-2 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-md uppercase">
                    {item.category}
                  </span>
                  <h4 className="font-bold text-slate-900 text-sm mt-1">{item.title[lang]}</h4>
                </div>
                <button
                  onClick={() => handleCopy(item.promptText, item.id)}
                  className="flex items-center space-x-1 text-xs font-bold text-indigo-600 bg-indigo-50 px-3 py-1.5 rounded-lg border border-indigo-100 hover:bg-indigo-100 transition cursor-pointer"
                >
                  {copiedId === item.id ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-600" />
                      <span className="text-emerald-600">{lang === 'vi' ? 'Đã Chép' : 'Copied'}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      <span>{lang === 'vi' ? 'Sao Chép' : 'Copy'}</span>
                    </>
                  )}
                </button>
              </div>

              <pre className="bg-slate-900 text-slate-100 font-mono text-xs p-3 rounded-lg overflow-x-auto whitespace-pre-wrap leading-relaxed">
                {item.promptText}
              </pre>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

