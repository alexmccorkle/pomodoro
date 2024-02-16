import React from 'react';
import '../src/assets/fonts.css'; // Font for timer


// Button imports:
import buttonLeft from './assets/buttons/buttonLeft.png'; 
import buttonRight from './assets/buttons/buttonRight.png'; 
import './App.css' // Mainly importing for button styling/hover/active states



class TimerDisplay extends React.Component {
  render() {
    const { time, timeUp, timeDown, isActive } = this.props; 

    const timerStyle = {
      fontSize: '100px',
      marginTop: '20px',
      fontFamily: 'Digital-7',
      color: 'black',
      textShadow: '2px 2px #16d91c'

    }

    const buttonLeftStyle = {backgroundImage: `url(${buttonLeft})`,}
    const buttonRightStyle = {backgroundImage: `url(${buttonRight})`}

    const timeContainer = {
      width: '200px',
      textAlign: 'center',
      margin: '0 20px',
    }

    const blinkStyle = {
      animation: 'blinking 1s infinite',
      color: '#16d91c',
      textShadow: '2px 2px #000000'
    }


    return ( // The time is displayed in minutes and seconds by using the Math.floor method to round down the minutes and the modulo operator to get the remaining seconds
      <div style={timerStyle} className='d-flex justify-content-center align-items-center'>
        {!isActive && <button style={buttonLeftStyle} onClick={timeDown} className='button'></button>}
        <div style={timeContainer}>
          <span style={time < 60 ? blinkStyle : timerStyle}>
          {String(Math.floor(time / 60)).padStart(2, '0')}:{time % 60 < 10 ? '0' : ''}{time % 60}
          </span>
        </div>
        {!isActive && <button style={buttonRightStyle} onClick={timeUp} className='button'></button>}
      </div>
    )
  }
}
export default TimerDisplay; // Export the TimerDisplay component to be used in other files