import React from 'react';
import '../src/assets/fonts.css'; // Font for timer


class TimerDisplay extends React.Component {
  render() {
    const { time, timeUp, timeDown } = this.props; 

    const timerStyle = {
      fontSize: '100px',
      marginTop: '20px',
      fontFamily: 'Digital-7',
    }
    const buttonStyle = {
      fontFamily: 'Digital-7',
      fontSize: '30px',
      margin: '10px',
      // fontWeight: 'bold',
      // fontStyle: 'normal',
      // textTransform: 'none',
      // backgroundColor: 'black',
      // color: 'white',
      // opacity: '0.8',
      // border: '2px solid green',
    }

    return ( // The time is displayed in minutes and seconds by using the Math.floor method to round down the minutes and the modulo operator to get the remaining seconds
      <div style={timerStyle} className='d-flex justify-content-center align-items-center'>
        <button style={buttonStyle} onClick={timeDown} className='btn btn-dark btn-sm'>-</button>
        {Math.floor(time / 60)}:{time % 60 < 10 ? '0' : ''}{time % 60}
        <button style={buttonStyle} onClick={timeUp} className='btn btn-dark btn-sm'>+</button>
      </div>
    )

  }
}
export default TimerDisplay; // Export the TimerDisplay component to be used in other files