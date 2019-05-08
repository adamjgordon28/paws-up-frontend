import React from 'react';
import PetMeetingCard from "./PetMeetingCard.js"
import CreateMeetingCard from "./CreateMeetingCard.js"

class PetProfile extends React.Component {

  conditionallyRenderMeetingPrompt = () => {
    let formerMeetingAdopterIds = this.props.pet.meetings.map((meeting) => {
    return  meeting.adopter_id
    })
    if (formerMeetingAdopterIds.includes(16)) {
      return null
    }
    else {
      return (<CreateMeetingCard fetchAndSetAdopters= {this.props.fetchAndSetAdopters} currentUser={this.props.currentUser} pet={this.props.pet} addPetMeeting={this.addPetMeeting} fetchPets={this.props.fetchPets}/>

      )
    }
  }

  renderAge=(age)=>{
    if(parseInt(age)<=12){
      return age+" months old"
    }else if(age%12){
      return Math.floor(parseInt(age)/12)+" years and " +(age % 12) +" Months old"
    }else{return Math.floor(parseInt(age)/12)+" years old "}
  }



  renderPetInfoList = () => {
      return (<div style={{position:"relative", right: "6em", fontSize: "1.6em"}}>
  <img alt="" className="ui medium circular image" src={this.props.pet.img_url}/>
  <h1>{this.props.pet.name}</h1><div className="ui list">
  <div className="item">
    <i className="marker icon"></i>
    <div className="content">
      {this.props.pet.location}
    </div>
  </div>
  <div className="item">
  <i className="home icon"></i>
  <div className="content">
    Residence Type: {this.props.pet.residence_type}
  </div>
  </div>
  <div className="item">
  <i className="birthday cake icon"></i>
  <div className="content">
    {this.renderAge(this.props.pet.age)}
    {this.props.pet.age > 12 ? `(`+this.props.pet.age+`months)`:`` }
  </div>
  </div>
  <div className="item">
  <i className="certificate icon"></i>
  <div className="content">
    {this.props.pet.allergy? "Pet is Allergenic": "Pet is Not Allergenic"}
  </div>
  </div>
  <div className="item">
  {this.props.pet.sex === "male" ? <i className="mars icon"></i> : <i className="venus icon"></i>}
  <div className="content">
    {this.props.pet.sex === "male"  ? "Male" : "Female"}
  </div>
  </div>
  </div>

  </div>)
  }

    addPetMeeting = (meeting) => {
      this.setState((prevState)=>{
        return {meetings: [...prevState.meetings, meeting]}
      })
    }



  renderPetMeetings = () => {
      if(this.props.pet.meetings.length){
        return (<PetMeetingCard pet={this.props.pet}/>)
      }
      else {
        return(<div style={{position:"relative", top:"2em"}} className="ui message huge">This Pet Has No Meetings Yet! Set One Up!</div>)
      }
  }

  render(){
    return(

      <div><div className="ui two column very relaxed grid"><div className="column">{this.renderPetInfoList()}</div>
          <div className="column">
          {this.renderPetMeetings()}

            {this.conditionallyRenderMeetingPrompt()}
          </div>
          </div>
        </div>
    )
  }
}

export default PetProfile
