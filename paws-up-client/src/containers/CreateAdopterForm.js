import React from 'react';
import { connect } from 'react-redux';


class CreateAdopterForm extends React.Component {

  state = {
    name: "",
    username: "",
    password: "",
    age: "",
    location: "",
    residence_type: "",
    allergy: "",
    other_pets: "",
    img_url: ""
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.createAdopter(this.state)
  }

  createAdopter = (adopter)=> {
    fetch("http://localhost:4000/api/v1/adopters",{
      method: "POST",
      headers: {"Content-Type": "application/json", Accepts: "application/json"},
      body: JSON.stringify({name: adopter.name,
        username: adopter.username,
        password: adopter.password,
        age: adopter.age,
        location: adopter.location,
        residence_type: adopter.residence_type,
        allergy: adopter.allergy,
        other_pets: adopter.other_pets,
        img_url: adopter.img_url})
    })
    .then(res=>res.json())
    .then(response => {
      if (response.error){
            alert(response.error)
          }
      else {
      localStorage.setItem("token", response.token)
      this.props.setCurrentUser(response.adopter)
      }
      this.props.history.push("/adopter-profile")
    })

  }

  render(){

    return(
      <div>

      <h1>Create an Adopter Account!</h1>
        <form className="ui form" onSubmit ={this.handleSubmit} style = {{width: "25em"}}>
        <input placeholder="Name" onChange={this.handleChange} name="name" type="text" required /> <br/><br/>
        <input placeholder="Username" onChange={this.handleChange} name="username" type="text" required /> <br/><br/>
        <input placeholder="Password" onChange={this.handleChange} name="password" type="password" required /> <br/><br/>
        <input  onChange={this.handleChange}
        placeholder="Age" min="18" name="age" type="number" required/> <br/><br/>
        <select onChange={this.handleChange} name="location" required >
          <option label="Location"></option>
          <option label="New York City">New York City</option>
          <option value="Los Angeles">Los Angeles</option>
          <option value="Boston">Boston</option>
          <option value="Chicago">Chicago</option>
        </select> <br/>
        <select onChange={this.handleChange} name="residence_type" required >
          <option label="Residence Type?"></option>
          <option label="apt">Apt</option>
          <option value="townhouse">Townhouse</option>
          <option value="one-story-house">One-Story-House</option>
          <option value="two-story-house">Two-Story-House</option>
          <option value="mansion">mansion</option>
          <option value="castle">castle</option>
        </select> <br/>
        <select onChange={this.handleChange} name="other_pets" required>
          <option label="Any Other Pets?"></option>
          <option value="true">True</option>
          <option value="false">False</option>
        </select> <br/>
        <select onChange={this.handleChange} name="allergy" required>
          <option label="Allergies?"></option>
          <option value="true">True</option>
          <option value="false">False</option>
        </select> <br/>
        <input onChange={this.handleChange} placeholder="image URL" name="img_url" type="url" required/>
        <br/><br/><button className="ui button" type="submit">Submit</button>
        </form>
      </div>

    )
  }

}


function mapDispatchToProps(dispatch) {
  return {
    setCurrentUser: (user) => {
      dispatch({type: "SET_CURRENT_USER", payload: user})
    }
  }
}


export default connect(null, mapDispatchToProps)(CreateAdopterForm)
