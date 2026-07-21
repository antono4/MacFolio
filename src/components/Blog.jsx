import React, { useState } from 'react'
import { Clock, Calendar, Heart, MessageCircle, Share2, ExternalLink, Search, Filter, ChevronRight } from 'lucide-react'

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const categories = ['All', 'React', 'Node.js', 'TypeScript', 'DevOps', 'Career', 'Tutorial']

  const articles = [
    {
      id: 1,
      title: 'Building Scalable React Applications in 2024',
      excerpt: 'Learn the best practices for building large-scale React applications with modern patterns and performance optimizations.',
      category: 'React',
      author: 'John Anderson',
      date: 'July 15, 2024',
      readTime: '8 min read',
      likes: 234,
      comments: 45,
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600',
      featured: true,
      tags: ['React', 'Performance', 'Best Practices']
    },
    {
      id: 2,
      title: 'Mastering TypeScript: Advanced Patterns & Techniques',
      excerpt: 'Deep dive into advanced TypeScript patterns including generics, conditional types, and type guards for building robust applications.',
      category: 'TypeScript',
      author: 'John Anderson',
      date: 'July 10, 2024',
      readTime: '12 min read',
      likes: 189,
      comments: 32,
      image: 'https://images.unsplash.com/photo-1619410283995-43d9138e12f6?w=600',
      featured: false,
      tags: ['TypeScript', 'Advanced', 'Patterns']
    },
    {
      id: 3,
      title: 'Node.js Microservices Architecture: A Complete Guide',
      excerpt: 'Comprehensive guide to building microservices with Node.js, including service discovery, load balancing, and fault tolerance.',
      category: 'Node.js',
      author: 'John Anderson',
      date: 'July 5, 2024',
      readTime: '15 min read',
      likes: 312,
      comments: 67,
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600',
      featured: true,
      tags: ['Node.js', 'Microservices', 'Architecture']
    },
    {
      id: 4,
      title: 'Docker & Kubernetes: From Zero to Production',
      excerpt: 'Step-by-step guide to containerizing your applications and deploying them to Kubernetes clusters.',
      category: 'DevOps',
      author: 'John Anderson',
      date: 'June 28, 2024',
      readTime: '20 min read',
      likes: 456,
      comments: 89,
      image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=600',
      featured: false,
      tags: ['Docker', 'Kubernetes', 'DevOps']
    },
    {
      id: 5,
      title: '5 Lessons I Learned as a Senior Developer',
      excerpt: 'Key insights and lessons from my journey to becoming a senior software engineer, including career growth and technical skills.',
      category: 'Career',
      author: 'John Anderson',
      date: 'June 20, 2024',
      readTime: '6 min read',
      likes: 567,
      comments: 102,
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600',
      featured: false,
      tags: ['Career', 'Senior', 'Growth']
    },
    {
      id: 6,
      title: 'Building a Real-time Chat App with Socket.io',
      excerpt: 'Complete tutorial on building a real-time chat application using React, Node.js, and Socket.io.',
      category: 'Tutorial',
      author: 'John Anderson',
      date: 'June 15, 2024',
      readTime: '18 min read',
      likes: 289,
      comments: 54,
      image: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=600',
      featured: false,
      tags: ['React', 'Socket.io', 'Tutorial']
    }
  ]

  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const featuredArticle = articles.find(a => a.featured)

  return (
    <div className="h-full bg-gradient-to-br from-slate-900 to-slate-800 overflow-auto">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8">
        <h1 className="text-3xl font-bold text-white mb-2">Blog</h1>
        <p className="text-white/80">Insights, tutorials, and thoughts on web development</p>
      </div>

      <div className="p-6">
        {/* Search & Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-blue-500 text-white'
                    : 'bg-white/5 text-white/70 hover:bg-white/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Article */}
        {selectedCategory === 'All' && searchQuery === '' && featuredArticle && (
          <div className="mb-8 group cursor-pointer" onClick={() => {}}>
            <div className="relative overflow-hidden rounded-2xl bg-white/5 border border-white/10">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-2/5">
                  <img 
                    src={featuredArticle.image} 
                    alt={featuredArticle.title}
                    className="w-full h-48 md:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="md:w-3/5 p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-medium rounded-full">
                      Featured
                    </span>
                    <span className="px-3 py-1 bg-white/10 text-white/70 text-xs rounded-full">
                      {featuredArticle.category}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {featuredArticle.title}
                  </h2>
                  <p className="text-white/60 mb-4 line-clamp-2">{featuredArticle.excerpt}</p>
                  <div className="flex items-center gap-4 text-white/50 text-sm">
                    <span className="flex items-center gap-1"><Calendar size={14} /> {featuredArticle.date}</span>
                    <span className="flex items-center gap-1"><Clock size={14} /> {featuredArticle.readTime}</span>
                    <span className="flex items-center gap-1"><Heart size={14} /> {featuredArticle.likes}</span>
                    <span className="flex items-center gap-1"><MessageCircle size={14} /> {featuredArticle.comments}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <article 
              key={article.id} 
              className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden hover:border-white/20 transition-all group cursor-pointer hover:shadow-xl hover:shadow-blue-500/10"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3">
                  <span className="px-3 py-1 bg-black/50 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                    {article.category}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-3 text-white/50 text-xs mb-3">
                  <span className="flex items-center gap-1"><Calendar size={12} /> {article.date}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1"><Clock size={12} /> {article.readTime}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-white/60 text-sm mb-4 line-clamp-2">{article.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-white/50 text-sm">
                    <span className="flex items-center gap-1"><Heart size={14} /> {article.likes}</span>
                    <span className="flex items-center gap-1"><MessageCircle size={14} /> {article.comments}</span>
                  </div>
                  <button className="flex items-center gap-1 text-blue-400 text-sm font-medium hover:text-blue-300 transition-colors">
                    Read more <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-10">
          <button className="px-8 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl font-medium transition-all inline-flex items-center gap-2">
            Load More Articles <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Blog
