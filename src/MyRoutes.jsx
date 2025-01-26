import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./Layout"
import HomePage from "./pages/HomePage"
import AboutUs from "./pages/About/AboutUs"
import AllCourses from "./pages/All Courses/AllCourses"
import UpcomingClasses from "./pages/Upcoming Classes/UpcomingClasses"
import WhyChooseUs from "./pages/Why Us/WhyChooseUs"
import MeanStack from "./pages/For-Course/CousrseDetails/MeanStack"
import Enquiry from "./pages/Enquiry/Enquiry"

const MyRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path='/All Courses' element={<AllCourses />} />
            <Route path='/About Us' element={<AboutUs />} />
            <Route path='/Upcoming Classes' element={<UpcomingClasses />} />
            <Route path='/Why Choose Us?' element={<WhyChooseUs />} />
            <Route path='/All Courses/Mean Stack' element={<MeanStack />} />
            <Route path='/enquiry' element={<Enquiry />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default MyRoutes
