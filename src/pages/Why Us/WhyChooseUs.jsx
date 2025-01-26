import React from "react"
import "./WhyChoose.css"
import ForRoute from "../../components/ForRoute/ForRoute"

const WhyChooseUs = () => {
  const path = "/Why Choose Us?"
  const pageName = "Why Choose Us?"
  return (
    <div>
      <ForRoute path={path} pageName={pageName} />
      <div className='container-for-choose'>
        <div className='choose-left'>
          <div className='left-contents'>
            <h1>
              Why choose <span>SkillSpark</span> for your IT Training?
            </h1>
            <p className='p1'>
              Skill Spark stands out as the ideal choice for your IT training
              journey for several compelling reasons:
            </p>
            <div className='left-contents-lists'>
              <ul className='ul-elem'>
                <li>
                  <h4 className='h4-elem'>1</h4>
                  <div>
                    <h3>Expertise and Excellence:</h3>
                    <p>
                      At Skill Spark, we take pride in our commitment to
                      excellence. Our team of instructors comprises industry
                      experts who bring years of real-world experience to the
                      classroom. You'll learn from the best in the field,
                      ensuring you acquire the latest industry knowledge and
                      practical skills.
                    </p>
                  </div>
                </li>
                <li>
                  <h4 className='h4-elem'>2</h4>
                  <div>
                    <h3>Join Membership:</h3>
                    <p>
                      At Skill Spark, we take pride in our commitment to
                      excellence. Our team of instructors comprises industry
                      experts who bring years of real-world experience to the
                      classroom. You'll learn from the best in the field,
                      ensuring you acquire the latest industry knowledge and
                      practical skills.
                    </p>
                  </div>
                </li>
                <li>
                  <h4 className='h4-elem'>3</h4>
                  <div>
                    <h3>Hands-On Learning:</h3>
                    <p>
                      Our approach to teaching is centered around hands-on
                      learning. We believe that true mastery comes through
                      practical application, and our courses include interactive
                      labs and real-world projects that empower you to apply
                      your knowledge in a supportive environment.
                    </p>
                  </div>
                </li>
                <li>
                  <h4 className='h4-elem'>4</h4>
                  <div>
                    <h3>Expertise and Excellence:</h3>
                    <p>
                      At Skill Spark, we take pride in our commitment to
                      excellence. Our team of instructors comprises industry
                      experts who bring years of real-world experience to the
                      classroom. You'll learn from the best in the field,
                      ensuring you acquire the latest industry knowledge and
                      practical skills.
                    </p>
                  </div>
                </li>
                <li>
                  <h4 className='h4-elem'>1</h4>
                  <div>
                    <h3>Expertise and Excellence:</h3>
                    <p>
                      At Skill Spark, we take pride in our commitment to
                      excellence. Our team of instructors comprises industry
                      experts who bring years of real-world experience to the
                      classroom. You'll learn from the best in the field,
                      ensuring you acquire the latest industry knowledge and
                      practical skills.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyChooseUs
