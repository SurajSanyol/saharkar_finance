import React from 'react'
import AboutHeroPage from '../About/AboutHeroPage'
import ImageGallery from './ImageGallery'

const Gallery = () => {
  return (
    <>
        <AboutHeroPage text={"Gallery"} subTextFirst={"Home"} subTextSecond={"Gallery"}/>
        <ImageGallery/>
    </>
  )
}

export default Gallery