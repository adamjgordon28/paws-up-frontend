import React from 'react';
import PetCard from '../components/PetInfo.js'




class PetSpec extends React.Component {

  render (){
    return (
      <div>
      <PetCard pet={this.props.pet} />
      </div>
    )
  }

}

export default PetSpec
