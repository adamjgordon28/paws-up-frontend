import React, { Fragment } from 'react'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'

import LoginForm from './components/Login'
import NavBar from './components/NavBar'
import PetPage from './containers/PetPage'
import CreatePetForm from './containers/CreatePetForm'
import CreateAdopterForm from './containers/CreateAdopterForm'
import AdopterProfile from './components/AdopterProfile'
import PetProfile from './components/PetProfile'
import About from './components/About'


import './App.css'

const App = props => {
  return (
    <Fragment>
      <NavBar />
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/pets" />} />
        <Route exact path="/profile" component={AdopterProfile} />
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/signup" component={CreateAdopterForm} />
        <Route exact path="/logout" render={() => <Redirect to="/" />} />
        <Route exact path="/pets" component={PetPage}/>
        <Route exact path = '/pet/:iPd' component={PetProfile}/>
        <Route exact path="/newpet" component={CreatePetForm} />
        <Route exact path="/about" component={About}/>
      </Switch>
    </Fragment>
  )
}

export default withRouter(App)
