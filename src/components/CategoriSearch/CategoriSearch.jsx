import React from "react"
import "./CategoriSearch.css"
import { RiComputerLine } from "react-icons/ri"

const CategoriSearch = () => {
  return (
    <div className='category-main'>
      <div className='h1center'>
        <h1>Search By Category</h1>
      </div>

      <div className='categori-cards'>
        <div className='outer-categori'>
          <div className='inner-categori'>
            <RiComputerLine className='categori-icon' />
            <h1>Development</h1>
            <p>12 courses</p>
          </div>
        </div>
        <div className='outer-categori'>
          <div className='inner-categori'>
            <RiComputerLine className='categori-icon' />
            <h1>Development</h1>
            <p>12 courses</p>
          </div>
        </div>
        <div className='outer-categori'>
          <div className='inner-categori'>
            <RiComputerLine className='categori-icon' />
            <h1>Development</h1>
            <p>12 courses</p>
          </div>
        </div>
        <div className='outer-categori'>
          <div className='inner-categori'>
            <RiComputerLine className='categori-icon' />
            <h1>Development</h1>
            <p>12 courses</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CategoriSearch
