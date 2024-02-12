import React from 'react';
import TimerDisplay from './TimerDisplay';
import TimerControls from './TimerControls';
import TimerStatus from './TimerStatus';


// Pomodoro Timer component
// This component will be used to create a timer for the Pomodoro Technique

class Pomodoro extends React.Component {
  // The constructor method is called before the component is mounted
  constructor(props) { //
    super(props); // The super method is used to call the constructor of the parent class
    this.state = { // The state object is used to store the data that the component will use
      time: 25 * 60, 
      isActive: false,
      status: 'Working',
    }
  }

  interval = null; // The interval variable is used to store the interval ID

  componentDidMount() {
    this.interval = setInterval(this.decrementTime, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    clearInterval(this.interval); // Clears the interval 
    if (this.state.isActive) {
      this.interval = setInterval(this.decrementTime, 1000); // Set the interval to decrement the time by 1 second
    }
  }

  decrementTime = () => {
    if (this.state.isActive && this.state.time === 0) { // If the timer is active and the time is 0
      this.setState(prevState => ({
        status : prevState.status === 'Working' ? 'Rest' : 'Working',
        // If the status is working, set the status to rest, else set the status to working
        time: prevState.status === 'Working' ? 5 * 60 : 25 * 60 
        // If the status is working, set the time to 5 minutes, else set the time to 25 minutes
      }))
    }

    else if (this.state.isActive) { // If the timer is active
      this.setState(prevState => ({ // Set the state to the previous state
        time: prevState.time - 1 // Decrement the time by 1
      })
      );
  }
}

  startTimer = () => {
    this.setState({
      isActive: true // Set the isActive state to true when the timer starts
    });
  }

  pauseTimer = () => {
    this.setState({
      isActive: false // Set the isActive state to false when the timer is paused
    });
  }

  resetTimer = () => { // Reset the timer to 25 minutes
    this.setState({
      time: 25 * 60,
      isActive: false,
      status: 'Working'
    });
  }





  // The render method is required to render the component
  // and is usually at the end of the component
  render() { 
    const { time, status } = this.state;
    return (
      <div> 
        <h1>Pomodoro</h1> 
        <TimerDisplay time={time} /> 
        <TimerControls  // The TimerControls component will be used to start, pause, and reset the timer
          startTimer={this.startTimer} 
          pauseTimer={this.pauseTimer}
          resetTimer={this.resetTimer}/>
        <TimerStatus status={status}/> 
      </div>
    );
  }


}

export default Pomodoro; // Export the Pomodoro component to be used in other files