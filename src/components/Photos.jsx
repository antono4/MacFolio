import React, { useState } from 'react'
import { Image, Heart, Download, Share2, X, ChevronLeft, ChevronRight, Grid, MapPin, Calendar, Star, Maximize2 } from 'lucide-react'

const Photos = () => {
  const [activeTab, setActiveTab] = useState('gallery')
  const [selectedPhoto, setSelectedPhoto] = useState(null)
  const [favorites, setFavorites] = useState(new Set([1, 3, 5, 7, 9, 11]))
  const [viewMode, setViewMode] = useState('grid')

  const tabs = [
    { id: 'gallery', label: 'Gallery', icon: Grid },
    { id: 'favorites', label: 'Favorites', icon: Heart },
  ]

  const photos = [
    { id: 1, src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800', title: 'Mountain Sunrise', location: 'Swiss Alps', date: 'March 2024', category: 'Nature' },
    { id: 2, src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800', title: 'Urban Architecture', location: 'New York, USA', date: 'February 2024', category: 'Architecture' },
    { id: 3, src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800', title: 'Starry Night', location: 'Yosemite, USA', date: 'January 2024', category: 'Night Sky' },
    { id: 4, src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800', title: 'Forest Trail', location: 'Oregon, USA', date: 'December 2023', category: 'Nature' },
    { id: 5, src: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=800', title: 'Ocean Sunset', location: 'Maldives', date: 'November 2023', category: 'Seascape' },
    { id: 6, src: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800', title: 'Lake Reflection', location: 'Banff, Canada', date: 'October 2023', category: 'Nature' },
    { id: 7, src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800', title: 'Misty Mountains', location: 'China', date: 'September 2023', category: 'Landscape' },
    { id: 8, src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800', title: 'Green Forest', location: 'Germany', date: 'August 2023', category: 'Nature' },
    { id: 9, src: 'https://images.unsplash.com/photo-1518173946687-a4c036bc9083?w=800', title: 'Desert Dunes', location: 'Morocco', date: 'July 2023', category: 'Landscape' },
    { id: 10, src: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800', title: 'Green Valley', location: 'Iceland', date: 'June 2023', category: 'Landscape' },
    { id: 11, src: 'https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=800', title: 'Autumn Colors', location: 'Vermont, USA', date: 'October 2022', category: 'Nature' },
    { id: 12, src: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800', title: 'Waterfall', location: 'Norway', date: 'May 2022', category: 'Nature' },
    { id: 13, src: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800', title: 'Tropical Beach', location: 'Thailand', date: 'April 2022', category: 'Seascape' },
    { id: 14, src: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=800', title: 'Italian Coast', location: 'Cinque Terre, Italy', date: 'March 2022', category: 'Travel' },
    { id: 15, src: 'https://images.unsplash.com/photo-1536437075651-01d675529a6b?w=800', title: 'Northern Lights', location: 'Norway', date: 'February 2022', category: 'Night Sky' },
  ]

  const filteredPhotos = activeTab === 'favorites' 
    ? photos.filter(p => favorites.has(p.id))
    : photos

  const toggleFavorite = (id, e) => {
    e?.stopPropagation()
    setFavorites(prev => {
      const newFavorites = new Set(prev)
      if (newFavorites.has(id)) {
        newFavorites.delete(id)
      } else {
        newFavorites.add(id)
      }
      return newFavorites
    })
  }

  const openPhoto = (photo) => {
    setSelectedPhoto(photo)
  }

  const closePhoto = () => {
    setSelectedPhoto(null)
  }

  const nextPhoto = () => {
    const currentIndex = filteredPhotos.findIndex(p => p.id === selectedPhoto?.id)
    const nextIndex = (currentIndex + 1) % filteredPhotos.length
    setSelectedPhoto(filteredPhotos[nextIndex])
  }

  const prevPhoto = () => {
    const currentIndex = filteredPhotos.findIndex(p => p.id === selectedPhoto?.id)
    const prevIndex = (currentIndex - 1 + filteredPhotos.length) % filteredPhotos.length
    setSelectedPhoto(filteredPhotos[prevIndex])
  }

  return (
    <div className="h-full bg-gradient-to-br from-slate-900 to-slate-800 overflow-hidden flex flex-col">
      {/* Header */}
      <div className="bg-[#1e1e1e] p-4 border-b border-white/5">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Image size={24} className="text-blue-400" />
            Photos
          </h2>
          <div className="text-white/50 text-sm">
            {filteredPhotos.length} photos
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2">
          {tabs.map((tab) => {
            const Icon = tab.icon
            const count = tab.id === 'favorites' ? favorites.size : photos.length
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeTab === tab.id
                    ? 'bg-blue-500 text-white'
                    : 'bg-white/5 text-white/60 hover:bg-white/10'
                }`}
              >
                <Icon size={16} />
                {tab.label}
                <span className={`text-xs px-2 py-0.5 rounded-full ${
                  activeTab === tab.id ? 'bg-white/20' : 'bg-white/10'
                }`}>
                  {count}
                </span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Photo Grid */}
      <div className="flex-1 p-4 overflow-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer"
              onClick={() => openPhoto(photo)}
            >
              <img
                src={photo.src}
                alt={photo.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Favorite Button */}
              <button
                onClick={(e) => toggleFavorite(photo.id, e)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:scale-110"
              >
                <Heart 
                  size={16} 
                  className={favorites.has(photo.id) ? 'text-red-500 fill-red-500' : 'text-white'} 
                />
              </button>

              {/* Info */}
              <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                <p className="text-white text-sm font-medium truncate">{photo.title}</p>
                <p className="text-white/60 text-xs flex items-center gap-1 mt-1">
                  <MapPin size={10} /> {photo.location}
                </p>
              </div>
            </div>
          ))}
        </div>

        {filteredPhotos.length === 0 && (
          <div className="h-full flex flex-col items-center justify-center text-white/40">
            <Heart size={64} className="mb-4 opacity-50" />
            <p className="text-lg">No favorites yet</p>
            <p className="text-sm mt-2">Click the heart icon on photos to add them to favorites</p>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 bg-black/95 backdrop-blur-sm z-[200] flex items-center justify-center"
          onClick={closePhoto}
        >
          {/* Close Button */}
          <button
            onClick={closePhoto}
            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
          >
            <X size={24} />
          </button>

          {/* Navigation */}
          <button
            onClick={(e) => { e.stopPropagation(); prevPhoto(); }}
            className="absolute left-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); nextPhoto(); }}
            className="absolute right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
          >
            <ChevronRight size={24} />
          </button>

          {/* Photo */}
          <div 
            className="max-w-5xl max-h-[80vh] mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedPhoto.src.replace('w=800', 'w=1600')}
              alt={selectedPhoto.title}
              className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-2xl"
            />
            
            {/* Info Bar */}
            <div className="bg-white/10 backdrop-blur-sm rounded-b-lg p-4 mt-[-8px]">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-white font-semibold text-lg">{selectedPhoto.title}</h3>
                  <div className="flex items-center gap-4 text-white/60 text-sm mt-1">
                    <span className="flex items-center gap-1"><MapPin size={14} /> {selectedPhoto.location}</span>
                    <span className="flex items-center gap-1"><Calendar size={14} /> {selectedPhoto.date}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={(e) => toggleFavorite(selectedPhoto.id, e)}
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                  >
                    <Heart size={20} className={favorites.has(selectedPhoto.id) ? 'fill-red-500 text-red-500' : ''} />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors">
                    <Download size={20} />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors">
                    <Share2 size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Counter */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white/60 text-sm">
            {filteredPhotos.findIndex(p => p.id === selectedPhoto.id) + 1} / {filteredPhotos.length}
          </div>
        </div>
      )}
    </div>
  )
}

export default Photos
