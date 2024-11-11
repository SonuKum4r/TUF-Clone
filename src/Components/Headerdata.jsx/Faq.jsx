import React, { useState } from 'react';
import { IoIosAddCircleOutline } from "react-icons/io";
import { FiMinusCircle } from "react-icons/fi";
import { MdCancel } from "react-icons/md";
import './Faq.css'
import { faqData } from '../../Data/Headerdata';
const Faq = ({ show, setShow }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  if (!show) return null;

  return (
    <div className="t-modal-overlay" >
      <div className="t-modal-box">
        <div className="t-modal-header">
          <h2>FAQ's</h2>
          <button className="t-close-button" onClick={() => setShow(false)}>
            <MdCancel />
          </button>
        </div>
        <div className="t-faq-container">
          {faqData.map((faq, index) => (
            <div key={index} className="t-faq-item">
              <button
                className="t-faq-question"
                onClick={() => toggleExpand(index)}
              >
                <span className='t-question' onClick={() => toggleExpand(index)}>{faq.question}</span>
                <div className='t-cancle-button'>
                  <span>{expandedIndex === index ? <FiMinusCircle /> : <IoIosAddCircleOutline />}</span>
                </div>
              </button>
              {expandedIndex === index && <p className="t-faq-answer">{faq.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;