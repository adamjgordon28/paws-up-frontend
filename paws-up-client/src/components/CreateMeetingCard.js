import React from 'react';
import { connect } from 'react-redux';


class CreateMeetingCard extends React.Component {

  state = {
    datetime: "",
    location: ""
  }



    handleChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value
      })
    }

    handleClick = ()=> {
      this.createMeeting()
    }

    createMeeting = () => {

      fetch("http://localhost:4000/api/v1/meetings", {
        method: "POST",
        headers:{
    'Content-Type': 'application/json'
                },
        body: JSON.stringify({
          adopter_id: this.props.currentUser.id,
          pet_id: this.props.currentPet.id,
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
        meeting.adopter_img_url = this.props.currentUser.img_url
        meeting.adopter = this.props.currentUser.name

        this.props.addMeetingToCurrentUser(meeting)
        this.props.addMeetingToCurrentPet(meeting)
        }
      })

    }

    render(){
      return (

        <div style={{marginTop: "18em", color: "black", padding: ".25em", width:"32em"}} className="ui raised card">
        <input style={{margin: "0.25em"}} onChange={this.handleChange} required type="date" name="datetime"/>
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

function mapDispatchToProps(dispatch) {
  return {
    addMeetingToCurrentUser: (meeting) => {
      dispatch({type: "ADD_MEETING_TO_CURRENT_USER", payload: meeting})
    },
    addMeetingToCurrentPet: (meeting) => {
      dispatch({type: "ADD_MEETING_TO_CURRENT_PET", payload: meeting})
    }
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    currentPet: state.currentPet
  }
}


export default connect (mapStateToProps, mapDispatchToProps)(CreateMeetingCard)
