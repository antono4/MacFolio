import React, { useState, useEffect } from 'react'
import { Apple, Search, SlidersHorizontal, Battery, Wifi, Bluetooth, Moon, Volume2 } from 'lucide-react'

function MenuBar({ onNavigate, openWindows }) {
  const [time, setTime] = useState(new Date())
  const [activeMenu, setActiveMenu] = useState(null)
  const [showSlidersHorizontal, setShowSlidersHorizontal] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const menuItems = {
    Portfolio: [
      { label: 'About Me', action: () => onNavigate('resume') },
      { type: 'divider' },
      { label: 'Projects', action: () => onNavigate('projects'), shortcut: '⌘1' },
      { label: 'Blog', action: () => onNavigate('blog'), shortcut: '⌘2' },
      { label: 'Tech Stack', action: () => onNavigate('techstack'), shortcut: '⌘3' },
      { label: 'Contact', action: () => onNavigate('contact'), shortcut: '⌘4' },
      { type: 'divider' },
      { label: 'Resume.pdf', action: () => onNavigate('resume') },
    ],
    File: [
      { label: 'New Window', shortcut: '⌘N', action: () => {} },
      { label: 'New Tab', shortcut: '⌘T', action: () => {} },
      { type: 'divider' },
      { label: 'Close Window', shortcut: '⌘W', action: () => {} },
    ],
    Edit: [
      { label: 'Undo', shortcut: '⌘Z', action: () => {} },
      { label: 'Redo', shortcut: '⇧⌘Z', action: () => {} },
      { type: 'divider' },
      { label: 'Cut', shortcut: '⌘X', action: () => {} },
      { label: 'Copy', shortcut: '⌘C', action: () => {} },
      { label: 'Paste', shortcut: '⌘V', action: () => {} },
    ],
    View: [
      { label: 'as Icons', action: () => {} },
      { label: 'as List', action: () => {} },
      { type: 'divider' },
      { label: 'Show Sidebar', action: () => {}, shortcut: '⌘S' },
      { label: 'Show Preview', action: () => {}, shortcut: '⌘P' },
    ],
    Window: [
      { label: 'Minimize', shortcut: '⌘M', action: () => {} },
      { label: 'Zoom', action: () => {} },
      { type: 'divider' },
      { label: 'Bring All to Front', action: () => {} },
    ],
    Help: [
      { label: 'macOS Help', action: () => {} },
      { type: 'divider' },
      { label: 'Contact Support', action: () => onNavigate('contact') },
      { label: 'View on GitHub', action: () => window.open('https://github.com/antono4/MacFolio', '_blank') },
    ],
  }

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit',
      hour12: true 
    })
  }

  const formatDate = (date) => {
    const options = { weekday: 'short', month: 'short', day: 'numeric' }
    return date.toLocaleDateString('en-US', options)
  }

  return (
    <>
      <div 
        className="h-10 bg-[#1e1e1e]/95 backdrop-blur-xl border-b border-black/30 flex items-center justify-between px-4 relative z-[100] select-none"
        onClick={() => { setActiveMenu(null); setShowSlidersHorizontal(false); }}
      >
        <div className="flex items-center gap-5">
          <button className="text-white/90 hover:text-white transition-colors">
            <Apple size={18} />
          </button>
          
          {Object.entries(menuItems).map(([menu, items]) => (
            <div key={menu} className="relative">
              <button
                className={`text-white/90 text-[13px] font-medium hover:bg-white/10 px-2 py-0.5 rounded-sm transition-colors ${activeMenu === menu ? 'bg-white/20 text-white' : ''}`}
                onClick={(e) => { e.stopPropagation(); setActiveMenu(activeMenu === menu ? null : menu); setShowSlidersHorizontal(false); }}
              >
                {menu}
              </button>
              
              {activeMenu === menu && (
                <div className="absolute top-full left-0 mt-1 bg-[#2d2d2d] rounded-lg shadow-2xl border border-white/10 py-1 min-w-[220px] overflow-hidden">
                  {items.map((item, i) => 
                    item.type === 'divider' ? (
                      <div key={i} className="h-[1px] bg-white/10 my-1" />
                    ) : (
                      <button
                        key={i}
                        className={`w-full text-left px-4 py-1.5 text-white/90 text-[13px] hover:bg-white/10 flex items-center justify-between ${item.disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                        onClick={() => { if (!item.disabled) { item.action?.(); setActiveMenu(null); } }}
                        disabled={item.disabled}
                      >
                        <span>{item.label}</span>
                        {item.shortcut && <span className="text-white/40 text-[11px]">{item.shortcut}</span>}
                      </button>
                    )
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 text-white/70 text-xs">
            {openWindows?.length > 0 && (
              <span className="bg-green-500 w-2 h-2 rounded-full animate-pulse" />
            )}
            <span>{openWindows?.length || 0}</span>
          </div>
          
          <button className="hover:bg-white/10 p-1 rounded transition-colors">
            <Search size={15} className="text-white/80" />
          </button>
          
          <button 
            className="hover:bg-white/10 p-1 rounded transition-colors"
            onClick={(e) => { e.stopPropagation(); setShowSlidersHorizontal(!showSlidersHorizontal); setActiveMenu(null); }}
          >
            <SlidersHorizontal size={15} className="text-white/80" />
          </button>
          
          <span className="text-white/90 text-[13px] font-medium cursor-default">
            {formatTime(time)} · {formatDate(time)}
          </span>
        </div>

        {showSlidersHorizontal && (
          <div 
            className="absolute top-full right-4 mt-2 bg-[#2d2d2d]/95 backdrop-blur-2xl rounded-2xl p-4 shadow-2xl border border-white/10 w-80"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="grid grid-cols-2 gap-3 mb-4">
              <button className="flex items-center gap-3 p-3 bg-white/5 hover:bg-white/10 rounded-xl transition-colors">
                <Wifi size={20} className="text-white/80" />
                <div className="text-left">
                  <p className="text-white/90 text-sm font-medium">Wi-Fi</p>
                  <p className="text-white/40 text-xs">Connected</p>
                </div>
              </button>
              <button className="flex items-center gap-3 p-3 bg-white/5 hover:bg-white/10 rounded-xl transition-colors">
                <Bluetooth size={20} className="text-white/80" />
                <div className="text-left">
                  <p className="text-white/90 text-sm font-medium">Bluetooth</p>
                  <p className="text-white/40 text-xs">On</p>
                </div>
              </button>
              <button className="flex items-center gap-3 p-3 bg-white/5 hover:bg-white/10 rounded-xl transition-colors">
                <Moon size={20} className="text-white/80" />
                <div className="text-left">
                  <p className="text-white/90 text-sm font-medium">Dark Mode</p>
                  <p className="text-white/40 text-xs">Enabled</p>
                </div>
              </button>
              <button className="flex items-center gap-3 p-3 bg-white/5 hover:bg-white/10 rounded-xl transition-colors">
                <Volume2 size={20} className="text-white/80" />
                <div className="text-left">
                  <p className="text-white/90 text-sm font-medium">Sound</p>
                  <p className="text-white/40 text-xs">100%</p>
                </div>
              </button>
            </div>
            
            <div className="bg-white/5 rounded-xl p-3">
              <div className="flex items-center justify-between mb-2">
                <Battery size={24} className="text-green-500" />
                <span className="text-white/90 text-sm font-medium">100%</span>
              </div>
              <p className="text-white/40 text-xs">Battery</p>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default MenuBar
