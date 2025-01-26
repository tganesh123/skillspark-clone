import React, { useState } from "react"
import "./Enquiry.css"
import skillimg from "../../assets/skillspark-courses.jpg"
import skillimg2 from "../../assets/program-skillspark.png"

const Enquiry = () => {
  const [formData, setFormData] = useState({
    course: "",
    joiningDate: "",
    preferredTime: "",
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    message: "",
  })

  const handleChange = e => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleRadioChange = e => {
    setFormData({
      ...formData,
      preferredTime: e.target.value,
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log("Form Submitted", formData)
    // Add form submission logic here (e.g., API call)
  }
  return (
    <>
      <div className='container-join'>
        <div className='heading'>
          <h1>
            Join <span> Skill Spark</span>
          </h1>
          <p>
            Ready to begin your journey to success? Fill the form below and take
            the first step toward your IT journey.
          </p>
        </div>
      </div>
      <div className='both-containing'>
        <div className='form-container-enroll'>
          <h2>Course Registration Form</h2>
          <form onSubmit={handleSubmit} className='course-form'>
            {/* Select Course */}
            <div className='input-group'>
              <label htmlFor='course'>Select Course You Want to Join *</label>
              <select
                id='course'
                name='course'
                value={formData.course}
                onChange={handleChange}
                required
              >
                <option value='' disabled>
                  Select a course
                </option>
                <option value='Advance Excel'>Advance Excel</option>
                <option value='Advance Excel'>Mern Stack</option>
                <option value='Advance Excel'>Digital Marketing</option>
                {/* You can add more courses here */}
              </select>
            </div>

            {/* Preferred Joining Date */}
            <div className='input-group'>
              <label htmlFor='joiningDate'>Preferred Joining Date</label>
              <input
                type='date'
                id='joiningDate'
                name='joiningDate'
                value={formData.joiningDate}
                onChange={handleChange}
                required
              />
            </div>

            {/* Preferred Time */}
            <div className='input-group'>
              <label>Preferred Time</label>
              <div className='radio-group'>
                <input
                  type='radio'
                  id='morningClass'
                  name='preferredTime'
                  value='Morning Class'
                  checked={formData.preferredTime === "Morning Class"}
                  onChange={handleRadioChange}
                  required
                />
                <label htmlFor='morningClass'>Morning Class</label>

                <input
                  type='radio'
                  id='eveningClass'
                  name='preferredTime'
                  value='Evening Class'
                  checked={formData.preferredTime === "Evening Class"}
                  onChange={handleRadioChange}
                  required
                />
                <label htmlFor='eveningClass'>Evening Class</label>
              </div>
            </div>

            {/* Name */}
            <div className='input-group'>
              <label>Name *</label>
              <div className='name-group'>
                <input
                  type='text'
                  id='firstName'
                  name='firstName'
                  placeholder='First Name'
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
                <input
                  type='text'
                  id='lastName'
                  name='lastName'
                  placeholder='Last Name'
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div className='input-group'>
              <label htmlFor='email'>Email *</label>
              <input
                type='email'
                id='email'
                name='email'
                placeholder='youremail@example.com'
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Mobile Number */}
            <div className='input-group'>
              <label htmlFor='mobile'>Mobile Number *</label>
              <input
                type='tel'
                id='mobile'
                name='mobile'
                placeholder='984-1234567'
                value={formData.mobile}
                onChange={handleChange}
                required
              />
            </div>

            {/* Message */}
            <div className='input-group'>
              <label htmlFor='message'>Your Message/Requirement</label>
              <textarea
                id='message'
                name='message'
                placeholder='Write here if you have any requirement.'
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            {/* Submit Button */}
            <button type='submit' className='submit-btn'>
              Submit
            </button>
          </form>
        </div>
        <div className='right-part'>
          <img src={skillimg} alt='' className='image-style' />
          <div className='know-more'>
            <p>
              Do you want to know more about Skill Spark? Do you have any
              queries? Go to our FAQ page and get more details.
            </p>
            <button>know more about us</button>
          </div>

          <img src={skillimg2} alt='' className='image-style' />
        </div>
      </div>
    </>
  )
}

export default Enquiry
