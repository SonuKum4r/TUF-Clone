import React, { useState } from 'react'
import './Accordian.css'
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";



function Accordian({ data }) {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className='modal-wrapper'></div>
      <div className='modal-container' onScroll={true}>
        <h3 style={{
          fontSize: 16,
          marginLeft: 29,
          color: "black",
          marginBottom: 0,
          marginTop: 20
        }} onClick={() => setShow(!show)} >
          {data.question}
          {
            show ? <FaMinus className='span'></FaMinus> : <FaPlus className='span'></FaPlus>
          }

        </h3>
        {show ? <p>{data.answer}</p> : null}
      </div>

    </>
  )
}

export default Accordian
