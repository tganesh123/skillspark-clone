import React, { useState } from "react"
import "./Enroll.css"
import classImg from "../../assets/workshopImg.jpeg"
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
            <h5> Enquiry About Courses</h5>

            <p>
              Contact us via phone, email, or visit our office to explore our
              wide range of courses. Get detailed information and support from
              our team.
            </p>
          </li>

          <li>
            {" "}
            <h5>Personalized counselling</h5>
            <p>
              Discuss your goals and interests with our counselors to choose the
              course that perfectly aligns with your career aspirations.
            </p>
          </li>
          <li>
            <h5>Get Admission</h5>
            <p>
              Complete the enrollment process to officially join Skill Spark and
              begin your learning journey.
            </p>
          </li>
          <li>
            <h5>Join Classes</h5>
            <p>
              Attend engaging, hands-on training sessions delivered by
              experienced mentors in a supportive learning environment.
            </p>
          </li>
          <li>
            <h5>Submit Real-World Projects </h5>
            <p>
              Apply your knowledge by working on real-world projects to gain
              practical experience and build a strong portfolio.
            </p>
          </li>
          <li>
            <h5>Get Certified </h5>
            <p>
              Earn a professional certification upon course completion to
              showcase your expertise and commitment.
            </p>
          </li>
          <li>
            <h5>Internship or Job Placement </h5>
            <p>
              Secure valuable internship opportunities or land your dream job
              with the support of Skill Spark’s trusted placement partners and
              top organizations.
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
