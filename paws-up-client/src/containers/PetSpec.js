import React from 'react';
import PetInfo from '../components/PetInfo.js'
import GuardianInfo from '../components/GuardianInfo.js'



class PetSpec extends React.Component {

  render (){
      console.log(this.props.pet)
    return (
      <div>
      <PetInfo pet={this.props.pet} />
      <GuardianInfo guardian = {this.props.pet.guardian} />
      </div>
    )
  }

}

export default PetSpec
