import React from 'react'
import AboutHeroPage from '../../About/AboutHeroPage'
import ServiceCommonpage from '../../CommonComponent/ServiceCommonpage'
import educationloanImg from '../../../assets/ServiceImg/services-education.jpg'


const EducationLoan = () => {
  return (
    <>
        <AboutHeroPage text={"Education Loan"} subTextFirst={"Home"} subTextSecond={"Education Loan"}/>
        <ServiceCommonpage serviceImage={educationloanImg}/>
    </>
  )
}

export default EducationLoan