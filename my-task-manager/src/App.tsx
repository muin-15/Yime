import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <div className="BackgroundHeader">
          <p className='Logoimage'></p>
          <h2 className='logoname'>
            Yime</h2>
      </div>
      <div className='Main'>
        <div className='TimeTableCard'>
          <div className='TT-details'>
            <p className='TT-title'>Timetable</p>
            <div className='TT-image'>
          </div>
            <p className='TT-info'>Get Your customized timetable as per the end date</p>
          </div>
          <a href="TImetable.html">
            <button className='TT-button'>Get Started</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
