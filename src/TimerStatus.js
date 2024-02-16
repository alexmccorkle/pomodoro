import React from 'react';



class TimerStatus extends React.Component {
  

  render () {
    const statusStyle = {
    }

    const { status } = this.props;
    return <div className='d-flex justify-content-center align-items-center' style={statusStyle}>{status}</div>
  }
}

export default TimerStatus; // Export the TimerStatus component to be used in other files