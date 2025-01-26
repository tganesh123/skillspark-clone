import React from "react"
// import "./Slider.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"

import laptop from "../assets/laptopwall.jpg"
import sliderImg from "../assets/sliderImg.png"
import sliderImg2 from "../assets/sliderImg2.png"
import sliderImg1 from "../assets/slider1img.png"
const Slider = () => {
  return (
    <div
      id='carouselExampleInterval'
      className='carousel slide carouselMargin'
      data-bs-ride='carousel'
    >
      <div className='carousel-inner'>
        <div className='carousel-item active' data-bs-interval='3000'>
          <img src={sliderImg1} className='d-block w-100 sliderImg' alt='...' />
        </div>
        <div className='carousel-item' data-bs-interval='2000'>
          <img src={sliderImg2} className='d-block w-100 sliderImg' alt='...' />
        </div>
        <div className='carousel-item' data-bs-interval='2000'>
          <img src={sliderImg2} className='d-block w-100 sliderImg' alt='...' />
        </div>
      </div>
      <button
        className='carousel-control-prev'
        type='button'
        data-bs-target='#carouselExampleInterval'
        data-bs-slide='prev'
      >
        <span className='carousel-control-prev-icon' aria-hidden='true'></span>
        <span className='visually-hidden'>Previous</span>
      </button>
      <button
        className='carousel-control-next'
        type='button'
        data-bs-target='#carouselExampleInterval'
        data-bs-slide='next'
      >
        <span className='carousel-control-next-icon' aria-hidden='true'></span>
        <span className='visually-hidden'>Next</span>
      </button>
    </div>
  )
}

export default Slider
