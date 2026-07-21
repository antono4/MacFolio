import React, { useState } from 'react'

const desktopIcons = [
  { id: 'projects', name: 'Projects', icon: '🚀', gradient: 'from-purple-500 to-pink-500', description: 'View my work' },
  { id: 'blog', name: 'Blog', icon: '✍️', gradient: 'from-orange-500 to-red-500', description: 'Read articles' },
  { id: 'photos', name: 'Photos', icon: '🖼️', gradient: 'from-pink-500 to-purple-500', description: 'Gallery' },
  { id: 'contact', name: 'Contact', icon: '📧', gradient: 'from-green-500 to-emerald-500', description: 'Get in touch' },
  { id: 'resume', name: 'Resume', icon: '📄', gradient: 'from-amber-500 to-orange-500', description: 'My CV' },
  { id: 'techstack', name: 'Tech Stack', icon: '⚛️', gradient: 'from-cyan-500 to-blue-500', description: 'Skills' },
]

function Desktop({ openWindow }) {
  const [selectedIcon, setSelectedIcon] = useState(null)
  const [hoveredIcon, setHoveredIcon] = useState(null)

  const handleDoubleClick = (id) => {
    openWindow(id)
  }

  return (
    <div 
      className="h-[calc(100vh-130px)] w-full p-6 grid grid-cols-1 gap-4"
      style={{
        gridTemplateColumns: 'repeat(auto-fill, 90px)',
        gridTemplateRows: 'repeat(auto-fill, 100px)',
        alignContent: 'start',
      }}
    >
      {desktopIcons.map((icon) => (
        <div
          key={icon.id}
          className="flex flex-col items-center gap-2 cursor-pointer group"
          onClick={() => setSelectedIcon(icon.id)}
          onDoubleClick={() => handleDoubleClick(icon.id)}
          onMouseEnter={() => setHoveredIcon(icon.id)}
          onMouseLeave={() => setHoveredIcon(null)}
        >
          {/* Icon Container */}
          <div 
            className={`
              relative w-20 h-20 rounded-2xl
              flex items-center justify-center
              transition-all duration-300
              group-hover:scale-110
              ${selectedIcon === icon.id ? 'bg-white/20 ring-2 ring-white/40' : ''}
              ${hoveredIcon === icon.id ? 'bg-white/10' : ''}
            `}
          >
            {/* Gradient Background */}
            <div className={`
              absolute inset-0 rounded-2xl
              bg-gradient-to-br ${icon.gradient}
              opacity-90
              group-hover:opacity-100
              group-hover:shadow-lg
              transition-all duration-300
            `} />
            
            {/* Icon */}
            <span className="relative text-4xl filter drop-shadow-lg">
              {icon.icon}
            </span>

            {/* Selection Ring */}
            {selectedIcon === icon.id && (
              <div className="absolute inset-0 rounded-2xl border-2 border-dashed border-white/60 animate-pulse" />
            )}
          </div>

          {/* Label */}
          <div className={`
            text-center max-w-[80px]
            transition-all duration-200
          `}>
            <p className={`
              text-white text-sm font-medium
              ${hoveredIcon === icon.id ? 'text-white' : 'text-white/90'}
              drop-shadow-lg
            `}>
              {icon.name}
            </p>
            {hoveredIcon === icon.id && (
              <p className="text-white/60 text-xs mt-0.5">{icon.description}</p>
            )}
          </div>
        </div>
      ))}

      {/* Spacer to push icons to top */}
      <div className="col-span-full flex-1" />
    </div>
  )
}

export default Desktop
