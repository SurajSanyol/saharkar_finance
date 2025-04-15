import React from 'react'
import AboutHeroPage from '../About/AboutHeroPage'
import SingleBlogDetails from './SingleBlogDetails'
const SingleBlog = () => {
  return (
    <>
       <AboutHeroPage text={"Blog Details"} subTextFirst={"Home"} subTextSecond={"Blog Details"}/>
       <SingleBlogDetails/>
    </>
  )
}

export default SingleBlog