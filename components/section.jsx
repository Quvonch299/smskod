'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import Modal from './Modal'

export default function Section() {
  const [modal, setModal] = useState(false)

  return (
    <div className='max-w-7xl mx-auto mt-24 px-4 sm:px-6 lg:px-8'>
      <h2 className='mb-8 sm:mb-10 font-semibold text-3xl sm:text-4xl lg:text-5xl leading-[124%] tracking-[-0.04em]'>
        Afzallik <br />
        tomonlari
      </h2>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
        <div className='w-full flex justify-center lg:justify-start'>
          <Image src={'/sec6.png'} width={535} height={610} alt='Afzalliklar' className='w-full max-w-[535px] h-auto object-cover' />
        </div>
        <div className='flex flex-col gap-8 sm:gap-12'>
          
          <div className='flex flex-col sm:flex-row gap-4 sm:gap-8 items-start'>
            <svg width="48" height="56" viewBox="0 0 48 56" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M45.874 15.9932C44.1278 30.4272 36.3962 43.489 24.5342 51.9619L23.6064 52.624L22.627 51.9248C10.8476 43.5109 3.3571 30.3767 2.08594 15.9961L23.623 2.35547L45.874 15.9932Z" stroke="black" strokeWidth="4"/>
              <path d="M17.5 24.8995L22.508 29.9075L32.4075 20.008" stroke="#FD665E" strokeWidth="4"/>
            </svg>
            <span className='w-full sm:w-[305px]'>
              <h3 className='mb-2 font-semibold text-lg sm:text-base'>100% kafolatlangan loyihani yakunlash</h3>
              <p className='text-sm sm:text-base'>Birgalikda hisob qaydnomasi bilan loyihani boshqarish dasturi yordamida xavfsiz, qulay va shaffof bo`ling.</p>
            </span>
          </div>
          <div className='flex flex-col sm:flex-row gap-4 sm:gap-8 items-start'>
            <svg width="39" height="48" viewBox="0 0 39 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M37 2V46H2V2H37Z" stroke="black" strokeWidth="4"/>
              <path d="M20.2542 33V31.7661C23.3077 31.5017 25 29.9153 25 27.3301C25 25.1267 23.7676 23.7656 21.3487 23.2661L20.2542 23.0507V20.0052C21.0452 20.1423 21.6246 20.818 21.6522 21.5916H24.7425C24.7149 19.2609 22.9858 17.6158 20.2542 17.3416V16H18.9298V17.3318C15.959 17.5668 14.2483 19.1532 14.2483 21.6895C14.2483 23.8341 15.4808 25.2442 17.8353 25.7926L18.9298 26.0472V29.2005C17.9457 29.0927 17.2375 28.4171 17.1915 27.5553H14C14.0092 30.0622 15.8211 31.6192 18.9298 31.7857V33H20.2542ZM21.8545 27.7316C21.8545 28.5639 21.2567 29.1221 20.2542 29.2005V26.2823C21.3303 26.4977 21.8545 26.9775 21.8545 27.7316ZM17.4766 21.3566C17.4766 20.6025 18.0744 20.0444 18.9298 19.9856V22.7667C17.9824 22.5611 17.4766 22.0714 17.4766 21.3566Z" fill="#FD665E"/>
            </svg>
            <span className='w-full sm:w-[305px]'>
              <h3 className='mb-2 font-semibold text-lg sm:text-base'>Qo`shimcha to`lovlar olinmaydi</h3>
              <p className='text-sm sm:text-base'>Yashirin xarajatlar yo`q. Siz olgan taklifning qiymati siz to`lagan qiymatdir.</p>
            </span>
          </div>
          <div className='flex flex-col sm:flex-row gap-4 sm:gap-8 items-start'>
            <svg width="40" height="53" viewBox="0 0 40 53" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M38 17.9385V51H2V17.9102L19.5322 2.62402L38 17.9385Z" stroke="black" strokeWidth="4"/>
              <circle cx="20" cy="29" r="5" stroke="#FD665E" strokeWidth="4"/>
            </svg>
            <span className='w-full sm:w-[305px]'>
              <h3 className='mb-2 font-semibold text-lg sm:text-base'>Jarayonni bevosita kuzating</h3>
              <p className='text-sm sm:text-base'>Yashirin xarajatlar yo`q. Siz olgan taklifning qiymati siz to`lagan qiymatdir.</p>
            </span>
          </div>
          <button 
            onClick={() => setModal(true)} 
            className="hidden md:inline-block bg-[#FD665E] text-white text-sm sm:text-base w-full sm:w-[190px] h-[56px] mt-4 sm:mt-8 rounded-[4px] hover:bg-[#e05550] transition"
          >
            Bepul konsultatsiya
          </button>
        </div>
      </div>
      {modal && <Modal onClose={() => setModal(false)} />}
    </div>
  )
}
