import React from 'react';

const GuardianInfo = (props) => {
  console.log(props.guardian)
  return <div>
        <h2>Guardian Info: </h2>
        <img alt="" src = {props.guardian.img_url}/>
        <h3>Name: {props.guardian.name}</h3>
        <h3>Location: {props.guardian.location}</h3>


        </div>
}

export default GuardianInfo
