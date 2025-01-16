import React from "react"
import "./Description.css"
import videoImg from "../../assets/workshopImg.jpeg"
import playIcon from "../../assets/playIcon.png"

const Description = () => {
  return (
    <div className='description'>
      <div className='description-right'>
        <h2>
          What if you could get more than a degree after four years of
          graduation?
        </h2>
        <p>
          At Skill Spark, we are building skill-oriented courses and hands-on
          training modules that perfectly complement the academic curriculum to
          prepare undergrads to make the best of their education from day one.
          We have spent years in various industries sorting through thousands of
          CVs and hiring people that required enormous training and investment
          in almost every industry. Our years of experience—training and shaping
          graduates for our own companies led us to identify huge gaps between
          the academic curriculum and the industry requirement.
        </p>
        <button className='btn'>Enroll Today</button>
      </div>
      <div className='description-left'>
        <img src={videoImg} className='description-img' alt='' />
        <img src={playIcon} alt='' className='play-icon' />
      </div>
    </div>
  )
}

export default Description
