import React from 'react';
import PetCard from '../components/PetInfo.js'




class PetSpec extends React.Component {

  render (){
    return (
      <div>
      <PetCard pet={this.props.pet} />
      <div>
        <img alt="" src ={this.props.pet.guardian.img_url}/>
        <h3>{this.props.pet.guardian.name}</h3>
        <h3>{this.props.pet.guardian.location}</h3>
      </div>
      </div>
    )
  }

}

export default PetSpec
