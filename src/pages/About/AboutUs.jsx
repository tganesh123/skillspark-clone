import React from "react"
import "./AboutUs.css"
import aboutImage from "../../assets/workshopImg.jpeg"
import { BiArchive } from "react-icons/bi"
import { Link, useLocation } from "react-router-dom"
import ForRoute from "../../components/ForRoute/ForRoute"

const About = () => {
  const path = "/About Us"
  const pageName = "About Us"
  const location = useLocation()

  // const pageStyle =
  //   location.pathname === "/About Us"
  //     ? { marginTop: "1000px" }
  //     : { marginTop: "50px" }
  return (
    <>
      <ForRoute path={path} pageName={pageName} />

      <div className='about'>
        <div className='about-left'>
          <img src={aboutImage} className='about-img' alt='' />
        </div>
        <div className='about-right'>
          <h2>
            At Skill Spark, we're passionate about fostering IT excellence.
          </h2>
          <p className='about-text'>
            Our team of experienced professionals and educators have come
            together with a singular goal in mind: to provide the best IT
            training experience possible. We understand the unique challenges
            and opportunities in the tech world, and we’re dedicated to helping
            you navigate them successfully. We are a group of industry veterans,
            academicians, and IT professionals with intentions to reduce the gap
            between academics and industry.
          </p>
          <button className='btn'> Enroll Today</button>
        </div>
      </div>
      <div className='mission'>
        <div className='mission-about-left'>
          <h1 className='our'>OUR</h1>
          <h1 className='mission1'>MISSION</h1>
        </div>
        <div className='mission-about-right'>
          <p>
            To empower individuals with the knowledge, skills, and confidence
            they need to thrive in the IT industry. We believe that everyone has
            the potential to excel in technology, and we’re committed to making
            quality IT education accessible to all.
          </p>
          <p>
            To help students learn beyond the four walls of their classes with
            hands-on training, guided mentorship, and real-life projects while
            pursuing their education.
          </p>
        </div>
      </div>
      <div className='mission vision'>
        <div className='mission-about-right'>
          <p>
            To set the standard in IT education, ignite the potential of
            individuals to excel in an ever-evolving technology-driven world.
          </p>
          <p>
            To make sure every graduate in this country has the right skills and
            expertise to kickstart their career from the next day of their
            graduation.
          </p>
        </div>
        <div className='mission-about-left'>
          <h1 className='our1'>OUR</h1>
          <h1 className='mission1'>VISION</h1>
        </div>
      </div>

      <div className='text1'>
        <h1>
          “One day every graduate is equipped with skills and competencies to
          start their career pursuits in their chosen industry from the next day
          of their graduation.”
        </h1>
      </div>
      <div
        className='container-for-card
    '
      >
        <div className='about-card'>
          <div className='for-icon'>
            <BiArchive />
          </div>
          <div className='for-description'>
            <h1>Robust Training Modules</h1>
            <p>
              Our training modules are developed by industry professionals in
              collaboration with academic veterans to answer the ever-changing
              needs in the knowledge economy. Graduates that combine our
              training from the very first day of their undergraduate to the
              very last can make the best of the years spent in their college.
            </p>
          </div>
        </div>
        <div className='about-card'>
          <div className='for-icon'>
            <BiArchive />
          </div>
          <div className='for-description'>
            <h1>Robust Training Modules</h1>
            <p>
              Our training modules are developed by industry professionals in
              collaboration with academic veterans to answer the ever-changing
              needs in the knowledge economy. Graduates that combine our
              training from the very first day of their undergraduate to the
              very last can make the best of the years spent in their college.
            </p>
          </div>
        </div>
        <div className='about-card'>
          <div className='for-icon'>
            <BiArchive />
          </div>
          <div className='for-description'>
            <h1>Robust Training Modules</h1>
            <p>
              Our training modules are developed by industry professionals in
              collaboration with academic veterans to answer the ever-changing
              needs in the knowledge economy. Graduates that combine our
              training from the very first day of their undergraduate to the
              very last can make the best of the years spent in their college.
            </p>
          </div>
        </div>
        <div className='about-card'>
          <div className='for-icon'>
            <BiArchive />
          </div>
          <div className='for-description'>
            <h1>Robust Training Modules</h1>
            <p>
              Our training modules are developed by industry professionals in
              collaboration with academic veterans to answer the ever-changing
              needs in the knowledge economy. Graduates that combine our
              training from the very first day of their undergraduate to the
              very last can make the best of the years spent in their college.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
