import React from 'react'
import AboutHeroPage from '../About/AboutHeroPage'
import LoanSection from '../HomePage/LoanSection'
import LoanOptionCheck from './LoanOptionCheck'
import SimpleLoanProcess from './SimpleLoanProcess'
import DreamQuote from './DreamQuote'
import CustomerFaq from './CustomerFaq'

const ServicePage = () => {
  return (
     <>
        <AboutHeroPage text={"Service"} subTextFirst={"Home"} subTextSecond={"Service"} />
        <LoanSection/>
        <LoanOptionCheck/>
        <SimpleLoanProcess/>
        <DreamQuote/>
        <CustomerFaq/>
     </>
  )
}

export default ServicePage