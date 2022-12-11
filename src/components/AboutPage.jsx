import React from 'react'
import Card from '../data/Card'
import {Link} from 'react-router-dom'
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom'

function AboutPage() {
  return (
    
        <Card>
        <h2> This is about App </h2> <br />
        <p> This is a feedback UI designed for a product or service </p> <br />
        <p> version : 1.0.0</p> <br />
        <Link to="/"> Go back to the feedback app </Link>
      </Card>
      
  )
}

export default AboutPage