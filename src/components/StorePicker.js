import React, { Fragment, Component } from 'react';
import { getFunName } from '../helpers';

class StorePicker extends Component {
  constructor() {
    super();
    this.goToStore = this.goToStore.bind(this);
  }

  myInput = React.createRef();

  goToStore = (event) => {
    event.preventDefault();
    console.log('You Change the URL');
    // first grab text from input
    const storeName = this.myInput.value.value;
    console.log(`Going to ${storeName}`);
    // second transition from / to /store/:storeId
    console.log(this.myInput.value.value);
    this.props.history.push(`/store/${storeName}`);
    // this.context.router.transitionTo(`/store/${storeId}`)
  }

  render() {
    // { /* Can only return one parent element, comments must be above or inside element not directly after return */ }
    return (
      <Fragment>
        <form className="store-selector" onSubmit={this.goToStore}>
        {/* {this.goToStore.bind(this)}> */}
          <h2>Please Enter A Store</h2>
          <input
          type="text"
          required
          placeholder="Store Name"
          defaultValue={getFunName()}
          ref={this.myInput}
          />
          <button type="submit">Visit Store </button>
        </form>
      </Fragment>
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

// StorePicker.contextTypes = {
//   // router: React.PropTypes
// }

export default StorePicker;
