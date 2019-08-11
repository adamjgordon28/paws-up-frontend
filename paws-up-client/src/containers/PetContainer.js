import React, {Fragment} from 'react';
import PetCard from '../components/PetCard'
import { connect } from 'react-redux'
import { fetchCurrentAdopter } from '../actions/adopter'
import './PetPage.css'

class PetContainer extends React.Component {

  componentDidMount(){
    if (localStorage.getItem('jwt') && !this.props.loggedIn) this.props.fetchCurrentAdopter()
  }


renderPets = () => {
  if (this.props.pets){
  let petNameArray = this.props.pets.map((pet) => {
    return <PetCard key={pet.id} pet={pet} setSelectedPet={this.props.setSelectedPet} />
  })
  return petNameArray
  }
  else{
    return <h1 style = {{marginTop: "5em"}}>There are no pets that meet these specs!</h1>
  }
}

  render(){
    return (
      <Fragment>

      <div className="container" >
      {this.renderPets()}
      </div>

      </Fragment>
    )

  }

}

const mapStateToProps = (reduxStoreState) => {
  return {
    loggedIn: reduxStoreState.adoptersReducer.loggedIn,
    authenticatingAdopter: reduxStoreState.adoptersReducer.authenticatingAdopter
  }
}

export default connect(mapStateToProps, {fetchCurrentAdopter})(PetContainer)
