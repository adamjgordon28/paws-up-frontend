import React from 'react';
import PetCard from '../components/PetCard.js'


class PetContainer extends React.Component {



renderPets = () => {
  if (this.props.pets.length){
  let petNameArray = this.props.pets.map((pet) => {
    return <PetCard key={pet.id} pet={pet}/>
  })
  return petNameArray
  }
  else{
    return <h1 style = {{marginTop: "5em"}}>There are no pets that meet these specs!</h1>
  }
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
