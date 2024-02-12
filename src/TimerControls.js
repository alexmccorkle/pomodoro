import React from 'react'; // Import the react library
import 'bootstrap/dist/css/bootstrap.css'; // Import the bootstrap library

class TimerControls extends React.Component {
  render() {
    const { startTimer, pauseTimer, resetTimer } = this.props; 
    // Destructure the props which means that the properties of the props object are assigned to variables
    // which in simple terms means that the properties of the props object can be accessed directly
    return (
      <div>
      <button className='btn btn-success' onClick={startTimer}>Start</button>
      <button className='btn btn-warning'onClick={pauseTimer}>Pause</button>
      <button className='btn btn-danger' onClick={resetTimer}>Reset</button>
      </div>
    );
  }
}

export default TimerControls; // Export the TimerControls component to be used in other files