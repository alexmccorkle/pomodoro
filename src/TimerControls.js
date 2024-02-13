import React from 'react'; // Import the react library
import 'bootstrap/dist/css/bootstrap.css'; // Import the bootstrap library

class TimerControls extends React.Component {
  render() {
    const { startTimer, pauseTimer, resetTimer } = this.props; 
    // Destructure the props which means that the properties of the props object are assigned to variables
    // In simple terms: the properties of the props object can be accessed directly
    const buttonStyle = {
      width: '100px',
      height: '50px',
      marginTop: '20px',
    }
    
    return (
      <div className='d-flex justify-content-center align-items-center'>
      <button style={buttonStyle} className='btn btn-success me-2' onClick={startTimer}>Start</button>
      <button style={buttonStyle} className='btn btn-warning me-2'onClick={pauseTimer}>Pause</button>
      <button style={buttonStyle} className='btn btn-danger' onClick={resetTimer}>Reset</button>
      </div>
    );
  }
}

export default TimerControls; // Export the TimerControls component to be used in other files