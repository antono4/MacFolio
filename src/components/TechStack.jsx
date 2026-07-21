import React, { useState } from 'react'
import { Code2, Smartphone, Palette, Server, Database, Wrench } from 'lucide-react'

function TechStack() {
  const [showAll, setShowAll] = useState(false)
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', label: 'All', icon: Code2 },
    { id: 'frontend', label: 'Frontend', icon: Code2 },
    { id: 'mobile', label: 'Mobile', icon: Smartphone },
    { id: 'styling', label: 'Styling', icon: Palette },
    { id: 'backend', label: 'Backend', icon: Server },
    { id: 'database', label: 'Database', icon: Database },
    { id: 'devtools', label: 'Dev Tools', icon: Wrench },
  ]

  const skills = {
    frontend: ['React.js', 'Next.js', 'JavaScript', 'TypeScript', 'Redux', 'GraphQL'],
    mobile: ['React Native', 'Expo', 'Flutter'],
    styling: ['Tailwind CSS', 'CSS', 'SASS', 'Styled Components'],
    backend: ['Node.js', 'Express', 'NestJS', 'Django', 'FastAPI'],
    database: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Firebase'],
    devtools: ['Git', 'GitHub', 'Docker', 'AWS', 'Vercel', 'Jenkins'],
  }

  const filteredSkills = activeCategory === 'all' 
    ? Object.values(skills).flat()
    : skills[activeCategory] || []

  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-white mb-2">Tech Stack</h2>
        <p className="text-white/60 text-sm">Technologies I work with</p>
      </div>

      {/* Category tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((cat) => {
          const Icon = cat.icon
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`
                flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium
                transition-all duration-200
                ${activeCategory === cat.id 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'}
              `}
            >
              <Icon size={16} />
              {cat.label}
            </button>
          )
        })}
      </div>

      {/* Skills grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {filteredSkills.map((skill, i) => (
          <div
            key={skill}
            className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-4 text-center transition-all duration-200 hover:scale-105 cursor-default"
            style={{ animationDelay: `${i * 50}ms` }}
          >
            <span className="text-white font-medium">{skill}</span>
          </div>
        ))}
      </div>

      <div className="mt-6 text-center text-white/40 text-sm">
        {filteredSkills.length} of {Object.values(skills).flat().length} skills loaded
      </div>
    </div>
  )
}

export default TechStack
