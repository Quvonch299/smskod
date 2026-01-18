'use client'
import Image from 'next/image'
import React, { useState } from 'react'

export default function End() {
  const [isPaused, setIsPaused] = useState(false)

  const logos = [
    { src: '/s.png', width: 161, height: 57 },
    { src: '/a.png', width: 140, height: 139 },
    { src: '/l.png', width: 210, height: 57 },
    { src: '/o.png', width: 94, height: 62 },
    { src: '/m.png', width: 213, height: 121 },
  ]

  return (
    <div className='max-w-7xl mx-auto mt-[112px] px-4 overflow-hidden'>
      <h2 className='text-[48px] font-black mb-8'>Biz hamkorlar</h2>
      <div
        className='flex gap-8 items-center whitespace-nowrap animate-marquee'
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
      >
        {[...logos, ...logos].map((logo, idx) => (
          <div key={idx} className='flex-shrink-0'>
            <Image
              src={logo.src}
              width={logo.width}
              height={logo.height}
              alt='logo'
              className='h-auto object-contain'
            />
          </div>
        ))}
      </div>
      <style jsx>{`
        .animate-marquee {
          display: flex;
          gap: 2rem;
          animation: marquee 20s linear infinite;
        }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  )
}
