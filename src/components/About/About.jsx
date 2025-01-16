import React from "react"
import "./About.css"
import aboutImage from "../../assets/aboutImage.jpg"

const About = () => {
  return (
    <div className='about'>
      <div className='about-left'>
        <img src={aboutImage} className='about-img' alt='' />
      </div>
      <div className='about-right'>
        <h2>What Differentiates Us?</h2>
        <ol>
          <li>Robust Training Modules</li>
          <li> Academic and Professional Rigor</li>
          <li>Guided Mentorship and Handholding</li>
          <li>Guided Mentorship and Handholding</li>
        </ol>
      </div>
    </div>
  )
}

export default About
