import React, {Fragment} from 'react';
import NavBar from '../components/NavBar.js'
import PetContainer from './PetContainer.js'
import PetSpec from './PetSpec.js'
import Filter from '../components/Filter.js'

class PetPage extends React.Component {

  state = {
    pets: [],
    selectedPetId: null
  }

  fetchPets = () => {
    fetch("http://localhost:4000/api/v1/pets")
    .then(res => res.json())
    .then(pets => {
      this.setState({
        pets: pets
      })
    })
  }


  componentDidMount(){
    this.fetchPets()
  }

  setSelectedPet = (pet) => {
    this.setState({
      selectedPetId: pet.id
    })
  }

  findPet = (id) => {
    return this.state.pets.find((pet)=>pet.id === id)
  }

  render(){

  return (

    <Fragment>
    <h1>PawsUp</h1><img alt="" src="http://icons.iconarchive.com/icons/iconsmind/outline/256/Paw-icon.png"/>
    <NavBar />



    {this.state.selectedPetId ? <PetSpec pet = {this.findPet(this.state.selectedPetId)}/> : <Fragment><Filter /><PetContainer pets = {this.state.pets} setSelectedPet = {this.setSelectedPet}/> </Fragment>}



    </Fragment>
  )
  }
}

export default PetPage
