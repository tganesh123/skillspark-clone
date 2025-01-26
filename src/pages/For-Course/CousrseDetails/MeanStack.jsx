import React, { useState } from "react"
import "./ccss.css"
import CourseHead from "../CourseHead/CourseHead"
import { TbTimeDuration90 } from "react-icons/tb"
import { Link } from "react-router-dom"

const MeanStack = () => {
  const [plusMinusStates, setPlusMinusStates] = useState({})

  const togglePlus = buttonId => {
    setPlusMinusStates(prevState => ({
      ...prevState,
      [buttonId]: prevState[buttonId] === "-" ? "+" : "-",
    }))
  }

  return (
    <div>
      <CourseHead />
      <div className='both-containing'>
        <div className='course-container-overview'>
          <h1>Course Overview</h1>
          <h3>
            UI/UX Design Courses at Skill Spark: Master the Art of Digital
            Interaction
          </h3>
          <p>
            Step into the world of UI/UX design with Skill Spark, where
            innovation meets creativity. Whether you’re a beginner or a seasoned
            designer, our courses provide a comprehensive platform to develop
            the skills needed to design intuitive, user-centered digital
            experiences. <br />
            <br />
            At Skill Spark, we recognize the importance of UI/UX design in
            creating seamless interactions between users and technology. Our
            courses are tailored to suit all experience levels, ensuring that
            everyone, from aspiring designers to professionals, can refine their
            craft and stay ahead in this ever-evolving field.
          </p>
          <h3>Background</h3>
          <p>
            UI/UX design is the backbone of today’s digital experiences,
            influencing how people interact with apps, websites, and digital
            products. It blends art, psychology, and technology to create
            designs that are not only functional but also aesthetically
            pleasing. The demand for skilled UI/UX designers is soaring,
            offering a promising career path in the digital age. At Skill Spark,
            we are committed to preparing you for this exciting field. Our
            expert instructors and state-of-the-art resources will empower you
            to create impactful designs that elevate user experiences and drive
            innovation in digital design.
          </p>
          <h1 className='cou-h'>
            {" "}
            <span>Course Highlights</span>
          </h1>

          <div className='accordion accordion1' id='accordionExample'>
            <div className='accordion-item item1'>
              <h2 className='accordion-header'>
                <button
                  className='accordion-button accordion-button1'
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#collapseOne'
                  aria-expanded='true'
                  aria-controls='collapseOne'
                  onClick={() => togglePlus("btn1")}
                >
                  {plusMinusStates["btn1"] || "+"} Module 1: Introduction to
                  UI/UX Design
                </button>
              </h2>
              <div
                id='collapseOne'
                className='accordion-collapse collapse'
                data-bs-parent='#accordionExample'
              >
                <div className='accordion-body body'>
                  <ul>
                    <li>
                      Overview of UI/UX Design: Definitions, differences, and
                      importance.
                    </li>
                    <li>
                      Overview of UI/UX Design: Definitions, differences, and
                      importance.
                    </li>
                    <li>
                      Overview of UI/UX Design: Definitions, differences, and
                      importance.
                    </li>
                    <li>
                      Overview of UI/UX Design: Definitions, differences, and
                      importance.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='accordion-item item1'>
              <h2 className='accordion-header'>
                <button
                  className='accordion-button collapsed accordion-button1'
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#collapseTwo'
                  aria-expanded='false'
                  aria-controls='collapseTwo'
                  onClick={() => togglePlus("btn2")}
                >
                  {plusMinusStates["btn2"] || "+"} Module 2: User Research &
                  Analysis
                </button>
              </h2>
              <div
                id='collapseTwo'
                className='accordion-collapse collapse'
                data-bs-parent='#accordionExample'
              >
                <div className='accordion-body body'>
                  <ul>
                    <li>User-Centered Design Approach.</li>
                    <li>
                      Conducting User Research: Interviews, surveys, focus
                      groups.
                    </li>
                    <li>
                      Personas & Empathy Maps: Representing user demographics
                      and behaviors.
                    </li>
                    <li>User Journey Maps & Experience Mapping.</li>
                    <li>Identifying Pain Points and Project Goals.</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='accordion-item item1'>
              <h2 className='accordion-header'>
                <button
                  className='accordion-button collapsed accordion-button1 '
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#collapseThree'
                  aria-expanded='false'
                  aria-controls='collapseThree'
                  onClick={() => togglePlus("btn3")}
                >
                  {plusMinusStates["btn3"] || "+"} Module 3: Information
                  Architecture & Navigation Design
                </button>
              </h2>
              <div
                id='collapseThree'
                className='accordion-collapse collapse'
                data-bs-parent='#accordionExample'
              >
                <div className='accordion-body body'>
                  <ul>
                    <li>
                      {" "}
                      Structuring Content: Information Architecture and Flow
                      Diagrams.
                    </li>
                    <li>Global vs Local Navigation Design.</li>
                    <li>Organizing Screen States and Navigation Systems.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='for-form'>
          <ul>
            <li>
              <div className='duration'>
                <TbTimeDuration90 className='icon-duration' />
                <p>Duration</p>
              </div>
              <p>90 hour</p>
            </li>
            <li>
              <div className='duration'>
                <TbTimeDuration90 className='icon-duration' />
                <p>Language</p>
              </div>
              <p>English</p>
            </li>
            <li>
              <div className='duration'>
                <TbTimeDuration90 className='icon-duration' />
                <p>
                  <span style={{ display: "inline-block", width: "200px" }}>
                    Skill Level
                  </span>
                </p>
              </div>
            </li>
            <li>
              <div className='duration'>
                <TbTimeDuration90 className='icon-duration' />
                <p>Certificate</p>
              </div>
              <p>yes</p>
            </li>
          </ul>
          <Link to='/enquiry' className='btn'>
            Enroll Now
          </Link>
        </div>
      </div>
    </div>
  )
}

export default MeanStack
