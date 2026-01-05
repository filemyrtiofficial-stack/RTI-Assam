import React, { lazy, Suspense, useDeferredValue } from 'react';
import { Helmet } from 'react-helmet-async';
import { useStateData } from '../hooks/useStateData';
import { LazyChatbot } from '../components/common/LazyChatbot';
import { generateFAQStructuredData } from '../utils/seo';
import { FAQ } from '../types/services';

// Lazy load Navbar and Footer for better initial load
const Navbar = lazy(() => import('../components/common/Navbar').then(m => ({ default: m.Navbar })));
const Footer = lazy(() => import('../components/common/Footer').then(m => ({ default: m.Footer })));

// Lazy load Assam components (files in assam folder but export with Karnataka names)
const KarnatakaHero = lazy(() => import('../components/assam/AssamHero').then(m => ({ default: m.KarnatakaHero })));
const KarnatakaTrustStrip = lazy(() => import('../components/assam/AssamTrustStrip').then(m => ({ default: m.KarnatakaTrustStrip })));
const AssamAllServicesSection = lazy(() => import('../components/assam/AssamAllServicesSection').then(m => ({ default: m.AssamAllServicesSection })));
const AssamTestimonialsSection = lazy(() => import('../components/assam/AssamTestimonialsSection').then(m => ({ default: m.AssamTestimonialsSection })));
const KarnatakaWhySection = lazy(() => import('../components/assam/AssamWhySection').then(m => ({ default: m.KarnatakaWhySection })));
const KarnatakaClientsSection = lazy(() => import('../components/assam/AssamClientsSection').then(m => ({ default: m.KarnatakaClientsSection })));
const KarnatakaRTIPortalSection = lazy(() => import('../components/assam/AssamRTIPortalSection').then(m => ({ default: m.KarnatakaRTIPortalSection })));
const KarnatakaFeaturedSection = lazy(() => import('../components/assam/AssamFeaturedSection').then(m => ({ default: m.KarnatakaFeaturedSection })));
const KarnatakaGuidesSection = lazy(() => import('../components/assam/AssamGuidesSection').then(m => ({ default: m.KarnatakaGuidesSection })));
const KarnatakaDepartmentsSection = lazy(() => import('../components/assam/AssamDepartmentsSection').then(m => ({ default: m.KarnatakaDepartmentsSection })));
const KarnatakaFinalCTASection = lazy(() => import('../components/assam/AssamFinalCTASection').then(m => ({ default: m.KarnatakaFinalCTASection })));
const KarnatakaConsultationCTA = lazy(() => import('../components/assam/AssamConsultationCTA').then(m => ({ default: m.KarnatakaConsultationCTA })));
const KarnatakaFAQ = lazy(() => import('../components/assam/AssamFAQ').then(m => ({ default: m.KarnatakaFAQ })));

export const Home: React.FC = () => {
  // Default to Assam for home page
  const { stateData, isLoading } = useStateData('assam');

  // Defer non-critical state updates to reduce TBT
  const deferredStateData = useDeferredValue(stateData);

  // Show minimal loading state only if no static data available
  if (isLoading && !stateData) {
    return (
      <>
        <div className="min-h-screen flex flex-col">
          <main className="flex-grow flex items-center justify-center bg-gray-50">
            <div className="text-center px-4">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
              <p className="mt-4 text-gray-600">Loading...</p>
            </div>
          </main>
          <Suspense fallback={null}>
            <Footer />
          </Suspense>
          <LazyChatbot />
        </div>
      </>
    );
  }

  // Fallback if stateData is null
  if (!stateData) {
    return (
      <>
        <div className="min-h-screen flex flex-col">
          <main className="flex-grow flex items-center justify-center bg-gray-50">
            <div className="text-center px-4">
              <h1 className="text-2xl font-bold text-gray-900 mb-4">Unable to load state data</h1>
              <p className="text-gray-600">Please try again later.</p>
            </div>
          </main>
          <Suspense fallback={null}>
            <Footer />
          </Suspense>
          <LazyChatbot />
        </div>
      </>
    );
  }

  // Use stateData for rendering
  const dataToUse = deferredStateData || stateData;

  // SEO Metadata
  const pageTitle = `File RTI Online in ${dataToUse.name} - FileMyRTI`;
  const pageDescription = `File RTI online in ${dataToUse.name} with FileMyRTI. Get expert-drafted RTI applications and appeals for ${dataToUse.name} Government departments, Secretariat and district offices from home.`;
  const canonicalUrl = typeof window !== 'undefined' ? window.location.href : `https://filemyrti.com/`;
  const ogImage = `https://filemyrti.com/src/assets/icons/logo.webp`;

  // Structured Data (JSON-LD)
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "FileMyRTI",
    "url": "https://filemyrti.com",
    "logo": "https://filemyrti.com/src/assets/icons/logo.webp",
    "description": pageDescription,
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN"
    },
    "sameAs": [],
    "areaServed": {
      "@type": "State",
      "name": dataToUse.name
    },
    "serviceType": "RTI Filing Service",
    "offers": {
      "@type": "Offer",
      "description": "RTI Filing Services",
      "areaServed": dataToUse.name
    }
  };

  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://filemyrti.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": `RTI in ${dataToUse.name}`,
        "item": canonicalUrl
      }
    ]
  };

  // FAQ Structured Data for Assam
  const assamFAQs: FAQ[] = [
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

  const faqStructuredData = generateFAQStructuredData(assamFAQs);

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={`RTI, ${dataToUse.name}, Right to Information, File RTI Online, ${dataToUse.name} RTI, RTI Act 2005, ${dataToUse.name} government information, RTI filing ${dataToUse.name}, RTI application ${dataToUse.name}`} />
        <meta name="author" content="FileMyRTI" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <link rel="canonical" href={canonicalUrl} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:site_name" content="FileMyRTI" />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={canonicalUrl} />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={ogImage} />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbStructuredData)}
        </script>
        {faqStructuredData && (
          <script type="application/ld+json">
            {JSON.stringify(faqStructuredData)}
          </script>
        )}
      </Helmet>
      <Suspense fallback={<div className="h-12 bg-white sticky top-0 z-[100]" />}>
        <Navbar />
      </Suspense>
      <div className="min-h-screen flex flex-col">
        <main id="main-content" className="flex-grow" role="main" aria-label="Main content">
          {/* Section A - Assam Hero with Form */}
          <Suspense fallback={
            <div className="bg-primary-600 pt-12 pb-12" data-loading>
              <div className="container-responsive max-w-7xl mx-auto px-4">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
                  File RTI Online for {dataToUse.name} Government Departments
                </h1>
              </div>
            </div>
          }>
            <KarnatakaHero stateName={dataToUse.name} />
          </Suspense>

          {/* Section C - Trust Strip */}
          <Suspense fallback={<div className="min-h-[120px] bg-primary-600" />}>
            <KarnatakaTrustStrip />
          </Suspense>

          {/* Section D - All Services Section */}
          <Suspense fallback={<div className="min-h-[600px]" />}>
            <AssamAllServicesSection />
          </Suspense>

          {/* Section E - Testimonials Section */}
          <Suspense fallback={<div className="min-h-[400px]" />}>
            <AssamTestimonialsSection />
          </Suspense>

          {/* Section F - Why Choose Us */}
          <Suspense fallback={<div className="min-h-[400px]" />}>
            <KarnatakaWhySection />
          </Suspense>

          {/* Section G - Clients Section */}
          <Suspense fallback={<div className="min-h-[300px]" />}>
            <KarnatakaClientsSection />
          </Suspense>

          {/* Section H - RTI Portal App Section */}
          <Suspense fallback={<div className="min-h-[400px]" />}>
            <KarnatakaRTIPortalSection />
          </Suspense>

          {/* Section I - Blog/Guides Section */}
          <Suspense fallback={<div className="min-h-[400px]" />}>
            <KarnatakaGuidesSection />
          </Suspense>

          {/* Section K - Final CTA Section */}
          <Suspense fallback={<div className="min-h-[200px]" />}>
            <KarnatakaFinalCTASection />
          </Suspense>

          {/* Section L - Assam Departments */}
          <Suspense fallback={<div className="min-h-[400px]" />}>
            <KarnatakaDepartmentsSection />
          </Suspense>

          {/* Section M - Assam FAQ */}
          <Suspense fallback={<div className="min-h-[300px]" />}>
            <KarnatakaFAQ />
          </Suspense>
        </main>
        <footer role="contentinfo">
          <Suspense fallback={null}>
            <Footer />
          </Suspense>
        </footer>
        <LazyChatbot />
      </div>
    </>
  );
};
