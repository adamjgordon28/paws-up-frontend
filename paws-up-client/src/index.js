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
