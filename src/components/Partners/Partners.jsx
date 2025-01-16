import React from "react"
import "./Partners.css"
import c1logo from "../../assets/c1logo.jpg"
import c2logo from "../../assets/c2logo.jpg"
import c3logo from "../../assets/c3logo.jpg"
import c14logo from "../../assets/c4logo.jpg"
import c5logo from "../../assets/c5logo.jpg"
import c6logo from "../../assets/c6logo.jpg"
import c7logo from "../../assets/c7logo.jpg"
import c8logo from "../../assets/c8logo.jpg"
const Partners = () => {
  return (
    <div className='partners'>
      <div className='photos'>
        <img src={c1logo} alt='' />
        <img src={c2logo} alt='' />
        <img src={c3logo} alt='' />
        <img src={c14logo} alt='' />
        <img src={c5logo} alt='' />
        <img src={c6logo} alt='' />
        <img src={c7logo} alt='' />
      </div>
    </div>
  )
}

export default Partners
