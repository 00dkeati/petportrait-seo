import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Waterlooville Letting Agents | Your Guide to Renting in PO7',
  description: 'Searching for reputable Waterlooville letting agents? Our guide features the best local rental experts, advice for tenants and landlords, and insights into the Waterlooville rental market.',
  alternates: {
    canonical: 'https://petportrait.co/waterlooville-letting-agents',
  },
  openGraph: {
    title: 'Waterlooville Letting Agents | Your Guide to Renting in PO7',
    description: 'Searching for reputable Waterlooville letting agents? Our guide features the best local rental experts, advice for tenants and landlords, and insights into the Waterlooville rental market.',
    url: 'https://petportrait.co/waterlooville-letting-agents',
    siteName: 'PetPortrait.co',
    type: 'website',
    images: ['/images/waterlooville-letting-agents-1.jpg']
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Waterlooville Letting Agents | Your Guide to Renting in PO7',
    description: 'Searching for reputable Waterlooville letting agents? Our guide features the best local rental experts, advice for tenants and landlords, and insights into the Waterlooville rental market.',
    images: ['/images/waterlooville-letting-agents-1.jpg']
  }
};

export default function WaterloovilleLettingAgentsPage() {
  const lettingAgents = [
    {
      name: "Archbold & Edwards",
      services: "Lettings & Full Management",
      accreditation: "ARLA Propertymark",
      description: "Comprehensive letting services with full property management for landlords"
    },
    {
      name: "Fox & Sons",
      services: "Tenant Find & Managed Lettings",
      accreditation: "ARLA Propertymark",
      description: "Specialized tenant finding and managed letting services"
    },
    {
      name: "Mann Countrywide",
      services: "Lettings & Property Management",
      accreditation: "ARLA Propertymark",
      description: "Full-service lettings with professional property management"
    },
    {
      name: "Your Move",
      services: "Tenant Find & Fully Managed Services",
      accreditation: "ARLA Propertymark",
      description: "Complete letting solutions from tenant finding to full management"
    },
    {
      name: "Cubitt & West",
      services: "Lettings & Landlord Services",
      accreditation: "ARLA Propertymark",
      description: "Dedicated landlord services and comprehensive letting support"
    },
    {
      name: "Bernards",
      services: "Lettings & Property Management",
      accreditation: "The Property Ombudsman",
      description: "Local expertise with professional property management services"
    }
  ];

  const faqs = [
    {
      q: "What is a tenancy deposit protection scheme?",
      a: "In the UK, landlords or their agents are legally required to place a tenant's deposit into one of three government-backed schemes. This protects the tenant's money and provides a dispute resolution service if needed."
    },
    {
      q: "What checks do letting agents carry out on tenants?",
      a: "Agents typically carry out credit checks, employment references, and previous landlord references to ensure the tenant is reliable and can afford the rent."
    },
    {
      q: "As a landlord, what are my legal responsibilities?",
      a: "Landlords must ensure their property is safe, with valid gas safety certificates, functioning smoke alarms, and compliance with electrical safety standards. A good letting agent in Waterlooville will manage this for you."
    },
    {
      q: "How much do letting agents charge?",
      a: "Fees vary depending on the level of service. Tenant find services typically cost 8-12% of annual rent, while full management services range from 10-15% of monthly rent."
    },
    {
      q: "What areas do Waterlooville letting agents cover?",
      a: "Most agents cover Waterlooville and surrounding areas including Cowplain, Denmead, Purbrook, and Horndean, providing comprehensive local coverage."
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Waterlooville Letting Agents: Your Guide to Renting in PO7",
    description: "Complete guide to Waterlooville letting agents, featuring the best local rental experts and market insights.",
    author: {
      "@type": "Organization",
      name: "PetPortrait.co"
    },
    publisher: {
      "@type": "Organization",
      name: "PetPortrait.co",
      url: "https://petportrait.co"
    },
    datePublished: "2024-01-15",
    dateModified: "2024-01-15",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://petportrait.co/waterlooville-letting-agents"
    },
    about: {
      "@type": "Thing",
      name: "Waterlooville Letting Agents"
    }
  };

  return (
    <main className="container mx-auto px-4 py-16 max-w-6xl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Your Trusted Guide to Waterlooville Letting Agents</h1>
      
      <div className="prose prose-lg max-w-none text-gray-700 mb-8">
        <p className="text-xl mb-6">
          The rental market in Waterlooville is as dynamic as its sales market, with high demand from tenants 
          seeking quality homes in this desirable part of Hampshire. For both landlords and tenants, navigating 
          this landscape requires the expertise of a professional letting agent.
        </p>
        <p className="mb-6">
          A top-tier <strong>Waterlooville letting agent</strong> does more than just list a property; they provide 
          comprehensive management services for landlords and ensure tenants find a home that is safe, secure, 
          and well-maintained. Whether you are a landlord looking to maximise your investment or a tenant 
          searching for your next home, the right agent is your most valuable asset.
        </p>
      </div>

      {/* Hero Image */}
      <div className="relative w-full h-64 md:h-96 bg-gray-200 rounded-lg overflow-hidden mb-12">
        <Image
          src="/images/waterlooville-letting-agents-1.jpg"
          alt="Professional letting agent showing property to tenants in Waterlooville"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">The Role of a Letting Agent in the Waterlooville Market</h2>
          
          <div className="prose prose-lg max-w-none text-gray-700 mb-8">
            <p className="mb-6">
              For landlords, a letting agent can be a complete game-changer. They handle everything from marketing 
              your property and sourcing reliable tenants to conducting thorough referencing, drafting tenancy 
              agreements, and managing rent collection. A full management service also includes dealing with 
              maintenance issues and ensuring legal compliance, which can save landlords a significant amount of 
              time and stress.
            </p>
            <p className="mb-6">
              For tenants, a good letting agent provides a professional and regulated service. They will guide you 
              through the application process, protect your deposit in a government-approved scheme, and act as a 
              point of contact for any issues during your tenancy. When choosing a <strong>Waterlooville letting agent</strong>, 
              look for membership in professional bodies like ARLA Propertymark, which is a sign of high standards 
              and accountability.
            </p>
          </div>

          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Top Letting Agents in Waterlooville</h3>
          <p className="text-gray-700 mb-6">
            Many of Waterlooville's leading estate agents also have dedicated lettings departments, offering 
            specialised services for the rental market.
          </p>

          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Letting Agent</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Key Services</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Accreditation</th>
                </tr>
              </thead>
              <tbody>
                {lettingAgents.map((agent, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-semibold">{agent.name}</td>
                    <td className="border border-gray-300 px-4 py-3">{agent.services}</td>
                    <td className="border border-gray-300 px-4 py-3">{agent.accreditation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-blue-50 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Facts</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">📍</span>
                <span>Covering PO7 and surrounding areas</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">🏠</span>
                <span>High demand rental market</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✅</span>
                <span>ARLA Propertymark accredited agents</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">🔒</span>
                <span>Deposit protection schemes</span>
              </li>
            </ul>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Need Help?</h3>
            <p className="text-gray-700 mb-4">
              Whether you're a landlord or tenant, we can help you find the right letting agent for your needs.
            </p>
            <Link
              href="/contact"
              className="inline-block w-full text-center px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get Recommendations
            </Link>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">For Landlords</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Property marketing and tenant sourcing</li>
            <li>Tenant referencing and background checks</li>
            <li>Tenancy agreement preparation</li>
            <li>Rent collection and arrears management</li>
            <li>Property maintenance coordination</li>
            <li>Legal compliance and safety certificates</li>
            <li>Deposit protection scheme management</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">For Tenants</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Property search and viewing coordination</li>
            <li>Application process guidance</li>
            <li>Deposit protection and security</li>
            <li>Tenancy agreement explanation</li>
            <li>Move-in and move-out support</li>
            <li>Maintenance request handling</li>
            <li>Dispute resolution assistance</li>
          </ul>
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-8 mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">A Local's Perspective on Renting in Waterlooville</h2>
        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="mb-6">
            The demand for rental properties in Waterlooville is consistently strong, thanks to its excellent 
            location and community feel. This demand comes from a wide range of tenants, including young 
            professionals working locally or commuting, families drawn to the good schools, and those who 
            enjoy the proximity to both the coast and countryside. This makes it a robust market for landlords.
          </p>
          <p className="mb-6">
            Tenants looking for properties will find a variety of options, from modern flats near the town 
            centre to family houses in the quieter residential streets of <strong>Purbrook</strong>, <strong>Cowplain</strong>, 
            and <strong>Horndean</strong>. A local <strong>Waterlooville letting agent</strong> will have their finger on the 
            pulse of this market, knowing which areas are most in-demand and what rental values are achievable.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8 mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.q}</h3>
              <p className="text-gray-700">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-blue-50 rounded-lg p-8 text-center">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">Find Your Next Home or Tenant Today</h2>
        <p className="text-gray-700 mb-6 max-w-3xl mx-auto">
          Whether you're a landlord with a property to let or a tenant looking for a place to call home, 
          the journey starts with the right letting agent. Explore our directory of local rental specialists 
          to find an expert who can help you achieve your goals.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact a Trusted Agent
          </Link>
          <Link
            href="/areas"
            className="px-8 py-4 bg-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-300 transition-colors"
          >
            Explore Local Areas
          </Link>
        </div>
      </div>

      <div className="mt-8 text-center">
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors"
        >
          Back to Home
          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </Link>
      </div>
    </main>
  );
}
