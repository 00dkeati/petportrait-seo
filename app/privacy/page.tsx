import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | PetPortrait.co',
  description: 'Privacy policy for PetPortrait.co - how we collect, use, and protect your personal information.',
  alternates: {
    canonical: 'https://petportrait.co/privacy',
  },
};

export default function PrivacyPage() {
  return (
    <main className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
      
      <div className="prose prose-lg max-w-none text-gray-700">
        <p className="text-lg mb-6">
          <strong>Last updated:</strong> January 2024
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Introduction</h2>
        <p className="mb-6">
          PetPortrait.co ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy 
          explains how we collect, use, disclose, and safeguard your information when you visit our website 
          petportrait.co (the "Site").
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Information We Collect</h2>
        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Personal Information</h3>
        <p className="mb-4">
          We may collect personal information that you voluntarily provide to us when you:
        </p>
        <ul className="list-disc list-inside mb-6 space-y-2">
          <li>Contact us through our website</li>
          <li>Subscribe to our newsletter</li>
          <li>Participate in surveys or promotions</li>
          <li>Use our services</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Automatically Collected Information</h3>
        <p className="mb-6">
          We may automatically collect certain information about your device and usage of our Site, including:
        </p>
        <ul className="list-disc list-inside mb-6 space-y-2">
          <li>IP address and location data</li>
          <li>Browser type and version</li>
          <li>Pages visited and time spent on our Site</li>
          <li>Referring website information</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">How We Use Your Information</h2>
        <p className="mb-4">We use the information we collect to:</p>
        <ul className="list-disc list-inside mb-6 space-y-2">
          <li>Provide and maintain our services</li>
          <li>Improve our website and user experience</li>
          <li>Communicate with you about our services</li>
          <li>Analyze usage patterns and trends</li>
          <li>Comply with legal obligations</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Information Sharing</h2>
        <p className="mb-6">
          We do not sell, trade, or otherwise transfer your personal information to third parties without 
          your consent, except as described in this Privacy Policy or as required by law.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Data Security</h2>
        <p className="mb-6">
          We implement appropriate security measures to protect your personal information against 
          unauthorized access, alteration, disclosure, or destruction.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Cookies</h2>
        <p className="mb-6">
          Our website may use cookies and similar tracking technologies to enhance your browsing 
          experience. You can control cookie settings through your browser preferences.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Third-Party Links</h2>
        <p className="mb-6">
          Our website may contain links to third-party websites. We are not responsible for the 
          privacy practices of these external sites.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Your Rights</h2>
        <p className="mb-4">You have the right to:</p>
        <ul className="list-disc list-inside mb-6 space-y-2">
          <li>Access your personal information</li>
          <li>Correct inaccurate information</li>
          <li>Request deletion of your information</li>
          <li>Object to processing of your information</li>
          <li>Data portability</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Contact Us</h2>
        <p className="mb-6">
          If you have any questions about this Privacy Policy, please contact us at:
        </p>
        <div className="bg-gray-50 p-6 rounded-lg">
          <p><strong>Email:</strong> privacy@petportrait.co</p>
          <p><strong>Website:</strong> petportrait.co</p>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Changes to This Policy</h2>
        <p className="mb-6">
          We may update this Privacy Policy from time to time. We will notify you of any changes 
          by posting the new Privacy Policy on this page and updating the "Last updated" date.
        </p>
      </div>
    </main>
  );
}


