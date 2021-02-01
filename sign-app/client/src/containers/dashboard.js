import React, { Component } from 'react';

export default class Dashboard extends Component {
  state = {
    name: localStorage.getItem('user'),
  };

  render() {
    const { name } = this.state;

    return (
      <h1 style={{ textTransform: 'capitalize' }}>
        Dashboard
        {' '}
        {name}
      </h1>
    );
  }
}
