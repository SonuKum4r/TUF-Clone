import React, { useState } from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import './FAQ.css';
import Table from './Table';
function SubFAQItem({ subFaq }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='pink'>
      <div className="sub-faq-item">
        <div className="sub-faq-question" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ?
            <div className='textColorRed'>
              {subFaq.question}
            </div> :
            <div className='textColorblack'>
              {subFaq.question}
            </div>}

          <div className='twobtn'>
            <span className="faq-arrow-num"><lable>0/39</lable></span>
            <span>{isOpen ? <MdKeyboardArrowUp className="faq-arrow-up" /> : <MdKeyboardArrowDown className="faq-arrow-down" />}</span>
          </div>
        </div>
        {isOpen && <div className="sub-faq-answer">
          <Table />
        </div>}
      </div>
    </div>
  );
}

export default SubFAQItem