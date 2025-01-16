import React, { useEffect, useState } from "react"
import "../../index.css"
import "./navbar.css"
import { Link } from "react-scroll"
import menuIcon from "../../assets/menuIcon.png"

const Navbar = () => {
  const [sticky, setSticky] = useState(false)
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false)
    })
  }, [])
  const [mobileMenu, setMobileMenu] = useState(false)

  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true)
  }

  return (
    <nav className={`container1 ${sticky ? "dark-nav" : ""}`}>
      <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
        <li>
          <Link to='courses' smooth={true} offset={-260} duration={500}>
            All Courses
          </Link>
        </li>
        <li>
          <Link to='courses' smooth={true} offset={0} duration={500}>
            Upcoming Courses
          </Link>
        </li>
        <li>
          {" "}
          <Link to='about' smooth={true} offset={-150} duration={500}>
            About Us
          </Link>
        </li>
        <li>
          {" "}
          <Link to='#' smooth={true} offset={0} duration={500}>
            FAQs
          </Link>
        </li>
        <li>
          {" "}
          <Link to='testimonials' smooth={true} offset={-260} duration={500}>
            Why Choose Us
          </Link>
        </li>
        <li class='nav-item dropdown'>
          <a
            class='nav-link dropdown-toggle'
            href='#'
            id='navbarDropdown'
            role='button'
            data-bs-toggle='dropdown'
            aria-expanded='false'
          >
            Events
          </a>
          <ul class='dropdown-menu' aria-labelledby='navbarDropdown'>
            <li>
              <a class='dropdown-item' href='#'>
                Past Events
              </a>
            </li>
            <li>
              <a class='dropdown-item' href='#'>
                upcoming Events
              </a>
            </li>
          </ul>
        </li>
        <li>
          <Link
            to='contact'
            smooth={true}
            offset={-260}
            duration={500}
            className='btn'
          >
            Contact Us
          </Link>
        </li>
      </ul>
      <img src={menuIcon} alt='' className='menu-icon' onClick={toggleMenu} />
    </nav>
  )
}

export default Navbar
