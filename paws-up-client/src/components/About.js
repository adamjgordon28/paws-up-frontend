import React from 'react';
import Header from '../components/Header'
import { connect } from 'react-redux'
import { fetchCurrentAdopter } from '../actions/adopter'


const componentDidMount=(props)=>{
    if (localStorage.getItem('jwt') && !props.loggedIn) props.fetchCurrentAdopter()
  }

const About = (props) => {
  componentDidMount(props)

 return (
  <div>

    <h1>About PawsUp</h1>

    <p>PawsUp is an organization dedicated to helping prospective pet adopters meet the pet of their dreams. With all of the pets that need adopting, it can be overwhelming to determine where to start - that's why PawsUp is here to help! Feel free to browse through our pets that need adopting, and set up a meeting if things feels right! </p>
    <img src ="http://akc.org/wp-content/uploads/2015/09/Puppy-Lineup.jpg"/>

  </div>

  )
}

const mapStateToProps = (reduxStoreState) => {
  return {
    loggedIn: reduxStoreState.adoptersReducer.loggedIn,
    authenticatingAdopter: reduxStoreState.adoptersReducer.authenticatingAdopter
  }
}

export default connect(mapStateToProps, {fetchCurrentAdopter})(About)
