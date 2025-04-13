import React from 'react'
import AboutHeroPage from '../About/AboutHeroPage'
import GetInTouch from './GetInTouch'
import GoogleMap from './GoogleMap'

const ContactPage = () => {
  return (
    <>
        <AboutHeroPage text={"Contact Us"} subTextFirst={"Home"} subTextSecond={"Contact Us"}/>
        <GetInTouch/>
        <GoogleMap/>
    </>
  )
}

export default ContactPage