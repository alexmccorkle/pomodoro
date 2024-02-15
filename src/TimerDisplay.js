import React from 'react';
import '../src/assets/fonts.css'; // Font for timer


// Button imports:
import buttonLeft from './assets/buttons/buttonLeft.png'; 
import buttonRight from './assets/buttons/buttonRight.png'; 
import './App.css' // Mainly importing for button styling/hover/active states



class TimerDisplay extends React.Component {
  render() {
    const { time, timeUp, timeDown } = this.props; 

    const timerStyle = {
      fontSize: '100px',
      marginTop: '20px',
      fontFamily: 'Digital-7',
    }

    const buttonLeftStyle = {backgroundImage: `url(${buttonLeft})`,}
    const buttonRightStyle = {backgroundImage: `url(${buttonRight})`}

    const timeContainer = {
      width: '200px',
      textAlign: 'center',
      margin: '0 20px',

    }

    return ( // The time is displayed in minutes and seconds by using the Math.floor method to round down the minutes and the modulo operator to get the remaining seconds
      <div style={timerStyle} className='d-flex justify-content-center align-items-center'>
        <button style={buttonLeftStyle} onClick={timeDown} className='button'></button>
        <div style={timeContainer}>
          {Math.floor(time / 60)}:{time % 60 < 10 ? '0' : ''}{time % 60}
        </div>
        <button style={buttonRightStyle} onClick={timeUp} className='button'></button>
      </div>
    )
  }
}
export default TimerDisplay; // Export the TimerDisplay component to be used in other files