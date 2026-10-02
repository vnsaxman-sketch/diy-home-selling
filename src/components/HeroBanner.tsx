import { Sparkles, Home, ShieldCheck } from 'lucide-react';
import type { Language } from '../types/fsbo';

export const HeroBanner = ({ lang }: { lang: Language }) => {
  return (
    <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white py-10 px-4 border-b border-slate-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        
        {/* Left Column: Text & Features */}
        <div className="md:col-span-7 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 px-3 py-1 rounded-full text-xs font-semibold">
            <Sparkles className="h-3.5 w-3.5" />
            <span>
              {lang === 'vi' ? 'Hỗ Trợ Tự Bán Nhà Tại Hoa Kỳ (FSBO)' : 'U.S. Home Sale Execution Blueprint'}
            </span>
          </div>

          <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight leading-tight">
            {lang === 'vi'
              ? 'Tự Bán Nhà Tại Mỹ - Vượt Qua Rào Cản Tiếng Anh'
              : 'Sell Your U.S. Property Independently & Safely'}
          </h2>

          <p className="text-slate-300 text-sm md:text-base leading-relaxed">
            {lang === 'vi'
              ? 'Tạo kịch bản tiếng Anh chuẩn xác để làm việc với Buyer Agent, định giá Comps, khai báo Disclosures, và mở Escrow an toàn.'
              : 'Navigate pricing, marketing, state disclosures, buyer agents, and closing with battle-tested AI prompts.'}
          </p>

          <div className="pt-2 flex flex-wrap gap-4 text-xs font-medium text-slate-300">
            <div className="flex items-center space-x-1.5 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700">
              <Home className="h-4 w-4 text-indigo-400" />
              <span>{lang === 'vi' ? 'Dành Cho Nhà Tại Mỹ' : 'Built for U.S. Real Estate'}</span>
            </div>
            <div className="flex items-center space-x-1.5 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700">
              <ShieldCheck className="h-4 w-4 text-emerald-400" />
              <span>{lang === 'vi' ? 'An Toàn Escrow & Tiền Cọc' : 'Escrow & Title Protected'}</span>
            </div>
          </div>
        </div>

        {/* Right Column: House-Selling Image with Text Overlay */}
        <div className="md:col-span-5 relative flex justify-center">
          <div className="relative w-full max-w-md aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-slate-700/60 group">
            <img
              src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80"
              alt="For Sale By Owner"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500 ease-out"
            />
            
            {/* Dark Gradient Overlay for Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent"></div>
            
            {/* Text Overlay ON TOP of Image */}
            <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
              <span className="bg-indigo-600 text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-md tracking-wider">
                {lang === 'vi' ? 'Tự Bán Nhà Ở Mỹ' : 'U.S. FSBO'}
              </span>
              <h3 className="text-base font-bold drop-shadow-md">
                {lang === 'vi' ? 'Hướng Dẫn FSBO Chuẩn Mỹ' : 'U.S. FSBO Guided Process'}
              </h3>
              <p className="text-xs text-slate-200 drop-shadow">
                {lang === 'vi'
                  ? 'Bảo vệ tài sản và quy trình chuyển nhượng an toàn qua Escrow.'
                  : 'Protect your proceeds with safe title & escrow workflows.'}
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

