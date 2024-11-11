import React, { useState } from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import './HighlightNote.css';
const HighlightNote = () => {
  const [isKeyHighlightsOpen, setKeyHighlightsOpen] = useState(false);
  const [isNoteOpen, setNoteOpen] = useState(false);

  return (
    <div className="highlight-section">
      <div className="highlight-item">
        <div className="highlight-header" onClick={() => setKeyHighlightsOpen(!isKeyHighlightsOpen)}>

          {isKeyHighlightsOpen ?
            <span className='highlight-title-red'>
              Key Highlights
            </span> :
            <span className='highlight-title-black'>
              Key Highlights
            </span>
          }

          <button className="highlight-toggle">{isKeyHighlightsOpen ? <MdKeyboardArrowUp className="faq-arrow-up" /> : <MdKeyboardArrowDown className="faq-arrow-down" />}</button>
        </div>
        {isKeyHighlightsOpen && (
          <ul className="highlight-content">
            <li>Teaches you problem solving by diving deep into DSA, with 450+ modules.</li>
            <li>In-depth video solutions covering brute, better, optimal solutions.</li>
            <li>Well-structured articles/notes for quick revision.</li>
            <li>C++, Java, Python, and JavaScript code.</li>
            <li>Company tags associated with each problem.</li>
            <li>Notes section to save your notes for quick revision.</li>
            <li>Used by over 1.5M+ people worldwide in the last 1 year.</li>
            <li>All the lectures are recorded in 4K.</li>
            <li>None of the paid/unpaid courses have these many modules.</li>
          </ul>
        )}
      </div>

      {/* Note Section */}
      <div className="highlight-item">
        <div className="highlight-header" onClick={() => setNoteOpen(!isNoteOpen)}>

          {isNoteOpen ?
            <span className='highlight-title-red'>
              Notes
            </span> :
            <span className='highlight-title-black'>
              Notes
            </span>
          }
          <button className="highlight-toggle">{isNoteOpen ? <MdKeyboardArrowUp className="faq-arrow-up" /> : <MdKeyboardArrowDown className="faq-arrow-down" />}</button>
        </div>
        {isNoteOpen && (
          <div className="Note-content">
            <p>The Series doesn’t focus on any specific programming language. Instead, it emphasizes logic and uses pseudocode.</p>
            <p>The first two basic videos might use C++, but for Java tutorials, you can watch other YouTube videos. When tackling core problems of data structures and algorithms (DSA), the Series uses pseudocode that isn’t tied to any particular programming language.</p>
            <p>However, you can find code examples in your preferred language in the notes and articles provided.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HighlightNote;