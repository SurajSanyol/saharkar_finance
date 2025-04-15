import React from 'react'
import AboutHeroPage from '../About/AboutHeroPage'
import TeamExpert from './TeamExpert'
import CheckYourLoan from '../CommonComponent/CheckYourLoan'

const Team = () => {
  return (
    <>
          <AboutHeroPage text={"Team"} subTextFirst={"Home"} subTextSecond={"Team"}/>
          <TeamExpert/>
          <CheckYourLoan/>
    </>
  )
}

export default Team