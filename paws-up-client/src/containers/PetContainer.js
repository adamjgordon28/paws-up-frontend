import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import PetCard from '../components/PetCard'
import { fetchCurrentAdopter } from '../actions/adopter'
import './PetPage.css'

class PetContainer extends React.Component {

  componentDidMount(){
    if (localStorage.getItem('jwt') && !this.props.loggedIn) this.props.fetchCurrentAdopter()
  }


  renderPets = () => {
    if (this.props.pets){
    let petNameArray = this.props.pets.map((pet) => {
      return  this.props.pets.map(pet =>
                 <Link key={pet.id} to={"/pet/"+pet.id}>
                 <PetCard key={pet.id} pet={pet} setSelectedPet={this.props.setSelectedPet}/>
                 </Link>
             )
    })
    return petNameArray
    }
    else{
      return <h2 style = {{marginTop: "5em"}}>There are no pets that meet these specs!</h2>
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

const mapStateToProps = (state) => {
  return {
    loggedIn: state.adoptersReducer.loggedIn,
    authenticatingAdopter: state.adoptersReducer.authenticatingAdopter
  }
}

export default connect(mapStateToProps, {fetchCurrentAdopter})(PetContainer)
