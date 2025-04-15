import React from 'react'
import AboutHeroPage from '../../About/AboutHeroPage'
import CheckYourLoan from '../../CommonComponent/CheckYourLoan'
import ServiceImgCard from './ServiceImgCard'

const ServiceImg = () => {
  return (
    <>
         <AboutHeroPage text={"Service"} subTextFirst={"Home"} subTextSecond={"Service"}/>
         <ServiceImgCard/>
         <CheckYourLoan/>
    </>
  )
}

export default ServiceImg