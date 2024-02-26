import React from 'react';
import TimerDisplay from './TimerDisplay';
import TimerControls from './TimerControls';
import TimerStatus from './TimerStatus';


// Import state pics:
import work0 from './assets/animations/skull_working.png';
import work1 from './assets/animations/skull_working1.png';
import work2 from './assets/animations/skull_working2.png';
// NEED TO IMPORT REST IMAGES
import rest from './assets/animations/skull_rest.png';
// Background image:
import background from './assets/animations/city-pixel-art.jpg';
// Import audio
import endSound from './assets/buttons/endSound.mp3';
import mute from './assets/buttons/mute.png';
import unMute from './assets/buttons/unmute.png';


const endAudio = new Audio(endSound);



class Pomodoro extends React.Component {
  // The constructor method is called before the component is mounted
  constructor(props) { //
    super(props); // The super method is used to call the constructor of the parent class
    this.state = { // The state object is used to store the data that the component will use
      time: 25 * 60, 
      initialWorkTime: 25 * 60,
      isActive: false,
      status: 'Work',
      frame : 0,
      isMuted: false,
    }
  }


  interval = null; // The interval variable is used to store the interval ID

  componentDidMount() {
    this.widget = window.SC.Widget(document.getElementById('soundcloud'));

    this.interval = setInterval(this.decrementTime, 1000);
    this.frameTimer = setInterval(this.updateFrame, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval); // Clears the interval
    clearInterval(this.frameTimer); // Clears the frameTimer
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.isActive !== prevState.isActive) {// If the isActive state changes
      clearInterval(this.interval); // Clears the interval 
      if (this.state.isActive) {
      this.interval = setInterval(this.decrementTime, 1000); // Set the interval to decrement the time by 1 second
      }
    }
  }

  toggleMute = () => {
    this.setState(prevState => ({
      isMuted: !prevState.isMuted
    }), () => {
      this.widget.setVolume(this.state.isMuted ? 0 : 100);
    });
  }

  decrementTime = () => {
    if (this.state.isActive && this.state.time === 0) { // If the timer is active and the time is 0
      this.handleTimerEnd(); // Call the handleTimerEnd method
      this.setState({
        status : this.state.status === 'Work' ? 'Rest' : 'Work',
        // If the status is Work, set the status to rest, else set the status to Work
        time: this.state.status === 'Work' ? 5 * 60 : this.state.initialWorkTime,
        // If the status is Work, set the time to 5 minutes, else set the time to 25 minutes
      });
    }

    else if (this.state.isActive) { // If the timer is active
      this.setState(prevState => ({ // Set the state to the previous state
        time: prevState.time - 1 // Decrement the time by 1
      })
      );
    }
  }

  timeUp = () => {
    if (this.state.time < 60 * 60) // Can't go above 60 minutes when setting the time
    this.setState(prevState => ({
      time: prevState.time + 60,
      initialWorkTime: prevState.time + 60
      }));
  }

  timeDown = () => {
    if (this.state.time > 60) // Can't go below 1 minute when setting the time
    this.setState(prevState => ({ 
      time: prevState.time - 60,
      initialWorkTime: prevState.time - 60
    }));
  }


  startTimer = () => {
    this.setState({
      isActive: true // Set the isActive state to true when the timer starts
    });
    this.widget.play();
  }

  pauseTimer = () => {
    this.setState({
      isActive: false // Set the isActive state to false when the timer is paused
    });
    this.widget.pause();
  }

  resetTimer = () => { // Reset the timer to 25 minutes
    this.setState({
      time: 25 * 60,
      isActive: false,
      status: 'Work',
      initialWorkTime: 25 * 60
    });
    this.widget.pause();
  }

  updateFrame = () => {
    this.setState(prevState => ({ frame: (prevState.frame + 1) % 3})); // Cycles between 0, 1, and 2 by using the modulo operator
  }

  handleTimerEnd = () => { // Everything that happens when the timer ends
    endAudio.play();
    // Other timer end code here
    // XP progress etc.
  }


  // The render method is required to render the component
  // and is usually at the end of the component
  render() { 
    const { time, status, frame} = this.state;

    let image; // The image variable is used to store the image of the work animation
    if (status === 'Work') {
      image = [work0, work1, work2][frame]; // The image is set to the frame of the work animation
    } else {
      image = rest; // NEED TO ADD REST IMAGES
    }

    // CSS in React is written in camelCase
    const containerStyle = { // The containerStyle object is used to style the container
      position: 'relative',
      width: '408px',
      height: '500px',
      margin: '0 auto',
      border: '10px solid black',
      padding: '20px',
      backgroundColor: '#2c2929',
      color: '#fff',

      backgroundImage: `url(${background})`, // Set the background image
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    }
    // For styling the title
    const titleStyle = {
      fontSize: '45px',
      marginBottom: '20px'
    }

    const imageStyle = {
      position: 'absolute',
      bottom: '0',
      width: '200px',
      height: '200px',
      backgroundSize: 'cover',
      zIndex: '0'
    }

    const muteButton = {backgroundImage: `url(${mute})`,}
    const unMuteButton = {backgroundImage: `url(${unMute})`,}



    return (
      <div style={containerStyle}> 
        <button onClick={this.toggleMute} className='button mute' style={this.state.isMuted ? muteButton : unMuteButton}>
          {this.state.isMuted ? 'Unmute' : 'Mute'}
        </button>
        <h1 style={titleStyle} className='display-1 d-flex justify-content-center align-items-center'>_</h1> 
        <TimerDisplay 
          time={time} 
          timeUp={this.timeUp} 
          timeDown={this.timeDown}
          isActive={this.state.isActive}/> 
        <TimerControls  // The TimerControls component will be used to start, pause, and reset the timer
          startTimer={this.startTimer} 
          pauseTimer={this.pauseTimer}
          resetTimer={this.resetTimer}
          />
        <TimerStatus status={<img src={image} alt={status} style={imageStyle}/>}/>


        <iframe title='SoundCloud'
          id="soundcloud"
          width="40%"
          height="25%"
          frameborder="no"
          style={{ display: 'none' }}
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1296743995&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false"
        ></iframe> 

        </div>
    );
  }

}

export default Pomodoro; // Export the Pomodoro component to be used in other files

