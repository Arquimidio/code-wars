/*
Write a react component that will display the current value of our counter.

The counter should start at 0.
There should be a button to add 1.
There should also be a button to subtract 1.
We want to be able to see the value of the counter - so it should be rendered! And for your buttons to work they will need an onClick prop.

In your render you should return:

The counter display element with an id of 'counter', containing the counter value.
An increment button with an id of 'increment'
A decrement button with an id of 'decrement'
*/

import React from 'react';

export class Counter extends React.Component {
  constructor(props) {
    super();
    this.state = {
      counter: 0
    }
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }
  
  increment(){
    this.state.counter = this.state.counter + 1;
  }
  
  decrement(){
    this.state.counter = this.state.counter - 1;
  }
  // Your event handlers 
  render() {
    return (
      <div>
        <h1 id="counter">{this.state.counter}</h1>
          <button id="decrement" onClick={this.decrement} type="button">
            Decrement
          </button>
          <button id="increment" onClick={this.increment} type="button">
            Increment
          </button>
      </div>
    )
  }
}