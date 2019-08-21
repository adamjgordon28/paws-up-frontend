import React from 'react';
import PetCard from '../components/PetCard.js'
import header from '../components/Header'


class PetContainer extends React.Component {



renderPets = () => {
  if (this.props.pets.length){
  let petNameArray = this.props.pets.map((pet) => {
    return <PetCard key={pet.id} pet={pet}/>
  })
  return petNameArray
  }
  else{
    return <h2 style = {{marginTop: "5em"}}>There are no pets that meet these specs!</h2>
  }
}

  render(){
    return (
      <div style={{  display: "inline-flex",
                     flexWrap: "wrap",
                     alignItems: "center",
                     marginLeft: "5em"}}>
      {this.renderPets()}
      </div>
    )

  }

}

export default PetContainer
