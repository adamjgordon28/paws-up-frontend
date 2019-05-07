import React from 'react';
import PetMeetingCard from "./PetMeetingCard.js"
import CreateMeetingCard from "./CreateMeetingCard.js"

class PetProfile extends React.Component {

  state =  {
    meetings: this.props.pet.meetings
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
  <i class="home icon"></i>
  <div className="content">
    Residence Type: {this.props.pet.residence_type}
  </div>
  </div>
  <div className="item">
  <i className="birthday cake icon"></i>
  <div className="content">
    {this.props.pet.age} Months Old
  </div>
  </div>
  <div className="item">
  <i class="certificate icon"></i>
  <div className="content">
    {this.props.pet.allergy? "Pet is Allergenic": "Pet is Not Allergenic"}
  </div>
  </div>
  <div className="item">
  {this.props.pet.sex === "male" ? <i class="mars icon"></i> : <i class="venus icon"></i>}
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
      console.log(meeting)
    }



  renderPetMeetings = () => {
      if(this.props.pet.meetings.length){
        return (<PetMeetingCard pet={this.props.pet} meetings = {this.state.meetings} />)
      }
      else {
        return(<div style={{position:"relative", top:"12em"}} class="ui message">This Pet Has No Meetings Yet! Set One Up!</div>)
      }
  }

  render(){
    return(

      <div><div className="ui two column very relaxed grid"><div className="column">{this.renderPetInfoList()}</div>
          <div className="column">{this.renderPetMeetings()}
            <CreateMeetingCard currentUser={this.props.currentUser} pet={this.props.pet} renderPetMeetings={this.renderPetMeetings} addPetMeeting={this.addPetMeeting} fetchPets={this.props.fetchPets}/>
          </div>
          </div>
        </div>
    )
  }
}

export default PetProfile
