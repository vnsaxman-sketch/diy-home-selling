import { useState } from 'react';
import { ShieldAlert, AlertTriangle, CheckCircle2, X } from 'lucide-react';
import type { Language } from '../types/fsbo';

interface LegalDisclaimerModalProps {
  lang: Language;
}

export const LegalDisclaimerModal = ({ lang }: LegalDisclaimerModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [acknowledged, setAcknowledged] = useState(false);

  return (
    <>
      {/* FLOATING OR FOOTER LEGAL WARNING BAR */}
      <div className="bg-amber-500/10 border-y border-amber-500/20 py-2.5 px-4 text-xs text-amber-900">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center space-x-2">
            <AlertTriangle className="h-4 w-4 text-amber-600 shrink-0" />
            <span>
              {lang === 'vi'
                ? 'Ứng dụng chỉ cung cấp hướng dẫn tham khảo. Người dùng tự chịu trách nhiệm pháp lý đối với mọi giao dịch.'
                : 'This app provides informational guidance only. Users assume full legal liability for all transactions.'}
            </span>
          </div>
          <button
            onClick={() => setIsOpen(true)}
            className="underline font-semibold hover:text-amber-700 whitespace-nowrap"
          >
            {lang === 'vi' ? 'Xem Miễn Trừ Trách Nhiệm & Cảnh Báo Gian Lận' : 'View Legal Disclaimer & Fraud Warning'}
          </button>
        </div>
      </div>

      {/* FULL LEGAL DISCLAIMER MODAL */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 shadow-2xl border border-slate-200 relative max-h-[90vh] flex flex-col">
            
            {/* MODAL HEADER */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
              <div className="flex items-center space-x-2.5 text-red-600 font-bold text-lg">
                <ShieldAlert className="h-6 w-6" />
                <span>
                  {lang === 'vi'
                    ? 'Tuyên Bố Miễn Trừ Trách Nhiệm & Cảnh Báo Tội Gian Lận'
                    : 'Legal Disclaimer & Anti-Fraud Warning'}
                </span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-slate-600 p-1 rounded-lg"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* MODAL BODY CONTENT */}
            <div className="overflow-y-auto space-y-4 text-sm text-slate-700 pr-2 leading-relaxed">
              
              {/* SECTION 1: NO RESPONSIBILITY FOR FRAUD */}
              <div className="bg-red-50 p-4 rounded-xl border border-red-100 space-y-2">
                <h4 className="font-bold text-red-900 flex items-center space-x-1.5">
                  <AlertTriangle className="h-4 w-4 text-red-600" />
                  <span>
                    {lang === 'vi' 
                      ? '1. Không Chịu Trách Nhiệm Về Hành Vi Gian Lận Bất Hợp Pháp' 
                      : '1. Absolute Non-Liability for Fraud or Misrepresentation'}
                  </span>
                </h4>
                <p>
                  {lang === 'vi'
                    ? 'Ứng dụng này và các bên phát triển KHÔNG CHỊU BẤT KỲ TRÁCH NHIỆM PHÁP LÝ NÀO đối với bất kỳ hành vi gian lận, che giấu thông tin quy hoạch, khai khống thông tin tài sản, che giấu khuyết điểm nhà, hoặc bất kỳ hành vi vi phạm pháp luật nào mà người bán cố tình hoặc vô tình thực hiện.'
                    : 'This application and its developers ASSUME ZERO LEGAL RESPONSIBILITY OR LIABILITY for any fraudulent acts, intentional misrepresentations, concealed property defects, title fraud, or unlawful conduct committed by any seller or user.'}
                </p>
              </div>

              {/* SECTION 2: NOT A LEGAL/FINANCIAL ADVISOR */}
              <div className="space-y-1.5">
                <h4 className="font-bold text-slate-900">
                  {lang === 'vi' ? '2. Không Phải Dịch Vụ Tư Vấn Pháp Lý Hoặc Môi Giới' : '2. No Legal, Financial, or Brokerage Advice'}
                </h4>
                <p className="text-slate-600">
                  {lang === 'vi'
                    ? 'Mọi thông tin, kịch bản, và prompt AI trong ứng dụng chỉ mang tính chất tham khảo giáo dục. Nền tảng không phải là công ty luật, văn phòng công chứng hay đại lý môi giới được cấp phép. Người bán có trách nhiệm tự tham khảo ý kiến của luật sư hoặc chuyên gia pháp lý địa phương trước khi ký bất kỳ hợp đồng nào.'
                    : 'All content, guidance, and AI prompts are provided strictly for educational and informational purposes. This app is not a licensed real estate brokerage, law firm, or escrow entity. Users are solely responsible for seeking independent legal and tax counsel before executing contracts.'}
                </p>
              </div>

              {/* SECTION 3: SELLER RESPONSIBILITY */}
              <div className="space-y-1.5">
                <h4 className="font-bold text-slate-900">
                  {lang === 'vi' ? '3. Trách Nhiệm Tuân Thủ Pháp Luật Của Người Bán' : '3. Seller Compliance Obligation'}
                </h4>
                <p className="text-slate-600">
                  {lang === 'vi'
                    ? 'Người bán có nghĩa vụ tự trung thực khai báo tình trạng pháp lý, minh bạch về quyền sở hữu (Sổ hồng/Sổ đỏ) và thực hiện đầy đủ nghĩa vụ thuế theo đúng quy định của chính phủ sở tại.'
                    : 'Sellers are solely obligated to provide truthful property condition disclosures, verify clear legal title, and fulfill all statutory tax and registration duties mandated by local governing authorities.'}
                </p>
              </div>

            </div>

            {/* MODAL FOOTER */}
            <div className="border-t border-slate-100 pt-4 mt-4 flex flex-col sm:flex-row items-center justify-between gap-3">
              <label className="flex items-center space-x-2 text-xs text-slate-600 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={acknowledged}
                  onChange={(e) => setAcknowledged(e.target.checked)}
                  className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 h-4 w-4"
                />
                <span>
                  {lang === 'vi'
                    ? 'Tôi hiểu và đồng ý tự chịu mọi trách nhiệm pháp lý.'
                    : 'I understand and agree to assume all legal liability.'}
                </span>
              </label>

              <button
                disabled={!acknowledged}
                onClick={() => setIsOpen(false)}
                className="w-full sm:w-auto px-5 py-2 rounded-xl font-semibold text-xs transition flex items-center justify-center space-x-2 bg-indigo-600 hover:bg-indigo-500 text-white disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <CheckCircle2 className="h-4 w-4" />
                <span>{lang === 'vi' ? 'Tôi Đồng Ý & Tiếp Tục' : 'I Agree & Continue'}</span>
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
};

