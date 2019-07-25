import React from 'react';
import PetCard from '../components/PetCard'
import Header from '../components/Header'



class PetContainer extends React.Component {
  state={
    pets: null
  }

  componentDidMount(){
    this.getPets()
  }

  getPets = () => {
      fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/pets`,{
           method: "GET",
           headers: {"Content-Type": "application/json",
                      Accepts: "application/json"}
         })
         .then(res=>res.json())
         .then((data) => this.setState({
           pets: data
         }))
  }


renderPets = () => {
  if (this.state.pets){
  let petNameArray = this.state.pets.map((pet) => {
    return <PetCard key={pet.id} pet={pet} />
  })
  return petNameArray
  }
  else{
    return <h1 style = {{marginTop: "5em"}}>There are no pets that meet these specs!</h1>
  }
}

  render(){
    console.log(this.state.pets);
    return (
      <div className="ui grid" >
      {this.renderPets()}
      </div>
    )

  }

}

export default PetContainer
