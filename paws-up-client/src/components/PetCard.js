import React from 'react';
import { Link } from 'react-router-dom';

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
        <div style={{ margin: "3em", justifyContent:'center', alignItems:'center', height: '35em', minWidth: '18em' }} className="ui card three wide column">
          <div className="image">
            <img style={{objectFit: "cover", height: "22.5em"}} alt="" src={props.pet.img_url}/>
          </div>
          <div className="description" style={{color: "black"}}>
            <h2 style={{textAlign:"center"}}>    {animalType}{props.pet.name}{props.pet.sex==="female" ? "♀︎":"♂︎"}</h2>

            <h3 style={{textAlign:"center", position:"relative", bottom:".75em"}}>{renderAge(props.pet.age)}</h3>
            <div className="extra content">
            <i style={{position:"relative", left:"25%", bottom:"1em"}}className="globe icon"></i>
               <span style={{position:"relative", left:"25%", bottom:"1em"}}>{props.pet.location}</span>
            </div>
            <Link key={Math.random()} to={`/pet-profiles/${props.pet.id}`}><button style={{position:"relative", left:"20%"}} className="ui button blue">See Pet Profile</button></Link>
          </div>
        </div>
    )
}

export default PetCard
