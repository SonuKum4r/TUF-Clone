import { ImShuffle } from "react-icons/im";
import './ProgressBar.css'
import { useState } from "react";

function ProgressBar1() {
  const [progress, setProgress] = useState(0);
  const total = 455;
  const percentage = 0;

  return (
    <div className="main-container">
      <div className="progress-container">
        <div className="progress-info">
          <span>Your Progress: <b>{progress}/{total}</b></span>
          <span style={{ color: '#EE482B', fontWeight: 'bold' }} >{Math.round(percentage)}% complete</span>
        </div>
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${percentage}%` }}></div>
        </div>
      </div>
      <div className="shuffle-button">
        <ImShuffle className="icon-shuffle" />
        <button className="revision-button">Show Revision</button>
      </div>
    </div>
  )

}

export default ProgressBar1;