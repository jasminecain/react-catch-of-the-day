import React from 'react';
import { render } from 'react-dom';
import StorePicker from './components/StorePicker';
import App from './components/App';
import Router from "./components/Router";
import './css/style.css';

// import { BrowserRouter } from 'react-router-dom';

// import { Component } from 'react';  extends only Component - do not need React.Component

// import NotFound from './components/NotFound';

render(<Router/>, document.querySelector('#main'));

// const Root = () => {
//   return(
//     <BrowserRouter>
//       <div>
//         {/* <Match exactly pattern="/" component={StorePicker} /> */}
//         {/* <Match pattern="/store/:storeId" component={App} /> */}
//         {/* <Miss component={NotFound} /> */}
//       </div>
//     </BrowserRouter>
//   )
// }

// render(<Root/>, document.querySelector('#main'));
