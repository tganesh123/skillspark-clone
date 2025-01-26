import React from "react"
import "./Footer2.css"
import { FaFacebookF } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"

import { IoLogoWhatsapp } from "react-icons/io"
import skillLogo from "../../assets/skillspark-white.png"
import { Link } from "react-scroll"

const Footer2 = () => {
  return (
    <div className='contain'>
      <div className='topf'>
        <p>Get connected with us on social networks</p>
        <div className='social-iconsf'>
          <a
            href='https://www.instagram.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            {" "}
            <i>
              <FaFacebookF className='icon-size-small' />
            </i>
          </a>

          <a
            href='https://www.instagram.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            {" "}
            <i>
              <FaInstagram className='icon-size-small' />
            </i>
          </a>

          <a
            href='https://www.instagram.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            {" "}
            <i>
              <IoLogoWhatsapp className='icon-size-small' />
            </i>
          </a>

          <a
            href='https://www.instagram.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            {" "}
            <i>
              <FaLinkedin className='icon-size-small' />
            </i>
          </a>
        </div>
      </div>

      <div className='cols4'>
        <div className='forlogo'>
          <div className='firstcol'>
            <img src={skillLogo} alt='' />
            <p>At Skill Spark, we’re here to empower your IT journey.</p>
          </div>
        </div>
        <div className='forothers'>
          <div className='secondcol'>
            <h2>Company</h2>

            <p>About Us</p>
            <p>Corporate Training</p>
            <p>contact Us</p>
          </div>
          <div className='secondcol'>
            <h2>Career</h2>

            <p>Hire From Us</p>
            <p>Become a Teacher</p>
            <p>Work With Us</p>
          </div>
          <div className='secondcol'>
            <h2>Resources</h2>

            <p>Blog</p>
            <p>Faq's</p>
            <p>Courses</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer2
