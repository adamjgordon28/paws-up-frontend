import React, {Fragment} from 'react';
import PetContainer from './PetContainer.js'
import PetProfile from '../components/PetProfile.js'
import Header from '../components/Header'
import Filter from '../components/Filter.js'
import './PetPage.css'

import { fetchPets, setPet } from '../actions/pet'
import { connect } from 'react-redux'


class PetPage extends React.Component {

  state = {
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


  componentDidMount(){
    this.props.fetchPets()
  }

  setSelectedPet = (pet) => {
    this.setState({
      selectedPetId: pet.id
    })
    this.findPet(pet.id)
  }
  
  findPet = (id) => {
    let currentPet = this.props.pets.filter(p=>p.id === id)
    this.props.setPet(currentPet[0])
  }



  render(){
  return (
    <div className="page">
    {this.state.selectedPetId? null: <Header/>}
    {this.state.selectedPetId ?
      <PetProfile />

    : <Fragment>
      <Filter setAnimalFilter ={this.setAnimalFilter} setSizeFilter ={this.setSizeFilter} setSexFilter ={this.setSexFilter}/>
      <PetContainer pets = {this.filterPets(this.props.pets)}  setSelectedPet = {this.setSelectedPet}/>
      </Fragment>}
    </div>
    )
  }
}

const mapStateToProps = ({ petsReducer: { pets: pets, currentPet: currentPet } }) => ({
  pets
})

export default connect(mapStateToProps,{fetchPets, setPet })(PetPage)
