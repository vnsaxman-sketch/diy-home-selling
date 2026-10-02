export interface PromptItem {
  id: string;
  category: string;
  title: { vi: string; en: string };
  promptText: string;
}

export const PROMPT_LIBRARY: PromptItem[] = [
  // CATEGORY 1: VALUATION & PRICING
  {
    id: "p1",
    category: "Valuation & Comps",
    title: { vi: "Phân Tích So Sánh Comps Chi Tiết", en: "Comparative Market Analysis (CMA)" },
    promptText: `Act as a U.S. real estate appraiser. Analyze these 3 sold comps in my neighborhood:
[Comp 1: Address, Sold Price, SqFt, Beds/Baths]
[Comp 2: Address, Sold Price, SqFt, Beds/Baths]
[Comp 3: Address, Sold Price, SqFt, Beds/Baths]

My Property: [Address, SqFt, Beds/Baths, Condition]
Calculate estimated price per square foot, adjust for differences, and give a recommended listing range.`
  },
  {
    id: "p2",
    category: "Valuation & Comps",
    title: { vi: "Tính Toán Net Proceeds (Tiền Thực Nhận)", en: "Seller Net Sheet Proceeds Calculation" },
    promptText: `Calculate my estimated Net Proceeds from selling my home FSBO in [State]:
- Target Sale Price: [$ Amount]
- Existing Mortgage Payoff: [$ Amount]
- Estimated Title/Escrow & Transfer Taxes: [e.g., 1.5%]
- Buyer Agent Commission Offered (if any): [e.g., 2.5%]
Provide a breakdown of closing costs and my estimated walk-away cash.`
  },
  {
    id: "p3",
    category: "Valuation & Comps",
    title: { vi: "Định Giá Trong Thị Trường Người Mua/Người Bán", en: "Market Sentiment Pricing Adjustment" },
    promptText: `My local ZIP code [ZIP] is currently experiencing a [Buyer's / Seller's / Balanced] market with average Days on Market (DOM) of [Number] days.
Help me strategy my initial listing price to attract multiple offers without underpricing.`
  },

  // CATEGORY 2: MARKETING & LISTINGS
  {
    id: "p4",
    category: "Marketing & Listings",
    title: { vi: "Mô Tả MLS Tập Trung Lối Sống (Lifestyle)", en: "MLS Listing - Lifestyle Focus" },
    promptText: `Write a compelling 180-word MLS description for my home in [City, State].
Key details: [Bed/Bath, SqFt, Upgrades].
Focus on lifestyle benefits (e.g. entertaining in backyard, walkability, top-rated schools). Warm, non-exaggerated tone.`
  },
  {
    id: "p5",
    category: "Marketing & Listings",
    title: { vi: "Tiêu Đề Bắt Mắt Cho Zillow & Redfin", en: "Catchy Listing Headlines" },
    promptText: `Generate 5 high-converting listing headlines for my home on Zillow FSBO.
Details: [3 Beds, 2 Baths, Remodeled Kitchen, Pool, $ Price].
Target Audience: [Families / First-time buyers / Investors].`
  },

  // CATEGORY 3: SHOWINGS & INQUIRIES
  {
    id: "p6",
    category: "Showings & Inquiries",
    title: { vi: "Trả Lời Môi Giới Yêu Cầu Hoa Hồng (Buyer Agent)", en: "Buyer Agent Commission Inquiry Response" },
    promptText: `A buyer's agent sent a message asking if I am offering a Buyer Agent Commission for my FSBO listing.
Draft a professional reply stating I am willing to pay [e.g., 2% or $X] to represented buyers with a verified Pre-Approval Letter.`
  },
  {
    id: "p7",
    category: "Showings & Inquiries",
    title: { vi: "Thư Cảm Ơn & Xin Feedback Sau Khi Xem Nhà", en: "Post-Showing Feedback Request" },
    promptText: `Write a polite text message to a buyer who toured my property at [Address] yesterday.
Thank them for visiting, ask for honest feedback on price and layout, and invite any questions.`
  },

  // CATEGORY 4: OFFERS & NEGOTIATION
  {
    id: "p8",
    category: "Offers & Negotiation",
    title: { vi: "Phản Hồi Đề Nghị Mua Giá Thấp (Lowball Offer)", en: "Lowball Offer Counter-Strategy" },
    promptText: `I received a lowball offer of [$ Amount] on my listing priced at [$ Amount].
Draft a polite, firm Counter-Offer letter adjusting the price to [$ Amount] and explaining recent comps without offending the buyer.`
  },

  // CATEGORY 5: ESCROW & CLOSING
  {
    id: "p9",
    category: "Escrow & Closing",
    title: { vi: "Email Mở Hồ Sơ Với Công Ty Escrow/Title", en: "Opening Escrow Email Template" },
    promptText: `Draft an email to [Title/Escrow Officer Name] at [Title Company] attaching the signed Purchase Contract for [Property Address].
Request opening escrow, wiring instructions, and the preliminary title report.`
  }
];

