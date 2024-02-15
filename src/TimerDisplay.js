import React from 'react';
import '../src/assets/fonts.css'; // Font for timer

// Button imports:
import buttonLeft from './assets/buttons/buttonLeft.png'; 
import buttonRight from './assets/buttons/buttonRight.png'; 


class TimerDisplay extends React.Component {
  render() {
    const { time, timeUp, timeDown } = this.props; 

    const timerStyle = {
      fontSize: '100px',
      marginTop: '20px',
      fontFamily: 'Digital-7',
    }
    const buttonStyle = {
      height: '50px',
      width: '50px',
      // margin: '10px',
      border: 'none',
      color: 'transparent',
      backgroundSize: 'cover',
    }
    const buttonLeftStyle = {...buttonStyle, backgroundImage: `url(${buttonLeft})`}
    const buttonRightStyle = {...buttonStyle, backgroundImage: `url(${buttonRight})`}

    const timeContainter = {
      width: '200px',
      textAlign: 'center',
      margin: '0 20px',

    }

    return ( // The time is displayed in minutes and seconds by using the Math.floor method to round down the minutes and the modulo operator to get the remaining seconds
      <div style={timerStyle} className='d-flex justify-content-center align-items-center'>
        <button style={buttonLeftStyle} onClick={timeDown} className='btn btn-dark btn-sm'>-</button>
        <div style={timeContainter}>
          {Math.floor(time / 60)}:{time % 60 < 10 ? '0' : ''}{time % 60}
        </div>
        <button style={buttonRightStyle} onClick={timeUp} className='btn btn-dark btn-sm'>+</button>
      </div>
    )

  }
}
export default TimerDisplay; // Export the TimerDisplay component to be used in other files