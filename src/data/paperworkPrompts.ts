export interface PaperworkPrompt {
  id: string;
  category: { vi: string; en: string };
  title: { vi: string; en: string };
  promptText: { vi: string; en: string };
}

export const PAPERWORK_PROMPTS: PaperworkPrompt[] = [
  {
    id: "disclosure-review",
    category: {
      vi: "Tờ Khai Minh Bạch (Seller Disclosures)",
      en: "Seller Disclosures & Material Facts"
    },
    title: {
      vi: "Prompt AI: Rà soát & Hướng dẫn điền Tờ khai khuyết điểm nhà",
      en: "AI Prompt: Property Condition Disclosure Guidance"
    },
    promptText: {
      vi: `Tôi là chủ nhà tự bán nhà (FSBO). Tôi đang chuẩn bị điền Tờ khai minh bạch tình trạng bất động sản (Seller Disclosure Statement).
Vị trí nhà: [Nhập tỉnh/thành phố hoặc tiểu bang]
Năm xây dựng: [Nhập năm xây dựng]
Các sự cố / sửa chữa từng làm: [Ví dụ: Thấm trần năm 2022 đã sửa, từng thay đường ống nước năm 2024...]

Hãy tư vấn cho tôi:
1. Những mục khuyết điểm nào BẮT BUỘC phải khai báo theo quy định pháp luật tại [Khu vực của bạn] để tránh bị người mua kiện sau khi bàn giao?
2. Khai báo thế nào cho đúng sự thật nhưng không làm người mua hoảng sợ hay hủy hợp đồng?
3. Viết mẫu câu giải thích trung thực về lịch sử sửa chữa nhà cho tôi.`,
      en: `I am selling my home FSBO and completing the Seller Property Condition Disclosure Statement.
Location: [City / State]
Year Built: [Year]
Past repairs/issues: [e.g., Roof leak repaired in 2022, main pipe replaced in 2024]

Tasks:
1. What material defects are strictly mandatory to disclose by law in [Location] to protect me from post-sale litigation?
2. How should I phrase known past repairs accurately without causing unnecessary alarm to prospective buyers?
3. Draft objective disclosure sentences for the repair history mentioned above.`
    }
  },
  {
    id: "contract-contingencies",
    category: {
      vi: "Hợp Đồng Mua Bán (Purchase & Sale Agreement)",
      en: "Purchase Contract & Contingencies"
    },
    title: {
      vi: "Prompt AI: Giải thích các điều khoản rủi ro trong Hợp đồng mua bán",
      en: "AI Prompt: Analyzing Contract Contingencies & Risk Clauses"
    },
    promptText: {
      vi: `Người mua vừa gửi cho tôi một dự thảo Hợp đồng mua bán / Thỏa thuận đặt cọc.
Dưới đây là một số điều khoản trong hợp đồng:
"[Dán các đoạn điều khoản bạn chưa rõ hoặc cảm thấy e ngại vào đây]"

Hãy đóng vai luật sư bất động sản giải thích cho tôi:
1. Dịch lại các điều khoản trên sang ngôn ngữ bình dân dễ hiểu.
2. Các điều khoản này có tạo kẽ hở cho người mua rút tiền đặt cọc (Earnest Money) hoặc hủy hợp đồng vô lý không?
3. Tôi nên sửa lại hoặc bổ sung thêm điều khoản nào để bảo vệ quyền lợi tiền cọc của bên bán?`,
      en: `The buyer submitted a purchase contract / deposit agreement draft.
Here are the clauses I want to inspect:
"[Paste ambiguous or high-risk clauses here]"

Act as a real estate advisor and answer:
1. Explain these clauses in plain, non-legal language.
2. Do these contingencies give the buyer an unfair loophole to walk away with their earnest deposit?
3. What protective counter-language should I request to safeguard my timeline and deposit?`
    }
  },
  {
    id: "tax-closing-costs",
    category: {
      vi: "Thủ Tục Thuế & Chi Phí Chuyển Nhượng",
      en: "Tax Obligations & Closing Settlement"
    },
    title: {
      vi: "Prompt AI: Tính toán Thuế TNCN & Phí công chứng / Title Fee",
      en: "AI Prompt: Estimating Taxes, Notary Fees & Closing Net Sheet"
    },
    promptText: {
      vi: `Tôi muốn tự tính toán số tiền thực nhận (Net Proceeds) sau khi bán nhà.
Thông tin giao dịch:
- Giá bán thỏa thuận: [Giá trị bán]
- Nguồn gốc nhà: [Nhà duy nhất hay bất động sản thứ 2?]
- Khu vực: [Thành phố / Quốc gia]

Yêu cầu AI:
1. Tính thuế Thu nhập cá nhân (TNCN) hoặc Thuế chuyển nhượng (Capital Gains Tax) mà chủ nhà phải nộp.
2. Liệt kê các chi phí công chứng, phí sang tên, lệ phí trước bạ và bên nào (Bên Bán hay Bên Mua) thường phải chịu theo quy định và thông lệ địa phương.
3. Cho tôi công thức bảng tính Net Sheet để biết tôi bỏ túi chính xác bao nhiêu tiền.`,
      en: `I need to calculate my estimated Seller Net Proceeds after closing.
Transaction Details:
- Agreed Sale Price: [Sale Price]
- Property Usage: [Primary Residence / Investment Property]
- Location: [City / State / Country]

Tasks:
1. Estimate my Personal Income Tax / Capital Gains Tax obligations under current laws.
2. Breakdown expected closing fees (notary fees, title insurance, transfer tax) and standard party allocation (seller vs buyer).
3. Provide a simple Net Sheet breakdown format so I know my final take-home payout.`
    }
  }
];

