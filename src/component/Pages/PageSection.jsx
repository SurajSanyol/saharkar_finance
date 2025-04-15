import React from 'react'
import SingleBlogDetails from '../BlogPage/SingleBlogDetails'
import AboutHeroPage from '../About/AboutHeroPage'

const PageSection = () => {
  return (
    <> 
    <AboutHeroPage text={"Page"} subTextFirst={"Home"} subTextSecond={"Page"}/>
       <SingleBlogDetails/>
    </>
  )
}

export default PageSection