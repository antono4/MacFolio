import React, { useState, useEffect } from 'react'
import { Github, Twitter, Linkedin, Mail, Wifi, Search, User, Moon } from 'lucide-react'

function MenuBar({ onNavigate }) {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const menuItems = [
    { label: 'Projects', action: () => onNavigate('projects') },
    { label: 'Contact', action: () => onNavigate('contact') },
    { label: 'Resume', action: () => onNavigate('resume') },
  ]

  return (
    <div className="h-10 bg-[#1e1e1e]/90 backdrop-blur-xl border-b border-white/10 flex items-center justify-between px-4 z-50">
      <div className="flex items-center gap-4">
        <span className="text-white font-semibold text-sm">Portfolio</span>
        <nav className="flex items-center gap-3 ml-6">
          {menuItems.map((item) => (
            <button
              key={item.label}
              onClick={item.action}
              className="text-white/80 hover:text-white text-sm font-medium transition-colors"
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
      
      <div className="flex items-center gap-4">
        <button className="text-white/60 hover:text-white transition-colors">
          <Wifi size={16} />
        </button>
        <button className="text-white/60 hover:text-white transition-colors">
          <Search size={16} />
        </button>
        <button className="text-white/60 hover:text-white transition-colors">
          <User size={16} />
        </button>
        <button className="text-white/60 hover:text-white transition-colors">
          <Moon size={16} />
        </button>
        <span className="text-white/80 text-xs font-medium">
          {time.toLocaleTimeString('en-US', { 
            hour: 'numeric', 
            minute: '2-digit',
            hour12: true 
          })}
        </span>
      </div>
    </div>
  )
}

export default MenuBar
