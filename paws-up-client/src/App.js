import React from 'react';
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

    state = {
      currentUser: null
    }

    logOut = () => {
    localStorage.removeItem("token")
    this.setCurrentUser(-1)
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
          this.setCurrentUser(-1)
          alert(user.errors)
          this.logOut()
        } else {
          this.setCurrentUser(user)
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

  createAdopter = (adopter)=> {
    fetch("http://localhost:4000/api/v1/adopters",{
      method: "POST",
      headers: {"Content-Type": "application/json", Accepts: "application/json"},
      body: JSON.stringify({name: adopter.name,
        username: adopter.username,
        password: adopter.password,
        age: adopter.age,
        location: adopter.location,
        residence_type: adopter.residence_type,
        allergy: adopter.allergy,
        other_pets: adopter.other_pets,
        img_url: adopter.img_url})
    })
    .then(res=>res.json())
    .then(response => {
      if (response.error){
            alert(response.error)
          }
      else {
      localStorage.setItem("token", response.token)
      this.setCurrentUser(response.adopter)
      }
    })

  }

  setCurrentUser = (user) => {
      this.setState({
        currentUser:user
      }, ()=> {
        if (localStorage.token){this.props.history.push("/adopter-profile")
      }
      })
  }


  render(){
    return (
      <div className="App">
      <NavBar currentUser={this.state.currentUser} location={this.props.location}/>
        <header className="App-header">
        {this.props.history.location.pathname==="/"? <Header/>:" "}
        <Switch>
        <Route exact path ='/' render = {(routeProps)=>
          <PetPage {...routeProps} currentUser={this.state.currentUser}/>} />
            <Route exact path = '/new-pet' render={(routeProps) => <CreatePetForm createPet = {this.createPet} {...routeProps}/>}/>
            <Route exact path = '/about' render={(routeProps) => <About {...routeProps}/> }/>
            <Route exact path = '/signup' render={(routeProps) => <CreateAdopterForm {...routeProps} createAdopter = {this.createAdopter}/>}/>
            <Route exact path = '/login' render={(routeProps) => <Login {...routeProps}/>}/>
            <Route exact path = '/adopter-profile' render={(routeProps) => <AdopterProfile {...routeProps} /> }/>
            <Route exact path ='/logout' render = {(routeProps) => <Logout logOut = {this.logOut} {...routeProps}/>}/>

        </Switch>
        </header>
      </div>
    );
  }
}

export default App;
