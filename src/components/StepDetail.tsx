import { useState } from 'react';
import { Check, Sparkles, Clipboard } from 'lucide-react';
import type { Step, Language } from '../types/fsbo';

interface StepDetailProps {
  step: Step;
  lang: Language;
  totalSteps: number;
  onPrevStep: () => void;
  onNextStep: () => void;
}

export const StepDetail = ({
  step,
  lang,
  totalSteps,
  onPrevStep,
  onNextStep,
}: StepDetailProps) => {
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopy = (): void => {
    navigator.clipboard.writeText(step.promptText[lang]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-6">
      <div className="flex items-center justify-between border-b border-slate-100 pb-4">
        <div>
          <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">
            {lang === 'vi' ? `Bước ${step.id} / ${totalSteps}` : `Step ${step.id} of ${totalSteps}`}
          </span>
          <h2 className="text-xl font-bold text-slate-900 mt-0.5">{step.title[lang]}</h2>
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="font-bold text-slate-900 text-sm">
          {lang === 'vi' ? 'Nội dung thực hiện:' : 'Action Checklist:'}
        </h3>
        <ul className="space-y-2">
          {step.description[lang].map((item: string, idx: number) => (
            <li key={idx} className="flex items-start space-x-2 text-sm text-slate-600">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-600 mt-2 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* PROMPT BOX */}
      <div className="bg-slate-900 text-slate-100 rounded-xl p-5 relative border border-slate-800 space-y-3">
        <div className="flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center space-x-1.5 text-indigo-400 font-semibold">
            <Sparkles className="h-4 w-4" />
            <span>{lang === 'vi' ? 'Mẫu Prompt AI gợi ý' : 'Recommended AI Prompt'}</span>
          </div>
          <button
            onClick={handleCopy}
            className="flex items-center space-x-1 bg-slate-800 hover:bg-slate-700 text-slate-200 px-3 py-1.5 rounded-lg transition text-xs font-medium"
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5 text-emerald-400" />
                <span className="text-emerald-400">{lang === 'vi' ? 'Đã sao chép' : 'Copied'}</span>
              </>
            ) : (
              <>
                <Clipboard className="h-3.5 w-3.5" />
                <span>{lang === 'vi' ? 'Sao chép Prompt' : 'Copy Prompt'}</span>
              </>
            )}
          </button>
        </div>

        <pre className="text-xs font-mono whitespace-pre-wrap leading-relaxed text-slate-300 overflow-x-auto">
          {step.promptText[lang]}
        </pre>
      </div>

      {/* NAVIGATION BUTTONS */}
      <div className="flex items-center justify-between pt-4 border-t border-slate-100">
        <button
          onClick={onPrevStep}
          disabled={step.id === 1}
          className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 disabled:opacity-40 disabled:cursor-not-allowed transition"
        >
          {lang === 'vi' ? '← Bước trước' : '← Previous Step'}
        </button>
        <button
          onClick={onNextStep}
          disabled={step.id === totalSteps}
          className="px-4 py-2 rounded-xl text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white disabled:opacity-40 disabled:cursor-not-allowed transition"
        >
          {lang === 'vi' ? 'Bước tiếp theo →' : 'Next Step →'}
        </button>
      </div>
    </div>
  );
};

