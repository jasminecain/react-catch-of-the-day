import React, { Component } from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

class App extends Component {
  constructor() {
    super();

    this.addFish = this.addFish.bind(this);
    // getInitialState
    this.state = {
      fishes: {},
      order: {}
    };
  }

  addFish(fish) {
    // update our state
    const fishes = {...this.state.fishes};
    // add in our new fish
    const timestamp = Date.now();
    fishes[`fish-${timestamp}`] = fish;
    // set state
    this.setState({ fishes });
    // same as ({ fishes: fishes })
  }
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
        </div>
        <Order />
        <Inventory />
      </div>
    )
  }
}

export default App;
