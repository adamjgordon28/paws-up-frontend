import React from 'react';

const PetInfo = (props) => {
  console.log(props.pet)
  return <div>
    <img src={props.pet.img_url} alt=""/>
    <h3>Name: {props.pet.name}</h3>
    <h3>Animal: {props.pet.animal}</h3>
    <h3>Age: {props.pet.age} Months</h3>
    <h3>Sex: {props.pet.sex}</h3>
    <h3>Size: {props.pet.size}</h3>
    <h3>Guardian: {props.pet.guardian.name}</h3>

        </div>
}

export default PetInfo
