import React from 'react';
import PetProfile from './PetProfile'


const PetCard = (props) => {
  const renderAge=(age)=>{
    if(parseInt(age)<12){
      return age+" months old"
    }else{
      return Math.floor(parseInt(age)/12)+" years old"
    }
  }


  let animalType;
  switch (props.pet.animal) {
    case "dog":
      animalType = "🐶";
      break;
    case "cat":
      animalType = "🐱";
      break;
    case "pig":
      animalType = "🐽";
      break;
    case "lizard":
      animalType = "🦎";
      break;
    case "hamster":
      animalType = "🐹";
      break;
      case "rabbit":
      animalType = "🐰";
      break;
    default:
      animalType = <div />;
  }


    return (
        <div style={{ margin: "3em", justifyContent:'center', alignItems:'center', height: '35em', minWidth: '18em' }} className="ui card three wide column" onClick={()=>props.setSelectedPet(props.pet)}>
          <div className="image">
            <img style={{objectFit: "cover", height: "25em"}} alt="" src={props.pet.img_url}/>
          </div>
          <div className="description" style={{color: "black"}}>
            <h2>    {animalType}{props.pet.name}{props.pet.sex==="female" ? "♀︎":"♂︎"}</h2>

            <h3>{renderAge(props.pet.age)}</h3>
            <div className="extra content">
            <i className="globe icon"></i>
              {props.pet.location}
            </div>
          </div>
        </div>
    )
}



export default PetCard
