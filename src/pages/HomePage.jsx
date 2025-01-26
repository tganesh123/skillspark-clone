import React from "react"
import Slider from "../components/Slider"
import Head from "../components/common/heading/Head"
import Navbar from "../components/navbar/Navbar"
import About from "../components/About/About"
import Enroll from "../components/Enroll/Enroll"
import Title from "../components/title/Title"
import Courses from "../components/programs/Courses"
import Review from "../components/Studentreview/Review"
import Partners from "../components/Partners/Partners"
import Contact from "../components/Contact/Contact"
import Description from "../components/Description/Description"
import CategoriSearch from "../components/CategoriSearch/CategoriSearch"

const HomePage = () => {
  return (
    <>
      {/* <Head /> */}
      {/* <Navbar /> */}
      <Slider />
      <Title subTitle='Our Program' title='What We Offer' />
      <Courses />
      <CategoriSearch />
      <Title
        title='Our Placement Partners'
        subTitle='Collaborating with Our Trusted Placement Partners to Connect Talent with Opportunity'
      />
      <Partners />
      <Description />
      <Title subTitle='Know more' title='About Us' />
      <About />

      <Enroll />
      <Title
        subTitle='Read What Our Students Say About Their Skill Spark Experience'
        title='Our Students Review'
      />
      <Review />
      <Contact />
    </>
  )
}

export default HomePage
