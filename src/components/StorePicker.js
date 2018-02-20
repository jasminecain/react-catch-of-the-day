import React, { Component } from 'react';
import { getFunName } from '../helpers';

class StorePicker extends Component {
  // constructor() {
  //   super();
  //   this.goToStore = this.goToStore.bind(this);
  // }
  goToStore(event) {
    event.preventDefault();
    console.log('You Change the URL');
    // first grab text from the box
    console.log(this.storeInput.value);
    // second transition from / to /store/:storeId
  }

  render() {
    { /* Can only return one parent element, comments must be above or inside element not directly after return */ }
    return (
      <form className="store-selector" onSubmit={(e) => this.goToStore(e)}>
      {/* {this.goToStore.bind(this)}> */}
        <h2>Please Enter A Store</h2>
        <input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={(input) => { this.storeInput = input }}/>
        <button type="submit">Visit Store </button>
      </form>
    )
  }
}

// switched to E6 classes; doesn't implicitly bind all methods on component to actual component itself

// var storePicker = React.createClass({
//   goToStore() {
//     console.log(this);
//   },
//   render() {
//     return <p>hi</p>
//   }
// })

export default StorePicker;
