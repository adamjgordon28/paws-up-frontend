import React from 'react';
import PetPage from './containers/PetPage.js'
import CreateAdopterForm from './containers/CreateAdopterForm.js'
import About from './components/About.js'
import CreatePetForm from './containers/CreatePetForm.js'
import AdopterProfile from './components/AdopterProfile.js'
import NavBar from './components/NavBar.js'
import {Route, Switch, Redirect} from 'react-router-dom';
import Login from './components/Login.js';

import './App.css';

class App extends React.Component {


    state = {
      currentUser: null
    }

  createPet = (pet)=> {
    fetch("http://localhost:4000/api/v1/pets",{
      method: "POST",
      headers: {"Content-Type": "application/json", Accepts: "application/json"},
      body: JSON.stringify(pet)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
    })

  }

  createAdopter = (adopter)=> {
    fetch("http://localhost:4000/api/v1/adopters",{
      method: "POST",
      headers: {"Content-Type": "application/json", Accepts: "application/json"},
      body: JSON.stringify({name: adopter.name,
      age: adopter.age,
      location: adopter.location,
      residence_type: adopter.residence_type,
      allergy: adopter.allergy,
      other_pets: adopter.other_pets,
      img_url: adopter.img_url})
    })

  }

  fetchAndSetAdopters = () => {
    fetch("http://localhost:4000/api/v1/adopters/7")
    .then(res => res.json())
    .then(user => {

      this.setState({
        currentUser:user
      })
    })

  }

  componentDidMount(){

        this.fetchAndSetAdopters()
    }

  render(){
    return (
      <div className="App">
      <NavBar/>
        <header className="App-header">
        <Switch>
        <Route exact path ='/' render = {()=>
          <PetPage currentUser={this.currentUser}/>}/>
            <Route exact path = '/new-pet' render={() => <CreatePetForm createPet = {this.createPet}/>}/>
            <Route exact path = '/about' render={() => <About /> }/>
            <Route exact path = '/signup' render={() => <CreateAdopterForm createAdopter = {this.createAdopter}/>}/>
            <Route exact path = '/login' render={() => <Login />}/>
            <Route exact path = '/adopter-profile' render={() => <AdopterProfile currentUser={this.state.currentUser} /> }/>
        </Switch>
        </header>
      </div>
    );
  }
}

export default App;
