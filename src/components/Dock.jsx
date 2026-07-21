import React, { useState } from 'react'

const dockApps = [
  { id: 'finder', name: 'Finder', icon: '📁', gradient: 'from-blue-400 to-blue-600' },
  { id: 'safari', name: 'Safari', icon: '🧭', gradient: 'from-blue-300 to-blue-500' },
  { id: 'terminal', name: 'Terminal', icon: '⌨️', gradient: 'from-gray-500 to-gray-700' },
  { id: 'projects', name: 'Projects', icon: '🚀', gradient: 'from-purple-400 to-pink-500' },
  { id: 'blog', name: 'Blog', icon: '✍️', gradient: 'from-orange-400 to-red-500' },
  { id: 'techstack', name: 'Tech Stack', icon: '⚛️', gradient: 'from-cyan-400 to-blue-500' },
  { id: 'photos', name: 'Photos', icon: '🖼️', gradient: 'from-pink-400 to-purple-500' },
  { id: 'contact', name: 'Contact', icon: '📧', gradient: 'from-green-400 to-emerald-500' },
  { id: 'resume', name: 'Resume', icon: '📄', gradient: 'from-amber-400 to-orange-500' },
]

function Dock({ onOpenWindow, openWindows }) {
  const [hoveredApp, setHoveredApp] = useState(null)
  const [bounceApp, setBounceApp] = useState(null)

  const handleClick = (appId) => {
    setBounceApp(appId)
    setTimeout(() => setBounceApp(null), 500)
    onOpenWindow(appId)
  }

  return (
    <div className="fixed bottom-2 left-1/2 transform -translate-x-1/2 z-50">
      {/* Dock Container */}
      <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl px-3 py-2 flex items-end gap-1 shadow-2xl">
        {dockApps.map((app) => {
          const isOpen = openWindows?.includes(app.id)
          const isHovered = hoveredApp === app.id
          const isBouncing = bounceApp === app.id
          
          return (
            <div
              key={app.id}
              className="relative group"
              onMouseEnter={() => setHoveredApp(app.id)}
              onMouseLeave={() => setHoveredApp(null)}
            >
              {/* Tooltip */}
              <div className={`
                absolute -top-10 left-1/2 transform -translate-x-1/2
                bg-[#2d2d2d] text-white text-xs px-3 py-1.5 rounded-lg
                opacity-0 group-hover:opacity-100 transition-all duration-200
                whitespace-nowrap pointer-events-none
                ${isHovered ? 'translate-y-0' : 'translate-y-2'}
              `}>
                {app.name}
                {isOpen && <span className="ml-2 text-green-400">•</span>}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-[#2d2d2d]" />
              </div>

              {/* Dock Icon */}
              <button
                onClick={() => handleClick(app.id)}
                className={`
                  relative flex flex-col items-center justify-center
                  transition-all duration-300 ease-out
                  ${isBouncing ? 'animate-bounce' : ''}
                `}
                style={{
                  width: isHovered ? '72px' : '56px',
                  height: isHovered ? '72px' : '56px',
                }}
              >
                {/* Icon Background */}
                <div className={`
                  w-full h-full rounded-2xl
                  bg-gradient-to-br ${app.gradient}
                  shadow-lg
                  flex items-center justify-center
                  transition-all duration-300
                  ${isHovered ? 'scale-110 shadow-xl' : 'scale-100'}
                  ${isOpen ? 'ring-2 ring-white/50 ring-offset-2 ring-offset-transparent' : ''}
                `}>
                  <span className="text-2xl">{app.icon}</span>
                </div>

                {/* Active Indicator */}
                {isOpen && (
                  <div className="absolute -bottom-1 w-1 h-1 bg-white/60 rounded-full" />
                )}
              </button>
            </div>
          )
        })}

        {/* Separator */}
        <div className="w-[1px] h-12 bg-white/20 mx-1 self-center" />

        {/* Trash */}
        <div
          className="relative group"
          onMouseEnter={() => setHoveredApp('trash')}
          onMouseLeave={() => setHoveredApp(null)}
        >
          <div className={`
            absolute -top-10 left-1/2 transform -translate-x-1/2
            bg-[#2d2d2d] text-white text-xs px-3 py-1.5 rounded-lg
            opacity-0 group-hover:opacity-100 transition-all duration-200
            whitespace-nowrap pointer-events-none
            ${hoveredApp === 'trash' ? 'translate-y-0' : 'translate-y-2'}
          `}>
            Trash
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-[#2d2d2d]" />
          </div>
          
          <button
            className="transition-all duration-300"
            style={{
              width: hoveredApp === 'trash' ? '56px' : '48px',
              height: hoveredApp === 'trash' ? '56px' : '48px',
            }}
          >
            <div className="w-full h-full rounded-2xl bg-gray-600/50 flex items-center justify-center">
              <span className="text-xl">🗑️</span>
            </div>
          </button>
        </div>
      </div>

      {/* Dock Reflection */}
      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-[90%] h-4 bg-white/5 backdrop-blur-sm rounded-full" />
    </div>
  )
}

export default Dock
