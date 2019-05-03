import React from 'react';
import PetPage from './containers/PetPage.js'
import PetContainer from './containers/PetContainer.js'
import CreateGuardianForm from './containers/CreateGuardianForm.js'
import CreatePetForm from './containers/CreatePetForm.js'
import {Route, Switch} from 'react-router-dom';

import './App.css';

class App extends React.Component {


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

  render(){
    return (
      <div className="App">
        <header className="App-header">

        <Switch>
        <Route exact path ='/' render = {()=>
          <PetPage/>}/>
          <Route exact path = '/new-pet' render={() => <CreatePetForm createPet = {this.createPet}/>}/>
        </Switch>
        <PetPage />
        </header>
      </div>
    );
  }
}

export default App;
