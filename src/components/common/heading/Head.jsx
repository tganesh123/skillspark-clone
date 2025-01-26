import React from "react"
import logo from "../../../assets/skillo.png"
import "./header.css"
import { FaFacebookF } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { IoLogoWhatsapp } from "react-icons/io"
import { FaPhoneVolume } from "react-icons/fa6"
import { FaLocationDot } from "react-icons/fa6"
import { CiLocationOn } from "react-icons/ci"

import menuIcon from "../../../assets/menuIcon.png"
import { Link } from "react-router-dom"

const Head = () => {
  // const [mobileMenu, setMobileMenu] = useState(false)

  // const toggleMenu = () => {
  //   mobileMenu ? setMobileMenu(false) : setMobileMenu(true)
  // }
  return (
    <>
      <div className='fixed'>
        <section className='head'>
          <div className='logo'>
            <Link to='/'>
              <img src={logo} alt='Home Logo' className='logo1' />
            </Link>
          </div>

          <div className='social'>
            <div className='icon-big'>
              <i className='icon i-location'>
                <FaLocationDot className='icon-size-location' />
                <span className='location'>
                  6th floor, Shankhamul Tower
                  <br />
                  {/* <br /> */}
                  Ktm,Nepal
                </span>
              </i>

              <i className='icon'>
                <FaPhoneVolume className='icon-size' />
                <span className='phoneNo'>+977 9802359091/2</span>
              </i>
            </div>
            <div className='icon-small'>
              <a
                href='https://www.facebook.com/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <i className='icon1'>
                  <FaFacebookF className='icon-size-small' />
                </i>
              </a>
              <a
                href='https://www.instagram.com/'
                target='_blank'
                rel='noopener noreferrer'
              >
                {" "}
                <i className='icon1'>
                  <FaInstagram className='icon-size-small' />
                </i>
              </a>

              <a
                href='https://www.whatsapp.com/'
                target='_blank'
                rel='noopener noreferrer'
              >
                {" "}
                <i className='icon1'>
                  <IoLogoWhatsapp className='icon-size-small' />
                </i>
              </a>
            </div>
          </div>

          {/* <img
            src={menuIcon}
            alt=''
            className='menu-icon'
            // onClick={toggleMenu}
          /> */}
        </section>
      </div>
    </>
  )
}

export default Head
