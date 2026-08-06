import React, { useState } from 'react'
import { Code, Database, Cloud, Palette, Smartphone, Server, Terminal, GitBranch, Layers, Zap, Star } from 'lucide-react'

const TechStack = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [showProficiency, setShowProficiency] = useState(true)

  const categories = [
    { id: 'All', label: 'All', icon: Layers },
    { id: 'Frontend', label: 'Frontend', icon: Palette },
    { id: 'Backend', label: 'Backend', icon: Server },
    { id: 'Database', label: 'Database', icon: Database },
    { id: 'DevOps', label: 'DevOps', icon: Cloud },
    { id: 'Mobile', label: 'Mobile', icon: Smartphone },
    { id: 'Tools', label: 'Tools', icon: Terminal },
  ]

  const skills = [
    // Frontend
    { name: 'React', category: 'Frontend', level: 95, years: 5, color: 'from-cyan-400 to-blue-500', icon: '⚛️', description: 'Building modern web applications with hooks, context, and state management' },
    { name: 'Next.js', category: 'Frontend', level: 88, years: 2, color: 'from-gray-700 to-black', icon: '▲', description: 'Server-side rendering, static site generation, and full-stack apps' },
    { name: 'TypeScript', category: 'Frontend', level: 90, years: 3, color: 'from-blue-400 to-blue-600', icon: 'TS', description: 'Type-safe JavaScript for scalable applications' },
    { name: 'Vue.js', category: 'Frontend', level: 80, years: 2, color: 'from-green-400 to-emerald-500', icon: 'V', description: 'Progressive JavaScript framework for building UIs' },
    { name: 'Tailwind CSS', category: 'Frontend', level: 95, years: 4, color: 'from-cyan-400 to-teal-500', icon: '🎨', description: 'Utility-first CSS framework for rapid styling' },
    { name: 'Redux', category: 'Frontend', level: 85, years: 3, color: 'from-purple-400 to-purple-600', icon: 'R', description: 'Predictable state container for JavaScript apps' },
    
    // Backend
    { name: 'Node.js', category: 'Backend', level: 92, years: 5, color: 'from-green-500 to-green-700', icon: '🟢', description: 'Server-side JavaScript runtime for scalable applications' },
    { name: 'Python', category: 'Backend', level: 82, years: 4, color: 'from-yellow-400 to-yellow-600', icon: '🐍', description: 'Versatile language for web, data, and AI applications' },
    { name: 'Go', category: 'Backend', level: 72, years: 1, color: 'from-cyan-400 to-blue-500', icon: 'G', description: 'High-performance systems programming language' },
    { name: 'Express.js', category: 'Backend', level: 90, years: 4, color: 'from-gray-400 to-gray-600', icon: 'E', description: 'Minimal and flexible Node.js web application framework' },
    { name: 'GraphQL', category: 'Backend', level: 80, years: 2, color: 'from-pink-400 to-rose-500', icon: '⬡', description: 'Query language and runtime for APIs' },
    
    // Database
    { name: 'PostgreSQL', category: 'Database', level: 88, years: 4, color: 'from-blue-400 to-indigo-500', icon: '🐘', description: 'Advanced open-source relational database' },
    { name: 'MongoDB', category: 'Database', level: 85, years: 3, color: 'from-green-400 to-green-600', icon: '🍃', description: 'Flexible document-oriented NoSQL database' },
    { name: 'Redis', category: 'Database', level: 78, years: 2, color: 'from-red-400 to-red-600', icon: '📦', description: 'In-memory data structure store for caching' },
    { name: 'Firebase', category: 'Database', level: 82, years: 3, color: 'from-yellow-400 to-orange-500', icon: '🔥', description: 'Backend-as-a-service platform for mobile and web' },
    { name: 'Supabase', category: 'Database', level: 75, years: 1, color: 'from-green-400 to-emerald-500', icon: '🔷', description: 'Open source Firebase alternative with Postgres' },
    
    // DevOps
    { name: 'Docker', category: 'DevOps', level: 85, years: 3, color: 'from-blue-400 to-blue-600', icon: '🐳', description: 'Container platform for building and shipping apps' },
    { name: 'Kubernetes', category: 'DevOps', level: 70, years: 1, color: 'from-blue-400 to-purple-500', icon: '☸️', description: 'Container orchestration for automating deployment' },
    { name: 'AWS', category: 'DevOps', level: 80, years: 3, color: 'from-orange-400 to-orange-600', icon: '☁️', description: 'Comprehensive cloud computing platform' },
    { name: 'CI/CD', category: 'DevOps', level: 85, years: 3, color: 'from-green-400 to-teal-500', icon: '⚡', description: 'Continuous integration and deployment pipelines' },
    { name: 'GitHub Actions', category: 'DevOps', level: 88, years: 2, color: 'from-gray-400 to-gray-600', icon: '🏃', description: 'Automate workflows directly from GitHub' },
    
    // Mobile
    { name: 'React Native', category: 'Mobile', level: 78, years: 2, color: 'from-blue-400 to-cyan-500', icon: '⚛️', description: 'Cross-platform mobile app development with React' },
    { name: 'Flutter', category: 'Mobile', level: 65, years: 1, color: 'from-blue-400 to-indigo-500', icon: '🦋', description: 'Google UI toolkit for natively compiled apps' },
    
    // Tools
    { name: 'Git', category: 'Tools', level: 95, years: 6, color: 'from-orange-400 to-red-500', icon: '📊', description: 'Version control system for tracking changes' },
    { name: 'VS Code', category: 'Tools', level: 98, years: 5, color: 'from-blue-400 to-blue-600', icon: '💻', description: 'Powerful and extensible code editor' },
    { name: 'Figma', category: 'Tools', level: 82, years: 3, color: 'from-purple-400 to-pink-500', icon: '🎨', description: 'Collaborative design tool for UI/UX' },
    { name: 'Linux', category: 'Tools', level: 85, years: 5, color: 'from-yellow-400 to-orange-500', icon: '🐧', description: 'Open-source operating system for servers' },
  ]

  const filteredSkills = selectedCategory === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory)

  const proficiencyLevels = [
    { label: 'Expert', range: [90, 100], color: 'bg-green-500' },
    { label: 'Advanced', range: [75, 89], color: 'bg-blue-500' },
    { label: 'Intermediate', range: [60, 74], color: 'bg-yellow-500' },
    { label: 'Beginner', range: [0, 59], color: 'bg-gray-500' },
  ]

  const getProficiency = (level) => {
    return proficiencyLevels.find(p => level >= p.range[0] && level <= p.range[1])
  }

  return (
    <div className="h-full bg-gradient-to-br from-slate-900 to-slate-800 p-6 overflow-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-white mb-3">Tech Stack</h1>
        <p className="text-white/60">Technologies I work with to build amazing products</p>
        <div className="flex items-center justify-center gap-4 mt-4">
          <div className="flex items-center gap-2">
            <Star className="text-yellow-400" size={16} fill="currentColor" />
            <span className="text-white/80">{skills.length} Technologies</span>
          </div>
          <div className="text-white/40">•</div>
          <div className="text-white/80">{skills.reduce((acc, s) => acc + s.years, 0)}+ Years Experience</div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map((cat) => {
          const Icon = cat.icon
          const count = cat.id === 'All' ? skills.length : skills.filter(s => s.category === cat.id).length
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                selectedCategory === cat.id
                  ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25'
                  : 'bg-white/5 text-white/70 hover:bg-white/10'
              }`}
            >
              <Icon size={16} />
              {cat.label}
              <span className={`text-xs px-2 py-0.5 rounded-full ${
                selectedCategory === cat.id ? 'bg-white/20' : 'bg-white/10'
              }`}>
                {count}
              </span>
            </button>
          )
        })}
      </div>

      {/* Toggle */}
      <div className="flex justify-center mb-6">
        <button
          onClick={() => setShowProficiency(!showProficiency)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            showProficiency ? 'bg-green-500/20 text-green-400' : 'bg-white/5 text-white/60'
          }`}
        >
          {showProficiency ? '✓ Show Proficiency' : 'Show Proficiency'}
        </button>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredSkills.map((skill) => {
          const proficiency = getProficiency(skill.level)
          return (
            <div
              key={skill.name}
              className="bg-white/5 backdrop-blur-xl rounded-2xl p-5 border border-white/10 hover:border-white/20 transition-all group hover:shadow-lg hover:shadow-blue-500/10"
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center text-xl font-bold text-white mb-4 group-hover:scale-110 transition-transform`}>
                {skill.icon}
              </div>

              {/* Name & Category */}
              <h3 className="text-white font-semibold text-lg mb-1">{skill.name}</h3>
              <p className="text-white/40 text-xs mb-3">{skill.category}</p>

              {/* Description */}
              <p className="text-white/50 text-xs mb-3 line-clamp-2">{skill.description}</p>

              {/* Proficiency Bar */}
              {showProficiency && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className={`${proficiency.color} px-2 py-0.5 rounded-full text-white`}>
                      {proficiency.label}
                    </span>
                    <span className="text-white/60">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${proficiency.color} rounded-full transition-all duration-500`}
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                  <div className="text-white/40 text-xs">{skill.years} years</div>
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4 mt-8">
        {[
          { label: 'Total Technologies', value: skills.length, icon: '⚡' },
          { label: 'Years Combined', value: skills.reduce((acc, s) => acc + s.years, 0), suffix: '+', icon: '📅' },
          { label: 'Expert Level', value: skills.filter(s => s.level >= 90).length, icon: '⭐' },
          { label: 'Categories', value: categories.length - 1, icon: '🏷️' },
        ].map((stat, i) => (
          <div key={i} className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 text-center border border-white/10">
            <div className="text-3xl mb-2">{stat.icon}</div>
            <div className="text-3xl font-bold text-white mb-1">
              {stat.value}{stat.suffix || ''}
            </div>
            <div className="text-white/50 text-sm">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TechStack
