import { 
  Calculator, 
  Home, 
  Camera, 
  Megaphone, 
  MessageSquare, 
  FileText, 
  CheckCircle2 
} from 'lucide-react';
import type { Step, Language } from '../types/fsbo';

interface StepSidebarProps {
  steps: Step[];
  activeStep: number;
  lang: Language;
  onSelectStep: (id: number) => void;
}

const STEP_ICONS = [
  Calculator,
  Home,
  Camera,
  Megaphone,
  MessageSquare,
  FileText,
  CheckCircle2
];

export const StepSidebar = ({ steps, activeStep, lang, onSelectStep }: StepSidebarProps) => {
  return (
    <nav className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4 space-y-2">
      <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 px-3 mb-2">
        {lang === 'vi' ? 'Quy trình bán nhà' : 'Selling Process'}
      </h3>
      {steps.map((step, index) => {
        const IconComponent = STEP_ICONS[index] || CheckCircle2;
        const isActive = step.id === activeStep;

        return (
          <button
            key={step.id}
            onClick={() => onSelectStep(step.id)}
            className={`w-full text-left p-3 rounded-xl transition flex items-center space-x-3 text-xs ${
              isActive
                ? 'bg-indigo-50 text-indigo-700 font-bold border border-indigo-200'
                : 'text-slate-600 hover:bg-slate-50 font-medium'
            }`}
          >
            <div
              className={`p-2 rounded-lg shrink-0 ${
                isActive ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-500'
              }`}
            >
              <IconComponent className="h-4 w-4" />
            </div>
            <div className="truncate">
              <p className="text-[10px] text-slate-400 font-semibold uppercase">
                {lang === 'vi' ? `Bước ${step.id}` : `Step ${step.id}`}
              </p>
              <p className="truncate text-sm">{step.title[lang]}</p>
            </div>
          </button>
        );
      })}
    </nav>
  );
};

