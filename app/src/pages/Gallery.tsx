import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Calendar, MapPin } from 'lucide-react';
import { photos, photoCategories } from '@/data/photos';

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState('全部');
  const [selectedPhoto, setSelectedPhoto] = useState<typeof photos[0] | null>(
    null
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredPhotos =
    activeCategory === '全部'
      ? photos
      : photos.filter((p) => p.category === activeCategory);

  const handlePrev = () => {
    if (selectedPhoto) {
      const currentIndex = filteredPhotos.findIndex(
        (p) => p.id === selectedPhoto.id
      );
      const prevIndex =
        (currentIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
      setSelectedPhoto(filteredPhotos[prevIndex]);
    }
  };

  const handleNext = () => {
    if (selectedPhoto) {
      const currentIndex = filteredPhotos.findIndex(
        (p) => p.id === selectedPhoto.id
      );
      const nextIndex = (currentIndex + 1) % filteredPhotos.length;
      setSelectedPhoto(filteredPhotos[nextIndex]);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedPhoto) return;
      if (e.key === 'Escape') setSelectedPhoto(null);
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhoto, filteredPhotos]);

  return (
    <div className="min-h-screen bg-[#f0efe9] pt-24 pb-16">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-medium text-[#1a1a1a] mb-4">
            相册集
          </h1>
          <p className="text-[#6b6b6b]">记录生活中的美好瞬间</p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center gap-2 mb-10">
          {photoCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 text-sm font-medium rounded-full transition-all ${
                activeCategory === category
                  ? 'bg-[#1a1a1a] text-white'
                  : 'bg-white text-[#6b6b6b] hover:bg-[#e5e5e5] shadow-sm'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Photo Grid - Masonry Style */}
        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhoto(photo)}
              className="group break-inside-avoid bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img
                  src={photo.thumbnail}
                  alt={photo.title}
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium text-[#1a1a1a] mb-1">
                  {photo.title}
                </h3>
                <p className="text-[#9ca3af] text-sm line-clamp-2">
                  {photo.description}
                </p>
                <div className="flex items-center gap-3 mt-3 text-[#9ca3af] text-xs">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {photo.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {photo.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={() => setSelectedPhoto(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedPhoto(null)}
            className="absolute top-4 right-4 p-2 text-white/70 hover:text-white z-10"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Navigation */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 text-white/70 hover:text-white bg-white/10 rounded-full"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 text-white/70 hover:text-white bg-white/10 rounded-full"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          {/* Image */}
          <div
            className="max-w-[90vw] max-h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedPhoto.url}
              alt={selectedPhoto.title}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            <div className="mt-4 text-center text-white">
              <h3 className="text-xl font-medium mb-1">
                {selectedPhoto.title}
              </h3>
              <p className="text-white/70">{selectedPhoto.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
