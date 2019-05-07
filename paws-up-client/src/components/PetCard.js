import React from 'react';

const PetCard = (props) => {

  const renderAge=(age)=>{
    if(parseInt(age)<=12){
      return age+" months old"
    }else{
      return Math.floor(parseInt(age)/12)+" years old"
    }
  }


    return (

        <div style={{ margin: "3em", justifyContent:'center', alignItems:'center', height: '35em' }} className="ui card three wide column" onClick={() => props.setSelectedPet(props.pet)}>
          <div className="image">
            <img style={{objectFit: "cover", height: "25em"}} alt="" src={props.pet.img_url}/>
          </div>
          <div className="description" style={{color: "black"}}>
            <h2>{props.pet.name} {props.pet.sex==="female"? "♀︎":"♂︎"}</h2>

            <h3>{renderAge(props.pet.age)} </h3>
            <div className="extra content">
            <i className="globe icon"></i>
              {props.pet.location}
            </div>
          </div>
        </div>
    )
}

export default PetCard
