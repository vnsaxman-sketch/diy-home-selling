import { ShieldAlert, X, Scale } from 'lucide-react';
import type { Language } from '../types/fsbo';

interface DisclaimerModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const DisclaimerModal = ({ isOpen, onClose, lang }: DisclaimerModalProps) => {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(15, 23, 42, 0.8)',
        zIndex: 999999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
        backdropFilter: 'blur(4px)',
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: '#ffffff',
          color: '#0f172a',
          borderRadius: '16px',
          border: '1px solid #cbd5e1',
          maxWidth: '680px',
          width: '100%',
          padding: '24px',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.3)',
          maxHeight: '85vh',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid #e2e8f0',
            paddingBottom: '12px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#4f46e5' }}>
            <Scale size={22} />
            <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 'bold', color: '#0f172a' }}>
              {lang === 'vi'
                ? 'Tuyên Bố Miễn Trừ Trách Nhiệm & Cảnh Báo Gian Lận (Hoa Kỳ)'
                : 'U.S. Legal Disclaimer & Wire Fraud Warning'}
            </h3>
          </div>
          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '6px',
              borderRadius: '8px',
              color: '#64748b',
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Scrollable Body */}
        <div
          style={{
            overflowY: 'auto',
            paddingRight: '8px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            fontSize: '14px',
            lineHeight: '1.6',
            color: '#334155',
          }}
        >
          {/* Section 1 */}
          <div
            style={{
              backgroundColor: '#f8fafc',
              padding: '16px',
              borderRadius: '12px',
              border: '1px solid #e2e8f0',
            }}
          >
            <h4
              style={{
                margin: '0 0 8px 0',
                fontSize: '13px',
                fontWeight: 'bold',
                color: '#0f172a',
                textTransform: 'uppercase',
              }}
            >
              {lang === 'vi'
                ? '1. Không Phải Dịch Vụ Môi Giới Hoặc Luật Sư Pháp Lý Tại Mỹ'
                : '1. Educational Guidance Only (Not Legal/Brokerage Services)'}
            </h4>
            <p style={{ margin: 0 }}>
              {lang === 'vi'
                ? 'Ứng dụng này được thiết kế nhằm hỗ trợ cộng đồng người Việt tại Mỹ vượt qua rào cản ngôn ngữ khi tự bán nhà (FSBO). Mọi kịch bản AI, danh mục kiểm tra và hướng dẫn đều mang tính chất tham khảo giáo dục. Nền tảng không phải là Real Estate Brokerage, Title Company, hay Văn phòng Luật sư Mỹ.'
                : 'This application is designed to assist Vietnamese Americans in overcoming language barriers during For-Sale-By-Owner (FSBO) sales in the U.S. All AI prompts and guides are strictly for educational support and do not constitute formal legal or real estate brokerage services.'}
            </p>
          </div>

          {/* Section 2 */}
          <div
            style={{
              backgroundColor: '#fffbeb',
              padding: '16px',
              borderRadius: '12px',
              border: '1px solid #fef3c7',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: '#b45309',
                fontWeight: 'bold',
                fontSize: '13px',
                marginBottom: '8px',
              }}
            >
              <ShieldAlert size={18} />
              <span>
                {lang === 'vi'
                  ? '2. Cảnh Báo Lừa Đảo Chuyển Tiền (Wire Fraud Warning)'
                  : '2. Wire Fraud & Escrow Scam Warning'}
              </span>
            </div>
            <p style={{ margin: '0 0 8px 0', color: '#78350f' }}>
              {lang === 'vi'
                ? 'Lừa đảo chuyển khoản (Wire Fraud) là rủi ro rất lớn trong giao dịch nhà đất tại Mỹ. Luôn gọi điện thoại xác nhận trực tiếp số tài khoản ngân hàng với Escrow hoặc Title Company trước khi chuyển hoặc nhận tiền cọc.'
                : 'Wire fraud in U.S. real estate transactions is extremely prevalent. Always verify bank transfer and escrow routing instructions directly via phone with your verified Title/Escrow officer before sending or receiving funds.'}
            </p>
            <p style={{ margin: 0, color: '#78350f' }}>
              {lang === 'vi'
                ? 'Tuyệt đối KHÔNG nhận tiền cọc bằng séc cá nhân lạ (Personal Checks/Cashier\'s Checks) nếu chưa được công ty Escrow xác minh an toàn.'
                : 'NEVER accept unverified buyer checks or wire instructions via unverified emails.'}
            </p>
          </div>

          {/* Section 3 */}
          <div
            style={{
              backgroundColor: '#f8fafc',
              padding: '16px',
              borderRadius: '12px',
              border: '1px solid #e2e8f0',
            }}
          >
            <h4
              style={{
                margin: '0 0 8px 0',
                fontSize: '13px',
                fontWeight: 'bold',
                color: '#0f172a',
                textTransform: 'uppercase',
              }}
            >
              {lang === 'vi'
                ? '3. Luật Khai Báo Tình Trạng Nhà Tại Tiêu Bang (State Disclosures)'
                : '3. Compliance with State Property Disclosure Laws'}
            </h4>
            <p style={{ margin: 0 }}>
              {lang === 'vi'
                ? 'Luật các tiểu bang Mỹ bắt buộc người bán phải minh bạch khai báo mọi khuyết điểm hư hỏng của căn nhà (Seller\'s Property Disclosure Form / TDS). Người bán hoàn toàn chịu trách nhiệm pháp lý nếu cố tình giấu thông tin hư hỏng.'
                : 'U.S. state laws mandate that home sellers accurately declare known property defects (Seller\'s Disclosure Forms). Sellers are legally liable for intentional non-disclosure or misrepresentation.'}
            </p>
          </div>
        </div>

        {/* Footer Action */}
        <div
          style={{
            paddingTop: '12px',
            borderTop: '1px solid #e2e8f0',
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <button
            onClick={onClose}
            style={{
              backgroundColor: '#4f46e5',
              color: '#ffffff',
              border: 'none',
              padding: '10px 22px',
              borderRadius: '10px',
              fontWeight: 'bold',
              fontSize: '13px',
              cursor: 'pointer',
            }}
          >
            {lang === 'vi' ? 'Tôi Đã Hiểu & Đồng Ý' : 'I Understand & Agree'}
          </button>
        </div>
      </div>
    </div>
  );
};

