import React, { Component } from 'react';

class EyesOnMe extends Component {

  onFocus = () => {
    console.log('Good!')
  }

  onBlur = () => {
    console.log('Hey! Eyes on me!')
  }

  render() {
    return (
      <button onBlur={this.onBlur} onFocus={this.onFocus}>
        I'm a button
      </button>
    )
  }
}

export default EyesOnMe;