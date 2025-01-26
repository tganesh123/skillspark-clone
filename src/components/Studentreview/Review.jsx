import React, { useEffect, useRef, useState } from "react"
import "./Review.css"
import nextIcon from "../../assets/nextIcon.png"
import prevIcon from "../../assets/prevIcon.png"
import user1 from "../../assets/user1.jpg"
import user2 from "../../assets/user2.jpg"
import user3 from "../../assets/user3.jpg"
import user4 from "../../assets/user4.jpg"
import user5 from "../../assets/review1.png"

const Review = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const images = [user5, user5, user5, user5, user5] // Replace with your actual image sources

  // Move to the next set of 3 images
  const nextSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % (images.length - 2)) // Loop back to the first set
  }

  // Move to the previous set of 3 images
  const prevSlide = () => {
    setCurrentIndex(
      prevIndex => (prevIndex - 1 + images.length - 2) % (images.length - 2)
    ) // Loop back to the last set
  }

  // Auto slide every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 2000)

    return () => clearInterval(interval) // Clean up the interval on component unmount
  }, [])
  return (
    <div className='slider-container2'>
      <div
        className='slider1'
        style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}
      >
        {images.map((image, index) => (
          <div className='slidea' key={index}>
            <img src={image} alt={`Image ${index + 1}`} className='slide2' />
          </div>
        ))}
      </div>

      {/* Left and Right navigation buttons */}
      <button className='prev' onClick={prevSlide}>
        ❮
      </button>
      <button className='next' onClick={nextSlide}>
        ❯
      </button>
    </div>
  )
}

export default Review
