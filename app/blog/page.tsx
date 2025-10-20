import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pet Portrait Blog | Tips, Guides & Latest News',
  description: 'Read our latest blog posts about pet portraits, breed guides, photo tips, and pet care advice. Stay updated with the latest in pet portrait trends.',
  alternates: {
    canonical: 'https://petportrait.co/blog',
  },
};

export default function BlogPage() {
  const blogPosts = [
    {
      title: "10 Tips for Taking the Perfect Pet Portrait Photo",
      excerpt: "Learn professional techniques for capturing stunning photos that will make beautiful pet portraits.",
      date: "2024-01-15",
      category: "Photography Tips",
      slug: "perfect-pet-portrait-photo-tips"
    },
    {
      title: "Best Pet Portrait Styles for Different Breeds",
      excerpt: "Discover which portrait styles work best for your dog or cat's unique characteristics and personality.",
      date: "2024-01-10",
      category: "Breed Guides",
      slug: "best-portrait-styles-by-breed"
    },
    {
      title: "Memorial Pet Portraits: Honoring Your Beloved Companion",
      excerpt: "A guide to creating meaningful memorial portraits that celebrate the life and love of your pet.",
      date: "2024-01-05",
      category: "Memorial Art",
      slug: "memorial-pet-portraits-guide"
    },
    {
      title: "Pet Portrait Gift Ideas for Every Occasion",
      excerpt: "From birthdays to holidays, find the perfect pet portrait gift for any special moment.",
      date: "2024-01-01",
      category: "Gift Ideas",
      slug: "pet-portrait-gift-ideas"
    },
    {
      title: "Digital vs Traditional Pet Portraits: Which is Right for You?",
      excerpt: "Compare the benefits of digital and traditional pet portrait methods to make the best choice.",
      date: "2023-12-28",
      category: "Portrait Types",
      slug: "digital-vs-traditional-pet-portraits"
    },
    {
      title: "How to Choose the Right Pet Portrait Artist",
      excerpt: "Essential factors to consider when selecting an artist for your custom pet portrait.",
      date: "2023-12-25",
      category: "Artist Selection",
      slug: "choosing-pet-portrait-artist"
    }
  ];

  const categories = ["All", "Photography Tips", "Breed Guides", "Memorial Art", "Gift Ideas", "Portrait Types", "Artist Selection"];

  return (
    <main className="container mx-auto px-4 py-16 max-w-6xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Pet Portrait Blog</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover expert tips, breed guides, and the latest insights into pet portrait creation. 
          From photography techniques to choosing the perfect artist, we cover everything you need to know.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              category === "All" 
                ? "bg-blue-600 text-white" 
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {blogPosts.map((post) => (
          <article key={post.slug} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
              <span className="text-white text-2xl font-bold">{post.category}</span>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-blue-600 font-medium">{post.category}</span>
                <time className="text-sm text-gray-500">{post.date}</time>
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                {post.title}
              </h2>
              <p className="text-gray-600 mb-4 line-clamp-3">
                {post.excerpt}
              </p>
              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                Read More
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* Newsletter Signup */}
      <div className="bg-blue-50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Stay Updated</h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Get the latest pet portrait tips, breed guides, and service reviews delivered to your inbox. 
          No spam, just helpful content for pet lovers.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
            Subscribe
          </button>
        </div>
      </div>

      {/* Related Links */}
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Explore More</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/breeds"
            className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
          >
            Breed Guides
          </Link>
          <Link
            href="/gifts"
            className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
          >
            Gift Ideas
          </Link>
          <Link
            href="/services/best-pet-portrait-sites-uk"
            className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
          >
            Service Reviews
          </Link>
        </div>
      </div>
    </main>
  );
}
