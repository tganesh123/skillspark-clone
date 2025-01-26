import React from "react"
import { Link } from "react-router-dom"
import "./ForRoute.css"

const ForRoute = ({ path, pageName }) => {
  return (
    <div className='for-route'>
      <div>
        <h1>{pageName}</h1>
        <div className='for-links'>
          <Link to='/'>Home</Link>/<Link to={path}>{pageName}</Link>
        </div>
      </div>
    </div>
  )
}

export default ForRoute
