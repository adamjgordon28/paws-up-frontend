import React from 'react';
import PetCard from '../components/PetCard.js'


class PetContainer extends React.Component {



renderPets = () => {
  let petNameArray = this.props.pets.map((pet) => {
    return <PetCard key={pet.id} pet={pet} setSelectedPet = {this.props.setSelectedPet}/>
  })
  return petNameArray
}

  render(){
    return (
      <div className="ui grid" >
      {this.renderPets()}
      </div>
    )

  }

}

export default PetContainer
