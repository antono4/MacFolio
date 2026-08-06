import React, { useState, useRef, useEffect } from 'react'
import { X, Minus, Square, Maximize2 } from 'lucide-react'
import TechStack from './TechStack'
import Blog from './Blog'
import Resume from './Resume'
import Contact from './Contact'
import Photos from './Photos'

const windowConfigs = {
  finder: { title: 'Finder', width: '65%', height: '75%' },
  safari: { title: 'Safari', width: '70%', height: '80%' },
  photos: { title: 'Photos', width: '65%', height: '75%' },
  contact: { title: 'Contact', width: '60%', height: '80%' },
  terminal: { title: 'Terminal', width: '55%', height: '50%' },
  resume: { title: 'Resume.pdf', width: '55%', height: '85%' },
  blog: { title: 'Blog', width: '65%', height: '75%' },
  projects: { title: 'Projects', width: '60%', height: '70%' },
  techstack: { title: 'Tech Stack', width: '55%', height: '65%' },
}

function Window({ type, isActive, position, onClose, onMinimize, onFocus, onPositionChange }) {
  const [isMaximized, setIsMaximized] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 })
  const windowRef = useRef(null)
  const config = windowConfigs[type] || { title: type, width: '55%', height: '70%' }

  const getContent = () => {
    switch (type) {
      case 'finder': return <FinderContent />
      case 'safari': return <Blog />
      case 'photos': return <Photos />
      case 'contact': return <Contact />
      case 'terminal': return <TerminalContent />
      case 'resume': return <Resume />
      case 'blog': return <Blog />
      case 'projects': return <ProjectsContent />
      case 'techstack': return <TechStack />
      default: return <div className="p-6 text-white">Content for {type}</div>
    }
  }

  const handleMouseDown = (e) => {
    if (e.target.closest('.traffic-light')) return
    setIsDragging(true)
    setDragOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    })
  }

  const handleMouseMove = (e) => {
    if (!isDragging) return
    const newX = Math.max(0, Math.min(window.innerWidth - 400, e.clientX - dragOffset.x))
    const newY = Math.max(50, Math.min(window.innerHeight - 100, e.clientY - dragOffset.y))
    onPositionChange(newX, newY)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove)
      window.addEventListener('mouseup', handleMouseUp)
      return () => {
        window.removeEventListener('mousemove', handleMouseMove)
        window.removeEventListener('mouseup', handleMouseUp)
      }
    }
  }, [isDragging, dragOffset])

  const toggleMaximize = () => {
    setIsMaximized(!isMaximized)
  }

  return (
    <div
      ref={windowRef}
      className={`
        absolute transition-all duration-200 ease-out
        ${isActive ? 'z-50' : 'z-40'}
        ${isDragging ? 'cursor-grabbing' : ''}
      `}
      style={isMaximized ? {
        top: '40px',
        left: '10px',
        right: '10px',
        bottom: '80px',
        width: 'auto',
        height: 'auto',
      } : {
        top: position.y,
        left: position.x,
        width: config.width,
        height: config.height,
      }}
      onMouseDown={onFocus}
    >
      <div className={`
        h-full rounded-xl overflow-hidden
        bg-[#1e1e1e]/95 backdrop-blur-2xl
        border border-white/20
        shadow-2xl shadow-black/50
        ${isActive ? 'ring-1 ring-white/30' : 'ring-1 ring-white/5'}
        ${isActive && isMaximized ? 'ring-2 ring-blue-500/50' : ''}
      `}>
        {/* Title bar */}
        <div 
          className={`
            h-11 bg-gradient-to-b from-[#3a3a3a] to-[#2d2d2d]
            flex items-center justify-between px-4 
            border-b border-black/20
            cursor-default select-none
            ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}
          `}
          onMouseDown={handleMouseDown}
          onDoubleClick={toggleMaximize}
        >
          {/* Traffic lights */}
          <div className="flex items-center gap-3 traffic-light">
            <button
              onClick={onClose}
              className="w-3.5 h-3.5 rounded-full bg-red-500 hover:bg-red-400 transition-all flex items-center justify-center group"
            >
              <X size={8} className="text-red-700/0 group-hover:text-red-700 transition-all" />
            </button>
            <button
              onClick={onMinimize}
              className="w-3.5 h-3.5 rounded-full bg-yellow-500 hover:bg-yellow-400 transition-all flex items-center justify-center group"
            >
              <Minus size={8} className="text-yellow-700/0 group-hover:text-yellow-700 transition-all" />
            </button>
            <button
              onClick={toggleMaximize}
              className="w-3.5 h-3.5 rounded-full bg-green-500 hover:bg-green-400 transition-all flex items-center justify-center group"
            >
              <Maximize2 size={8} className="text-green-700/0 group-hover:text-green-700 transition-all" />
            </button>
          </div>
          
          {/* Title */}
          <span className="text-white/90 text-sm font-semibold absolute left-1/2 transform -translate-x-1/2 tracking-wide">
            {config.title}
          </span>
          
          {/* Placeholder */}
          <div className="w-20" />
        </div>
        
        {/* Content */}
        <div className="h-[calc(100%-44px)] overflow-auto bg-[#1e1e1e]">
          {getContent()}
        </div>
      </div>
    </div>
  )
}

function FinderContent() {
  const folders = [
    { name: 'Documents', count: 24, color: 'from-blue-500 to-blue-600' },
    { name: 'Downloads', count: 12, color: 'from-green-500 to-green-600' },
    { name: 'Projects', count: 8, color: 'from-purple-500 to-purple-600' },
    { name: 'Photos', count: 156, color: 'from-pink-500 to-pink-600' },
    { name: 'Code', count: 15, color: 'from-orange-500 to-orange-600' },
    { name: 'Notes', count: 89, color: 'from-red-500 to-red-600' },
  ]

  return (
    <div className="flex h-full">
      {/* Sidebar */}
      <div className="w-56 bg-[#252525] border-r border-white/5 p-4">
        <div className="text-white/40 text-xs font-bold uppercase mb-3 tracking-wider">Favorites</div>
        <div className="space-y-1">
          {['Desktop', 'Documents', 'Downloads', 'Pictures'].map((item) => (
            <div key={item} className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/10 cursor-pointer transition-colors">
              <div className="w-5 h-5 bg-gradient-to-br from-blue-400 to-blue-500 rounded-md" />
              <span className="text-white/80 text-sm">{item}</span>
            </div>
          ))}
        </div>
        
        <div className="text-white/40 text-xs font-bold uppercase mb-3 mt-6 tracking-wider">iCloud</div>
        <div className="space-y-1">
          {['Photos', 'iCloud Drive', 'Documents'].map((item) => (
            <div key={item} className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/10 cursor-pointer transition-colors">
              <div className="w-5 h-5 bg-gradient-to-br from-cyan-400 to-cyan-500 rounded-md" />
              <span className="text-white/80 text-sm">{item}</span>
            </div>
          ))}
        </div>

        <div className="text-white/40 text-xs font-bold uppercase mb-3 mt-6 tracking-wider">Tags</div>
        <div className="space-y-1">
          {[
            { name: 'Red', color: 'bg-red-500' },
            { name: 'Orange', color: 'bg-orange-500' },
            { name: 'Green', color: 'bg-green-500' },
          ].map((item) => (
            <div key={item.name} className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/10 cursor-pointer transition-colors">
              <div className={`w-3 h-3 rounded-full ${item.color}`} />
              <span className="text-white/80 text-sm">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Main */}
      <div className="flex-1 p-6">
        <div className="grid grid-cols-4 gap-6">
          {folders.map((folder) => (
            <div key={folder.name} className="flex flex-col items-center gap-3 cursor-pointer group">
              <div className={`w-24 h-24 bg-gradient-to-br ${folder.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300`}>
                <svg className="w-14 h-14 text-white/90" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M10 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"/>
                </svg>
              </div>
              <span className="text-white/90 text-sm font-medium text-center">{folder.name}</span>
              <span className="text-white/40 text-xs">{folder.count} items</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function TerminalContent() {
  const [lines, setLines] = useState([
    { type: 'system', text: 'Last login: Wed Aug 06 08:00:00 on ttys000' },
  ])
  const [input, setInput] = useState('')
  const [history, setHistory] = useState([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const inputRef = useRef(null)
  const bottomRef = useRef(null)

  const commands = {
    help: ['Available commands:', '  help     - Show this help', '  about    - About me', '  skills   - List skills', '  projects - List projects', '  clear    - Clear terminal', '  whoami   - Who am I?', '  date     - Current date', '  contact  - Contact info'],
    about: ['👋 Hi, I\'m Antono', 'Full Stack Developer from Jakarta, Indonesia', 'Passionate about building beautiful web applications', 'Love working with React, Node.js, and modern technologies'],
    skills: ['Frontend: React, Vue, TypeScript, Tailwind CSS, Next.js', 'Backend: Node.js, Python, Go, PostgreSQL, MongoDB', 'Tools: Git, Docker, AWS, CI/CD, Figma'],
    projects: ['🌐 macfolio - macOS-style portfolio website (this!)', '🛒 ecommerce - Full-stack e-commerce platform', '📊 dashboard - Analytics dashboard with real-time data', '📱 mobile - React Native mobile application'],
    whoami: ['antono'],
    contact: ['Email: antonockr1@gmail.com', 'GitHub: github.com/antono4', 'LinkedIn: linkedin.com/in/antono4'],
    date: [new Date().toString()],
    clear: 'CLEAR',
  }

  const executeCommand = (cmd) => {
    const trimmed = cmd.trim().toLowerCase()
    const output = commands[trimmed] || [`Command not found: ${cmd}`, 'Type "help" for available commands']
    return output
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      const cmd = input
      setHistory(prev => [cmd, ...prev].slice(0, 20))
      setHistoryIndex(-1)
      
      if (cmd.trim()) {
        const output = executeCommand(cmd)
        setLines(prev => [...prev, { type: 'input', text: `~ % ${cmd}` }])
        if (output === 'CLEAR') {
          setLines([])
        } else {
          output.forEach(line => setLines(prev => [...prev, { type: 'output', text: line }]))
        }
      }
      setInput('')
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (historyIndex < history.length - 1) {
        setHistoryIndex(prev => prev + 1)
        setInput(history[historyIndex + 1])
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (historyIndex > 0) {
        setHistoryIndex(prev => prev - 1)
        setInput(history[historyIndex - 1])
      } else if (historyIndex === 0) {
        setHistoryIndex(-1)
        setInput('')
      }
    }
  }

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [lines])

  return (
    <div 
      className="h-full bg-[#0c0c0c] p-4 font-mono cursor-text"
      onClick={() => inputRef.current?.focus()}
    >
      <div className="text-green-400 text-sm space-y-1 max-h-full overflow-auto">
        {lines.map((line, i) => (
          <p key={i} className={line.type === 'input' ? 'text-white' : ''}>
            {line.text}
          </p>
        ))}
        <div className="flex items-center">
          <span className="text-blue-400">~ %</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent outline-none text-white ml-2 caret-green-400"
            autoFocus
          />
          <span className="animate-pulse text-green-400">█</span>
        </div>
        <div ref={bottomRef} />
      </div>
    </div>
  )
}

function ProjectsContent() {
  const projects = [
    { 
      name: 'MacFolio', 
      desc: 'macOS-style portfolio website with interactive window management, desktop icons, and dock. Built with React and Tailwind CSS.',
      tech: ['React', 'Tailwind CSS', 'Vite', 'Lucide Icons'],
      stars: 45,
      forks: 12,
      color: 'from-purple-500 to-pink-500'
    },
    { 
      name: 'Inventory Management System', 
      desc: 'Full-stack inventory management system with real-time stock tracking, barcode scanning, and reporting dashboard.',
      tech: ['Next.js', 'PostgreSQL', 'Prisma', 'Tailwind'],
      stars: 78,
      forks: 18,
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      name: 'Task Tracker App', 
      desc: 'Productivity app with kanban boards, task priorities, due dates, and team collaboration features.',
      tech: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      stars: 156,
      forks: 28,
      color: 'from-green-500 to-emerald-500'
    },
    { 
      name: 'Weather Dashboard', 
      desc: 'Real-time weather dashboard with interactive maps, 7-day forecasts, and location-based alerts.',
      tech: ['React', 'Chart.js', 'OpenWeather API', 'Tailwind'],
      stars: 92,
      forks: 15,
      color: 'from-orange-500 to-amber-500'
    },
  ]

  return (
    <div className="p-6 space-y-4">
      <h2 className="text-xl font-bold text-white mb-6">Featured Projects</h2>
      {projects.map((project, i) => (
        <div key={i} className="bg-white/5 rounded-2xl p-5 hover:bg-white/10 transition-all cursor-pointer group border border-white/5 hover:border-white/10">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                <span className="text-xl">🚀</span>
              </div>
              <h3 className="text-white font-semibold text-lg">{project.name}</h3>
            </div>
            <div className="flex items-center gap-4 text-white/40 text-sm">
              <span className="flex items-center gap-1">⭐ {project.stars}</span>
              <span className="flex items-center gap-1">🍴 {project.forks}</span>
            </div>
          </div>
          <p className="text-white/60 text-sm mb-4 leading-relaxed">{project.desc}</p>
          <div className="flex gap-2">
            {project.tech.map((t) => (
              <span key={t} className="px-3 py-1 bg-white/10 text-white/80 text-xs rounded-lg">{t}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Window
