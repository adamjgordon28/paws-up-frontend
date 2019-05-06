import React from 'react';
import {Card} from 'semantic-ui-react'

const PetCard = (props) => {


    return (
      <Card>
        <div className="ui card" onClick={() => props.setSelectedPet(props.pet)}>
          <div className="image">
          <img alt="" src={props.pet.img_url}/>
          </div>
          <div className="content">
            <h1>Name: {props.pet.name}</h1>
            <h1>Age: {props.pet.age} Months</h1>
          </div>
        </div>
      </Card>
    )
}

export default PetCard
