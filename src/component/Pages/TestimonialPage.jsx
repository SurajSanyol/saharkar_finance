import React from 'react'
import AboutHeroPage from '../About/AboutHeroPage'
import AboutTestimonial from '../About/AboutTestimonial'
import TestimonialContainer from './TestimonialContainer'

const TestimonialPage = () => {
  return (
    <>
         <AboutHeroPage text={"Testimonial"} subTextFirst={"Home"} subTextSecond={"Testimonial"}/>
         <TestimonialContainer/>
         <AboutTestimonial/>

    </>
  )
}

export default TestimonialPage