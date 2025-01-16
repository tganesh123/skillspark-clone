import React from "react"
import "./Contact.css"
import msgIcon from "../../assets/msgIcon.png"
import mailIcon from "../../assets/mailIcon.png"
import phoneIcon from "../../assets/phoneIcon.png"
import locationIcon from "../../assets/locationIcon.png"
// import whiteArrow form '../../assets/'
import { FaArrowRight } from "react-icons/fa"

const Contact = () => {
  const [result, setResult] = React.useState("")

  const onSubmit = async event => {
    event.preventDefault()
    setResult("Sending....")
    const formData = new FormData(event.target)

    formData.append("access_key", "d69493fc-df7f-4c32-bbd1-a839e6fce0cd")

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    })

    const data = await response.json()

    if (data.success) {
      setResult("Form Submitted Successfully")
      event.target.reset()
    } else {
      console.log("Error", data)
      setResult(data.message)
    }
  }
  return (
    <div className='contact'>
      <div className='contact-col'>
        <h3>
          send us message <img src={msgIcon} alt='' />
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ex sed
          quo temporibus ab? Esse.
        </p>
        <ul>
          <li>
            {" "}
            <img src={mailIcon} alt='' />
            Contact@skillspark.dev
          </li>
          <li>
            <img src={phoneIcon} alt='' />
            980780980
          </li>
          <li>
            <img src={locationIcon} alt='' />
            shankamul tower, Ktm <br />
            6th floor,buliding
          </li>
        </ul>
      </div>
      <div className='contact-col'>
        <form action='' onSubmit={onSubmit}>
          <label htmlFor=''>Your Name</label>
          <input
            type='text'
            name='name'
            placeholder='Enter your full name'
            required
          />
          <label htmlFor=''>Phone</label>
          <input
            type='tel'
            name='phone'
            placeholder='Enter your phone number'
            required
          />
          <label htmlFor=''>write your message</label>
          <textarea
            name='message'
            id=''
            rows='6'
            placeholder='Enter your message'
            required
          >
            {" "}
          </textarea>
          <button type='submit' className='btn dark-btn'>
            Submit Now{" "}
            <i>
              <FaArrowRight />
            </i>
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
