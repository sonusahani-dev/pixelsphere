import Image from 'next/image';
import { useState } from 'react';

const Gallery = ({ portfolio }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // ✅ Early return if no portfolio or it's empty
  if (!Array.isArray(portfolio) || portfolio.length === 0) {
    return <div className="text-red-500 mt-4">No portfolio images available.</div>;
  }

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % portfolio.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + portfolio.length) % portfolio.length);
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Portfolio Gallery</h2>

      {/* Main Carousel */}
      <div className="relative w-full h-[500px] rounded-xl overflow-hidden shadow-lg">
        {portfolio[currentIndex] ? (
          <Image
            src={portfolio[currentIndex]}
            alt={`Portfolio ${currentIndex + 1}`}
            fill
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-500">
            Image not found
          </div>
        )}

        {/* Navigation Arrows */}
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white rounded-full p-2 hover:bg-black/70"
        >
          &larr;
        </button>
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white rounded-full p-2 hover:bg-black/70"
        >
          &rarr;
        </button>

        {/* Image Counter */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full">
          {currentIndex + 1} / {portfolio.length}
        </div>
      </div>

      {/* Thumbnail Grid */}
      <div className="grid grid-cols-4 gap-2 mt-4">
        {portfolio.map((img, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`relative h-24 rounded-md overflow-hidden transition-all ${
              index === currentIndex ? 'ring-4 ring-blue-500' : ''
            }`}
          >
            {img ? (
              <Image
                src={img}
                alt={`Thumbnail ${index + 1}`}
                fill
                className="object-cover"
              />
            ) : (
              <div className="bg-gray-100 w-full h-full flex items-center justify-center text-sm text-gray-500">
                No Image
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
