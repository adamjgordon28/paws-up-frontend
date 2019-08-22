import React, { Component } from 'react';
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


import {Route, Switch, Redirect} from 'react-router-dom';
import Login from './components/Login.js';

import './App.css';

class App extends Component {

    logOut = () => {
    localStorage.removeItem("token")
    this.props.setCurrentUser(-1)
    return <Redirect to="/login"/>
  }

    componentDidMount() {
    this.fetchPets()
    const token = localStorage.getItem("token")

    if (token) {
      fetch(`${process.env.REACT_APP_BASE_URL}`.concat("/api/v1/auto_login"), {
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
    fetch(`${process.env.REACT_APP_BASE_URL}`.concat("/api/v1/pets"),{
      method: "POST",
      headers: {"Content-Type": "application/json", Accepts: "application/json"},
      body: JSON.stringify(pet)
    })
    .then(res=>res.json())
    .then(data => {
      if (data.errors){
        alert(data.errors)
      }
      else {
    this.props.addPetToPets(data)
     return this.props.history.push("/pet-profiles/".concat(`${data.id}`))
     }
    })

  }

  fetchPets = () => {
    fetch(`${process.env.REACT_APP_BASE_URL}`.concat("/api/v1/pets"))
    .then(res => res.json())
    .then(pets => {
      this.props.setPets(pets)
    })
  }


  render(){
    return (
      <div className="App">
      <NavBar currentUser={this.props.currentUser} location={this.props.location}/>
        <header className="App-header">
        {this.props.history.location.pathname==="/"? <Header/>:" "}
        <Switch>
            <Route exact path ='/pets' render = {(routeProps)=>
              <PetPage {...routeProps} currentUser={this.props.currentUser}/>} />
            <Route exact path = '/new-pet' render={(routeProps) => <CreatePetForm createPet = {this.createPet} {...routeProps}/>}/>
            <Route exact path = '/about' render={(routeProps) => <About {...routeProps}/> }/>
            <Route exact path = '/signup' render={(routeProps) => <CreateAdopterForm {...routeProps} createAdopter = {this.createAdopter}/>}/>
            <Route exact path = '/login' render={(routeProps) => <Login {...routeProps}/>}/>
            <Route exact path = '/adopter-profile' render={(routeProps) => <AdopterProfile {...routeProps} /> }/>
            <Route exact path = '/pet-profiles/:id' render={(routeProps) => <PetProfile {...routeProps} /> }/>
            <Route exact path ='/logout' render = {(routeProps) => <Logout logOut = {this.logOut} {...routeProps}/>}/>
          <Route path = '/' render={(routeProps) => <About {...routeProps}/> }/>
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
    },
    setPets: (pets) => {
      dispatch({type: "SET_PETS", payload: pets})
    },
    addPetToPets: (pet) => {
      dispatch({type: "ADD_PET_TO_PETS", payload: pet})
    }
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    pets: state.pets
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
