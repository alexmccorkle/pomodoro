import React from 'react';

class TimerDisplay extends React.Component {
  render() {
    const { time } = this.props; 
    return ( // The time is displayed in minutes and seconds by using the Math.floor method to round down the minutes and the modulo operator to get the remaining seconds
      <div>
        {Math.floor(time / 60)}:{time % 60 < 10 ? '0' : ''}{time % 60}
      </div>
    )

  }
}
export default TimerDisplay; // Export the TimerDisplay component to be used in other files