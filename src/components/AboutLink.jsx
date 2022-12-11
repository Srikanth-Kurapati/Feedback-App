import React from 'react'
import {FaQuestion} from 'react-icons/fa'
import {Link} from 'react-router-dom'

function AboutLink() {
  return (
    <div className='about-link'>
        <Link to={
           {
            pathname : "/about",
            search : "?Sort",
            mosh: "#about"
           }
            
        }> <FaQuestion size={'30px'}/> </Link>
    </div>
  )
}

export default AboutLink