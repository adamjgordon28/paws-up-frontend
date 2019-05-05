import React from 'react';
import {Card} from 'semantic-ui-react'

const GuardianCard = (props) => {

    return (
      <Card>
        <div className="guardianCard">
          <img alt="" src={props.guardian.img_url}/>
          <h1>Name: {props.guardian.name}</h1>
          <h1>Location: {props.guardian.location}</h1>
          <ul>{props.guardian.pets.map((pet)=> {
            return <li><img alt="" src={pet.img_url}/><h3>{pet.name}</h3></li>
          })}</ul>
        </div>
      </Card>
    )
}

export default GuardianCard
