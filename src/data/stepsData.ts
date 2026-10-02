import type { Step } from '../types/fsbo';

export const STEPS_DATA: Step[] = [
  {
    id: 1,
    title: {
      vi: "Định Giá Nhà & Phân Tích Thị Trường Mỹ (Comps)",
      en: "U.S. Home Valuation & Market Comps"
    },
    description: {
      vi: [
        "Tra cứu giá các căn nhà vừa bán (Comps) gần bạn trên Zillow, Redfin, hoặc Realtor.com trong 3-6 tháng qua.",
        "Xác định khoảng giá đăng bán (Listing Price) dựa trên giá mỗi sqft (Price/SqFt) và tình trạng thực tế.",
        "Sử dụng AI tạo prompt bằng tiếng Anh để hỗ trợ tính toán mức giá cạnh tranh."
      ],
      en: [
        "Research recent comparable sales (Comps) on Zillow, Redfin, or Realtor.com over the past 3-6 months.",
        "Determine listing price strategy based on Price/SqFt and local U.S. neighborhood demand.",
        "Use AI prompt to calculate competitive pricing range and negotiation buffers."
      ]
    },
    promptText: {
      vi: `I am selling my home as For-Sale-By-Owner (FSBO) in the United States.
Property details:
- Location/City/State: [City, State, Zip Code]
- Square Feet: [e.g. 2,100 sq ft, Lot size]
- Bedrooms/Bathrooms: [e.g. 4 beds, 2.5 baths]
- Year Built & Condition: [e.g. Built 1998, updated kitchen, original roof]
- Recent nearby comps: [Optional: enter 2-3 sold prices on Zillow]

Please provide:
1. A recommended listing price strategy for the current U.S. housing market.
2. An analysis of pricing per square foot compared to nearby comps.
3. A safe negotiation margin to handle buyer counter-offers effectively.`,
      en: `I am selling my home as For-Sale-By-Owner (FSBO) in the United States.
Property details:
- Location/City/State: [City, State, Zip Code]
- Square Feet: [e.g. 2,100 sq ft, Lot size]
- Bedrooms/Bathrooms: [e.g. 4 beds, 2.5 baths]
- Year Built & Condition: [e.g. Built 1998, updated kitchen, original roof]
- Recent nearby comps: [Optional: enter 2-3 sold prices on Zillow]

Please provide:
1. A recommended listing price strategy for the current U.S. housing market.
2. An analysis of pricing per square foot compared to nearby comps.
3. A safe negotiation margin to handle buyer counter-offers effectively.`
    }
  },
  {
    id: 2,
    title: {
      vi: "Sửa Sang & Khai Báo Tình Trạng Nhà (Disclosures & Staging)",
      en: "Home Staging & Mandatory State Disclosures"
    },
    description: {
      vi: [
        "Dọn dẹp đồ đạc cá nhân (Decluttering) và trang trí nhà mẫu (Staging) để tăng Curb Appeal.",
        "Chuẩn bị Mẫu Khai Báo Bắt Buộc của Tiểu Bang Mỹ (Seller's Property Disclosure Form / TDS).",
        "Sửa chữa các lỗi nhỏ dễ thấy để chuẩn bị cho bước kiểm tra nhà (Home Inspection)."
      ],
      en: [
        "Declutter and stage primary rooms to maximize U.S. buyer appeal.",
        "Prepare mandatory state Seller Property Disclosure Statements.",
        "Fix minor cosmetic issues prior to formal buyer home inspection."
      ]
    },
    promptText: {
      vi: `I am preparing my U.S. residential home for sale (FSBO).
State: [Enter State, e.g., California, Texas, Washington]
Budget for prep: [e.g. $1,000 / Minimal budget]
Home condition: [Describe current repairs needed or outdated areas]

Please help me with:
1. A 5-point checklist for low-cost, high-impact home staging (Curb Appeal).
2. Guidance on mandatory state Seller Disclosure requirements (what defects must be disclosed legally).
3. Advice on preparing for the buyer's professional Home Inspection.`,
      en: `I am preparing my U.S. residential home for sale (FSBO).
State: [Enter State, e.g., California, Texas, Washington]
Budget for prep: [e.g. $1,000 / Minimal budget]
Home condition: [Describe current repairs needed or outdated areas]

Please help me with:
1. A 5-point checklist for low-cost, high-impact home staging (Curb Appeal).
2. Guidance on mandatory state Seller Disclosure requirements (what defects must be disclosed legally).
3. Advice on preparing for the buyer's professional Home Inspection.`
    }
  },
  {
    id: 3,
    title: {
      vi: "Chụp Ảnh & Đăng Bài Quảng Bá (MLS, Zillow & Social Media)",
      en: "Photography & Listing on U.S. Platforms"
    },
    description: {
      vi: [
        "Chụp ảnh chất lượng cao góc rộng bằng điện thoại hoặc thuê dịch vụ chụp ảnh nhà đất.",
        "Đăng bài niêm yết lên Zillow FSBO, Trulia, Realtor.com, và dịch vụ Flat-Fee MLS.",
        "Viết mô tả bằng tiếng Anh chuẩn mực thu hút người mua và Buyer Agents Mỹ."
      ],
      en: [
        "Take high-res photos and recorded 60-second virtual walk-through.",
        "List on Zillow FSBO, Realtor.com, and local Flat-Fee MLS services.",
        "Draft professional listing copy appealing to U.S. home buyers and agents."
      ]
    },
    promptText: {
      vi: `Please write a high-converting U.S. real estate listing for my FSBO home.
Property Details:
- Address/Area: [City, State / Neighborhood]
- Price: [Listing Price]
- Key Features: [e.g. Granite countertops, upgraded HVAC, spacious backyard, top-rated school district]
- HOA Fees (if any): [e.g. $50/month or None]

Please deliver:
1. 3 catchy, professional headlines for Zillow and MLS.
2. A compelling 300-word property description highlighting lifestyle, upgrades, and local schools.
3. A concise summary post optimized for Facebook Marketplace and local U.S. community groups.`,
      en: `Please write a high-converting U.S. real estate listing for my FSBO home.
Property Details:
- Address/Area: [City, State / Neighborhood]
- Price: [Listing Price]
- Key Features: [e.g. Granite countertops, upgraded HVAC, spacious backyard, top-rated school district]
- HOA Fees (if any): [e.g. $50/month or None]

Please deliver:
1. 3 catchy, professional headlines for Zillow and MLS.
2. A compelling 300-word property description highlighting lifestyle, upgrades, and local schools.
3. A concise summary post optimized for Facebook Marketplace and local U.S. community groups.`
    }
  },
  {
    id: 4,
    title: {
      vi: "Đón Khách Xem Nhà & Tiếp Môi Giới (Open House & Showing)",
      en: "Showings, Open Houses & Buyer Agent Interaction"
    },
    description: {
      vi: [
        "Tổ chức Open House cuối tuần hoặc xếp lịch Showing riêng cho người mua.",
        "Làm việc rõ ràng với Buyer Agent về mức hoa hồng môi giới (Buyer Agent Commission).",
        "Yêu cầu thư xác nhận tài chính (Pre-Approval Letter) trước khi nhận cuộc hẹn."
      ],
      en: [
        "Schedule private showings and weekend Open House events.",
        "Clarify buyer agent commission terms (if buyer is represented by an agent).",
        "Request buyer Mortgage Pre-Approval letters prior to serious negotiations."
      ]
    },
    promptText: {
      vi: `I am hosting showings and Open Houses for my FSBO home in the U.S.
A buyer's agent contacted me asking about agent commission and showing availability.

Please help me draft professional English email/text responses for:
1. Confirming showing appointments and asking for the buyer's Mortgage Pre-Approval Letter.
2. Explaining my Buyer Agent Commission terms clearly and professionally.
3. A polite follow-up template to ask for buyer feedback after a showing.`,
      en: `I am hosting showings and Open Houses for my FSBO home in the U.S.
A buyer's agent contacted me asking about agent commission and showing availability.

Please help me draft professional English email/text responses for:
1. Confirming showing appointments and asking for the buyer's Mortgage Pre-Approval Letter.
2. Explaining my Buyer Agent Commission terms clearly and professionally.
3. A polite follow-up template to ask for buyer feedback after a showing.`
    }
  },
  {
    id: 5,
    title: {
      vi: "Thương Lượng Giá & Điều Khoản Lời Đề Nghị (Offer & Counter-Offer)",
      en: "Negotiating Offers & Purchase Agreements"
    },
    description: {
      vi: [
        "Đánh giá các lá thư đề nghị mua nhà (Purchase Offers / Residential Purchase Agreement).",
        "Soạn thư phản hồi giá (Counter-Offer) bằng tiếng Anh chuẩn xác.",
        "Thương lượng các điều khoản quan trọng: Ngày đóng sổ (Closing Date), Phí làm sổ, và Đồ đạc đi kèm."
      ],
      en: [
        "Evaluate incoming Purchase Offers and buyer financing terms.",
        "Draft professional formal Counter-Offers maintaining target price.",
        "Negotiate key contingencies, closing dates, and seller credits."
      ]
    },
    promptText: {
      vi: `I received a written Purchase Offer on my FSBO home in the U.S.
Offer Details:
- Buyer Offer Price: [$ Amount] (Asking price was [$ Amount])
- Earnest Money Deposit: [$ Amount]
- Buyer Requests: [e.g. $5,000 credit towards closing costs, 30-day escrow]

Please generate:
1. A professional, polite formal Counter-Offer letter in English.
2. Strategy on handling buyer concession requests (e.g., closing cost assistance).
3. Key questions I should ask the buyer's mortgage lender to ensure loan approval.`,
      en: `I received a written Purchase Offer on my FSBO home in the U.S.
Offer Details:
- Buyer Offer Price: [$ Amount] (Asking price was [$ Amount])
- Earnest Money Deposit: [$ Amount]
- Buyer Requests: [e.g. $5,000 credit towards closing costs, 30-day escrow]

Please generate:
1. A professional, polite formal Counter-Offer letter in English.
2. Strategy on handling buyer concession requests (e.g., closing cost assistance).
3. Key questions I should ask the buyer's mortgage lender to ensure loan approval.`
    }
  },
  {
    id: 6,
    title: {
      vi: "Mở Hồ Sơ Escrow & Theo Dõi Điều Khoản Huỷ (Escrow & Contingencies)",
      en: "Opening Escrow & Managing Contingencies"
    },
    description: {
      vi: [
        "Mở hồ sơ với Escrow Company / Title Company uy tín tại địa phương.",
        "Theo dõi mốc thời gian hoàn tất các điều khoản kiểm tra (Appraisal & Inspection Contingencies).",
        "Xác nhận khoản tiền đặt cọc (Earnest Money Deposit) được chuyển an toàn vào tài khoản Escrow."
      ],
      en: [
        "Open escrow with a reputable local U.S. Title & Escrow Company.",
        "Monitor Appraisal, Loan, and Inspection Contingency deadlines.",
        "Verify buyer Earnest Money Deposit is securely wired to Escrow."
      ]
    },
    promptText: {
      vi: `I have accepted a purchase offer and am opening Escrow for my U.S. home.
Escrow Officer Contact / Title Company: [Optional Name/Company]
Purchase Price: [$ Amount]
Escrow Timeline: [e.g. 30 Days]

Please help me draft English communications for:
1. An introductory email to the Escrow Officer to open escrow and request the opening package.
2. A formal notice to the buyer regarding inspection and appraisal contingency deadlines.
3. A checklist of seller closing documents required by the Title Company in my state.`,
      en: `I have accepted a purchase offer and am opening Escrow for my U.S. home.
Escrow Officer Contact / Title Company: [Optional Name/Company]
Purchase Price: [$ Amount]
Escrow Timeline: [e.g. 30 Days]

Please help me draft English communications for:
1. An introductory email to the Escrow Officer to open escrow and request the opening package.
2. A formal notice to the buyer regarding inspection and appraisal contingency deadlines.
3. A checklist of seller closing documents required by the Title Company in my state.`
    }
  },
  {
    id: 7,
    title: {
      vi: "Đóng Sổ, Nhận Tiền Bán Nhà & Bàn Giao (Closing & Key Handover)",
      en: "Final Closing Settlement & Property Handover"
    },
    description: {
      vi: [
        "Ký các chứng từ sang tên (Deed) cùng Notary Public do Escrow / Title thu xếp.",
        "Kiểm tra Bảng kê chi phí đóng sổ (Closing Statement / Settlement Statement / HUD-1).",
        "Xác nhận 100% tiền bán nhà được Wire thành công vào tài khoản ngân hàng trước khi bàn giao chìa khóa."
      ],
      en: [
        "Sign final closing Deed paperwork with a certified Notary Public.",
        "Review Seller Settlement Statements (Closing Disclosure) for accurate net proceeds.",
        "Confirm 100% wired fund settlement into your bank account before key transfer."
      ]
    },
    promptText: {
      vi: `I am approaching final Closing for my U.S. home sale.
Expected Closing Date: [Date]
Title / Escrow Company: [Company Name]

Please help me with:
1. An English email to my Escrow Officer to review and verify my Seller Closing Statement (Settlement Sheet).
2. A standard U.S. Key & Possession Handover Form (including garage codes, keys, and utility meter readings).
3. Guidelines on verifying wired proceeds safety with my bank before handing over keys.`,
      en: `I am approaching final Closing for my U.S. home sale.
Expected Closing Date: [Date]
Title / Escrow Company: [Company Name]

Please help me with:
1. An English email to my Escrow Officer to review and verify my Seller Closing Statement (Settlement Sheet).
2. A standard U.S. Key & Possession Handover Form (including garage codes, keys, and utility meter readings).
3. Guidelines on verifying wired proceeds safety with my bank before handing over keys.`
    }
  }
];

