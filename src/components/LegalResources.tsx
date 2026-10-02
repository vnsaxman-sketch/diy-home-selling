import type { Language } from '../types/fsbo';
import { ExternalLink, FileText, Scale, ShieldCheck, Calculator } from 'lucide-react';

interface LegalResourcesProps {
  lang: Language;
}

export const LegalResources = ({ lang }: LegalResourcesProps) => {
  const resources = [
    {
      id: 'irs-523',
      title: {
        vi: 'IRS Publication 523 - Thuế Miễn Giảm Tự Bán Nhà Tại Mỹ',
        en: 'IRS Publication 523 - Selling Your Home Tax Exclusion',
      },
      desc: {
        vi: 'Hướng dẫn chính thức từ IRS về quy định miễn thuế lợi tức bán nhà lên tới $250k (độc thân) hoặc $500k (vợ chồng).',
        en: 'Official IRS guidance on excluding up to $250k ($500k married) of capital gains tax on primary residence.',
      },
      tag: 'UNITED STATES - TAXES',
      icon: Calculator,
      // Fixed working link directly to IRS Pub 523
      url: 'https://www.irs.gov/publications/p523',
    },
    {
      id: 'epa-lead',
      title: {
        vi: 'EPA - Mẫu Khai Báo Sơn Chì Lập Lực Liên Bang (Lead-Based Paint)',
        en: 'EPA - Federal Lead-Based Paint Disclosure Form',
      },
      desc: {
        vi: 'Mẫu tờ khai bắt buộc theo luật liên bang Hoa Kỳ đối với tất cả các căn nhà xây trước năm 1978.',
        en: 'Mandatory federal disclosure requirements and forms for all residential properties built prior to 1978.',
      },
      tag: 'UNITED STATES - FEDERAL DISCLOSURES',
      icon: ShieldCheck,
      // Fixed working link directly to EPA Real Estate Lead Disclosure
      url: 'https://www.epa.gov/lead/real-estate-disclosure',
    },
    {
      id: 'state-disclosures',
      title: {
        vi: 'eForms - Mẫu Tờ Khai Khuyết Điểm Nhà (State Property Disclosure)',
        en: 'eForms - State Property Disclosure Statement Forms',
      },
      desc: {
        vi: 'Tải miễn phí các biểu mẫu Seller’s Property Disclosure (TDS) bắt buộc cho tất cả 50 tiểu bang Mỹ.',
        en: 'Free downloadable Seller Property Disclosure Statement forms required across US states.',
      },
      tag: 'UNITED STATES - STATE FORMS',
      icon: FileText,
      // Fixed working link directly to eForms Property Disclosure library
      url: 'https://eforms.com/purchase-agreements/property-disclosure-statement/',
    },
    {
      id: 'cfpb-closing',
      title: {
        vi: 'CFPB - Hướng Dẫn Quy Trình Đóng Sổ Nhà Đất (Closing Checklist)',
        en: 'CFPB - Closing Disclosure Explainer & Checklist',
      },
      desc: {
        vi: 'Hướng dẫn chính thức từ Cục Bảo Vệ Tài Chính Người Dùng Mỹ về phí Closing Disclosure và quy trình Escrow.',
        en: 'Official CFPB guide explaining Closing Disclosures, escrow fees, and settlement procedures.',
      },
      tag: 'UNITED STATES - CONSUMER PROTECTION',
      icon: Scale,
      // Fixed working link directly to CFPB Closing Disclosure Explainer
      url: 'https://www.consumerfinance.gov/owning-a-home/closing-disclosure/',
    },
  ];

  return (
    <div className="space-y-4 pt-6 border-t border-slate-200">
      <div>
        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500">
          {lang === 'vi'
            ? 'Liên Kết Pháp Lý & Cổng Thông Tin Mẫu Hồ Sơ Tại Mỹ'
            : 'Official U.S. Legal & Tax Resources'}
        </h3>
        <p className="text-xs text-slate-600 mt-0.5">
          {lang === 'vi'
            ? 'Truy cập trực tiếp các cổng thông tin chính phủ Mỹ và thư viện mẫu hợp đồng FSBO chuẩn pháp lý:'
            : 'Direct links to official U.S. government portals and verified legal disclosure repositories:'}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {resources.map((res) => {
          const Icon = res.icon;
          return (
            <a
              key={res.id}
              href={res.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white border border-slate-200 hover:border-indigo-500 rounded-2xl p-5 transition shadow-sm hover:shadow-md flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md">
                    {res.tag}
                  </span>
                  <ExternalLink className="h-4 w-4 text-slate-400 group-hover:text-indigo-600 transition" />
                </div>

                <div className="flex items-start space-x-3 pt-1">
                  <div className="p-2 bg-slate-100 group-hover:bg-indigo-50 text-slate-700 group-hover:text-indigo-600 rounded-xl transition shrink-0">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition leading-snug">
                      {res.title[lang]}
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed mt-1">
                      {res.desc[lang]}
                    </p>
                  </div>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

