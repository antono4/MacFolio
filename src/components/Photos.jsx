import React, { useState } from 'react'
import { Heart, Share2, Download, Grid, Map, Clock } from 'lucide-react'

function Photos() {
  const [activeTab, setActiveTab] = useState('gallery')
  const [selectedPhoto, setSelectedPhoto] = useState(null)

  const tabs = [
    { id: 'gallery', label: 'Gallery', icon: Grid },
    { id: 'favorites', label: 'Favorites', icon: Heart },
    { id: 'places', label: 'Places', icon: Map },
    { id: 'recents', label: 'Recents', icon: Clock },
  ]

  const photos = [
    { id: 1, src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600', title: 'Mountain View', favorite: true },
    { id: 2, src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600', title: 'City Lights', favorite: true },
    { id: 3, src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600', title: 'Night Sky', favorite: false },
    { id: 4, src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600', title: 'Forest Path', favorite: true },
    { id: 5, src: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=600', title: 'Ocean Sunset', favorite: false },
    { id: 6, src: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600', title: 'Lake Reflection', favorite: true },
    { id: 7, src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600', title: 'Foggy Hills', favorite: false },
    { id: 8, src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600', title: 'Green Forest', favorite: true },
    { id: 9, src: 'https://images.unsplash.com/photo-1518173946687-a4c036bc9083?w=600', title: 'Desert Dunes', favorite: false },
    { id: 10, src: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=600', title: 'Green Valley', favorite: true },
    { id: 11, src: 'https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=600', title: 'Autumn Colors', favorite: false },
    { id: 12, src: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=600', title: 'Waterfall', favorite: true },
  ]

  const filteredPhotos = activeTab === 'favorites' 
    ? photos.filter(p => p.favorite)
    : photos

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-white/10">
        <h2 className="text-xl font-bold text-white mb-4">Photos</h2>
        
        {/* Tabs */}
        <div className="flex gap-2">
          {tabs.map((tab) => {
            const Icon = tab.icon
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium
                  transition-all duration-200
                  ${activeTab === tab.id 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'}
                `}
              >
                <Icon size={16} />
                {tab.label}
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
              onClick={() => setSelectedPhoto(photo)}
            >
              <img
                src={photo.src}
                alt={photo.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-white text-sm font-medium truncate">{photo.title}</p>
                  <div className="flex items-center gap-2 mt-2">
                    {photo.favorite && <Heart size={16} className="text-red-400 fill-red-400" />}
                  </div>
                </div>
              </div>

              {/* Action buttons on hover */}
              <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-colors">
                  <Heart size={14} />
                </button>
                <button className="w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-colors">
                  <Share2 size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filteredPhotos.length === 0 && (
          <div className="h-full flex flex-col items-center justify-center text-white/40">
            <Heart size={48} className="mb-4 opacity-50" />
            <p>No favorites yet</p>
          </div>
        )}
      </div>

      {/* Photo Viewer Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-8"
          onClick={() => setSelectedPhoto(null)}
        >
          <button
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            onClick={() => setSelectedPhoto(null)}
          >
            ✕
          </button>
          
          <img
            src={selectedPhoto.src.replace('w=600', 'w=1200')}
            alt={selectedPhoto.title}
            className="max-w-full max-h-full object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
          
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-4">
            <button className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors">
              <Heart size={18} className={selectedPhoto.favorite ? 'fill-red-400 text-red-400' : ''} />
              <span>Favorite</span>
            </button>
            <button className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors">
              <Download size={18} />
              <span>Download</span>
            </button>
            <button className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors">
              <Share2 size={18} />
              <span>Share</span>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Photos
