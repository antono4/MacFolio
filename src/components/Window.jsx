import React from 'react'
import { X, Minus, Square } from 'lucide-react'
import TechStack from './TechStack'
import Blog from './Blog'
import Resume from './Resume'
import Contact from './Contact'
import Photos from './Photos'

function Window({ type, isActive, onClose, onMinimize, children }) {
  const windowTitles = {
    finder: 'Finder',
    safari: 'Safari',
    photos: 'Photos',
    contact: 'Contact',
    terminal: 'Terminal',
    resume: 'Resume.pdf',
    blog: 'Blog',
    projects: 'Projects',
  }

  const getContent = () => {
    switch (type) {
      case 'finder':
        return <FinderContent />
      case 'safari':
        return <Blog />
      case 'photos':
        return <Photos />
      case 'contact':
        return <Contact />
      case 'terminal':
        return <TerminalContent />
      case 'resume':
        return <Resume />
      case 'blog':
        return <Blog />
      case 'projects':
        return <ProjectsContent />
      default:
        return <div className="p-6 text-white">Content for {type}</div>
    }
  }

  return (
    <div
      className={`
        absolute transition-all duration-300
        ${isActive ? 'z-40' : 'z-30'}
      `}
      style={{
        top: '60px',
        left: type === 'finder' ? '10%' : type === 'blog' ? '25%' : '40%',
        width: '55%',
        height: 'calc(100vh - 180px)',
      }}
    >
      {/* Window container */}
      <div className={`
        h-full rounded-2xl overflow-hidden
        bg-[#1e1e1e]/95 backdrop-blur-xl
        border border-white/10
        shadow-2xl
        ${isActive ? 'ring-2 ring-blue-500/50' : 'ring-1 ring-white/5'}
      `}>
        {/* Title bar */}
        <div 
          className="h-12 bg-[#2d2d2d] flex items-center justify-between px-4 border-b border-white/5 cursor-default"
          onClick={onFocus}
        >
          {/* Traffic lights */}
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="w-3.5 h-3.5 rounded-full bg-red-500 hover:bg-red-400 transition-colors flex items-center justify-center group"
            >
              <X size={10} className="text-red-700 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
            <button
              onClick={onMinimize}
              className="w-3.5 h-3.5 rounded-full bg-yellow-500 hover:bg-yellow-400 transition-colors flex items-center justify-center group"
            >
              <Minus size={10} className="text-yellow-700 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
            <button className="w-3.5 h-3.5 rounded-full bg-green-500 hover:bg-green-400 transition-colors flex items-center justify-center group">
              <Square size={10} className="text-green-700 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          </div>
          
          {/* Title */}
          <span className="text-white/80 text-sm font-medium absolute left-1/2 transform -translate-x-1/2">
            {windowTitles[type] || type}
          </span>
          
          {/* Placeholder for symmetry */}
          <div className="w-20" />
        </div>
        
        {/* Content area */}
        <div className="h-[calc(100%-48px)] overflow-auto">
          {getContent()}
        </div>
      </div>
    </div>
  )
}

// Finder Content
function FinderContent() {
  const folders = [
    { name: 'Documents', count: 12 },
    { name: 'Downloads', count: 8 },
    { name: 'Pictures', count: 24 },
    { name: 'Projects', count: 5 },
  ]

  return (
    <div className="flex h-full">
      {/* Sidebar */}
      <div className="w-48 bg-[#252525] border-r border-white/5 p-4">
        <div className="text-white/40 text-xs font-semibold uppercase mb-3">Favorites</div>
        <div className="space-y-1">
          {['Desktop', 'Documents', 'Downloads'].map((item) => (
            <div key={item} className="flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-white/5 cursor-pointer">
              <div className="w-4 h-4 bg-blue-500 rounded" />
              <span className="text-white/70 text-sm">{item}</span>
            </div>
          ))}
        </div>
        
        <div className="text-white/40 text-xs font-semibold uppercase mb-3 mt-6">iCloud</div>
        <div className="space-y-1">
          {['Photos', 'Drive'].map((item) => (
            <div key={item} className="flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-white/5 cursor-pointer">
              <div className="w-4 h-4 bg-blue-400 rounded" />
              <span className="text-white/70 text-sm">{item}</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Main content */}
      <div className="flex-1 p-6">
        <div className="grid grid-cols-4 gap-6">
          {folders.map((folder) => (
            <div key={folder.name} className="flex flex-col items-center gap-2 cursor-pointer group">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-xl flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-blue-500/30 group-hover:to-blue-600/30 transition-all">
                <svg className="w-12 h-12 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M10 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"/>
                </svg>
              </div>
              <span className="text-white/80 text-xs text-center">{folder.name}</span>
              <span className="text-white/40 text-xs">{folder.count} items</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Terminal Content
function TerminalContent() {
  return (
    <div className="h-full bg-[#1a1a1a] p-4 font-mono">
      <div className="text-green-400 text-sm space-y-2">
        <p>Last login: Mon Jul 21 04:30:00 on ttys000</p>
        <p>~ % whoami</p>
        <p>developer</p>
        <p>~ % cat skills.txt</p>
        <p>React.js, Next.js, Node.js, Python, TypeScript, Tailwind CSS</p>
        <p>~ % ls projects/</p>
        <p>portfolio/  ecommerce/  dashboard/  api-server/</p>
        <p>~ % <span className="animate-pulse">█</span></p>
      </div>
    </div>
  )
}

// Projects Content
function ProjectsContent() {
  const projects = [
    { name: 'E-Commerce Platform', desc: 'Full-stack online store with payment integration', tech: ['React', 'Node.js', 'MongoDB'] },
    { name: 'Task Management App', desc: 'Collaborative project management tool', tech: ['Next.js', 'PostgreSQL', 'Tailwind'] },
    { name: 'Portfolio Website', desc: 'This macOS-style portfolio', tech: ['React', 'Tailwind'] },
  ]

  return (
    <div className="p-6 space-y-6">
      {projects.map((project, i) => (
        <div key={i} className="bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-colors cursor-pointer">
          <h3 className="text-white font-semibold text-lg mb-1">{project.name}</h3>
          <p className="text-white/60 text-sm mb-3">{project.desc}</p>
          <div className="flex gap-2">
            {project.tech.map((t) => (
              <span key={t} className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-md">{t}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Window
