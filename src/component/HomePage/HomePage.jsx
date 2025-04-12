import React from 'react'
// import HeroSection from './HeroSection'
import HeroSection from './HeroSection'
import LoanSection from './LoanSection'
import FreeConsultation from './FreeConsultation'
import LenderSection from './LenderSection'
import LoanProcess from './LoanProcess'
import ExpertSection from './ExpertSection'
import LoanCalculator from './LoanCalculator'
import Testimonial from './Testimonial'
import NetworkSection from './NetworkSection'
import ArticleSection from './ArticleSection'
import BrandSection from './BrandSection'



const HomePage = () => {
  return (
    <>
        <HeroSection/>
        <LoanSection/>
        <FreeConsultation/>
        <LenderSection/>
        <LoanProcess/>
        <ExpertSection/>
        <LoanCalculator/>
        <Testimonial/>
        <NetworkSection/>
        <ArticleSection/>
        <BrandSection/>
    </>
  )
}

export default HomePage