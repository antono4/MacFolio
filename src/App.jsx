import React, { useState } from 'react'
import MenuBar from './components/MenuBar'
import Desktop from './components/Desktop'
import Dock from './components/Dock'
import Window from './components/Window'
import TechStack from './components/TechStack'
import Blog from './components/Blog'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Photos from './components/Photos'

function App() {
  const [activeWindow, setActiveWindow] = useState(null)
  const [openWindows, setOpenWindows] = useState([])

  const openWindow = (type) => {
    if (!openWindows.includes(type)) {
      setOpenWindows([...openWindows, type])
    }
    setActiveWindow(type)
  }

  const closeWindow = (type) => {
    setOpenWindows(openWindows.filter(w => w !== type))
    if (activeWindow === type) {
      setActiveWindow(openWindows.length > 1 ? openWindows[openWindows.length - 2] : null)
    }
  }

  const minimizeWindow = (type) => {
    if (activeWindow === type) {
      setActiveWindow(openWindows.length > 1 ? openWindows[openWindows.length - 2] : null)
    }
  }

  return (
    <div className="h-screen w-screen bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] overflow-hidden relative">
      <MenuBar onNavigate={openWindow} />
      <Desktop openWindow={openWindow} />
      
      {openWindows.map((type) => (
        <Window
          key={type}
          type={type}
          isActive={activeWindow === type}
          onFocus={() => setActiveWindow(type)}
          onClose={() => closeWindow(type)}
          onMinimize={() => minimizeWindow(type)}
        />
      ))}

      <Dock onOpenWindow={openWindow} />
    </div>
  )
}

export default App
