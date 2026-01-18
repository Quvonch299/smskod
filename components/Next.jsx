'use client'
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function Next() {
  const images = [
    '/sec2.png',
    '/sec3.jpg',
    '/sec4.jpg',
    '/sec5.jpg',
    '/sec2.png',
    '/sec3.jpg',
    '/sec4.jpg',
    '/sec5.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);  
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);  
      } else {
        setVisibleCount(4); 
      }
    };

    handleResize();  
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const prevSlide = () => {
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  };

  const nextSlide = () => {
    setCurrentIndex(prev => {
      const maxIndex = images.length - visibleCount;
      return Math.min(prev + 1, maxIndex);
    });
  };

  const visibleImages = images.slice(currentIndex, currentIndex + visibleCount);

  return (
    <div className='max-w-7xl m-auto px-4'>
      <div className='flex justify-between items-end mb-10'>
        <h2 className='font-semibold text-3xl sm:text-2xl lg:text-5xl leading-tight tracking-tight'>
          Oilangiz uchun professional <br /> qimmatbaho xonani yarating
        </h2>
        <div className='flex gap-4'>
          <button 
            onClick={prevSlide} 
            className='p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition'
            disabled={currentIndex === 0}
          >
            <FaArrowLeft />
          </button>
          <button 
            onClick={nextSlide} 
            className='p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition'
            disabled={currentIndex >= images.length - visibleCount}
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
      <div className='flex gap-4 overflow-hidden'>
        {visibleImages.map((src, i) => (
          <div key={i} className='flex-shrink-0'>
            <Image 
              src={src} 
              width={305} 
              height={432} 
              alt={`img${i}`} 
              className='rounded-lg object-cover'
            />
          </div>
        ))}
      </div>
    </div>
  )
}
