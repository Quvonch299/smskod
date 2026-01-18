import End from '@/components/end'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Next from '@/components/Next'
import Section from '@/components/section'
import Section2 from '@/components/section2'
import Section3 from '@/components/section3'
import React from 'react'

export default function page() {
  return (
    <div>
      <Header/>
      <Next/>
      <Section/>
      <Section2/>
      <Section3/>
      <End/>
      <Footer/>
    </div>
  )
}
