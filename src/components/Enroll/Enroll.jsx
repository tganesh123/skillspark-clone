import React, { useState } from "react"
import "./Enroll.css"
import classImg from "../../assets/classroom.jpg"
import EnrollForm from "../EnrollFrom/EnrollForm"

const Enroll = ({ setPlayState }) => {
  const [showForm, setShowForm] = useState(false)

  const handleEnrollClick = () => {
    setShowForm(true)
  }

  return (
    <div className='enroll'>
      <div className='enroll-left'>
        <img
          src={classImg}
          className='enroll-img'
          alt=''
          onClick={() => {
            setPlayState(true)
          }}
        />
      </div>
      <div className='enroll-right'>
        <h2>Start your journey with skillspark</h2>
        <ol>
          <li>
            Enquiry About Courses
            <p>
              Contact us via phone, email, or visit our office to explore our
              wide range of courses. Get detailed information and support from
              our team.
            </p>
          </li>

          <li>
            {" "}
            Personalized Counseling{" "}
            <p>
              Discuss your goals and interests with our counselors to choose the
              course that perfectly aligns with your career aspirations.
            </p>
          </li>
          <li>
            GGet Admission{" "}
            <p>
              Complete the enrollment process to officially join Skill Spark and
              begin your learning journey.
            </p>
          </li>
          <li>
            Join Classes{" "}
            <p>
              Attend engaging, hands-on training sessions delivered by
              experienced mentors in a supportive learning environment.
            </p>
          </li>
        </ol>

        <button className='btn dark-btn' onClick={handleEnrollClick}>
          Enroll now
        </button>

        {showForm && <EnrollForm />}
      </div>
    </div>
  )
}

export default Enroll
