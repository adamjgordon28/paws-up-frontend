import React, { Component } from 'react';
import { connect } from 'react-redux';
import PetMeetingCard from "./PetMeetingCard.js";
import CreateMeetingCard from "./CreateMeetingCard.js";

class PetProfile extends Component {


  componentDidMount = () => {
    this.fetchAndSetPet(this.props.match.params.id)
  }

  fetchAndSetPet = (id) => {
    fetch(`${process.env.REACT_APP_BASE_URL}`.concat("/api/v1/pets/").concat(`${id}`))
    .then(res => res.json())
    .then(pet => {
      this.props.setCurrentPet(pet)
    })
  }

  conditionallyRenderMeetingPrompt = () => {
    let formerMeetingAdopterIds = this.props.currentPet.meetings.map((meeting) => {
    return  meeting.adopter_id
    })
    if (this.props.currentUser && formerMeetingAdopterIds.includes(this.props.currentUser.id)) {
      return null
    }
    else {
      return (<CreateMeetingCard  addPetMeeting={this.addPetMeeting}/>
      )
    }
  }

  renderAge=(age)=>{
    if(parseInt(age)<12){
      return age+" months old"
    }else if(age%12){
      return Math.floor(parseInt(age)/12)+" years and " +(age % 12) +" Months old"
    }else{return Math.floor(parseInt(age)/12)+" years old "}
  }



  renderPetInfoList = () => {
      return (<div style={{position:"relative", right: "6em", fontSize: "1.6em", marginBottom: "5em"}}>
  <img alt="" className="ui medium circular image" src={this.props.currentPet.img_url}/>
  <h1>{this.props.currentPet.name}</h1><div className="ui list">
  <div className="item">
    <i className="marker icon"></i>
    <div className="content">
      {this.props.currentPet.location}
    </div>
  </div>
  <div className="item">
  <i className="birthday cake icon"></i>
  <div className="content">
    {this.renderAge(this.props.currentPet.age)}
    {this.props.currentPet.age > 12 ? `(`+this.props.currentPet.age+`months)`:`` }
  </div>
  </div>
  <div className="item">
  <i className="certificate icon"></i>
  <div className="content">
    {this.props.currentPet.allergy? "Pet is Allergenic": "Pet is Not Allergenic"}
  </div>
  </div>
  <div className="item">
  {this.props.currentPet.sex === "male" ? <i className="mars icon"></i> : <i className="venus icon"></i>}
  <div className="content">
    {this.props.currentPet.sex === "male"  ? "Male" : "Female"}
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
      if(this.props.currentPet.meetings.length){
        return (<PetMeetingCard pet={this.props.currentPet}/>)
      }
      else {
        return(<div style={{position:"relative", top:"2em", width:"14em"}} className="ui message huge"><span style={{textAlign:"center"}}>This Pet Has No Meetings Yet! Set One Up!</span></div>)
      }
  }



  render(){
    if (!this.props.currentPet){
      return <h1>Loading...</h1>
    }
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


function mapDispatchToProps(dispatch) {
  return {
    setCurrentUser: (user) => {
      dispatch({type: "SET_CURRENT_USER", payload: user})
    },
    setCurrentPet: (pet) => {
      dispatch({type: "SET_CURRENT_PET", payload: pet})
    }
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    currentPet: state.currentPet
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(PetProfile)
