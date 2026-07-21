import React, { useState } from 'react'
import { Folder, FileText, Image, Terminal, HardDrive, Trash2 } from 'lucide-react'

function Desktop({ openWindow }) {
  const [hoveredItem, setHoveredItem] = useState(null)

  const desktopItems = [
    { id: 'projects', name: 'Projects', icon: Folder, color: 'from-blue-500 to-blue-600' },
    { id: 'blog', name: 'Blog', icon: FileText, color: 'from-green-500 to-green-600' },
    { id: 'photos', name: 'Photos', icon: Image, color: 'from-pink-500 to-pink-600' },
    { id: 'contact', name: 'Contact', icon: Terminal, color: 'from-orange-500 to-orange-600' },
    { id: 'resume', name: 'Resume', icon: FileText, color: 'from-purple-500 to-purple-600' },
  ]

  return (
    <div className="absolute top-10 left-0 right-0 bottom-20 p-6">
      <div className="grid grid-cols-5 gap-4 max-w-md">
        {desktopItems.map((item) => {
          const Icon = item.icon
          return (
            <div
              key={item.id}
              className="flex flex-col items-center gap-2 cursor-pointer group"
              onClick={() => openWindow(item.id)}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className={`
                w-20 h-20 rounded-2xl flex items-center justify-center
                bg-gradient-to-br ${item.color}
                shadow-lg transform transition-all duration-300
                group-hover:scale-110 group-hover:shadow-xl
                ${hoveredItem === item.id ? 'animate-bounce-subtle' : ''}
              `}>
                <Icon size={36} className="text-white" />
              </div>
              <span className={`
                text-xs text-center font-medium px-2 py-1 rounded-md
                transition-all duration-200
                ${hoveredItem === item.id ? 'bg-white/20 text-white' : 'text-white/80'}
              `}>
                {item.name}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Desktop
