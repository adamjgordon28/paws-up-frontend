import React from 'react';
import { connect } from 'react-redux';
import PetPage from './containers/PetPage.js'
import CreateAdopterForm from './containers/CreateAdopterForm.js'
import About from './components/About.js'
import CreatePetForm from './containers/CreatePetForm.js'
import AdopterProfile from './components/AdopterProfile.js'
import NavBar from './components/NavBar.js'
import Header from './components/Header.js'
import PetProfile from './components/PetProfile.js'
import Logout from './components/Logout.js'
import history from './history.js'


import {Route, Switch, Redirect} from 'react-router-dom';
import Login from './components/Login.js';

import './App.css';

class App extends React.Component {

    logOut = () => {
    localStorage.removeItem("token")
    this.props.setCurrentUser(-1)
    return <Redirect to="/login"/>
  }

    componentDidMount() {
    const token = localStorage.getItem("token")

    if (token) {
      fetch("http://localhost:4000/api/v1/auto_login", {
        headers: {
          "Authorization": token
        }

      })
      .then(res => res.json())
      .then((user) => {
        if (user.errors) {
          this.props.setCurrentUser(-1)
          alert(user.errors)
          this.logOut()
        } else {
          this.props.setCurrentUser(user)
        }
      })
    }

    else {
      this.props.history.push("/login")
    }
  }

  createPet = (pet)=> {
    fetch("http://localhost:4000/api/v1/pets",{
      method: "POST",
      headers: {"Content-Type": "application/json", Accepts: "application/json"},
      body: JSON.stringify(pet)
    })
    .then(res=>res.json())
    .then(data => {
     return this.props.history.push("/")
    })

  }





  render(){
    return (
      <div className="App">
      <NavBar currentUser={this.props.currentUser} location={this.props.location}/>
        <header className="App-header">
        {this.props.history.location.pathname==="/"? <Header/>:" "}
        <Switch>
        <Route exact path ='/' render = {(routeProps)=>
          <PetPage {...routeProps} currentUser={this.props.currentUser}/>} />
            <Route exact path = '/new-pet' render={(routeProps) => <CreatePetForm createPet = {this.createPet} {...routeProps}/>}/>
            <Route exact path = '/about' render={(routeProps) => <About {...routeProps}/> }/>
            <Route exact path = '/signup' render={(routeProps) => <CreateAdopterForm {...routeProps} createAdopter = {this.createAdopter}/>}/>
            <Route exact path = '/login' render={(routeProps) => <Login {...routeProps}/>}/>
            <Route exact path = '/adopter-profile' render={(routeProps) => <AdopterProfile {...routeProps} /> }/>
            <Route exact path = '/pet-profile/:id' render={(routeProps) => <PetProfile {...routeProps} /> }/>
            <Route exact path ='/logout' render = {(routeProps) => <Logout logOut = {this.logOut} {...routeProps}/>}/>

        </Switch>
        </header>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setCurrentUser: (user) => {
      dispatch({type: "SET_CURRENT_USER", payload: user})
    }
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
