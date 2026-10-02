import { useState } from 'react';
import { Header } from './components/Header';
import { HeroBanner } from './components/HeroBanner';
import { DisclaimerModal } from './components/DisclaimerModal';
import { LegalResources } from './components/LegalResources';
import { PromptLibraryModal } from './components/PromptLibraryModal';
import { STEPS_DATA } from './data/stepsData';
import type { Language } from './types/fsbo';
import { Copy, Check, ShieldAlert, ChevronRight, BookOpen } from 'lucide-react';

export default function App() {
  const [lang, setLang] = useState<Language>('vi');
  const [isDisclaimerOpen, setIsDisclaimerOpen] = useState(false);
  const [isLibraryOpen, setIsLibraryOpen] = useState(false);
  const [activeStepId, setActiveStepId] = useState<number>(1);
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const activeStep = STEPS_DATA.find((step) => step.id === activeStepId) || STEPS_DATA[0];

  const handleCopyPrompt = (text: string, id: number) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-100 font-sans text-slate-900 flex flex-col">
      {/* Header with Language Switcher */}
      <Header lang={lang} onLanguageChange={setLang} />

      {/* Hero Banner with U.S. FSBO Imagery */}
      <HeroBanner lang={lang} />

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 py-8 flex-1 w-full space-y-8">
        
        {/* Legal Disclaimer Bar */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center space-x-3 text-amber-900">
            <ShieldAlert className="h-5 w-5 text-amber-600 shrink-0" />
            <p className="text-xs sm:text-sm font-medium">
              {lang === 'vi'
                ? 'Ứng dụng chỉ hỗ trợ ngôn ngữ & kịch bản AI. Vui lòng đọc Tuyên Bố Miễn Trừ Trách Nhiệm Pháp Lý Mỹ & Cảnh Báo Lừa Đảo Chuyển Tiền.'
                : 'Educational AI prompts only. Read our U.S. Legal Disclaimer & Wire Fraud Warnings before executing transactions.'}
            </p>
          </div>
          <button
            onClick={() => setIsDisclaimerOpen(true)}
            className="text-xs font-bold text-indigo-600 hover:text-indigo-800 underline shrink-0 cursor-pointer"
          >
            {lang === 'vi' ? 'Xem Chi Tiết' : 'Read Full Disclaimer'}
          </button>
        </div>

        {/* Workflow Section Header with Prompt Library Button */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-slate-200">
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500">
              {lang === 'vi' ? 'Quy Trình 7 Bước Tự Bán Nhà Tại Mỹ' : '7-Step U.S. FSBO Workflow'}
            </h3>
            <p className="text-xs text-slate-600 mt-0.5">
              {lang === 'vi'
                ? 'Chọn từng bước bên dưới để lấy kịch bản AI chuẩn bị cho từng giai đoạn'
                : 'Select a step below to view tailored guidance and AI prompts'}
            </p>
          </div>

          {/* Prompt Library Trigger Button */}
          <button
            onClick={() => setIsLibraryOpen(true)}
            className="inline-flex items-center justify-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2.5 rounded-xl text-xs font-bold shadow-sm transition shrink-0 cursor-pointer"
          >
            <BookOpen className="h-4 w-4" />
            <span>{lang === 'vi' ? 'Mở Thư Viện 40+ Prompts' : 'Open 40+ Prompt Library'}</span>
          </button>
        </div>

        {/* Workflow Steps & Active Prompt Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Step Navigation Sidebar */}
          <div className="lg:col-span-5 space-y-3">
            {STEPS_DATA.map((step) => {
              const isActive = step.id === activeStepId;
              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStepId(step.id)}
                  className={`w-full text-left p-4 rounded-xl border transition duration-200 flex items-center justify-between cursor-pointer ${
                    isActive
                      ? 'bg-indigo-600 text-white border-indigo-600 shadow-md'
                      : 'bg-white text-slate-800 border-slate-200 hover:border-indigo-300 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center space-x-3 pr-2">
                    <span
                      className={`h-7 w-7 rounded-full flex items-center justify-center text-xs font-bold ${
                        isActive ? 'bg-white text-indigo-600' : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {step.id}
                    </span>
                    <span className="text-sm font-bold line-clamp-1">
                      {step.title[lang]}
                    </span>
                  </div>
                  <ChevronRight
                    className={`h-4 w-4 shrink-0 ${isActive ? 'text-white' : 'text-slate-400'}`}
                  />
                </button>
              );
            })}
          </div>

          {/* Active Step Workspace */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-2 text-indigo-600 font-bold text-xs uppercase tracking-wider mb-1">
                <span>{lang === 'vi' ? `Bước ${activeStep.id} / 7` : `Step ${activeStep.id} of 7`}</span>
              </div>
              <h2 className="text-xl font-extrabold text-slate-900 mb-4">
                {activeStep.title[lang]}
              </h2>

              {/* Action Bullet Points */}
              <div className="bg-slate-50 rounded-xl p-4 border border-slate-200/80 mb-6 space-y-2">
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                  {lang === 'vi' ? 'Các Việc Cần Làm:' : 'Key Action Items:'}
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                  {activeStep.description[lang].map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <span className="text-indigo-600 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Active Step Prompt Code Box */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    {lang === 'vi'
                      ? 'Prompt AI Tiếng Anh Chuyên Nghiệp (Sao Chép Vào ChatGPT/Gemini):'
                      : 'English AI Prompt (Copy to ChatGPT/Gemini):'}
                  </label>
                  <button
                    onClick={() => handleCopyPrompt(activeStep.promptText[lang], activeStep.id)}
                    className="inline-flex items-center space-x-1.5 text-xs font-bold text-indigo-600 hover:text-indigo-800 bg-indigo-50 px-3 py-1.5 rounded-lg border border-indigo-100 transition cursor-pointer"
                  >
                    {copiedId === activeStep.id ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-emerald-600" />
                        <span className="text-emerald-600">
                          {lang === 'vi' ? 'Đã Chép!' : 'Copied!'}
                        </span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" />
                        <span>{lang === 'vi' ? 'Sao Chép Prompt' : 'Copy Prompt'}</span>
                      </>
                    )}
                  </button>
                </div>

                <textarea
                  readOnly
                  value={activeStep.promptText[lang]}
                  rows={9}
                  className="w-full bg-slate-900 text-slate-100 font-mono text-xs p-4 rounded-xl border border-slate-800 focus:outline-none resize-none leading-relaxed"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Official U.S. Legal & Tax Resources */}
        <LegalResources lang={lang} />
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-6 text-center text-xs border-t border-slate-800">
        <p>
          {lang === 'vi'
            ? '© 2026 U.S. FSBO Assistant - Công Cụ Hỗ Trợ Tự Bán Nhà Cho Cộng Đồng Người Việt Tại Mỹ'
            : '© 2026 U.S. FSBO Assistant - Empowering Independent Home Sellers across the United States'}
        </p>
	<br />
	<p>
	    Developed by Long Nguyen
	</p>
      </footer>

      {/* Modals */}
      <DisclaimerModal
        isOpen={isDisclaimerOpen}
        onClose={() => setIsDisclaimerOpen(false)}
        lang={lang}
      />

      <PromptLibraryModal
        isOpen={isLibraryOpen}
        onClose={() => setIsLibraryOpen(false)}
        lang={lang}
      />
    </div>
  );
}

