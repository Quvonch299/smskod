import Image from 'next/image'
import React from 'react'

export default function Section3() {
    return (
        <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-4 md:px-0'>
            <div className='mt-12 md:mt-[138px] flex justify-center md:justify-start'>
                <Image src={'/sec7.png'} width={428} height={942} alt='a' className='w-full max-w-[428px] h-auto' />
            </div>
            <div className='text-center md:text-left'>
                <div>
                    <span className='text-3xl sm:text-4xl md:text-[48px] font-black leading-snug'>
                        Orzuyingizdagi loyihani{' '}
                        <span className='text-red-500'>Archmove</span>{' '}
                        bilan birga <br />
                        yarating
                    </span>
                </div>
                <button className="mt-8 md:mt-12 bg-[#FD665E] text-white text-sm sm:text-base w-full sm:w-[190px] h-[56px] rounded-[4px] hover:bg-[#e05550] transition">
                    Bepul konsultatsiya
                </button>
            </div>
        </div>
    )
}
