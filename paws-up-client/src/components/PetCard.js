import React, { Fragment } from 'react';
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
      <Fragment>
        <div style={{ margin: "1em",
                      alignItems:'center',
                      height: '18em',
                      width: '12em' }} className="ui card three wide column">
        <Link key={Math.random()} to={`/pet-profiles/${props.pet.id}`}>
        <div className="image" style={{margin: ".7em"}}>
          <img style={{objectFit: "contain",
                       height: "10em",
                       width: '11.3em'}} alt="" src={props.pet.img_url? props.pet.img_url:"https://cdn.dribbble.com/users/95644/screenshots/2574787/dog_positive.png"}/>
        </div>
        <div className="description" style={{color: "black"}}>
          <h2>  {animalType}{props.pet.name}{props.pet.sex==="female" ? "♀︎":"♂︎"}</h2>
          <h3>{renderAge(props.pet.age)}</h3>
          <div className="extra content">
          <i className="globe icon"></i>
            {props.pet.location}
          </div>
        </div>
        </Link>
        </div>
      </Fragment>
    )
}

export default PetCard
