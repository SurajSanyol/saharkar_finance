import React from 'react'
import SingleBlogDetails from '../BlogPage/SingleBlogDetails'
import AboutHeroPage from '../About/AboutHeroPage'

const PageSection = () => {
  return (
    <> 
    <AboutHeroPage text={"Blog Details"} subTextFirst={"Home"} subTextSecond={"Blog Details"}/>
       <SingleBlogDetails/>
    </>
  )
}

export default PageSection