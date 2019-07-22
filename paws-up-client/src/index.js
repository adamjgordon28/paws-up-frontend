import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import  { BrowserRouter as Router, Route} from 'react-router-dom';

import mainReducer from './reducers/mainReducer.js';

const store = createStore(mainReducer)


ReactDOM.render(

  <Provider store = {store}>
    <Router>
    <Route path="/" component={App} />
    </Router>
  </Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
