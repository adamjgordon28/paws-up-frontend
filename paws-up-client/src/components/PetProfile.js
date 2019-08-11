import React from 'react';
import PetMeetingCard from "./PetMeetingCard.js"
import CreateMeetingCard from "./CreateMeetingCard.js"
import '../containers/PetPage.css'

import { connect } from 'react-redux'
// import withAuth from "../hocs/withAuth"

class PetProfile extends React.Component {

  conditionallyRenderMeetingPrompt = () => {
    let formerMeetingAdopterIds = this.props.pet[0].meetings.map((meeting) => {
    return  meeting.adopter_id
    })
    if (this.props.currentAdopter && formerMeetingAdopterIds.includes(this.props.currentAdopter.id)) {
      return null
    }
    else {
      return (<CreateMeetingCard currentAdopter={this.props.adopter} pet={this.props.pet[0]} addPetMeeting={this.addPetMeeting}/>
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
      return (
        <div className="petinfo">
            <h1>{this.props.pet[0].name}</h1>
          <img alt="" className="ui medium circular image" src={this.props.pet[0].img_url}/>
          <br/> <br/>
          <hr/>
          <div className="ui list">
          <div className="item">
          <i className="marker icon"></i>
          <div className="content">
            {this.props.pet[0].location}
          </div>
          </div>
          <div className="item">
            <i className="birthday cake icon"></i>
            <div className="content">
            {this.renderAge(this.props.pet[0].age)}
            {this.props.pet[0].age > 12 ? `(`+this.props.pet[0].age+`months)`:`` }
            </div>
            </div>
            <div className="item">
            <i className="certificate icon"></i>
            <div className="content">
            {this.props.pet[0].allergy? "Pet is Allergenic": "Pet is Not Allergenic"}
            </div>
            </div>
            <div className="item">
            {this.props.pet[0].sex === "male" ? <i className="mars icon"></i> : <i className="venus icon"></i>}
            <div className="content">
            {this.props.pet[0].sex === "male"  ? "Male" : "Female"}
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
      if(this.props.pet[0].meetings.length){
        return (<PetMeetingCard pet={this.props.pet[0]}/>)
      }
      else {
        return(<div className="ui message huge">{this.props.pet[0].name} Has No Meetings Yet! Set One Up!</div>)
      }
  }



  render(){
    console.log(this.props.adopter);
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



const mapStateToProps = ({ petsReducer: { pets: pets } , adoptersReducer: {adopter: adopter} }) => ({
  pets, adopter
})

export default connect(mapStateToProps)(PetProfile)

// export default withAuth(PetProfile)
