import React from 'react';
import { render } from 'react-dom';
// import { BrowserRouter } from 'react-router-dom';

// import { Component } from 'react';  extends only Component - do not need React.Component


// import './css/style.css';
// import App from './components/App';

import StorePicker from './components/StorePicker';
// import NotFound from './components/NotFound';


render(<StorePicker />, document.querySelector('#main'));

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
