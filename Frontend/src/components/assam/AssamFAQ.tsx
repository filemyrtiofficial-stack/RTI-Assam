import React, { useState } from 'react';

interface FAQ {
  q: string;
  a: string;
}

const faqs: FAQ[] = [
  {
    q: 'What is RTI and how does it work in Assam?',
    a: 'RTI (Right to Information) is a fundamental right under the RTI Act 2005 that allows citizens to seek information from public authorities. In Assam, you can file RTI applications to any government department, including Secretariat, Revenue, Police, Education, Health, and all other state departments. The Assam Information Commission oversees RTI implementation in the state.',
  },
  {
    q: 'What information can I request through RTI in Assam?',
    a: 'You can request any information held by public authorities in Assam, including government orders, circulars, policy decisions, budget allocations, project details, employee information, land records, certificates, licenses, and any other documents or data maintained by government departments. However, information exempted under Section 8 of the RTI Act cannot be disclosed.',
  },
  {
    q: 'How do I know which department to file RTI with?',
    a: 'Our expert team will help you identify the correct department and Public Information Officer (PIO) based on your query. We maintain an extensive database of all Assam government departments and their jurisdictions. Simply tell us what information you need, and we\'ll ensure your application reaches the right authority.',
  },
  {
    q: 'Can I file RTI anonymously in Assam?',
    a: 'No, you cannot file RTI applications anonymously. The RTI Act requires applicants to provide their name, address, and contact details. However, your personal information is kept confidential and is not disclosed in the response. We ensure your privacy is protected throughout the process.',
  },
  {
    q: 'What happens if my RTI application is rejected or not answered?',
    a: 'If your RTI application is rejected or not answered within the prescribed time, you can file a First Appeal with the First Appellate Authority (FAA) within 30 days. If still unsatisfied, you can file a Second Appeal with the Assam Information Commission within 90 days. We assist you with drafting and filing appeals at no extra charge.',
  },
  {
    q: 'Do I need to visit government offices to file RTI in Assam?',
    a: 'No, with FileMyRTI you can file RTI applications completely online without visiting any government office. We handle all the paperwork, drafting, submission via registered post, and tracking. You\'ll receive all updates, responses, and documents via email. This saves your time and effort significantly.',
  },
];

export const KarnatakaFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white pt-6 pb-12 md:pt-8 md:pb-16">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="mb-2 text-[32px] md:text-[36px] font-semibold text-gray-900">
            Frequently Asked Questions
          </h2>
          <div className="mx-auto h-1 w-24 bg-yellow-500 mb-4"></div>
          <p className="text-lg text-gray-600">
            Everything you need to know about filing RTI in Assam
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 pr-4">{faq.q}</span>
                <svg
                  className={`w-5 h-5 text-primary-600 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 pt-2 border-t border-gray-200">
                  <p className="text-gray-700 leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

