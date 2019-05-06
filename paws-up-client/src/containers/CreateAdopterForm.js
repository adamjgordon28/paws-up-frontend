import React from 'react'
import NavBar from '../components/NavBar.js'


class CreateAdopterForm extends React.Component {

  state = {
    name: "",
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
    this.props.createAdopter(this.state)
    console.log(this.state)

  }

  render(){
    return(
      <div>
      <h1>PawsUp</h1><img alt="" src="http://icons.iconarchive.com/icons/iconsmind/outline/256/Paw-icon.png"/>
      <NavBar />
      <h1>Create an Adopter Account!</h1>
        <form onSubmit ={this.handleSubmit}>
        <input placeholder="Name" onChange={this.handleChange} name="name" type="text" required />
        <input  onChange={this.handleChange}
        placeholder="Age" min="18" name="age" type="number" required/>
        <input placeholder="Location" onChange={this.handleChange} name="location" type="text" required />
        <select onChange={this.handleChange} name="residence_type" required >
          <option label="Residence Type?"></option>
          <option label="Apt">Apt</option>
          <option value="Townhouse">Townhouse</option>
          <option value="Igloo">Igloo</option>
          <option value="Chateau">Chateau</option>
          <option value="Dorm Room">Dorm Room!</option>
          <option value="Bungalow">Bungalow</option>
          <option value="Yurt">Yurt</option>
        </select>
        <select onChange={this.handleChange} name="other_pets" required>
          <option label="Any Other Pets?"></option>
          <option value="true">True</option>
          <option value="false">False</option>
        </select>
        <select onChange={this.handleChange} name="allergy" required>
          <option label="Allergies?"></option>
          <option value="true">True</option>
          <option value="false">False</option>
        </select>
        <input onChange={this.handleChange} placeholder="image URL" name="img_url" type="url" required/>
        <input type="submit"/>
        </form>
      </div>

    )
  }

}


export default CreateAdopterForm
