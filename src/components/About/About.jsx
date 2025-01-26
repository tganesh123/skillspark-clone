import React from "react"
import "./About.css"
import aboutImage from "../../assets/workshopImg.jpeg"
import { Link, useLocation } from "react-router-dom"

const About = () => {
  return (
    <>
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
    </>
  )
}

export default About
