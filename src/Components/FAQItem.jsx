// Main FAQ 
import React from 'react';
import SubFAQItem from './SubFAQItem';
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import './FAQ.css';
function FAQItem({ faq, index, toggleFAQ }) {
    return (
      <>
        <div className='pink'>
      <div className="faq-item">
        <div className="faq-question" onClick={() => toggleFAQ(index)}>
        {faq.open ?
         <div className='textColorRed'>
          {faq.question}
          </div>:
          <div className='textColorblack'>
          {faq.question}
          </div>
          } 
          <div className='twobtn'>
          <div className="faq-arrow-num">0/39</div>
          <span>{faq.open ?<MdKeyboardArrowUp className="faq-arrow-up"/>: <MdKeyboardArrowDown className="faq-arrow-down"/>}</span>
          </div>
        </div>
        {faq.open && (
          <div className="faq-answer">
            {faq.subFaqs && faq.subFaqs.map((subFaq, idx) => (
              <SubFAQItem subFaq={subFaq} key={idx} />
            ))}
          </div>
        )}
      </div>
      </div>
      </>
    );
  }
  export default FAQItem;