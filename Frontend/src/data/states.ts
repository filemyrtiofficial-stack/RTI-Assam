export interface StateHero {
  title: string;
  subtitle: string;
  image: string;
  cta: string;
}

export interface StateFAQ {
  q: string;
  a: string;
}

export interface StateData {
  name: string;
  slug: string;
  languages: string[];
  hero: StateHero;
  departments: string[];
  highlights: string[];
  faqs: StateFAQ[];
  description?: string;
  rtiPortalUrl?: string;
  process?: {
    steps: Array<{
      step: number;
      title: string;
      description: string;
    }>;
  };
  commission?: string;
  fee?: string;
  designTheme?: 'telangana' | 'default'; // Design theme for different layouts
}

export const states: Record<string, StateData> = {
  'telangana': {
    name: "Telangana",
    slug: "telangana",
    languages: ["English", "Telugu", "Urdu"],
    designTheme: "telangana",
    hero: {
      title: "File RTI Online in Telangana — Simplest Way to Get Government Information",
      subtitle: "Draft and file RTI applications to Telangana Government departments and offices without visiting in person.",
      image: "/images/telangana-banner.jpg",
      cta: "Start RTI for Telangana",
    },
    departments: [
      "Telangana Secretariat",
      "Telangana Revenue Department",
      "Telangana Police Department",
      "Telangana Education Department",
      "Telangana Health & Family Welfare Department",
      "Telangana Transport Department",
      "Telangana Public Works Department (PWD)",
      "Telangana Irrigation & CAD Department",
      "Telangana Rural Development Department",
      "Telangana Municipal Administration & Urban Development Department",
      "Telangana Registration & Stamps Department",
      "Telangana Commercial Taxes Department",
      "Telangana Labour Department",
      "Telangana Social Welfare Department",
      "Telangana Scheduled Castes Development Department",
      "Telangana Scheduled Tribes Welfare Department",
      "Telangana Women & Child Development Department",
      "Telangana Backward Classes Welfare Department",
      "Telangana Minority Welfare Department",
      "Telangana Youth & Sports Department",
      "Telangana Information & Public Relations Department",
      "Telangana Finance Department",
      "Telangana Planning Department",
      "Telangana Home Department",
      "Telangana Law Department",
      "Telangana Forest Department",
      "Telangana Environment Department",
      "Telangana Mines & Geology Department",
      "Telangana Industries & Commerce Department",
      "Telangana Information Technology Department",
      "Telangana Tourism & Culture Department",
      "Telangana Housing Department",
      "Telangana Water Resources Department",
      "Telangana Energy Department",
      "Telangana Agriculture & Cooperation Department",
      "Telangana Food & Civil Supplies Department",
      "Telangana Panchayat Raj & Rural Development Department",
      "Telangana Urban Development Department",
      "Telangana Medical & Health Department",
      "Telangana School Education Department",
      "Telangana Higher Education Department",
      "Telangana Technical Education Department",
      "Telangana Animal Husbandry Department",
      "Telangana Fisheries Department",
      "Telangana Horticulture Department",
      "Telangana Sericulture Department",
      "Telangana Handlooms & Textiles Department",
      "Telangana Endowments Department",
      "Telangana BC Welfare Department",
    ],
    highlights: [
      "Covered: Telangana Secretariat & State Departments",
      "Expert-drafted RTI questions",
      "Online filing and tracking support",
    ],
    faqs: [
      { q: "Can I file RTI to Telangana Secretariat online?", a: "Yes, you can file RTI applications to Telangana Secretariat and all state departments online through FileMyRTI. We handle drafting, submission, and tracking for you." },
      { q: "How long does RTI reply take in Telangana?", a: "As per RTI Act 2005, government departments in Telangana must respond within 30 days. In case of information concerning life or liberty, the response must be provided within 48 hours." },
      { q: "Can I file RTI for land records and property disputes in Telangana?", a: "Yes, you can file RTI applications for land records, property documents, and related information from Telangana Revenue Department, Registration & Stamps Department, and other relevant authorities." },
      { q: "Can I file RTI without visiting Meeseva or government offices?", a: "Yes, with FileMyRTI, you can file RTI applications completely online without visiting Meeseva centers or government offices. We handle all the paperwork and submission for you." },
    ],
    process: {
      steps: [
        {
          step: 1,
          title: "Share your RTI details for Telangana department or office",
          description: "Tell us what information you need from any Telangana Government department or office.",
        },
        {
          step: 2,
          title: "Our team drafts your RTI as per RTI Act, 2005 and Telangana rules",
          description: "Our experts draft a professional RTI application compliant with RTI Act 2005 and Telangana state rules.",
        },
        {
          step: 3,
          title: "We file, track, and help you with replies or appeals",
          description: "We handle submission, fee payment, tracking, and assist with first/second appeals if needed.",
        },
      ],
    },
    commission: "Telangana State Information Commission (TSIC)",
    fee: "₹10",
  },
  'assam': {
    name: "Assam",
    slug: "assam",
    languages: ["English", "Assamese"],
    designTheme: "default",
    hero: {
      title: "File RTI Online for Assam Government Departments",
      subtitle: "Get expert-drafted RTI applications for Revenue, Police, Education, Transport, Health and more – without visiting offices.",
      image: "/images/assam-banner.jpg",
      cta: "File RTI for Assam",
    },
    departments: [
      "Assam Secretariat",
      "Assam Home & Political Department",
      "Assam Revenue & Disaster Management Department",
      "Assam Police Department",
      "Assam Finance Department",
      "Assam Health & Family Welfare Department",
      "Assam Education Department",
      "Assam Transport Department",
      "Assam Public Works Department (PWD)",
      "Assam Irrigation & CAD Department",
      "Assam Rural Development & Panchayat Raj Department",
      "Assam Municipal Administration & Urban Development Department",
      "Assam Registration & Stamps Department",
      "Assam Commercial Taxes Department",
      "Assam Labour & Employment Department",
      "Assam Social Welfare Department",
      "Assam Welfare of Plain Tribes & Backward Classes Department",
      "Assam Scheduled Tribes Welfare Department",
      "Assam Women & Child Development Department",
      "Assam Backward Classes Welfare Department",
      "Assam Minority Welfare Department",
      "Assam Youth & Sports Department",
      "Assam Information & Public Relations Department",
      "Assam Planning & Development Department",
      "Assam Law Department",
      "Assam Forest & Environment Department",
      "Assam Mines & Minerals Department",
      "Assam Industries & Commerce Department",
      "Assam Information Technology Department",
      "Assam Tourism Department",
      "Assam Housing & Urban Affairs Department",
      "Assam Water Resources Department",
      "Assam Power Department",
      "Assam Agriculture Department",
      "Assam Food & Civil Supplies & Consumer Affairs Department",
      "Assam Cooperation Department",
      "Assam Medical Education & Research Department",
      "Assam Elementary & Secondary Education Department",
      "Assam Higher Education Department",
      "Assam Technical Education Department",
      "Assam Animal Husbandry & Veterinary Department",
      "Assam Fisheries Department",
      "Assam Horticulture Department",
      "Assam Handloom & Textiles Department",
      "Assam Cultural Affairs Department",
      "Assam Personnel Department",
      "Assam Science, Technology & Climate Change Department",
      "Assam Skill Development, Employment & Entrepreneurship Department",
      "Assam Tea Tribes Welfare Department",
      "Assam Soil Conservation Department",
      "Assam Excise Department",
      "Assam Public Health Engineering Department",
      "Assam Food & Drugs Administration Department",
      "Assam General Administration Department",
      "Assam Secretariat Administration Department",
    ],
    highlights: [
      "Covered: Assam Secretariat & State Departments",
      "Expert-drafted RTI questions",
      "Online filing and tracking support",
      "Service across all 35 districts of Assam",
    ],
    faqs: [
      { q: "Can I file RTI to Assam Secretariat online?", a: "Yes, you can file RTI applications to Assam Secretariat and all state departments online through FileMyRTI. We handle drafting, submission, and tracking for you." },
      { q: "How long does RTI reply take in Assam?", a: "As per RTI Act 2005, government departments in Assam must respond within 30 days. In case of information concerning life or liberty, the response must be provided within 48 hours." },
      { q: "Can I file RTI for land records and revenue information in Assam?", a: "Yes, you can file RTI applications for land records, mutation status, revenue information, and related documents from Assam Revenue & Disaster Management Department and other relevant authorities." },
      { q: "Can I file RTI without visiting government offices?", a: "Yes, with FileMyRTI, you can file RTI applications completely online without visiting government offices. We handle all the paperwork and submission for you." },
    ],
    process: {
      steps: [
        {
          step: 1,
          title: "Share your RTI details for Assam department or office",
          description: "Tell us what information you need from any Assam Government department or office.",
        },
        {
          step: 2,
          title: "Our team drafts your RTI as per RTI Act, 2005 and Assam rules",
          description: "Our experts draft a professional RTI application compliant with RTI Act 2005 and Assam Information Commission guidelines.",
        },
        {
          step: 3,
          title: "We file, track, and help you with replies or appeals",
          description: "We handle submission, fee payment, tracking, and assist with first/second appeals to Assam Information Commission if needed.",
        },
      ],
    },
    commission: "Assam Information Commission",
    fee: "₹10",
  },
};

export const getStateBySlug = (slug: string): StateData | undefined => {
  return states[slug.toLowerCase()];
};

export const getAllStateSlugs = (): string[] => {
  return Object.keys(states);
};
