import React from "react"
import "./AllCourses.css"
import ms from "../../assets/ms.png"
import ForRoute from "../../components/ForRoute/ForRoute"
import { Link } from "react-router-dom"

const AllCourses = () => {
  const pageName = "All Courses"
  const path = "/All Courses"
  return (
    <div className='allcourses'>
      <ForRoute path={path} pageName={pageName} />
      <div className='wrapper-both'>
        <div className='search-bar1'>
          <form className='d-flex search-bar2' role='search'>
            <input
              className='form-control me-2'
              type='search'
              placeholder='Search'
              aria-label='Search'
            />
          </form>
          <h1>TOP Categories</h1>
          <div className='check-boxes'>
            <div className='form-check'>
              <input
                className='form-check-input'
                type='checkbox'
                value=''
                id='flexCheckIndeterminateDisabled'
              />
              <label
                className='form-check-label'
                for='flexCheckIndeterminateDisabled'
              >
                MERN Stack
              </label>
            </div>
            <div className='form-check'>
              <input
                className='form-check-input'
                type='checkbox'
                value=''
                id='flexCheckDisabled'
              />
              <label className='form-check-label' for='flexCheckDisabled'>
                Graphics Designing
              </label>
            </div>
            <div className='form-check'>
              <input
                className='form-check-input'
                type='checkbox'
                value=''
                id='flexCheckDisabled'
              />
              <label className='form-check-label' for='flexCheckDisabled'>
                Python Developer
              </label>
            </div>
            <div className='form-check'>
              <input
                className='form-check-input'
                type='checkbox'
                value=''
                id='flexCheckDisabled'
              />
              <label className='form-check-label' for='flexCheckDisabled'>
                Machine Learning
              </label>
            </div>
            <div className='form-check'>
              <input
                className='form-check-input'
                type='checkbox'
                value=''
                id='flexCheckDisabled'
              />
              <label className='form-check-label' for='flexCheckDisabled'>
                Graphics Designing
              </label>
            </div>
            <div className='form-check'>
              <input
                className='form-check-input'
                type='checkbox'
                value=''
                id='flexCheckDisabled'
              />
              <label className='form-check-label' for='flexCheckDisabled'>
                AI
              </label>
            </div>
            <div className='form-check'>
              <input
                className='form-check-input'
                type='checkbox'
                value=''
                id='flexCheckCheckedDisabled'
              />
              <label
                className='form-check-label'
                for='flexCheckCheckedDisabled'
              >
                Web Development
              </label>
            </div>
          </div>
          <h1>Skill Level</h1>
          <div className='check-boxes'>
            <div className='form-check'>
              <input
                className='form-check-input'
                type='checkbox'
                value=''
                id='flexCheckIndeterminateDisabled'
              />
              <label
                className='form-check-label'
                for='flexCheckIndeterminateDisabled'
              >
                Intermediate
              </label>
            </div>
            <div className='form-check'>
              <input
                className='form-check-input'
                type='checkbox'
                value=''
                id='flexCheckDisabled'
              />
              <label className='form-check-label' for='flexCheckDisabled'>
                Begginer
              </label>
            </div>
            <div className='form-check'>
              <input
                className='form-check-input'
                type='checkbox'
                value=''
                id='flexCheckCheckedDisabled'
              />
              <label
                className='form-check-label'
                for='flexCheckCheckedDisabled'
              >
                Novice
              </label>
            </div>
          </div>
        </div>
        <div className='course-cards'>
          <div className='for-sorting'>
            <p className='courses-found'>courses found 3</p>
            <div className='sort-by'>
              <p>sort by:</p>

              <button
                className='btn btn-secondary dropdown-toggle dropdown-btn'
                type='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                Default
              </button>
              <ul className='dropdown-menu'>
                <li>
                  <a className='dropdown-item' href='#'>
                    Action
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    Another action
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className='cards-contin'>
            <div className='card card-size'>
              <Link to='/All Courses/Mean Stack'>
                <img src={ms} className='card-img-top' alt='...' />
              </Link>
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
      </div>
    </div>
  )
}

export default AllCourses
