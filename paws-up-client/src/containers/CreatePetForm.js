import React from 'react';
import NavBar from '../components/NavBar.js'

class CreatePetForm extends React.Component {

  state = {
    name: "",
    sex: "",
    animal: "",
    age: "",
    allergy: "",
    size: "",
    location: "",
    img_url: "",
    guardian_id: 5
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })

  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.createPet(this.state)

  }

  render(){
    return(
      <div>
      <h1>PawsUp</h1><img alt="" src="http://icons.iconarchive.com/icons/iconsmind/outline/256/Paw-icon.png"/>
      <NavBar />
      <h1>Create a pet!</h1>
        <form onSubmit ={this.handleSubmit}>
        <input placeholder="Name" onChange={this.handleChange} name="name" type="text"required/>
        <select onChange={this.handleChange} name="sex" required>
          <option label="Select Sex"></option>
          <option value="male">♂︎</option>
          <option value="female">♀︎</option>
        </select>
        <select onChange={this.handleChange} name="animal" required >
          <option label="Select Animal Type"></option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="pig">Pig</option>
          <option value="lizard">Lizard</option>
          <option value="hamster">Hamster</option>
          <option value="rabbit">Rabbit</option>
        </select>
        <input onChange={this.handleChange}
        placeholder="Age (in months)" min="1" name="age" type="number" required />
        <select onChange={this.handleChange} name="allergy" required >
          <option label="Allergenic?"></option>
          <option value="true">True</option>
          <option value="false">False</option>
        </select>
        <select onChange={this.handleChange} name="size" required >
          <option label="Select Animal Size"></option>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
        <input onChange={this.handleChange} placeholder="Location" name="location" type="text" required />
        <input onChange={this.handleChange} placeholder="image URL" name="img_url" type="url" required />
        <input type="submit"/>
        </form>
      </div>

    )
  }

}


export default CreatePetForm
