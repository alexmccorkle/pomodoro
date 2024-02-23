import React from 'react'; // Import the react library
import 'bootstrap/dist/css/bootstrap.css'; // Import the bootstrap library
import './App.css' // Mainly importing for button styling/hover/active states

//Custom Buttons:
import startButton from './assets/buttons/start.png'
import pauseButton from './assets/buttons/pause.png'
import resetButton from './assets/buttons/reset.png'

class TimerControls extends React.Component {

  render() {

    const { startTimer, pauseTimer, resetTimer } = this.props; 
    // Destructure the props which means that the properties of the props object are assigned to variables
    // In simple terms: the properties of the props object can be accessed directly
  

    const buttonStart = {backgroundImage: `url(${startButton})`,}
    const buttonPause = {backgroundImage: `url(${pauseButton})`, marginLeft: '10px', marginRight: '10px'}
    const buttonReset = {backgroundImage: `url(${resetButton})`}

    return (
      <div className='d-flex justify-content-center align-items-center'>
        <button style={buttonStart} className='button' onClick={startTimer}></button>
        <button style={buttonPause} className='button' onClick={pauseTimer}></button>
        <button style={buttonReset} className='button' onClick={resetTimer}></button>
      </div>
    );
  }
}

export default TimerControls; // Export the TimerControls component to be used in other files