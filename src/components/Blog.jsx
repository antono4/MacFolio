import React from 'react'
import { ArrowRight, Calendar } from 'lucide-react'

function Blog() {
  const blogPosts = [
    {
      title: 'Building Modern Web Applications with React 18',
      excerpt: 'Explore the new features in React 18 including Concurrent Rendering, Suspense, and Server Components.',
      date: 'Jul 15, 2025',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=60',
      tags: ['React', 'JavaScript', 'Web Dev']
    },
    {
      title: 'Mastering Tailwind CSS: From Basics to Advanced',
      excerpt: 'Learn how to build beautiful, responsive UIs with Tailwind CSS utility classes and custom configurations.',
      date: 'Jul 10, 2025',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop&q=60',
      tags: ['CSS', 'Tailwind', 'Frontend']
    },
    {
      title: 'Node.js Performance Optimization Guide',
      excerpt: 'Practical tips and techniques to optimize your Node.js applications for better performance and scalability.',
      date: 'Jul 5, 2025',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=60',
      tags: ['Node.js', 'Backend', 'Performance']
    },
  ]

  return (
    <div className="p-6">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-2">Developer Blog</h2>
        <p className="text-white/60 text-sm">Thoughts on web development and technology</p>
      </div>

      <div className="space-y-6">
        {blogPosts.map((post, i) => (
          <article
            key={i}
            className="group bg-white/5 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 cursor-pointer"
          >
            {/* Image */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              
              {/* Tags */}
              <div className="absolute top-4 left-4 flex gap-2">
                {post.tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="p-5">
              <div className="flex items-center gap-2 text-white/40 text-sm mb-3">
                <Calendar size={14} />
                <span>{post.date}</span>
              </div>
              
              <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-blue-400 transition-colors">
                {post.title}
              </h3>
              
              <p className="text-white/60 text-sm mb-4 line-clamp-2">
                {post.excerpt}
              </p>
              
              <div className="flex items-center gap-2 text-blue-400 text-sm font-medium group-hover:gap-3 transition-all">
                <span>Read more</span>
                <ArrowRight size={16} />
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* View all button */}
      <div className="mt-8 text-center">
        <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-xl transition-colors">
          View All Posts
        </button>
      </div>
    </div>
  )
}

export default Blog
