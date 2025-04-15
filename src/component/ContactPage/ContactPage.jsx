import React from 'react'
import AboutHeroPage from '../About/AboutHeroPage'
import GetInTouch from './GetInTouch'
import GoogleMap from './GoogleMap'

const ContactPage = () => {
  return (
    <div style={{
      zIndex: "-10",
   }}>
        <AboutHeroPage text={"Contact Us"} subTextFirst={"Home"} subTextSecond={"Contact Us"}/>
        <GetInTouch/>
        <GoogleMap/>
    </div>
  )
}

export default ContactPage