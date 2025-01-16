import React from "react"
import logo from "../../../assets/skillo.png"
import "./header.css"
import { FaFacebookF } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { IoLogoWhatsapp } from "react-icons/io"
import { FaPhoneVolume } from "react-icons/fa6"
import { CiLocationOn } from "react-icons/ci"

import menuIcon from "../../../assets/menuIcon.png"

const Head = () => {
  // const [mobileMenu, setMobileMenu] = useState(false)

  // const toggleMenu = () => {
  //   mobileMenu ? setMobileMenu(false) : setMobileMenu(true)
  // }
  return (
    <>
      <div className='fixed'>
        <section className='head'>
          <div className='flexSB'>
            <div className='logo'>
              <img src={logo} alt='' className='logo1' />
            </div>

            <div className='social'>
              <i className='icon icon-big'>
                <CiLocationOn className='icon-size' />
              </i>
              <span className='location'>
                6th floor, Shankhamul Tower
                <br />
                Ktm,Nepal
              </span>
              <i className='icon icon-big'>
                <FaPhoneVolume className='icon-size' />
              </i>
              <span className='phoneNo'>+977 9802359091/2</span>

              <i className='icon'>
                <FaFacebookF className='icon-size' />
              </i>
              <i className='icon'>
                <FaInstagram className='icon-size' />
              </i>
              <i className='icon'>
                <IoLogoWhatsapp className='icon-size' />
              </i>
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
