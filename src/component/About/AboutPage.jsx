import React from 'react'
import AboutHeroPage from './AboutHeroPage'
import AboutInfo from './AboutInfo'
import NetworkSection from '../HomePage/NetworkSection'
import AboutTestimonial from '../About/AboutTestimonial'
import OurPartner from './OurPartner'

const AboutPage = () => {
  return (
    <>
        <AboutHeroPage text={"About Us"} subTextFirst={"Home"} subTextSecond={"About Us"}/>
        <AboutInfo/>
        <AboutTestimonial/>
        <OurPartner/>
        <NetworkSection/>
    </>
  )
}

export default AboutPage