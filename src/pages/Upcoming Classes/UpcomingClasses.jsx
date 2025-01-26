import React from "react"
import ForRoute from "../../components/ForRoute/ForRoute"
import ms from "../../assets/ms.png"
import "./Upcoming.css"

const UpcomingClasses = () => {
  const pageName = "Upcoming Classes"
  const path = "/Upcoming Classes"
  return (
    <div>
      <ForRoute path={path} pageName={pageName} />
      <div className='cards-contin'>
        <div className='card card-size'>
          <img src={ms} className='card-img-top' alt='...' />
          <div className='card-body'>
            <button className='card-title title-btn'>Development</button>
            <p className='card-text'>Flutter Development training</p>
            <p className='courseDuration'> ⏰ 90 Hour</p>
          </div>
        </div>
        <div className='card card-size'>
          <img src={ms} className='card-img-top' alt='...' />
          <div className='card-body'>
            <button className='card-title title-btn'>Development</button>
            <p className='card-text'>Flutter Development training</p>
            <p className='courseDuration'> ⏰ 90 Hour</p>
          </div>
        </div>
        <div className='card card-size'>
          <img src={ms} className='card-img-top' alt='...' />
          <div className='card-body'>
            <button className='card-title title-btn'>Development</button>
            <p className='card-text'>Flutter Development training</p>
            <p className='courseDuration'> ⏰ 90 Hour</p>
          </div>
        </div>
        <div className='card card-size'>
          <img src={ms} className='card-img-top' alt='...' />
          <div className='card-body'>
            <button className='card-title title-btn'>Development</button>
            <p className='card-text'>Flutter Development training</p>
            <p className='courseDuration'> ⏰ 90 Hour</p>
          </div>
        </div>
        <div className='card card-size'>
          <img src={ms} className='card-img-top' alt='...' />
          <div className='card-body'>
            <button className='card-title title-btn'>Development</button>
            <p className='card-text'>Flutter Development training</p>
            <p className='courseDuration'> ⏰ 90 Hour</p>
          </div>
        </div>
        <div className='card card-size'>
          <img src={ms} className='card-img-top' alt='...' />
          <div className='card-body'>
            <button className='card-title title-btn'>Development</button>
            <p className='card-text'>Flutter Development training</p>
            <p className='courseDuration'> ⏰ 90 Hour</p>
          </div>
        </div>
        <div className='card card-size'>
          <img src={ms} className='card-img-top' alt='...' />
          <div className='card-body'>
            <button className='card-title title-btn'>Development</button>
            <p className='card-text'>Flutter Development training</p>
            <p className='courseDuration'> ⏰ 90 Hour</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpcomingClasses
