'use client'
import React, { useEffect, useState } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

export default function Section2() {
  const texts = [
    {
      content: "Ushbu ajoyib veb-sayt uchun sizga minnatdorchilik bildirishni istadik! Fazo salonimizni reklama qilish va O’zbekistonning turli burchaklaridan va hatto undan ham ko`proq odamlardan fikr-mulohaza olish imkoniga ega bo`lganimiz uchun juda minnatdormiz.",
      author: "Mansurov  — CEO Fazo"
    },
    {
      content: "Bizning xizmatlarimizdan foydalanganingiz uchun rahmat! Sizning fikr-mulohazalaringiz bizni yanada yaxshilanishga ilhomlantiradi.",
      author: "Mansurov   — CEO Fazo"
    },
    {
      content: "Har bir mijozimiz biz uchun juda qadrli. Sizning ishonchingiz va qo'llab-quvvatlashingiz uchun tashakkur!",
      author: "Mansurov Ahmad — CEO Fazo"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Avtomatik slayder
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % texts.length);
    }, 5000); // har 5 soniyada o‘tadi
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentIndex(prev => (prev === 0 ? texts.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex(prev => (prev + 1) % texts.length);
  };

  return (
    <div className='max-w-7xl m-auto mt-24 px-4 sm:px-6 lg:px-8'>
      <h2 className='font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[48px] leading-snug sm:leading-[1.3] lg:leading-[1.24] tracking-tight sm:tracking-[-0.02em] lg:tracking-[-0.04em]'>
        Haqiqat bo`lish uchun <br/> juda yaxshi eshitilyapdimi?
      </h2>

      <div className='flex flex-col lg:flex-row gap-10 lg:gap-[410px] mt-10'>
        <div className='flex-1'></div> {/* bo'sh joy */}
        
        <div className='w-full lg:w-[765px] relative'>
          <p className='font-light text-lg sm:text-xl md:text-2xl lg:text-[32px] leading-relaxed sm:leading-[1.5] lg:leading-[1.6] tracking-normal sm:tracking-[0.005em] lg:tracking-[0.01em] transition-opacity duration-700'>
            {texts[currentIndex].content}
          </p>

          <div className='flex flex-col sm:flex-row justify-between mt-4 sm:items-center'>
            <h2 className='mt-4 sm:mt-6 text-base sm:text-lg md:text-xl lg:text-[20px] font-black'>{texts[currentIndex].author}</h2>
            
            <div className='flex gap-4 sm:gap-6 mt-4 sm:mt-0'>
              <button 
                onClick={prevSlide} 
                className='w-10 h-10 sm:w-12 sm:h-12 bg-gray-200 rounded-2xl flex justify-center items-center hover:bg-gray-300 transition'
              >
                <FaArrowLeft />
              </button>
              <button 
                onClick={nextSlide} 
                className='w-10 h-10 sm:w-12 sm:h-12 bg-gray-200 rounded-2xl flex justify-center items-center hover:bg-gray-300 transition'
              >
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
