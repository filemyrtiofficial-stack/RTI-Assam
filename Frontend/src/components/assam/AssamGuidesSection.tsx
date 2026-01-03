import React from 'react';
import { Link } from 'react-router-dom';

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  featured?: boolean;
}

// Blog posts data - matching Blog.tsx structure
const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'rti-appeal-process-first-and-second-appeal-guide',
    title: 'RTI Appeal Process: Complete Guide to First and Second Appeals',
    excerpt: 'Learn everything about filing RTI appeals when your application is rejected or not answered. Understand the difference between First Appeal and Second Appeal with the Assam Information Commission.',
    author: 'FileMyRTI Team',
    date: '2025-01-20',
    category: 'Legal',
    readTime: '6 min read',
    featured: true
  },
  {
    id: '2',
    slug: 'rti-for-land-records-revenue-information-assam',
    title: 'How to Get Land Records and Revenue Information through RTI in Assam',
    excerpt: 'Complete guide on filing RTI applications for land records, mutation status, property documents, and revenue information from Assam Revenue & Disaster Management Department.',
    author: 'FileMyRTI Team',
    date: '2025-01-18',
    category: 'Guide',
    readTime: '5 min read',
    featured: true
  },
  {
    id: '3',
    slug: 'common-rti-mistakes-to-avoid-assam',
    title: 'Common RTI Mistakes to Avoid: Tips for Successful Applications in Assam',
    excerpt: 'Discover the most common mistakes people make while filing RTI applications and learn how to avoid them. Get expert tips for drafting effective RTI queries that get results.',
    author: 'FileMyRTI Team',
    date: '2025-01-16',
    category: 'Tips',
    readTime: '4 min read',
    featured: true
  }
];

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' });
};

export const KarnatakaGuidesSection: React.FC = () => {
  // Get first 3 featured posts, or first 3 posts if not enough featured
  const featuredPosts = blogPosts.filter(post => post.featured).slice(0, 3);
  const displayPosts = featuredPosts.length >= 3 ? featuredPosts : blogPosts.slice(0, 3);

  return (
    <section className="pt-6 pb-12 md:pt-8 md:pb-16 bg-primary-50">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h2 className="mb-2 text-[32px] md:text-[36px] font-semibold text-gray-900">
            GET INSPIRED, ENLIGHTENED & EMPOWERED
          </h2>
          <div className="mx-auto h-1 w-24 bg-yellow-500"></div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {displayPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-3 mb-3 flex-wrap">
                  <span className="px-3 py-1 bg-primary-100 text-primary-700 text-xs font-semibold rounded-full whitespace-nowrap">
                    {post.category}
                  </span>
                  <span className="text-gray-500 text-xs" aria-label="Reading time">{post.readTime}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 line-clamp-2 min-h-[3rem]">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-200 mt-auto">
                  <div className="flex items-center gap-2 text-xs text-gray-500 flex-wrap">
                    <span>{post.author}</span>
                    <span aria-hidden="true">•</span>
                    <time dateTime={post.date}>
                      {formatDate(post.date)}
                    </time>
                  </div>
                  <Link
                    to={`/blogs/${post.slug}`}
                    className="text-primary-600 hover:text-primary-700 font-semibold text-sm transition-colors whitespace-nowrap ml-4"
                    aria-label={`Read more about ${post.title}`}
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

