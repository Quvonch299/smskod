'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import Modal from './Modal'

export default function Header() {
    const [modal, setModal] = useState(false)
  return (
    <div className='max-w-7xl mx-auto mt-12 px-4 sm:px-6 lg:px-8 mb-[60px]'>
      <h2 className='font-semibold leading-tight tracking-tight text-4xl sm:text-5xl lg:text-[112px] lg:w-[870px]'>
        Orzuyingizdagi <span className='text-[#FD665E]'>Uy</span>ni quring
      </h2>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12 items-center'>
        <div>
          <p className='text-sm sm:text-base lg:text-[16px] lg:w-[290px]'>
            O’zbekistondagi birinchi va eng ishonchli uylarni loyihalash va qurish bozori. Eng yaxshi natija uchun loyiha boshqaruvi bilan 100% kafolatlangan xavfsiz, qulay va shaffof qurilish
          </p>

          <button    onClick={() => setModal(true)} className="hidden md:inline-block bg-[#FD665E] text-white text-sm sm:text-base w-[190px] h-[56px] mt-12 rounded-[4px] hover:bg-[#e05550] transition">
            So’rov jo’nating
          </button>
        </div>
        <div className='w-full flex justify-center lg:justify-end'>
          <Image 
            src={'/sec1.png'} 
            alt='Orzu uyingiz' 
            width={765} 
            height={480} 
            className='w-full max-w-[765px] h-auto object-cover rounded-lg'
          />
        </div>
      </div>
            {modal && <Modal onClose={() => setModal(false)} />}
    </div>
  )
}
