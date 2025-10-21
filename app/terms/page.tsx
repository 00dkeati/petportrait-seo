import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | PetPortrait.co',
  description: 'Terms of service for PetPortrait.co - the terms and conditions governing your use of our website and services.',
  alternates: {
    canonical: 'https://petportrait.co/terms',
  },
};

export default function TermsPage() {
  return (
    <main className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
      
      <div className="prose prose-lg max-w-none text-gray-700">
        <p className="text-lg mb-6">
          <strong>Last updated:</strong> January 2024
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Agreement to Terms</h2>
        <p className="mb-6">
          By accessing and using PetPortrait.co (the "Site"), you accept and agree to be bound by the 
          terms and provision of this agreement. If you do not agree to abide by the above, please 
          do not use this service.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Use License</h2>
        <p className="mb-4">
          Permission is granted to temporarily download one copy of the materials on PetPortrait.co 
          for personal, non-commercial transitory viewing only. This is the grant of a license, not 
          a transfer of title, and under this license you may not:
        </p>
        <ul className="list-disc list-inside mb-6 space-y-2">
          <li>Modify or copy the materials</li>
          <li>Use the materials for any commercial purpose or for any public display</li>
          <li>Attempt to reverse engineer any software contained on the website</li>
          <li>Remove any copyright or other proprietary notations from the materials</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Disclaimer</h2>
        <p className="mb-6">
          The materials on PetPortrait.co are provided on an 'as is' basis. PetPortrait.co makes no 
          warranties, expressed or implied, and hereby disclaims and negates all other warranties 
          including without limitation, implied warranties or conditions of merchantability, fitness 
          for a particular purpose, or non-infringement of intellectual property or other violation of rights.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Limitations</h2>
        <p className="mb-6">
          In no event shall PetPortrait.co or its suppliers be liable for any damages (including, 
          without limitation, damages for loss of data or profit, or due to business interruption) 
          arising out of the use or inability to use the materials on PetPortrait.co, even if 
          PetPortrait.co or a PetPortrait.co authorized representative has been notified orally or 
          in writing of the possibility of such damage.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Accuracy of Materials</h2>
        <p className="mb-6">
          The materials appearing on PetPortrait.co could include technical, typographical, or 
          photographic errors. PetPortrait.co does not warrant that any of the materials on its 
          website are accurate, complete, or current. PetPortrait.co may make changes to the 
          materials contained on its website at any time without notice.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Links</h2>
        <p className="mb-6">
          PetPortrait.co has not reviewed all of the sites linked to our website and is not 
          responsible for the contents of any such linked site. The inclusion of any link does 
          not imply endorsement by PetPortrait.co of the site. Use of any such linked website 
          is at the user's own risk.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Modifications</h2>
        <p className="mb-6">
          PetPortrait.co may revise these terms of service for its website at any time without 
          notice. By using this website you are agreeing to be bound by the then current version 
          of these terms of service.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Governing Law</h2>
        <p className="mb-6">
          These terms and conditions are governed by and construed in accordance with the laws 
          of the United Kingdom and you irrevocably submit to the exclusive jurisdiction of the 
          courts in that State or location.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">User Content</h2>
        <p className="mb-4">
          By submitting content to our website, you grant PetPortrait.co a non-exclusive, 
          royalty-free, perpetual, and worldwide license to use, modify, publicly perform, 
          publicly display, reproduce, and distribute such content on and through the website.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Prohibited Uses</h2>
        <p className="mb-4">You may not use our website:</p>
        <ul className="list-disc list-inside mb-6 space-y-2">
          <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
          <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
          <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
          <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
          <li>To submit false or misleading information</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Contact Information</h2>
        <p className="mb-6">
          If you have any questions about these Terms of Service, please contact us at:
        </p>
        <div className="bg-gray-50 p-6 rounded-lg">
          <p><strong>Email:</strong> legal@petportrait.co</p>
          <p><strong>Website:</strong> petportrait.co</p>
        </div>
      </div>
    </main>
  );
}


