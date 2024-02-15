import React from 'react'; // Import the react library
import 'bootstrap/dist/css/bootstrap.css'; // Import the bootstrap library

//Custom Buttons:
import startButton from './assets/buttons/start.png'
import pauseButton from './assets/buttons/pause.png'
// import stopButton from './assets/buttons/stop.png'
import resetButton from './assets/buttons/reset.png'

class TimerControls extends React.Component {
  render() {
    const { startTimer, pauseTimer, resetTimer } = this.props; 
    // Destructure the props which means that the properties of the props object are assigned to variables
    // In simple terms: the properties of the props object can be accessed directly
    
    const defaultButtons = {
      width: '50px',
      height: '50px',
      marginTop: '20px',
      border: 'none',
      color: 'transparent',
      backgroundSize: 'cover',
    }

    const buttonStart = {...defaultButtons,backgroundImage: `url(${startButton})`,}
    const buttonPause = {...defaultButtons,backgroundImage: `url(${pauseButton})`, marginLeft: '10px', marginRight: '10px'}
    const buttonReset = {...defaultButtons,backgroundImage: `url(${resetButton})`}

    return (
      <div className='d-flex justify-content-center align-items-center'>
      <button style={buttonStart} onClick={startTimer}>Start</button>
      <button style={buttonPause} onClick={pauseTimer}>Pause</button>
      <button style={buttonReset} onClick={resetTimer}>Reset</button>
      </div>
    );
  }
}

export default TimerControls; // Export the TimerControls component to be used in other files