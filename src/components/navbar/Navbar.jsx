import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom" // Import Link from react-router-dom
import "../../index.css"
import "./navbar.css"
import menuIcon from "../../assets/menuIcon.png"

const Navbar = () => {
  const [sticky, setSticky] = useState(true)
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > -1 ? setSticky(true) : setSticky(false)
    })
  }, [])
  const [mobileMenu, setMobileMenu] = useState(false)

  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true)
  }

  return (
    <nav className={`nav-container ${sticky ? "dark-nav" : ""}`}>
      <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
        <li>
          <Link to='/All Courses'>All Courses</Link>
        </li>
        <li>
          <Link to='/Upcoming Classes'>Upcoming Courses</Link>
        </li>
        <li>
          <Link to='/About Us'>About Us</Link>
        </li>
        <li>
          <Link to='/faqs'>FAQs</Link>
        </li>
        <li>
          <Link to='/Why Choose Us?'>Why Choose Us</Link>
        </li>
        <li className='nav-item dropdown'>
          <a
            className='nav-link dropdown-toggle'
            href='#'
            id='navbarDropdown'
            role='button'
            data-bs-toggle='dropdown'
            aria-expanded='false'
          >
            Events
          </a>
          <ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
            <li>
              <a className='dropdown-item' href='/past-events'>
                Past Events
              </a>
            </li>
            <li>
              <a className='dropdown-item' href='/upcoming-events'>
                Upcoming Events
              </a>
            </li>
          </ul>
        </li>
        <li>
          <Link to='/contact' className='btn dark-btn'>
            Contact Us
          </Link>
        </li>
      </ul>

      <img src={menuIcon} alt='' className='menu-icon' onClick={toggleMenu} />
    </nav>
  )
}

export default Navbar
