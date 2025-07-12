"use client";
import React, { useEffect } from 'react';
export default function HomeCarousel() {
    const images = ['1.jpg', '2.jpg', '3.jpg','4.jpg'];
    const [currentIndex, setCurrentIndex] = React.useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prev => (prev === images.length - 1 ? 0 : prev + 1));
        }, 1000);
        return () => clearInterval(interval);
    }, [images.length]);
  return (
    <div className="relative w-full max-w-xl mx-auto">
      <div className="relative w-full h-[500px]">
        {images.map((img, idx) => (
          <img
            key={img}
            src={`/carousel/${img}`}
            alt={`Slide ${idx + 1}`}
            style={{ height: '500px', objectFit: 'cover' }}
            className={`absolute top-0 left-0 w-full h-full rounded-lg transition-opacity duration-500 ${idx === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          />
        ))}
      </div>
    </div>
  )
}
