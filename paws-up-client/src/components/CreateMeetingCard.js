import React from 'react'
import { connect } from 'react-redux'
import { addMeetingToCurrentAdopter } from '../actions/adopter'
import { addMeetingToCurrentPet } from '../actions/pet'

class CreateMeetingCard extends React.Component {

  state = {
    datetime: null,
    location: null
  }


    handleChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value
      })
    }

    handleClick = ()=> {
      let today = new Date().toJSON().slice(0,10).replace(/-/g,'-')
      if(this.state.datetime > today &&this.state.location!==null ){
        this.createMeeting();
      }else if(this.state.datetime < today){
          alert("Meeting date cannot be in the past.");
      }else if(!this.state.datetime || !this.state.location){
          alert(`Wait, When and where would you like to meet ${this.props.currentPet.name}?`);
      }else{
          alert("Wooo...Something's wrong.");
      }
    }


    createMeeting = () => {
      fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/meetings`, {
        method: "POST",
        headers:{
    'Content-Type': 'application/json'
                },
        body: JSON.stringify({
          adopter_id: this.props.adopter.id,
          pet_id: this.props.pet.id,
          datetime: this.state.datetime,
          location: this.state.location
        })
      })
      .then(res=>res.json())
      .then(meeting => {
        if(meeting.errors){
          alert(meeting.errors)
          }
        else {
          meeting.pet_img_url = this.props.currentPet.img_url
          meeting.pet = this.props.currentPet.name
          meeting.adopter_img_url = this.props.adopter.img_url
          meeting.adopter = this.props.adopter.name
          meeting.location = this.state.location
          meeting.date = this.state.datetime

          this.props.addMeetingToCurrentPet(meeting)
          this.props.addMeetingToCurrentAdopter(meeting)
        }
      })
    }



    render(){
      return(
        <div style={{marginTop: "2em",
                     color: "black",
                     padding: ".25em",
                     width:"28em"}}
                     className="ui raised card">
        <input style={{margin: "0.25em"}} onChange={this.handleChange} type="date" name="datetime" required />
        <select style={{margin: "0.25em"}} onChange={this.handleChange} name="location" required >
          <option label="Location"></option>
          <option label="New York City">New York City</option>
          <option value="Los Angeles">Los Angeles</option>
          <option value="Boston">Boston</option>
          <option value="Chicago">Chicago</option>
        </select>
        <button onClick = {this.handleClick} className="ui primary button">Set Up a Meeting With this Pet!</button>
        </div>

      )
    }
}



const mapStateToProps = (state) => {
  // console.log(state);
  return {
    adopter: state.adoptersReducer.adopter,
    currentPet: state.petsReducer.currentPet
  }
}


export default connect(mapStateToProps, {addMeetingToCurrentPet, addMeetingToCurrentAdopter })(CreateMeetingCard)
