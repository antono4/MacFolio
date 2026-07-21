import React, { useState, useRef, useEffect } from 'react'
import MenuBar from './components/MenuBar'
import Desktop from './components/Desktop'
import Dock from './components/Dock'
import Window from './components/Window'

function App() {
  const [activeWindow, setActiveWindow] = useState(null)
  const [openWindows, setOpenWindows] = useState([])
  const [windowPositions, setWindowPositions] = useState({})
  const dragRef = useRef(null)

  const openWindow = (type, position = null) => {
    const newWindow = !openWindows.includes(type)
    if (newWindow) {
      const offset = openWindows.length * 30
      setWindowPositions(prev => ({
        ...prev,
        [type]: position || { x: 100 + offset, y: 80 + offset }
      }))
    }
    setOpenWindows(prev => newWindow ? [...prev, type] : prev)
    setActiveWindow(type)
  }

  const closeWindow = (type) => {
    setOpenWindows(prev => prev.filter(w => w !== type))
    setWindowPositions(prev => {
      const newPos = { ...prev }
      delete newPos[type]
      return newPos
    })
    if (activeWindow === type) {
      setActiveWindow(openWindows.length > 1 ? openWindows[openWindows.length - 2] : null)
    }
  }

  const minimizeWindow = (type) => {
    setOpenWindows(prev => prev.filter(w => w !== type))
    if (activeWindow === type) {
      setActiveWindow(openWindows.length > 1 ? openWindows[openWindows.length - 2] : null)
    }
  }

  const updatePosition = (type, x, y) => {
    setWindowPositions(prev => ({
      ...prev,
      [type]: { x, y }
    }))
  }

  // Desktop wallpaper with animated gradient
  const wallpapers = [
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
    'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1920&q=80',
    'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1920&q=80',
  ]

  return (
    <div 
      className="h-screen w-screen overflow-hidden relative"
      style={{
        background: `
          linear-gradient(135deg, rgba(30, 27, 75, 0.95) 0%, rgba(49, 46, 129, 0.9) 50%, rgba(76, 29, 149, 0.85) 100%),
          url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1920&q=80')
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Animated overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20 animate-pulse" />
      
      {/* Menu Bar */}
      <MenuBar onNavigate={openWindow} openWindows={openWindows} />
      
      {/* Desktop */}
      <Desktop openWindow={openWindow} />
      
      {/* Windows */}
      {openWindows.map((type, index) => (
        <Window
          key={type}
          type={type}
          isActive={activeWindow === type}
          position={windowPositions[type] || { x: 100 + index * 30, y: 80 + index * 30 }}
          onFocus={() => setActiveWindow(type)}
          onClose={() => closeWindow(type)}
          onMinimize={() => minimizeWindow(type)}
          onPositionChange={(x, y) => updatePosition(type, x, y)}
        />
      ))}

      {/* Dock */}
      <Dock onOpenWindow={openWindow} openWindows={openWindows} />
    </div>
  )
}

export default App
