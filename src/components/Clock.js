import React, { Component } from 'react';

export class Clock extends Component {
  state = {
    date: new Date(),
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        date: new Date(),
      });
    }, 1000);
  }

  render() {
    return <div>{this.state.date.toString()}</div>;
  }
}
export default Clock;