// Main FAQ List component
import React, { useState } from 'react';
import { faqs } from '../Data/data';
import FAQItem from './FAQItem';
import './FAQ.css';
import ProgressBar1 from './ProgressBar';
function FAQ() {
    const [faqsList, setFaqsList] = useState(
      faqs.map(faq => ({ ...faq, open: false })) // Initialize all FAQs as closed
    );
  
    // Toggle the FAQ open/close
    const toggleFAQ = (index) => {
      setFaqsList(faqsList.map((faq, i) => {
        if (i === index) {
          return { ...faq, open: !faq.open }; // Toggle clicked FAQ
         } 
        else {
          return { ...faq, open: false }; // Close other FAQs
        }
      }));
    };
  
    return (
      <div className="faq-list">
        <ProgressBar1 progress={0} total={455}/>
        {faqsList.map((faq, index) => (
          <FAQItem faq={faq} index={index} toggleFAQ={toggleFAQ} key={index} />
        ))}
      </div>
    );
  }
  export default FAQ