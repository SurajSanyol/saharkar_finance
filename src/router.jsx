import { createBrowserRouter } from "react-router";
import App from "./App";
import HomePage from "./component/HomePage/HomePage";
import AboutPage from "./component/About/AboutPage";
import ServicePage from "./component/ServicePage/ServicePage";
import BlogPage from "./component/BlogPage/BlogPage";
import ContactPage from "./component/ContactPage/ContactPage";
import PageSection from "./component/Pages/PageSection";
import SingleBlog from "./component/BlogPage/SingleBlog";
import SingleBlogDetails from "./component/BlogPage/SingleBlogDetails";
import Gallery from "./component/Pages/Gallery";
import Team from "./component/Pages/Team";
import Testimonial from "./component/HomePage/Testimonial";
import TestimonialPage from "./component/Pages/TestimonialPage";
import FaQ from "./component/Pages/FaQ";

 export const appRouter = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {
                 path:'/',
                 element:<HomePage/>
            },
            {
                path:'about',
                element:<AboutPage/>
            },
            {
                path:'service',
                element:<ServicePage/>
            },
            {
                path:'blog',
                element:<BlogPage/>,
                // children:[{
                //      path:'singleblog',
                //      element:<SingleBlog/>
                // }]

            },
            {
                path:'contact',
                element:<ContactPage/>

            },
            {
                 path:'pages',
                 element:<PageSection/>

            },{
                path:'gallery',
                element:<Gallery/>
            },{
                path:'testimonial',
                element:<TestimonialPage/>
            },{
                path:'faq',
                element:<FaQ/>
            }
            

        ]
    }
])

