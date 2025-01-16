import React, { useRef } from "react"
import "./Review.css"
import nextIcon from "../../assets/nextIcon.png"
import prevIcon from "../../assets/prevIcon.png"
import user1 from "../../assets/user1.jpg"
import user2 from "../../assets/user2.jpg"
import user3 from "../../assets/user3.jpg"
import user4 from "../../assets/user4.jpg"
import user5 from "../../assets/user5.jpg"

const Review = () => {
  const slider1 = useRef()
  let tx = 0
  const slideForward = () => {
    if (tx > -50) {
      tx -= 25
    }
    slider1.current.style.transform = `translateX(${tx}%)`
  }
  const slideBackward = () => {
    if (tx < 0) {
      tx += 25
    }
    slider1.current.style.transform = `translateX(${tx}%)`
  }

  return (
    <div className='testimonials'>
      <img src={nextIcon} alt='' className='next-btn' onClick={slideForward} />
      <img src={prevIcon} alt='' className='prev-btn' onClick={slideBackward} />
      <div className='slider1'>
        <ul ref={slider1}>
          <li>
            <div className='slide1'>
              <div className='user-info'>
                <img src={user5} alt='' />
                <div>
                  <h3>Raju</h3>
                  <span>Lagankhel,Lalitpur</span>
                </div>
              </div>
              <p>
                best in my opinion. It has helped me a lot in building my career
                in the field of IT which was my primary interest from he start.
              </p>
            </div>
          </li>

          <li>
            <div className='slide1'>
              <div className='user-info'>
                <img src={user5} alt='' />
                <div>
                  <h3>Saraswati</h3>
                  <span>Ekantakuna,Lalitpur</span>
                </div>
              </div>
              <p>
                has been a exciting and fruitful journey from the very first
                day. Enjoyed every moment with very understanding mentors and in
                friendly environment
              </p>
            </div>
          </li>

          <li>
            <div className='slide1'>
              <div className='user-info'>
                <img src={user5} alt='' />
                <div>
                  <h3>Suriya Bangda</h3>
                  <span>Chabahil, Kathmandu</span>
                </div>
              </div>
              <p>
                gotta give best award to the skillspark as it helped me a lot in
                my journey and if it was not for Skillspark my motivation was
                already over regarding this field of IT. Thank You SkillSpark.
              </p>
            </div>
          </li>

          <li>
            <div className='slide1'>
              <div className='user-info'>
                <img src={user5} alt='' />
                <div>
                  <h3>Jamey Smart</h3>
                  <span>Bagdole,Lalitpur</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam
                iste provident commodi
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Review
