import React, {Fragment} from 'react';
import PetContainer from './PetContainer.js'
import PetProfile from '../components/PetProfile.js'
import Filter from '../components/Filter.js'

class PetPage extends React.Component {

  state = {
    pets: [],
    selectedPetId: null,
    animalFilter: null,
    sizeFilter: null,
    sexFilter: null
  }


  setAnimalFilter = (value) => {
    this.setState({
      animalFilter: value
    })
  }

  setSizeFilter = (value) => {
    this.setState({
      sizeFilter: value
    })
  }

  setSexFilter = (value) => {
    this.setState({
      sexFilter: value
    })
  }



  filterPets = (array) => {
    let firstArray;
    let secondArray;
    let finalArray;
    if (this.state.animalFilter){
      let animalFilteredPets = array.filter((pet)=>{
        return pet.animal === this.state.animalFilter
      })
      firstArray = animalFilteredPets
    }
    else {
      firstArray = array
    }
    if (this.state.sizeFilter){
      let sizeFilteredPets = firstArray.filter((pet)=>{
        return pet.size === this.state.sizeFilter
      })
      secondArray = sizeFilteredPets
    }
    else {
      secondArray = firstArray
    }
    if (this.state.sexFilter){
      let sexFilteredPets = secondArray.filter((pet)=>{
        return pet.sex === this.state.sexFilter
      })
      finalArray = sexFilteredPets
    }
    else {
       finalArray = secondArray
    }
    return finalArray
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




    {this.state.selectedPetId ?

      <PetProfile pet = {this.findPet(this.state.selectedPetId)}/>

    : <Fragment><Filter setAnimalFilter ={this.setAnimalFilter} setSizeFilter ={this.setSizeFilter} setSexFilter ={this.setSexFilter}/><PetContainer pets = {this.filterPets(this.state.pets)} setSelectedPet = {this.setSelectedPet}/> </Fragment>}



    </Fragment>
  )
  }
}

export default PetPage
