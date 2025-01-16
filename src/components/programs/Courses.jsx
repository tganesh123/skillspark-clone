import React from "react"
import "./Courses.css"
import dm from "../../assets/digitalMarketing.jpg"
import ms from "../../assets/mernStack.jpg"
import ai from "../../assets/ai.jpg"
import cc from "../../assets/careerCons.jpg"
import { FaArrowRight } from "react-icons/fa"

const Courses = () => {
  return (
    <>
      <div className='container mt-4 courses'>
        <div className='row rowMargin'>
          {/* <!-- Card 1 --> */}
          <div className='col-md-3 col-sm-6 mb-4'>
            <div className='card'>
              <img src={ai} className='card-img-top' alt='Card image' />
              <div className='card-body'>
                <button className='card-title courseBtn'>Designing</button>
                <p className='card-text courseTitle'>UI/UX Design</p>
                <p className='card-text courseDuration'> 🕒 90 Hour</p>
              </div>
            </div>
          </div>

          {/* <!-- Card 2 --> */}
          <div className='col-md-3 col-sm-6 mb-4'>
            <div className='card'>
              <img src={ms} className='card-img-top' alt='Card image' />
              <div className='card-body'>
                <button className='card-title courseBtn'>Development</button>
                <p className='card-text courseTitle'>FrontEnd</p>
                <p className='card-text courseDuration'> 🕒 120 Hour</p>
              </div>
            </div>
          </div>

          {/* <!-- Card 3 --> */}
          <div className='col-md-3 col-sm-6 mb-4'>
            <div className='card'>
              <img src={dm} className='card-img-top' alt='Card image' />
              <div className='card-body'>
                <button className='card-title courseBtn'>Designing</button>
                <p className='card-text courseTitle'>Graphics Design</p>
                <p className='card-text courseDuration'> 🕒 90 Hour</p>
              </div>
            </div>
          </div>

          {/* <!-- Card 4 --> */}
          <div className='col-md-3 col-sm-6 mb-4'>
            <div className='card'>
              <img src={ai} className='card-img-top' alt='Card image' />
              <div className='card-body'>
                <button className='card-title courseBtn'>marketing</button>
                <p className='card-text courseTitle'>Digital Marketing</p>
                <p className='card-text courseDuration'> 🕒 90 Hour</p>
              </div>
            </div>
          </div>
          {/* <div className='seemore'>
            <button className='btn dark-btn'>
              see more{" "}
              <i>
                <FaArrowRight />
              </i>
            </button>
          </div> */}
        </div>
        <div className='row rowMargin'>
          {/* <!-- Card 1 --> */}
          <div className='col-md-3 col-sm-6 mb-4'>
            <div className='card'>
              <img src={cc} className='card-img-top' alt='Card image' />
              <div className='card-body'>
                <button className='card-title courseBtn'>Designing</button>
                <p className='card-text courseTitle'>UI/UX Design</p>
                <p className='card-text courseDuration'> 🕒 90 Hour</p>
              </div>
            </div>
          </div>

          {/* <!-- Card 2 --> */}
          <div className='col-md-3 col-sm-6 mb-4'>
            <div className='card'>
              <img src={ai} className='card-img-top' alt='Card image' />
              <div className='card-body'>
                <button className='card-title courseBtn'>Development</button>
                <p className='card-text courseTitle'>FrontEnd</p>
                <p className='card-text courseDuration'> 🕒 120 Hour</p>
              </div>
            </div>
          </div>

          {/* <!-- Card 3 --> */}
          <div className='col-md-3 col-sm-6 mb-4'>
            <div className='card'>
              <img src={ms} className='card-img-top' alt='Card image' />
              <div className='card-body'>
                <button className='card-title courseBtn'>Designing</button>
                <p className='card-text courseTitle'>Graphics Design</p>
                <p className='card-text courseDuration'> 🕒 90 Hour</p>
              </div>
            </div>
          </div>

          {/* <!-- Card 4 --> */}
          <div className='col-md-3 col-sm-6 mb-4'>
            <div className='card'>
              <img src={dm} className='card-img-top' alt='Card image' />
              <div className='card-body'>
                <button className='card-title courseBtn'>Designing</button>
                <p className='card-text courseTitle'>UI/UX Design</p>
                <p className='card-text courseDuration'> 🕒 90 Hour</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Courses
