import React from 'react'


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
          adopter_id: 4,
          pet_id: this.props.pet.id,
          datetime: this.state.datetime,
          location: this.state.location
        })
      })

      this.props.fetchPets()

    }

    render(){
      console.log(this.props)
      return (

        <div style={{marginTop: "12em", color: "black"}} class="ui raised card">
        <input onChange={this.handleChange} required type="date" name="datetime"/>
        <select onChange={this.handleChange} name="location" required >
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


export default CreateMeetingCard
