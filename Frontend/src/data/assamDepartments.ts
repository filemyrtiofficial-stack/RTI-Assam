/**
 * Assam Departments organized by sections
 * Used for RTI department listing page
 * Structure matches Telangana/Delhi format for consistent rendering
 */

export interface AssamDepartmentSection {
  category: string;
  items: string[];
}

export const assamDepartments: AssamDepartmentSection[] = [
  {
    category: 'RTI Assam Police & Security',
    items: [
      'RTI Assam Home Department',
      'RTI Assam Police Department',
      'RTI Assam Fire Services Department',
      'RTI Assam Prisons Department',
      'RTI Assam Law Department',
      'RTI Assam Disaster Management Department',
    ],
  },
  {
    category: 'RTI Assam Finance & Revenue',
    items: [
      'RTI Assam Finance Department',
      'RTI Assam Revenue Department',
      'RTI Assam Commercial Taxes Department',
      'RTI Assam Registration & Stamps Department',
      'RTI Assam Planning Department',
      'RTI Assam Treasuries Department',
    ],
  },
  {
    category: 'RTI Assam Transport & Infrastructure',
    items: [
      'RTI Assam Transport Department',
      'RTI Assam Public Works Department (PWD)',
      'RTI Assam Urban Development Department',
      'RTI Assam Municipal Administration Department',
      'RTI Assam Rural Development & Panchayat Raj Department',
      'RTI Assam Infrastructure Development Department',
    ],
  },
  {
    category: 'RTI Assam Education & Health',
    items: [
      'RTI Assam Department of Primary & Secondary Education',
      'RTI Assam Higher Education Department',
      'RTI Assam Technical Education Department',
      'RTI Assam Health & Family Welfare Department',
      'RTI Assam Medical Education Department',
    ],
  },
  {
    category: 'RTI Assam Agriculture & Rural Development',
    items: [
      'RTI Assam Agriculture Department',
      'RTI Assam Horticulture Department',
      'RTI Assam Animal Husbandry & Veterinary Services Department',
      'RTI Assam Co-operation Department',
      'RTI Assam Rural Development & Panchayat Raj Department',
    ],
  },
  {
    category: 'RTI Assam Social Welfare',
    items: [
      'RTI Assam Social Welfare Department',
      'RTI Assam Scheduled Castes Development Department',
      'RTI Assam Scheduled Tribes Welfare Department',
      'RTI Assam Women & Child Development Department',
      'RTI Assam Backward Classes Welfare Department',
      'RTI Assam Minority Welfare Department',
    ],
  },
  {
    category: 'RTI Assam Commerce & Industry',
    items: [
      'RTI Assam Industries & Commerce Department',
      'RTI Assam Labour Department',
      'RTI Assam Food & Civil Supplies Department',
      'RTI Assam Handlooms & Textiles Department',
      'RTI Assam Mines & Geology Department',
    ],
  },
  {
    category: 'RTI Assam Environment & Resources',
    items: [
      'RTI Assam Environment Department',
      'RTI Assam Forest Department',
      'RTI Assam Water Resources Department',
      'RTI Assam Energy Department',
      'RTI Assam Irrigation & CAD Department',
    ],
  },
  {
    category: 'RTI Assam Information & Technology',
    items: [
      'RTI Assam Information Technology Department',
      'RTI Assam Information & Public Relations Department',
      'RTI Assam e-Governance Department',
    ],
  },
  {
    category: 'RTI Assam Culture & Tourism',
    items: [
      'RTI Assam Tourism Department',
      'RTI Assam Assamese & Culture Department',
      'RTI Assam Archaeology Department',
      'RTI Assam Religious & Charitable Endowments Department',
    ],
  },
];
