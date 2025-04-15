import React from 'react'
import AboutHeroPage from '../../About/AboutHeroPage'
import ServiceCommonpage from '../../CommonComponent/ServiceCommonpage'
import BusinessImage from '../../../assets/ServiceImg/services-lg.jpg'

const Businessloan = () => {
  return (
    <>
         <AboutHeroPage text={"Business Loan"} subTextFirst={"Home"} subTextSecond={"Business Loan"}/>
         <ServiceCommonpage serviceImage={BusinessImage}/>
    </>
  )
}

export default Businessloan