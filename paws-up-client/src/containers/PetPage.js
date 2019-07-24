import React, {Fragment} from 'react';
import { connect } from 'react-redux';
import PetContainer from './PetContainer.js';
import PetProfile from '../components/PetProfile.js';
import Filter from '../components/Filter.js';

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



  componentDidMount(){
    if(!localStorage.token) {
      alert ("You must be logged in to view this page!")
      this.props.history.push("/login")
    }
  }




  render(){
  return (
    <Fragment>
    {this.state.selectedPetId ?
      <PetProfile fetchAndSetAdopters= {this.props.fetchAndSetAdopters} currentUser= {this.props.currentUser} pet = {this.findPet(this.state.selectedPetId)} fetchPets={this.fetchPets}/>

    : <Fragment><Filter setAnimalFilter ={this.setAnimalFilter} setSizeFilter ={this.setSizeFilter} setSexFilter ={this.setSexFilter}/><PetContainer pets = {this.filterPets(this.props.pets)}/> </Fragment>}
    </Fragment>
  )
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    pets: state.pets
  }
}

export default connect(mapStateToProps)(PetPage)
