import React, { useState } from 'react'
import { 
  Folder, 
  Globe, 
  Image, 
  Terminal, 
  Contact,
  Trash2,
  FileText 
} from 'lucide-react'

function Dock({ onOpenWindow }) {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const dockItems = [
    { id: 'finder', name: 'Finder', icon: Folder },
    { id: 'safari', name: 'Safari', icon: Globe },
    { id: 'photos', name: 'Photos', icon: Image },
    { id: 'contact', name: 'Contact', icon: Contact },
    { id: 'terminal', name: 'Terminal', icon: Terminal },
    { id: 'resume', name: 'Resume', icon: FileText },
    { id: 'trash', name: 'Trash', icon: Trash2 },
  ]

  const handleClick = (item) => {
    if (item.id !== 'trash') {
      onOpenWindow(item.id)
    }
  }

  return (
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-2 flex items-end gap-1 border border-white/20 shadow-2xl">
        {dockItems.map((item, index) => {
          const Icon = item.icon
          const isHovered = hoveredIndex === index
          
          return (
            <div
              key={item.id}
              className="relative group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <button
                onClick={() => handleClick(item)}
                className={`
                  dock-icon w-14 h-14 rounded-xl flex items-center justify-center
                  transition-all duration-300 cursor-pointer
                  ${isHovered ? 'translate-y-[-20px]' : 'translate-y-0'}
                  ${item.id === 'finder' ? 'bg-gradient-to-br from-blue-400 to-blue-600' : ''}
                  ${item.id === 'safari' ? 'bg-gradient-to-br from-blue-500 to-cyan-400' : ''}
                  ${item.id === 'photos' ? 'bg-gradient-to-br from-pink-500 to-purple-500' : ''}
                  ${item.id === 'contact' ? 'bg-gradient-to-br from-green-500 to-emerald-500' : ''}
                  ${item.id === 'terminal' ? 'bg-gradient-to-br from-gray-600 to-gray-800' : ''}
                  ${item.id === 'resume' ? 'bg-gradient-to-br from-white to-gray-200' : ''}
                  ${item.id === 'trash' ? 'bg-gradient-to-br from-red-500 to-red-600' : ''}
                  hover:scale-110
                `}
              >
                <Icon size={28} className={item.id === 'resume' ? 'text-gray-800' : 'text-white'} />
              </button>
              
              {/* Tooltip */}
              <div className={`
                absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2
                px-3 py-1.5 bg-gray-900/90 backdrop-blur-sm text-white text-xs
                rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100
                transition-opacity duration-200 pointer-events-none
              `}>
                {item.name}
              </div>
              
              {/* Notification dot */}
              {item.id === 'contact' && (
                <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-red-500 rounded-full border-2 border-[#1e1e1e]" />
              )}
            </div>
          )
        })}
        
        {/* Divider */}
        <div className="w-px h-12 bg-white/20 mx-1" />
        
        {/* Launchpad indicator */}
        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gray-600 to-gray-700 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
          <div className="grid grid-cols-3 gap-0.5">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 bg-white/80 rounded-sm" />
            ))}
          </div>
        </div>
      </div>
      
      {/* Dock reflection */}
      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-[90%] h-4 bg-black/20 blur-xl rounded-full" />
    </div>
  )
}

export default Dock
