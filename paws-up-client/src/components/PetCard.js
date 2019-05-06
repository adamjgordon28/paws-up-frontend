import React from 'react';
import {Card} from 'semantic-ui-react'

const PetCard = (props) => {


    return (

        <div style={{ margin: "3em", justifyContent:'center', alignItems:'center', height: '35em'}} className="ui card three wide column" onClick={() => props.setSelectedPet(props.pet)}>
          <div className="image">
            <img style={{objectFit: "cover", height: "25em"}} alt="" src={props.pet.img_url}/>
          </div>
          <div className="description" style={{color: "black"}}>
            <h2>{props.pet.name}</h2>
            <h3>{props.pet.age} Months Old</h3>
            <div className="extra content">
            <i className="globe icon"></i>
              {props.pet.location}
            </div>
          </div>
        </div>
    )
}

export default PetCard
