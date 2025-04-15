import React from 'react'
import AboutHeroPage from '../../About/AboutHeroPage'
import ServiceCommonpage from '../../CommonComponent/ServiceCommonpage'
import HomeLoanImage from '../../../assets/ServiceImg/services-home.jpg'

const HomeLoan = () => {
  return (
    <>
    <AboutHeroPage
      text={"Car Loan"}
      subTextFirst={"Home"}
      subTextSecond={"Car Loan"}
    />
    <ServiceCommonpage serviceImage={HomeLoanImage} />
  </>
  )
}

export default HomeLoan