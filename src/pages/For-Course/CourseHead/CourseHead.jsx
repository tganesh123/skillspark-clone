import React, { useState } from "react"
import "./CourseHead.css"
import uiux from "../../../assets/card1.png"

import twitter from "../../../assets/twitter.png"
import facebook from "../../../assets/facebook.png"
import pinterest from "../../../assets/pinterest.png"
import linkedIn from "../../../assets/linkedIn.png"

const CourseHead = () => {
  const [hoverEffect, setHoverEffect] = useState(false)
  const toggleHover = () => {
    hoverEffect ? setHoverEffect(false) : setHoverEffect(true)
  }
  return (
    <div className='course-head-container'>
      <div className='elem-container'>
        <img src={uiux} alt='' />
        <div className='flex-parent'>
          <div className='flex-child'>
            <div className='btns'>
              <button>Designing</button>
              <button>upcoming classes</button>
            </div>
            <h1>UI/Ux Design</h1>
            <p>🕟 90 Hr</p>
          </div>
          <div className='sharebtn'>
            {" "}
            <button onMouseOver={() => toggleHover()}>share ➡</button>
            <div className='icons-on-hover'>
              <a
                href='https://www.instagram.com/'
                target='_blank'
                rel='noopener noreferrer'
              >
                {" "}
                <img src={facebook} alt='' className='icon-size-small1' />
              </a>

              <a
                href='https://www.instagram.com/'
                target='_blank'
                rel='noopener noreferrer'
              >
                {" "}
                <img src={twitter} alt='' className='icon-size-small1' />
              </a>

              <a
                href='https://www.instagram.com/'
                target='_blank'
                rel='noopener noreferrer'
              >
                {" "}
                <img src={linkedIn} alt='' className='icon-size-small1' />
              </a>

              <a
                href='https://www.instagram.com/'
                target='_blank'
                rel='noopener noreferrer'
              >
                {" "}
                <img src={pinterest} alt='' className='icon-size-small1' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseHead
