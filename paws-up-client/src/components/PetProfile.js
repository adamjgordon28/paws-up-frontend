import React from 'react';
import PetMeetingCard from "./PetMeetingCard.js"
import CreateMeetingCard from "./CreateMeetingCard.js"
import '../containers/PetPage.css'

import { connect } from 'react-redux'
import withAuth from '../hocs/withAuth'
import { setPet, fetchPets, deleteMeetingToCurrentPet } from '../actions/pet'
import { fetchCurrentAdopter, deleteMeetingToCurrentAdopter } from '../actions/adopter'



class PetProfile extends React.Component {

  conditionallyRenderMeetingPrompt = () => {
    let formerMeetingAdopterIds = this.props.currentPet.meetings.map((meeting) => meeting.adopter_id)

    if (this.props.adopter && formerMeetingAdopterIds.includes(this.props.adopter.id)) {
      return null
    }
    else {
      return (<CreateMeetingCard currentAdopter={this.props.adopter} pet={this.props.currentPet} />
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

  // componentDidMount = () => {
  //   this.props.fetchPets()
  // }
  //
  // componentWillMount = () => {
  //   this.fetchAndSetPet(this.props.match.params.id)
  // }
  //
  //
  // fetchAndSetPet = (id) => {
  //   fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/pets/${id}`)
  //   .then(res => res.json())
  //   .then(pet => {
  //     this.props.setPet(pet)
  //   })
  // }

  deleteMeeting=(id)=>{
  fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/meetings/${id}`,
  {method: 'DELETE'})
  this.props.deleteMeetingToCurrentAdopter(id)
  this.props.deleteMeetingToCurrentPet(id);
  }

  renderPetInfoList = () => {
      return (
        <div className="petinfo">
            <h1>{this.props.currentPet.name}</h1>
          <img alt="" className="ui medium circular image" src={this.props.currentPet.img_url}/>
          <br/> <br/>
          <hr/>
          <div className="ui list">
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
          </div>
        )
      }


  renderPetMeetings = () => {
      if(this.props.currentPet.meetings.length){
        return (<PetMeetingCard pet={this.props.currentPet}
                                adopter={this.props.adopter}
                                deleteMeeting={this.deleteMeeting}/>)
      }
      else {
        return(<div className="ui message huge">{this.props.currentPet.name} Has No Meetings Yet! Set One Up!</div>)
      }
  }


  render(){
    console.log(this.props);
    return(
      <div className="PetProfile">
                {this.renderPetInfoList()}
              <div className="meetingcard">
                {this.renderPetMeetings()}
                {this.conditionallyRenderMeetingPrompt()}
              </div>
      </div>
    )
  }
}



const mapStateToProps = (state) => {
  return {
    adopter: state.adoptersReducer.adopter,
    currentPet: state.petsReducer.currentPet,
    pets: state.petsReducer.pets
  }
}


// export default withAuth(connect(mapStateToProps, {setPet})(PetProfile))

export default withAuth(connect(mapStateToProps, {setPet , fetchPets, fetchCurrentAdopter, deleteMeetingToCurrentPet, deleteMeetingToCurrentAdopter})(PetProfile))
