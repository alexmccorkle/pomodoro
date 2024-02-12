import React from 'react';

class TimerStatus extends React.Component {
  render () {
    const { status } = this.props;
    return <div>{status}</div>
  }
}

export default TimerStatus; // Export the TimerStatus component to be used in other files