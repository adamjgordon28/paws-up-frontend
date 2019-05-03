import React from 'react';
import {Card} from 'semantic-ui-react'

const PetCard = (props) => {


    return (
      <Card>
        <div className="petCard" onClick={() => props.setSelectedPet(props.pet)}>
          <img alt="" src={props.pet.img_url}/>
          <h1>Name: {props.pet.name}</h1>
          <h1>Age: {props.pet.age} Months</h1>
        </div>
      </Card>
    )
}

export default PetCard
