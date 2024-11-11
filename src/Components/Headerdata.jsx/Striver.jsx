import React, { useState } from 'react'
import './Striver.css'
import Faq from './Faq'

function Striver() {
  const[show,setShow]=useState(false)
  return (
    <div className="container">
      <div className="header">
        <h1 className="title">Strivers A2Z DSA Course/Sheet</h1>
        <a onClick={()=>setShow(true)} className="button-faq">FAQ</a>
      </div>
      <p className="description">
        This course is made for people who want to learn DSA from A to Z for free in a well-organized and structured manner. The lecture quality is better than what you get in paid courses, the only thing we don't provide is doubt support, but trust me our YouTube video comments resolve that as well, we have a wonderful community of 250K+ people who engage in all of the videos.
      </p>

      {
        show && <Faq show={show} setShow={setShow} /> 
      }
    </div>
  )
}

export default Striver
