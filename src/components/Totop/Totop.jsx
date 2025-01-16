import React, { useEffect, useState } from "react"
import "./Totop.css"
import { FaArrowCircleUp } from "react-icons/fa"
const Totop = () => {
  const [showButton, setShowButton] = useState(false)

  // Scroll event listener to toggle the button's visibility
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1000) {
        setShowButton(true) // Show the button when scrolled down
      } else {
        setShowButton(false) // Hide the button when at the top
      }
    }

    window.addEventListener("scroll", handleScroll)

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Function to scroll to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <div className='App'>
      {showButton && (
        <button className='totop' onClick={scrollToTop}>
          <FaArrowCircleUp />
        </button>
      )}
    </div>
  )
}

export default Totop
