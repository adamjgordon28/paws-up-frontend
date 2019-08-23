import React from 'react'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './index.css';

import 'semantic-ui-css/semantic.min.css'

import App from './App'
import adoptersReducer from './reducers/adoptersReducer'
import petsReducer from './reducers/petsReducer'

import registerServiceWorker from './registerServiceWorker'



const rootReducer = combineReducers({ adoptersReducer: adoptersReducer, petsReducer: petsReducer })

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path="/" component={App} />
    </Router>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
