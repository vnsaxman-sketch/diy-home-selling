import { ExternalLink, Landmark } from 'lucide-react';
import type { Language } from '../types/fsbo';

interface ResourceLink {
  title: { vi: string; en: string };
  desc: { vi: string; en: string };
  url: string;
  category: 'vietnam' | 'us_global';
}

const EXTERNAL_LINKS: ResourceLink[] = [
  // VIETNAM OFFICIAL & LEGAL RESOURCES
  {
    category: 'vietnam',
    title: { 
      vi: "Cổng Dịch Vụ Công Quốc Gia - Thủ Tục Đăng Ký Đất Đai", 
      en: "Vietnam National Public Service - Property Title Transfer" 
    },
    desc: { 
      vi: "Tra cứu thủ tục hành chính sang tên Sổ hồng/Sổ đỏ, khai thuế TNCN và lệ phí trước bạ.", 
      en: "Official procedures for Pink/Red book title transfers and tax filings." 
    },
    url: "https://dichvucong.gov.vn"
  },
  {
    category: 'vietnam',
    title: { 
      vi: "Hệ Thống Mẫu Hợp Đồng Bất Động Sản (Batdongsan.com.vn)", 
      en: "Standard Real Estate Deposit & Sales Contract Templates" 
    },
    desc: { 
      vi: "Tải mẫu hợp đồng đặt cọc, hợp đồng mua bán nhà đất chuẩn pháp lý.", 
      en: "Download standard deposit agreements and property sales templates." 
    },
    url: "https://batdongsan.com.vn/ho-tro-phap-ly"
  },
  {
    category: 'vietnam',
    title: { 
      vi: "Luật Kinh Doanh Bất Động Sản & Đất Đai (Thư Viện Pháp Luật)", 
      en: "Vietnam Housing & Land Law Database" 
    },
    desc: { 
      vi: "Tra cứu quy định pháp lý mới nhất về nghĩa vụ bên bán và thủ tục công chứng.", 
      en: "Search the latest legal framework governing seller duties and notarization." 
    },
    url: "https://thuvienphapluat.vn"
  },

  // US & INTERNATIONAL FSBO RESOURCES
  {
    category: 'us_global',
    title: { 
      vi: "eForms - Mẫu Tờ Khai Minh Bạch BĐS Theo Tiểu Bang (US State Disclosures)", 
      en: "eForms - State-by-State Property Disclosure Forms" 
    },
    desc: { 
      vi: "Tải miễn phí biểu mẫu Tờ khai khuyết điểm nhà (Seller Property Disclosure) cho cả 50 tiểu bang.", 
      en: "Free download of official state-specific seller property condition disclosure forms." 
    },
    url: "https://eforms.com/purchase-agreements/property-disclosure-statement/"
  },
  {
    category: 'us_global',
    title: { 
      vi: "IRS Publication 523 - Thuế Bán Nhà Ở Cá Nhân (US Federal Tax)", 
      en: "IRS Publication 523 - Selling Your Home Tax Guide" 
    },
    desc: { 
      vi: "Hướng dẫn chính thức về miễn giảm thuế lợi tức bán nhà chính chủ (Up to $250k/$500k exemption).", 
      en: "Official IRS tax guidance on main home capital gain exclusions and filing." 
    },
    url: "https://www.irs.gov/forms-pubs/about-publication-523"
  },
  {
    category: 'us_global',
    title: { 
      vi: "EPA - Mẫu Khai Báo Sơn Chì (Lead-Based Paint Disclosure)", 
      en: "EPA - Lead-Based Paint Disclosure Requirement" 
    },
    desc: { 
      vi: "Mẫu tờ khai bắt buộc theo luật liên bang Hoa Kỳ đối với nhà xây trước năm 1978.", 
      en: "Mandatory federal disclosure pamphlet and form for homes built before 1978." 
    },
    url: "https://www.epa.gov/lead/real-estate-disclosures-about-potential-lead-hazards"
  }
];

export const ExternalResources = ({ lang }: { lang: Language }) => {
  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm mt-8">
      <div className="flex items-center space-x-2 text-slate-900 font-bold text-lg mb-2">
        <Landmark className="h-5 w-5 text-indigo-600" />
        <span>
          {lang === 'vi' 
            ? 'Liên Kết Pháp Lý & Mẫu Hồ Sơ Tham Khảo' 
            : 'Official Legal Forms & Reference Links'}
        </span>
      </div>
      <p className="text-slate-600 text-sm mb-6">
        {lang === 'vi'
          ? 'Truy cập các cổng thông tin chính phủ và thư viện mẫu hợp đồng để chuẩn bị hồ sơ sang tên an toàn:'
          : 'Access government portals, state disclosure templates, and official tax guidelines:'}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {EXTERNAL_LINKS.map((link, idx) => (
          <a
            key={idx}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-xl border border-slate-200 hover:border-indigo-500 hover:shadow-md transition bg-slate-50 hover:bg-white flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">
                  {link.category === 'vietnam' ? 'Việt Nam' : 'US / International'}
                </span>
                <ExternalLink className="h-4 w-4 text-slate-400 group-hover:text-indigo-600 transition" />
              </div>
              <h4 className="font-semibold text-sm text-slate-900 group-hover:text-indigo-600 transition">
                {link.title[lang]}
              </h4>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                {link.desc[lang]}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

