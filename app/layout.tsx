import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Pet Portrait Guide - Custom Pet Portraits & Breed Guides | PetPortrait.co',
    template: '%s | PetPortrait.co',
  },
  description: 'The internet\'s guide to pet portraits. Discover breed-specific portrait styles, photo tips, gift ideas, and find the best custom pet portrait services in the UK.',
  keywords: [
    'pet portraits',
    'custom pet portraits',
    'dog portraits',
    'cat portraits',
    'pet portrait services',
    'breed guides',
    'pet photography tips',
    'gift ideas for pet owners',
    'UK pet portrait services'
  ],
  authors: [{ name: 'PetPortrait.co' }],
  creator: 'PetPortrait.co',
  publisher: 'PetPortrait.co',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://petportrait.co'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://petportrait.co',
    siteName: 'PetPortrait.co',
    title: 'Pet Portrait Guide - Custom Pet Portraits & Breed Guides',
    description: 'The internet\'s guide to pet portraits. Discover breed-specific portrait styles, photo tips, and gift ideas.',
    images: [
      {
        url: '/images/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'Pet Portrait Guide - Custom Pet Portraits',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pet Portrait Guide - Custom Pet Portraits & Breed Guides',
    description: 'The internet\'s guide to pet portraits. Discover breed-specific portrait styles and photo tips.',
    images: ['/images/og-default.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#2563eb" />
      </head>
      <body className={inter.className}>
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Link href="/" className="text-2xl font-bold text-gray-900">
                  PetPortrait.co
                </Link>
                <nav className="hidden md:flex space-x-6">
                  <Link href="/breeds" className="text-gray-600 hover:text-gray-900 transition-colors">
                    Breed Guides
                  </Link>
                  <Link href="/gifts" className="text-gray-600 hover:text-gray-900 transition-colors">
                    Gift Guides
                  </Link>
                  <Link href="/services" className="text-gray-600 hover:text-gray-900 transition-colors">
                    Services
                  </Link>
                </nav>
              </div>
              <div className="flex items-center space-x-4">
                <a
                  href="https://familyportraitcompany.com/?utm_source=petportrait.co&utm_medium=header&utm_campaign=navigation"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-semibold"
                >
                  Get Custom Portrait
                </a>
              </div>
            </div>
          </div>
        </header>
        
        <main>{children}</main>
        
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">PetPortrait.co</h3>
                <p className="text-gray-400 text-sm">
                  The internet's guide to pet portraits. Discover breed-specific styles, 
                  photo tips, and find the best custom pet portrait services.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Breed Guides</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><Link href="/breeds/golden-retriever" className="hover:text-white transition-colors">Golden Retriever</Link></li>
                  <li><Link href="/breeds/labrador-retriever" className="hover:text-white transition-colors">Labrador Retriever</Link></li>
                  <li><Link href="/breeds/german-shepherd" className="hover:text-white transition-colors">German Shepherd</Link></li>
                  <li><Link href="/breeds/french-bulldog" className="hover:text-white transition-colors">French Bulldog</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Gift Guides</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><Link href="/gifts/gifts-for-golden-retriever-owners" className="hover:text-white transition-colors">Golden Retriever Gifts</Link></li>
                  <li><Link href="/gifts/gifts-for-labrador-owners" className="hover:text-white transition-colors">Labrador Gifts</Link></li>
                  <li><Link href="/gifts/gifts-for-cat-lovers" className="hover:text-white transition-colors">Cat Lover Gifts</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Services</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><Link href="/services/best-pet-portrait-sites-uk" className="hover:text-white transition-colors">Best Services UK</Link></li>
                  <li><a href="https://familyportraitcompany.com/?utm_source=petportrait.co&utm_medium=footer&utm_campaign=navigation" className="hover:text-white transition-colors">The Family Portrait Company</a></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
              <p>&copy; 2024 PetPortrait.co. All rights reserved. | 
                <a href="/privacy" className="hover:text-white transition-colors ml-2">Privacy Policy</a> | 
                <a href="/terms" className="hover:text-white transition-colors ml-2">Terms of Service</a>
              </p>
              <p className="mt-2">
                This is an independent editorial site. We may receive compensation from some services listed.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}