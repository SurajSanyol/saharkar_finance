import React from 'react'
import AboutHeroPage from '../About/AboutHeroPage'
import BlogHomePage from './BlogHomePage'
import { Outlet } from 'react-router'

const BlogPage = () => {
  return (
    <>
        <AboutHeroPage text={"Blog"} subTextFirst={"Home"} subTextSecond={"Blog"}/>
        <BlogHomePage/>
        {/* <Outlet/> */}
    </>
  )
}

export default BlogPage