import React, { useState } from 'react';
import { PageId, BlogArticle } from '../types';
import { BLOG_ARTICLES } from '../data/mockData';
import {
  Search,
  Calendar,
  Clock,
  User,
  ArrowRight,
  Sparkles,
  BookOpen,
  Tag,
  Mail,
  CheckCircle2
} from 'lucide-react';

interface BlogPageProps {
  onNavigate: (page: PageId) => void;
  onSelectArticle: (article: BlogArticle) => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({
  onNavigate,
  onSelectArticle
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const categories = [
    { id: 'all', label: 'All Articles' },
    { id: 'Cardiology', label: 'Cardiology' },
    { id: 'Diabetology', label: 'Diabetes' },
    { id: 'Pulmonology', label: 'Pulmonology' },
    { id: 'Dental', label: 'Dental' },
    { id: 'Women Health', label: "Women's Health" },
    { id: 'Urology', label: 'Urology' },
    { id: 'Pediatrics', label: 'Pediatrics' },
    { id: 'ENT', label: 'ENT' },
    { id: 'Eye Care', label: 'Eye Care' }
  ];

  const featuredArticle = BLOG_ARTICLES.find((a) => a.featured) || BLOG_ARTICLES[0];

  const filteredArticles = BLOG_ARTICLES.filter((art) => {
    const matchesCat =
      selectedCategory === 'all' ||
      art.category.toLowerCase() === selectedCategory.toLowerCase() ||
      art.tags.some((t) => t.toLowerCase() === selectedCategory.toLowerCase());

    const matchesSearch =
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCat && matchesSearch;
  });

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setSubscribed(true);
      setNewsletterEmail('');
    }
  };

  return (
    <div className="w-full">
      {/* ═══════════════════════════════════════════════
          SECTION 6.1 — BLOG HERO
          ═══════════════════════════════════════════════ */}
      <section className="bg-gradient-to-r from-[#2E5010] to-[#1A1A2E] text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="text-xs text-white/60 flex items-center gap-2">
              <button
                onClick={() => onNavigate('home')}
                className="hover:text-white transition-colors"
              >
                Home
              </button>
              <span>&gt;</span>
              <span className="text-[#8DC63F] font-semibold">Health Tips & Medical Insights</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Health Tips & Medical Insights
            </h1>

            <p className="text-base sm:text-lg text-gray-300 max-w-2xl leading-relaxed">
              Expert guidance from our specialist doctors — covering prevention, treatment, and everyday wellness to help you and your family live a healthier life.
            </p>

            {/* Search Bar */}
            <div className="pt-2 max-w-lg">
              <div className="relative">
                <Search className="w-5 h-5 text-gray-400 absolute left-4 top-3.5" />
                <input
                  type="text"
                  placeholder="Search articles by topic, symptom or tag..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-full bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#8DC63F] shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 6.2 — FEATURED ARTICLE (Wide Card)
          ═══════════════════════════════════════════════ */}
      {!searchQuery && selectedCategory === 'all' && (
        <section className="py-12 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div
              onClick={() => onSelectArticle(featuredArticle)}
              className="bg-[#F5FAF3] rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-[#D1E8B0] grid grid-cols-1 lg:grid-cols-12 cursor-pointer group"
            >
              <div className="lg:col-span-6 overflow-hidden h-72 lg:h-auto">
                <img
                  src={featuredArticle.coverImage}
                  alt={featuredArticle.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="lg:col-span-6 p-8 sm:p-10 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 bg-[#8DC63F] text-white text-xs font-bold rounded-full">
                      Featured Health Insight
                    </span>
                    <span className="text-xs text-gray-500 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#8DC63F]" />
                      {featuredArticle.readTime}
                    </span>
                  </div>

                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1A2E] group-hover:text-[#5C8A1E] transition-colors leading-tight">
                    {featuredArticle.title}
                  </h2>

                  <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                    {featuredArticle.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-200 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={featuredArticle.author.image}
                      alt={featuredArticle.author.name}
                      className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm"
                    />
                    <div>
                      <p className="text-xs font-bold text-gray-900">{featuredArticle.author.name}</p>
                      <p className="text-[11px] text-gray-500">{featuredArticle.date}</p>
                    </div>
                  </div>

                  <span className="text-xs font-bold text-[#5C8A1E] group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    Read Article →
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ═══════════════════════════════════════════════
          SECTION 6.3 — ARTICLE CATEGORY TABS
          ═══════════════════════════════════════════════ */}
      <section className="bg-white border-b border-gray-200 sticky top-[72px] z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-[#8DC63F] text-white shadow-sm'
                      : 'bg-[#F0FAE3] text-[#5C8A1E] hover:bg-[#e1f4cb]'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 6.4 — ARTICLE GRID (3 Columns)
          ═══════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-[#F5FAF3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          {filteredArticles.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-3xl p-8 max-w-md mx-auto">
              <BookOpen className="w-12 h-12 text-gray-400 mx-auto mb-3" />
              <h3 className="font-serif text-lg font-bold text-gray-800">No articles found</h3>
              <p className="text-xs text-gray-500 mt-1">
                Try searching for another keyword or select a different category.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="mt-4 px-4 py-2 bg-[#8DC63F] text-white rounded-full text-xs font-semibold"
              >
                Reset Search
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article) => (
                <div
                  key={article.id}
                  onClick={() => onSelectArticle(article)}
                  className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col justify-between cursor-pointer group"
                >
                  <div>
                    <div className="h-52 overflow-hidden relative">
                      <img
                        src={article.coverImage}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute top-3 left-3 px-3 py-1 bg-white/90 backdrop-blur-sm text-[#2E5010] text-[11px] font-bold rounded-full shadow-sm">
                        {article.category}
                      </span>
                    </div>

                    <div className="p-6 space-y-3">
                      <div className="flex items-center gap-2 text-[11px] text-gray-500">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-[#8DC63F]" />
                          {article.date}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3 text-[#8DC63F]" />
                          {article.readTime}
                        </span>
                      </div>

                      <h3 className="font-serif text-lg font-bold text-[#1A1A2E] group-hover:text-[#5C8A1E] transition-colors leading-snug line-clamp-2">
                        {article.title}
                      </h3>

                      <p className="text-xs text-gray-600 leading-relaxed line-clamp-2">
                        {article.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="p-4 bg-gray-50/70 border-t border-gray-100 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img
                        src={article.author.image}
                        alt={article.author.name}
                        className="w-7 h-7 rounded-full object-cover border"
                      />
                      <span className="text-xs font-medium text-gray-800">
                        {article.author.name}
                      </span>
                    </div>
                    <span className="text-xs font-bold text-[#5C8A1E] group-hover:translate-x-1 transition-transform flex items-center gap-1">
                      Read →
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 6.5 — NEWSLETTER SIGNUP
          ═══════════════════════════════════════════════ */}
      <section className="py-16 bg-[#8DC63F] text-white text-center px-4 sm:px-8">
        <div className="max-w-2xl mx-auto space-y-4">
          <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mx-auto">
            <Mail className="w-6 h-6 text-white" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold">
            Get Health Tips in Your Inbox
          </h2>
          <p className="text-sm sm:text-base text-white/90 leading-relaxed">
            Subscribe to our free monthly newsletter for wellness insights, appointment reminders, and health guidance from our medical specialists.
          </p>

          {!subscribed ? (
            <form onSubmit={handleSubscribe} className="pt-2 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address..."
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="w-full px-5 py-3.5 rounded-full bg-white text-gray-900 text-sm focus:outline-none placeholder-gray-400"
              />
              <button
                type="submit"
                className="bg-[#2E5010] hover:bg-[#1f370b] text-white font-bold px-8 py-3.5 rounded-full text-sm shadow-md transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          ) : (
            <div className="p-4 bg-white/20 backdrop-blur-md rounded-2xl max-w-md mx-auto flex items-center justify-center gap-2 text-sm font-semibold">
              <CheckCircle2 className="w-5 h-5 text-white" />
              <span>Thank you! You have been subscribed to Dar Al Dawa Health Tips.</span>
            </div>
          )}

          <p className="text-[11px] text-white/70">
            We respect your privacy. Unsubscribe anytime with one click.
          </p>
        </div>
      </section>
    </div>
  );
};
