/**
 * Maps department names to their corresponding PDF file paths
 * Handles variations in PDF file naming conventions
 */

interface PDFMapping {
  [key: string]: string;
}

// Helper function to create PDF path from state, category and department
// Returns the relative path that can be used with import.meta.url or fetch
const createPDFPath = (state: string, category: string, fileName: string): string => {
  // For Vite, we'll use the path relative to src/assets
  return `${state}/${category}/${fileName}`;
};

// Helper function to detect state from department name
const detectState = (departmentName: string): string => {
  if (departmentName.toLowerCase().includes('assam')) {
    return 'assam';
  }
  if (departmentName.toLowerCase().includes('telangana')) {
    return 'telangana';
  }
  if (departmentName.toLowerCase().includes('karnataka')) {
    return 'karnataka';
  }
  return 'delhi'; // Default to delhi
};

// Mapping of department display names to PDF file names
const departmentToPDFMap: PDFMapping = {
  // RTI Delhi Police & Security
  'RTI Delhi Police': createPDFPath('delhi', 'RTI Delhi Police & Security', 'RTI Template For Delhi Police.pdf'),
  'RTI Delhi Fire Services Department': createPDFPath('delhi', 'RTI Delhi Police & Security', 'RTI Template For Delhi Fire Services Department.pdf'),
  'RTI Delhi Prisons Department': createPDFPath('delhi', 'RTI Delhi Police & Security', 'RTI Template For Delhi Prisoners Department.pdf'),
  'RTI Delhi Home Department': createPDFPath('delhi', 'RTI Delhi Police & Security', 'RTI Template For Delhi Home Department.pdf'),
  'RTI Delhi Judicial Department': createPDFPath('delhi', 'RTI Delhi Police & Security', 'RTI Template For Delhi Judicial Department.pdf'),
  'RTI Delhi Law, Justice & Legislative Affairs Department': createPDFPath('delhi', 'RTI Delhi Police & Security', 'RTI Template For Delhi Law, Justice & Legislative Affairs Department.pdf'),
  'RTI Delhi Disaster Management Department': createPDFPath('delhi', 'RTI Delhi Police & Security', 'RTI Template For  Delhi Disaster Management Department.pdf'),

  // RTI Delhi Municipal & Housing
  'RTI Delhi Municipal Corporation (MCD)': createPDFPath('delhi', 'RTI Delhi Municipal & Housing', 'RTI Template For  Delhi Municipal Corporation (MCD).pdf'),
  'RTI Delhi Urban Development Department': createPDFPath('delhi', 'RTI Delhi Municipal & Housing', 'RTI Template For Delhi Urban Development Department.pdf'),
  'RTI Delhi Housing & Urban Development Department': createPDFPath('delhi', 'RTI Delhi Municipal & Housing', 'RTI Template For  Delhi Housing & Urban Development Department.pdf'),
  'RTI Delhi Public Works Department (PWD)': createPDFPath('delhi', 'RTI Delhi Municipal & Housing', 'RTI Template For Delhi Public Works Department (PWD).pdf'),
  'RTI Delhi Rural Development Department': createPDFPath('delhi', 'RTI Delhi Municipal & Housing', 'RTI Template For Delhi Rural Development Department.pdf'),

  // RTI Delhi Utilities & Infrastructure
  'RTI Delhi Jal Board (DJB)': createPDFPath('delhi', 'RTI Delhi Utilities & Infrastructure', 'RTI Templare For Delhi Jal Board (DJB).pdf'),
  'RTI Delhi Transco Limited (DTL)': createPDFPath('delhi', 'RTI Delhi Utilities & Infrastructure', 'RTI Template For Delhi Transco Limited (DTL).pdf'),
  'RTI Delhi Power Department': createPDFPath('delhi', 'RTI Delhi Utilities & Infrastructure', 'RTI Delhi Power Department.pdf'),
  'RTI Delhi Water Supply Department': createPDFPath('delhi', 'RTI Delhi Utilities & Infrastructure', 'RTI Template For Delhi Water Supply Department.pdf'),
  'RTI Delhi Ground Water Department': createPDFPath('delhi', 'RTI Delhi Utilities & Infrastructure', 'RTI Template for Delhi Ground Water Department.pdf'),
  'RTI Delhi Irrigation & Flood Control Department': createPDFPath('delhi', 'RTI Delhi Utilities & Infrastructure', 'RTI Template for Delhi Irrigation & Flood Control Department.pdf'),
  'RTI Delhi Renewable Energy Department': createPDFPath('delhi', 'RTI Delhi Utilities & Infrastructure', 'RTI Template for Delhi Renewable Energy Department.pdf'),

  // RTI Delhi Government Services
  'RTI Delhi Revenue Department': createPDFPath('delhi', 'RTI Delhi Government Services', 'RTI Template for Delhi Revenue Department.pdf'),
  'RTI Delhi Education Department': createPDFPath('delhi', 'RTI Delhi Government Services', 'RTI Template for Delhi Education Department.pdf'),
  'RTI Delhi Health & Family Welfare Department': createPDFPath('delhi', 'RTI Delhi Government Services', 'RTI Template for Delhi Health & Family Welfare.pdf'),
  'RTI Delhi Transport Department': createPDFPath('delhi', 'RTI Delhi Government Services', 'RTI Template for Delhi Transport Department.pdf'),
  'RTI Delhi Finance Department': createPDFPath('delhi', 'RTI Delhi Government Services', 'RTI Template for Delhi Finance Department.pdf'),
  'RTI Delhi Registration & Stamps Department': createPDFPath('delhi', 'RTI Delhi Government Services', 'RTI Template for Delhi Registration & Stamps Department.pdf'),
  'RTI Delhi Planning Department': createPDFPath('delhi', 'RTI Delhi Government Services', 'RTI Template for Delhi Planning Department.pdf'),

  // RTI Delhi Social Welfare
  'RTI Delhi Social Welfare Department': createPDFPath('delhi', 'RTI Delhi Social Welfare', 'RTI Template for Delhi Social Welfare Department.pdf'),
  'RTI Delhi Scheduled Castes & Scheduled Tribes Welfare Department': createPDFPath('delhi', 'RTI Delhi Social Welfare', 'RTI Template for Delhi Scheduled Castes & Scheduled Tribes Welfare Department.pdf'),
  'RTI Delhi Women & Child Development Department': createPDFPath('delhi', 'RTI Delhi Social Welfare', 'RTI Template for Delhi Women & Child Development Department.pdf'),
  'RTI Delhi Backward Classes Welfare Department': createPDFPath('delhi', 'RTI Delhi Social Welfare', 'RTI Template for Delhi Backward Classes Welfare Department.pdf'),
  'RTI Delhi Minority Affairs Department': createPDFPath('delhi', 'RTI Delhi Social Welfare', 'RTI Template for Delhi Minority Affairs Department.pdf'),
  'RTI Delhi Youth & Sports Department': createPDFPath('delhi', 'RTI Delhi Social Welfare', 'RTI Template for Delhi Youth & Sports Department.pdf'),

  // RTI Delhi Commerce & Industry
  'RTI Delhi Labour Department': createPDFPath('delhi', 'RTI Delhi Commerce & Industry', 'RTI Template for Delhi Labour Department.pdf'),
  'RTI Delhi Industries Department': createPDFPath('delhi', 'RTI Delhi Commerce & Industry', 'RTI Template for Delhi Industries Department.pdf'),
  'RTI Delhi Value Added Tax Department': createPDFPath('delhi', 'RTI Delhi Commerce & Industry', 'RTI Template for Delhi Value Added Tax Department.pdf'),
  'RTI Delhi Food, Civil Supplies & Consumer Affairs Department': createPDFPath('delhi', 'RTI Delhi Commerce & Industry', 'RTI Template for Delhi Food, Civil Supplies & Consumer Affairs Department.pdf'),
  'RTI Delhi Consumer Affairs Department': createPDFPath('delhi', 'RTI Delhi Commerce & Industry', 'RTI Template for Delhi Consumer Affairs Department.pdf'),
  'RTI Delhi Cooperation Department': createPDFPath('delhi', 'RTI Delhi Commerce & Industry', 'RTI Template for Delhi Cooperation Department.pdf'),
  'RTI Delhi Agricultural Marketing Department': createPDFPath('delhi', 'RTI Delhi Commerce & Industry', 'RTI Template for Delhi Agricultural Marketing Department.pdf'),

  // RTI Delhi Environment & Resources
  'RTI Delhi Environment Department': createPDFPath('delhi', 'RTI Delhi Environment & Resources', 'RTI Template for Delhi Environment Department.pdf'),
  'RTI Delhi Forest & Wildlife Department': createPDFPath('delhi', 'RTI Delhi Environment & Resources', 'RTI Template for Delhi Forest & Wildlife Department.pdf'),
  'RTI Delhi Mines & Geology Department': createPDFPath('delhi', 'RTI Delhi Environment & Resources', 'RTI Template for Delhi Mines & Geology Department.pdf'),
  'RTI Delhi Science & Technology Department': createPDFPath('delhi', 'RTI Delhi Environment & Resources', 'RTI Template for Delhi Science & Technology Department.pdf'),

  // RTI Delhi Culture & Tourism
  'RTI Delhi Tourism Department': createPDFPath('delhi', 'RTI Delhi Culture & Tourism', 'RTI Template for Delhi Tourism Department.pdf'),
  'RTI Delhi Art, Culture & Languages Department': createPDFPath('delhi', 'RTI Delhi Culture & Tourism', 'RTI Template for Delhi Art, Culture & Languages Department.pdf'),
  'RTI Delhi Archaeology Department': createPDFPath('delhi', 'RTI Delhi Culture & Tourism', 'RTI Template for Delhi Archaeology Department.pdf'),
  'RTI Delhi Handloom & Handicrafts Department': createPDFPath('delhi', 'RTI Delhi Culture & Tourism', 'RTI Template for Delhi Handloom & Handicrafts Department.pdf'),

  // RTI Delhi Information & Technology
  'RTI Delhi Information & Publicity Department': createPDFPath('delhi', 'RTI Delhi Information & Technology', 'RTI Template for Delhi Information & Publicity Department.pdf'),
  'RTI Delhi Information Technology Department': createPDFPath('delhi', 'RTI Delhi Information & Technology', 'RTI Template for Delhi Information Technology Department.pdf'),
  'RTI Delhi Telecommunications Department': createPDFPath('delhi', 'RTI Delhi Information & Technology', 'RTI Template for Delhi Telecommunications Department.pdf'),
  'RTI Delhi Postal Services Department': createPDFPath('delhi', 'RTI Delhi Information & Technology', 'RTI Template for Delhi Postal Services Department.pdf'),

  // RTI Delhi Financial Services
  'RTI Delhi Banking & Financial Services Department': createPDFPath('delhi', 'RTI Delhi Financial Services', 'RTI Template for Delhi Banking & Financial Services Department.pdf'),
  'RTI Delhi Insurance Department': createPDFPath('delhi', 'RTI Delhi Financial Services', 'RTI Template for Delhi Insurance Department.pdf'),
  'RTI Delhi Pension Department': createPDFPath('delhi', 'RTI Delhi Financial Services', 'RTI Template for Delhi Pension Department.pdf'),

  // ========== TELANGANA DEPARTMENTS ==========
  // RTI Telangana Police & Security
  'RTI Telangana Police Department': createPDFPath('telangana', 'RTI Telangana Police & Security', 'RTI Template for Telangana Police Department.pdf'),
  'RTI Telangana Fire Services Department': createPDFPath('telangana', 'RTI Telangana Police & Security', 'RTI Template for Telangana Fire Services Department.pdf'),
  'RTI Telangana Prisons Department': createPDFPath('telangana', 'RTI Telangana Police & Security', 'RTI Template for Telangana Prisons Department.pdf'),
  'RTI Telangana Home Department': createPDFPath('telangana', 'RTI Telangana Police & Security', 'RTI Template for Telangana Home Department.pdf'),
  'RTI Telangana Law Department': createPDFPath('telangana', 'RTI Telangana Police & Security', 'RTI Template for Telangana Law Department.pdf'),
  'RTI Telangana Disaster Management Department': createPDFPath('telangana', 'RTI Telangana Police & Security', 'RTI Template for Telangana Disaster Management Department.pdf'),

  // RTI Telangana Municipal & Housing (Note: folder name has typo "Muncipal")
  'RTI Greater Hyderabad Municipal Corporation (GHMC)': createPDFPath('telangana', 'RTI Telangana Muncipal & Housing', 'RTI Template for Greater Hyderabad Municipal Corporation (GHMC).pdf'),
  'RTI Telangana Municipal Administration & Urban Development Department': createPDFPath('telangana', 'RTI Telangana Muncipal & Housing', 'RTI Template for Telangana Municipal Administration & Urban Development Department (MA&UD).pdf'),
  'RTI Telangana Housing Department': createPDFPath('telangana', 'RTI Telangana Muncipal & Housing', 'RTI Template for Telangana Housing Department.pdf'),
  'RTI Telangana Public Works Department (PWD)': createPDFPath('telangana', 'RTI Telangana Muncipal & Housing', 'RTI Template for Telangana Public Works Department (PWD).pdf'),
  'RTI Telangana Panchayat Raj & Rural Development Department': createPDFPath('telangana', 'RTI Telangana Muncipal & Housing', 'RTI Template for Telangana Panchayat Raj & Rural Development Department.pdf'),
  'RTI Telangana Urban Development Department': createPDFPath('telangana', 'RTI Telangana Muncipal & Housing', 'RTI Template for Telangana Urban Development Department.pdf'),

  // RTI Telangana Utilities & Infrastructure
  'RTI Telangana Energy Department': createPDFPath('telangana', 'RTI Telangana Utilities & Infrastructure', 'RTI Template for Telangana Energy Department.pdf'),
  'RTI Telangana State Transmission Corporation (TSTRANSCO)': createPDFPath('telangana', 'RTI Telangana Utilities & Infrastructure', 'RTI Template for Telangana State Transmission Corporation (TSTRANSCO).pdf'),
  'RTI Telangana State Power Generation Corporation (TSGENCO)': createPDFPath('telangana', 'RTI Telangana Utilities & Infrastructure', 'RTI Template for Telangana State Power Generation Corporation (TSGENCO).pdf'),
  'RTI Telangana State Southern Power Distribution Company (TSSPDCL)': createPDFPath('telangana', 'RTI Telangana Utilities & Infrastructure', 'RTI Template for Telangana State Southern Power Distribution Company (TSSPDCL).pdf'),
  'RTI Telangana State Northern Power Distribution Company (TSNPDCL)': createPDFPath('telangana', 'RTI Telangana Utilities & Infrastructure', 'RTI Template for Telangana State Northern Power Distribution Company (TSNPDCL).pdf'),
  'RTI Telangana Irrigation & CAD Department': createPDFPath('telangana', 'RTI Telangana Utilities & Infrastructure', 'RTI Template for Telangana Irrigation & CAD Department.pdf'),

  // RTI Telangana Government Services
  'RTI Telangana Secretariat': createPDFPath('telangana', 'RTI Telangana Government Services', 'RTI Template for Telangana Secretariat.pdf'),
  'RTI Telangana Revenue Department': createPDFPath('telangana', 'RTI Telangana Government Services', 'RTI Template for Telangana Revenue Department.pdf'),
  'RTI Telangana Education Department': createPDFPath('telangana', 'RTI Telangana Government Services', 'RTI Template for Telangana Education Department.pdf'),
  'RTI Telangana Health & Family Welfare Department': createPDFPath('telangana', 'RTI Telangana Government Services', 'RTI Template for Telangana Health & Family Welfare Department.pdf'),
  'RTI Telangana Transport Department': createPDFPath('telangana', 'RTI Telangana Government Services', 'RTI Template for Telangana Transport Department.pdf'),
  'RTI Telangana Finance Department': createPDFPath('telangana', 'RTI Telangana Government Services', 'RTI Template for Telangana Finance Department.pdf'),
  'RTI Telangana Registration & Stamps Department': createPDFPath('telangana', 'RTI Telangana Government Services', 'RTI Template for Telangana Registration & Stamps Department.pdf'),
  'RTI Telangana Planning Department': createPDFPath('telangana', 'RTI Telangana Government Services', 'RTI Template for Telangana Planning Department.pdf'),

  // RTI Telangana Social Welfare (Note: folder name has typo "Telanganga")
  'RTI Telangana Social Welfare Department': createPDFPath('telangana', 'RTI Telanganga Social Welfare', 'RTI Template for Telangana Social Welfare Department.pdf'),
  'RTI Telangana Scheduled Castes Development Department': createPDFPath('telangana', 'RTI Telanganga Social Welfare', 'RTI Template for Telangana Scheduled Castes Development Department.pdf'),
  'RTI Telangana Scheduled Tribes Welfare Department': createPDFPath('telangana', 'RTI Telanganga Social Welfare', 'RTI Template for Telangana Scheduled Tribes Welfare Department.pdf'),
  'RTI Telangana Women & Child Development Department': createPDFPath('telangana', 'RTI Telanganga Social Welfare', 'RTI Template for Telangana Women & Child Development Department.pdf'),
  'RTI Telangana Backward Classes Welfare Department': createPDFPath('telangana', 'RTI Telanganga Social Welfare', 'RTI Template for Telangana Backward Classes Welfare Department.pdf'),
  'RTI Telangana Minority Welfare Department': createPDFPath('telangana', 'RTI Telanganga Social Welfare', 'RTI Template for Telangana Minority Welfare Department.pdf'),
  'RTI Telangana Youth & Sports Department': createPDFPath('telangana', 'RTI Telanganga Social Welfare', 'RTI Template for Telangana Youth & Sports Department.pdf'),

  // RTI Telangana Commerce & Industry
  'RTI Telangana Labour Department': createPDFPath('telangana', 'RTI Telangana Commerce & Industry', 'RTI TEMPLATE FOR TELANGANA LABOUR DEPARTMENT.pdf'),
  'RTI Telangana Industries & Commerce Department': createPDFPath('telangana', 'RTI Telangana Commerce & Industry', 'RTI TEMPLATE FOR TELANGANA INDUSTRIES & COMMERCE DEPARTMENT.pdf'),
  'RTI Telangana Commercial Taxes Department': createPDFPath('telangana', 'RTI Telangana Commerce & Industry', 'RTI TEMPLATE FOR TELANGANA COMMERCIAL TAXES DEPARTMENT.pdf'),
  'RTI Telangana Food & Civil Supplies Department': createPDFPath('telangana', 'RTI Telangana Commerce & Industry', 'RTI TEMPLATE FOR TELANGANA FOOD & CIVIL SUPPLIES DEPARTMENT.pdf'),
  'RTI Telangana Agriculture & Cooperation Department': createPDFPath('telangana', 'RTI Telangana Commerce & Industry', 'RTI TEMPLATE FOR TELANGANA AGRICULTURE & COOPERATION DEPARTMENT.pdf'),
  'RTI Telangana Handlooms & Textiles Department': createPDFPath('telangana', 'RTI Telangana Commerce & Industry', 'RTI TEMPLATE FOR TELANGANA HANDLOOMS & TEXTILES DEPARTMENT.pdf'),

  // RTI Telangana Environment & Resources
  'RTI Telangana Environment Department': createPDFPath('telangana', 'RTI Telangana Environment & Resources', 'RTI TEMPLATE FOR TELANGANA ENVIRONMENT DEPARTMENT.pdf'),
  'RTI Telangana Forest Department': createPDFPath('telangana', 'RTI Telangana Environment & Resources', 'RTI TEMPLATE FOR TELANGANA FOREST DEPARTMENT.pdf'),
  'RTI Telangana Mines & Geology Department': createPDFPath('telangana', 'RTI Telangana Environment & Resources', 'RTI TEMPLATE FOR TELANGANA MINES & GEOLOGY DEPARTMENT.pdf'),
  'RTI Telangana Water Resources Department': createPDFPath('telangana', 'RTI Telangana Environment & Resources', 'RTI TEMPLATE FOR TELANGANA WATER RESOURCES DEPARTMENT.pdf'),

  // RTI Telangana Culture & Tourism
  'RTI Telangana Tourism & Culture Department': createPDFPath('telangana', 'RTI Telangana Culture & Tourism', 'RTI TEMPLATE FOR TELANGANA TOURISM & CULTURE DEPARTMENT.pdf'),
  'RTI Telangana Information & Public Relations Department': createPDFPath('telangana', 'RTI Telangana Culture & Tourism', 'RTI TEMPLATE FOR TELANGANA INFORMATION & PUBLIC RELATIONS DEPARTMENT.pdf'),
  'RTI Telangana Archaeology Department': createPDFPath('telangana', 'RTI Telangana Culture & Tourism', 'RTI TEMPLATE FOR TELANGANA ARCHAEOLOGY DEPARTMENT.pdf'),
  'RTI Telangana Endowments Department': createPDFPath('telangana', 'RTI Telangana Culture & Tourism', 'RTI TEMPLATE FOR TELANGANA ENDOWMENTS DEPARTMENT.pdf'),

  // RTI Telangana Information & Technology
  'RTI Telangana Information Technology Department': createPDFPath('telangana', 'RTI Telangana Information & Technology', 'RTI TEMPLATE FOR TELANGANA INFORMATION TECHNOLOGY DEPARTMENT.pdf'),
  'RTI Telangana State Technology Services (TSTS)': createPDFPath('telangana', 'RTI Telangana Information & Technology', 'RTI TEMPLATE FOR TELANGANA STATE TECHNOLOGY SERVICES (TSTS).pdf'),
  'RTI Telangana State FibreNet Limited': createPDFPath('telangana', 'RTI Telangana Information & Technology', 'RTI TEMPLATE FOR TELANGANA STATE FIBRENET LIMITED.pdf'),
  'RTI Telangana State Innovation Cell': createPDFPath('telangana', 'RTI Telangana Information & Technology', 'RTI TEMPLATE FOR TELANGANA STATE INNOVATION CELL.pdf'),

  // RTI Telangana Education & Health
  'RTI Telangana School Education Department': createPDFPath('telangana', 'RTI Telangana Education & Health', 'RTI TEMPLATE FOR TELANGANA SCHOOL EDUCATION DEPARTMENT.pdf'),
  'RTI Telangana Higher Education Department': createPDFPath('telangana', 'RTI Telangana Education & Health', 'RTI TEMPLATE FOR TELANGANA HIGHER EDUCATION DEPARTMENT.pdf'),
  'RTI Telangana Technical Education Department': createPDFPath('telangana', 'RTI Telangana Education & Health', 'RTI TEMPLATE FOR TELANGANA TECHNICAL EDUCATION DEPARTMENT.pdf'),
  'RTI Telangana Medical & Health Department': createPDFPath('telangana', 'RTI Telangana Education & Health', 'RTI TEMPLATE FOR TELANGANA MEDICAL & HEALTH DEPARTMENT.pdf'),
  'RTI Telangana State Medical Services & Infrastructure Development Corporation (TSMSIDC)': createPDFPath('telangana', 'RTI Telangana Education & Health', 'RTI TEMPLATE FOR TELANGANA STATE MEDICAL SERVICES & INFRASTRUCTURE DEVELOPMENT CORPORATION (TSMSIDC).pdf'),

  // ========== KARNATAKA DEPARTMENTS ==========
  // RTI Karnataka Police & Security
  'RTI Karnataka Home Department': createPDFPath('karnataka', 'RTI Karnataka Police & Security', 'RTI Template for Karnataka Home Department.pdf'),
  'RTI Karnataka Police Department': createPDFPath('karnataka', 'RTI Karnataka Police & Security', 'RTI Template for Karnataka Police Department.pdf'),
  'RTI Karnataka Fire Services Department': createPDFPath('karnataka', 'RTI Karnataka Police & Security', 'RTI Template for Karnataka Fire Services Department.pdf'),
  'RTI Karnataka Prisons Department': createPDFPath('karnataka', 'RTI Karnataka Police & Security', 'RTI Template for Karnataka Prisons Department.pdf'),
  'RTI Karnataka Law Department': createPDFPath('karnataka', 'RTI Karnataka Police & Security', 'RTI Template for Karnataka Law Department.pdf'),
  'RTI Karnataka Disaster Management Department': createPDFPath('karnataka', 'RTI Karnataka Police & Security', 'RTI Template for Karnataka Disaster Management Department.pdf'),

  // RTI Karnataka Finance & Revenue
  'RTI Karnataka Finance Department': createPDFPath('karnataka', 'RTI Karnataka Finance & Revenue', 'RTI Template for Karnataka Finance Department.pdf'),
  'RTI Karnataka Revenue Department': createPDFPath('karnataka', 'RTI Karnataka Finance & Revenue', 'RTI Template for Karnataka Revenue Department.pdf'),
  'RTI Karnataka Commercial Taxes Department': createPDFPath('karnataka', 'RTI Karnataka Finance & Revenue', 'RTI Template for Karnataka Commercial Taxes Department.pdf'),
  'RTI Karnataka Registration & Stamps Department': createPDFPath('karnataka', 'RTI Karnataka Finance & Revenue', 'RTI Template for Karnataka Registration & Stamps Department.pdf'),
  'RTI Karnataka Planning Department': createPDFPath('karnataka', 'RTI Karnataka Finance & Revenue', 'RTI Template for Karnataka Planning Department.pdf'),
  'RTI Karnataka Treasuries Department': createPDFPath('karnataka', 'RTI Karnataka Finance & Revenue', 'RTI Template for Karnataka Treasuries Department.pdf'),

  // RTI Karnataka Transport & Infrastructure
  'RTI Karnataka Transport Department': createPDFPath('karnataka', 'RTI Karnataka Transport & Infrastructure', 'RTI Template for Karnataka Transport Department.pdf'),
  'RTI Karnataka Public Works Department (PWD)': createPDFPath('karnataka', 'RTI Karnataka Transport & Infrastructure', 'RTI Template for Karnataka Public Works Department (PWD).pdf'),
  'RTI Karnataka Urban Development Department': createPDFPath('karnataka', 'RTI Karnataka Transport & Infrastructure', 'RTI Template for Karnataka Urban Development Department.pdf'),
  'RTI Karnataka Rural Development & Panchayat Raj Department': createPDFPath('karnataka', 'RTI Karnataka Transport & Infrastructure', 'RTI Template for Karnataka Rural Development & Panchayat Raj Department.pdf'),
  'RTI Karnataka Municipal Administration Department': createPDFPath('karnataka', 'RTI Karnataka Transport & Infrastructure', 'RTI Template for Karnataka Municipal Administration Department.pdf'),
  'RTI Karnataka Infrastructure Development Department': createPDFPath('karnataka', 'RTI Karnataka Transport & Infrastructure', 'RTI Template for Karnataka Infrastructure Development Department.pdf'),

  // RTI Karnataka Education & Health
  'RTI Karnataka Department of Primary & Secondary Education': createPDFPath('karnataka', 'RTI Karnataka Education & Health', 'RTI Template for Karnataka Department of Primary & Secondary Education.pdf'),
  'RTI Karnataka Higher Education Department': createPDFPath('karnataka', 'RTI Karnataka Education & Health', 'RTI Template for Karnataka Higher Education Department.pdf'),
  'RTI Karnataka Technical Education Department': createPDFPath('karnataka', 'RTI Karnataka Education & Health', 'RTI Template for Karnataka Technical Education Department.pdf'),
  'RTI Karnataka Health & Family Welfare Department': createPDFPath('karnataka', 'RTI Karnataka Education & Health', 'RTI Template for Karnataka Health & Family Welfare Department.pdf'),
  'RTI Karnataka Medical Education Department': createPDFPath('karnataka', 'RTI Karnataka Education & Health', 'RTI Template for Karnataka Medical Education Department.pdf'),

  // RTI Karnataka Agriculture & Rural Development
  'RTI Karnataka Agriculture Department': createPDFPath('karnataka', 'RTI Karnataka Agriculture & Rural Development', 'RTI Template for Karnataka Agriculture Department.pdf'),
  'RTI Karnataka Horticulture Department': createPDFPath('karnataka', 'RTI Karnataka Agriculture & Rural Development', 'RTI Template for Karnataka Horticulture Department.pdf'),
  'RTI Karnataka Animal Husbandry & Veterinary Services Department': createPDFPath('karnataka', 'RTI Karnataka Agriculture & Rural Development', 'RTI Template for Karnataka Animal Husbandry & Veterinary Services Department.pdf'),
  'RTI Karnataka Co-operation Department': createPDFPath('karnataka', 'RTI Karnataka Agriculture & Rural Development', 'RTI Template for Karnataka Co-operation Department.pdf'),

  // RTI Karnataka Social Welfare
  'RTI Karnataka Social Welfare Department': createPDFPath('karnataka', 'RTI Karnataka Social Welfare', 'RTI Template for Karnataka Social Welfare Department.pdf'),
  'RTI Karnataka Scheduled Castes Development Department': createPDFPath('karnataka', 'RTI Karnataka Social Welfare', 'RTI Template for Karnataka Scheduled Castes Development Department.pdf'),
  'RTI Karnataka Scheduled Tribes Welfare Department': createPDFPath('karnataka', 'RTI Karnataka Social Welfare', 'RTI Template for Karnataka Scheduled Tribes Welfare Department.pdf'),
  'RTI Karnataka Women & Child Development Department': createPDFPath('karnataka', 'RTI Karnataka Social Welfare', 'RTI Template for Karnataka Women & Child Development Department.pdf'),
  'RTI Karnataka Backward Classes Welfare Department': createPDFPath('karnataka', 'RTI Karnataka Social Welfare', 'RTI Template for Karnataka Backward Classes Welfare Department.pdf'),
  'RTI Karnataka Minority Welfare Department': createPDFPath('karnataka', 'RTI Karnataka Social Welfare', 'RTI Template for Karnataka Minority Welfare Department.pdf'),
  'RTI Karnataka Youth & Sports Department': createPDFPath('karnataka', 'RTI Karnataka Social Welfare', 'RTI Template for Karnataka Youth & Sports Department.pdf'),

  // RTI Karnataka Commerce & Industry
  'RTI Karnataka Industries & Commerce Department': createPDFPath('karnataka', 'RTI Karnataka Commerce & Industry', 'RTI Template for Karnataka Industries & Commerce Department.pdf'),
  'RTI Karnataka Labour Department': createPDFPath('karnataka', 'RTI Karnataka Commerce & Industry', 'RTI Template for Karnataka Labour Department.pdf'),
  'RTI Karnataka Food & Civil Supplies Department': createPDFPath('karnataka', 'RTI Karnataka Commerce & Industry', 'RTI Template for Karnataka Food & Civil Supplies Department.pdf'),
  'RTI Karnataka Handlooms & Textiles Department': createPDFPath('karnataka', 'RTI Karnataka Commerce & Industry', 'RTI Template for Karnataka Handlooms & Textiles Department.pdf'),
  'RTI Karnataka Mines & Geology Department': createPDFPath('karnataka', 'RTI Karnataka Commerce & Industry', 'RTI Template for Karnataka Mines & Geology Department.pdf'),

  // RTI Karnataka Environment & Resources
  'RTI Karnataka Environment Department': createPDFPath('karnataka', 'RTI Karnataka Environment & Resources', 'RTI Template for Karnataka Environment Department.pdf'),
  'RTI Karnataka Forest Department': createPDFPath('karnataka', 'RTI Karnataka Environment & Resources', 'RTI Template for Karnataka Forest Department.pdf'),
  'RTI Karnataka Water Resources Department': createPDFPath('karnataka', 'RTI Karnataka Environment & Resources', 'RTI Template for Karnataka Water Resources Department.pdf'),
  'RTI Karnataka Energy Department': createPDFPath('karnataka', 'RTI Karnataka Environment & Resources', 'RTI Template for Karnataka Energy Department.pdf'),
  'RTI Karnataka Irrigation & CAD Department': createPDFPath('karnataka', 'RTI Karnataka Environment & Resources', 'RTI Template for Karnataka Irrigation & CAD Department.pdf'),

  // RTI Karnataka Information & Technology
  'RTI Karnataka Information Technology Department': createPDFPath('karnataka', 'RTI Karnataka Information & Technology', 'RTI Template for Karnataka Information Technology Department.pdf'),
  'RTI Karnataka Information & Public Relations Department': createPDFPath('karnataka', 'RTI Karnataka Information & Technology', 'RTI Template for Karnataka Information & Public Relations Department.pdf'),
  'RTI Karnataka e-Governance Department': createPDFPath('karnataka', 'RTI Karnataka Information & Technology', 'RTI Template for Karnataka e-Governance Department.pdf'),

  // RTI Karnataka Culture & Tourism
  'RTI Karnataka Tourism Department': createPDFPath('karnataka', 'RTI Karnataka Culture & Tourism', 'RTI Template for Karnataka Tourism Department.pdf'),
  'RTI Karnataka Kannada & Culture Department': createPDFPath('karnataka', 'RTI Karnataka Culture & Tourism', 'RTI Template for Karnataka Kannada & Culture Department.pdf'),
  'RTI Karnataka Archaeology Department': createPDFPath('karnataka', 'RTI Karnataka Culture & Tourism', 'RTI Template for Karnataka Archaeology Department.pdf'),
  'RTI Karnataka Religious & Charitable Endowments Department': createPDFPath('karnataka', 'RTI Karnataka Culture & Tourism', 'RTI Template for Karnataka Religious & Charitable Endowments Department.pdf'),

  // ========== ASSAM DEPARTMENTS ==========
  // Note: Assam PDFs are in RTI-Templates folder, using direct path format
  // RTI Assam Police & Security
  'RTI Assam Home Department': 'RTI-Templates/RTI_Assam_Home_and_Political_Department.pdf',
  'RTI Assam Police Department': 'RTI-Templates/RTI_Assam_Police_Department.pdf',
  'RTI Assam Fire Services Department': 'RTI-Templates/RTI_Assam_Fire_Services_Department.pdf',
  'RTI Assam Prisons Department': 'RTI-Templates/RTI_Assam_Prisons_Department.pdf',
  'RTI Assam Law Department': 'RTI-Templates/RTI_Assam_Law_and_Justice_Department.pdf',
  'RTI Assam Disaster Management Department': 'RTI-Templates/RTI_Assam_Border_Areas_Development_Department.pdf',

  // RTI Assam Finance & Revenue
  'RTI Assam Finance Department': 'RTI-Templates/RTI_Assam_Finance_Department.pdf',
  'RTI Assam Revenue Department': 'RTI-Templates/RTI_Assam_Revenue_and_Disaster_Management_Department.pdf',
  'RTI Assam Commercial Taxes Department': 'RTI-Templates/RTI_Assam_Commercial_Taxes_Department.pdf',
  'RTI Assam Registration & Stamps Department': 'RTI-Templates/RTI_Assam_Registration_and_Stamps_Department.pdf',
  'RTI Assam Planning Department': 'RTI-Templates/RTI_Assam_Planning,_Development_and_Special_Initiatives_Department.pdf',
  'RTI Assam Treasuries Department': 'RTI-Templates/RTI_Assam_Treasuries_Department.pdf',

  // RTI Assam Transport & Infrastructure
  'RTI Assam Transport Department': 'RTI-Templates/RTI_Assam_Transport_Department.pdf',
  'RTI Assam Public Works Department (PWD)': 'RTI-Templates/RTI_Assam_Public_Works_Department.pdf',
  'RTI Assam Urban Development Department': 'RTI-Templates/RTI_Assam_Urban_Development_Department.pdf',
  'RTI Assam Municipal Administration Department': 'RTI-Templates/RTI_Assam_Municipal_Administration_Department.pdf',
  'RTI Assam Rural Development & Panchayat Raj Department': 'RTI-Templates/RTI_Assam_Panchayat_and_Rural_Development_Department.pdf',
  'RTI Assam Infrastructure Development Department': 'RTI-Templates/RTI_Assam_Infrastructure_Development_Department.pdf',

  // RTI Assam Education & Health
  'RTI Assam Department of Primary & Secondary Education': 'RTI-Templates/RTI_Assam_Elementary_Education_Department.pdf',
  'RTI Assam Higher Education Department': 'RTI-Templates/RTI_Assam_Higher_Education_Department.pdf',
  'RTI Assam Technical Education Department': 'RTI-Templates/RTI_Assam_Technical_Education_Department.pdf',
  'RTI Assam Health & Family Welfare Department': 'RTI-Templates/RTI_Assam_Health_and_Family_Welfare_Department.pdf',
  'RTI Assam Medical Education Department': 'RTI-Templates/RTI_Assam_Medical_Education_and_Research_Department.pdf',

  // RTI Assam Agriculture & Rural Development
  'RTI Assam Agriculture Department': 'RTI-Templates/RTI_Assam_Agriculture_Department.pdf',
  'RTI Assam Horticulture Department': 'RTI-Templates/RTI_Assam_Horticulture_Department.pdf',
  'RTI Assam Animal Husbandry & Veterinary Services Department': 'RTI-Templates/RTI_Assam_Animal_Husbandry_and_Veterinary_Department.pdf',
  'RTI Assam Co-operation Department': 'RTI-Templates/RTI_Assam_Co-operation_Department.pdf',
  'RTI Assam Rural Development & Panchayat Raj Department': 'RTI-Templates/RTI_Assam_Panchayat_and_Rural_Development_Department.pdf',

  // RTI Assam Social Welfare
  'RTI Assam Social Welfare Department': 'RTI-Templates/RTI_Assam_Social_Welfare_Department.pdf',
  'RTI Assam Scheduled Castes Development Department': 'RTI-Templates/RTI_Assam_Scheduled_Castes_Development_Department.pdf',
  'RTI Assam Scheduled Tribes Welfare Department': 'RTI-Templates/RTI_Assam_Scheduled_Tribes_Welfare_Department.pdf',
  'RTI Assam Women & Child Development Department': 'RTI-Templates/RTI_Assam_Women_and_Child_Development_Department.pdf',
  'RTI Assam Backward Classes Welfare Department': 'RTI-Templates/RTI_Assam_Backward_Classes_Welfare_Department.pdf',
  'RTI Assam Minority Welfare Department': 'RTI-Templates/RTI_Assam_Minority_Welfare_Department.pdf',

  // RTI Assam Commerce & Industry
  'RTI Assam Industries & Commerce Department': 'RTI-Templates/RTI_Assam_Industries_and_Commerce_Department.pdf',
  'RTI Assam Labour Department': 'RTI-Templates/RTI_Assam_Labour_and_Employment_Department.pdf',
  'RTI Assam Food & Civil Supplies Department': 'RTI-Templates/RTI_Assam_Food,_Civil_Supplies_and_Consumer_Affairs_Department.pdf',
  'RTI Assam Handlooms & Textiles Department': 'RTI-Templates/RTI_Assam_Handloom,_Textile_and_Sericulture_Department.pdf',
  'RTI Assam Mines & Geology Department': 'RTI-Templates/RTI_Assam_Mines_and_Minerals_Department.pdf',

  // RTI Assam Environment & Resources
  'RTI Assam Environment Department': 'RTI-Templates/RTI_Assam_Environment_Department.pdf',
  'RTI Assam Forest Department': 'RTI-Templates/RTI_Assam_Forest_Department.pdf',
  'RTI Assam Water Resources Department': 'RTI-Templates/RTI_Assam_Water_Resources_Department.pdf',
  'RTI Assam Energy Department': 'RTI-Templates/RTI_Assam_Energy_Department.pdf',
  'RTI Assam Irrigation & CAD Department': 'RTI-Templates/RTI_Assam_Irrigation_and_CAD_Department.pdf',

  // RTI Assam Information & Technology
  'RTI Assam Information Technology Department': 'RTI-Templates/RTI_Assam_Information_Technology_Department.pdf',
  'RTI Assam Information & Public Relations Department': 'RTI-Templates/RTI_Assam_Information_and_Public_Relations_Department.pdf',
  'RTI Assam e-Governance Department': 'RTI-Templates/RTI_Assam_e-Governance_Department.pdf',

  // RTI Assam Culture & Tourism
  'RTI Assam Tourism Department': 'RTI-Templates/RTI_Assam_Tourism_Department.pdf',
  'RTI Assam Assamese & Culture Department': 'RTI-Templates/RTI_Assam_Cultural_Affairs_Department.pdf',
  'RTI Assam Archaeology Department': 'RTI-Templates/RTI_Assam_Archaeology_Department.pdf',
  'RTI Assam Religious & Charitable Endowments Department': 'RTI-Templates/RTI_Assam_Religious_and_Charitable_Endowments_Department.pdf',
};

/**
 * Get the state from a department name
 * @param departmentName - The display name of the department
 * @returns The state name ('telangana', 'karnataka', or 'delhi')
 */
export const getStateFromDepartment = (departmentName: string): string => {
  return detectState(departmentName);
};

/**
 * Get the PDF path for a given department name
 * @param departmentName - The display name of the department
 * @returns The path to the PDF file, or null if not found
 */
export const getPDFPath = (departmentName: string): string | null => {
  return departmentToPDFMap[departmentName] || null;
};

/**
 * Check if a PDF exists for a given department
 * @param departmentName - The display name of the department
 * @returns True if PDF mapping exists, false otherwise
 */
export const hasPDF = (departmentName: string): boolean => {
  return departmentName in departmentToPDFMap;
};

