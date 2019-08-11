import React from 'react';

class CreatePetForm extends React.Component {

  state = {
    name: "",
    sex: "",
    animal: "",
    age: "",
    allergy: "",
    size: "",
    location: "",
    img_url: ""
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


      <h2>Create a pet!</h2>
        <form className="ui form" style = {{width: "25em"}} onSubmit ={this.handleSubmit}>
        <div className="field">
        <input placeholder="Name" onChange={this.handleChange} name="name" type="text"required/>
        </div>
        <select onChange={this.handleChange} name="sex" required>
          <option label="Select Sex"></option>
          <option value="male">♂︎</option>
          <option value="female">♀︎</option>
        </select><br/>
        <select onChange={this.handleChange} name="animal" required >
          <option label="Select Animal Type"></option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="pig">Pig</option>
          <option value="lizard">Lizard</option>
          <option value="hamster">Hamster</option>
          <option value="rabbit">Rabbit</option>
        </select><br/>
        <div className="field">
        <input onChange={this.handleChange}
        placeholder="Age (in months)" min="1" name="age" type="number" required />
        </div>
        <select onChange={this.handleChange} name="allergy" required >
          <option label="Allergenic?"></option>
          <option value="true">True</option>
          <option value="false">False</option>
        </select><br/>
        <select onChange={this.handleChange} name="size" required >
          <option label="Select Animal Size"></option>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select><br/>
        <select onChange={this.handleChange} name="location" required >
          <option label="Location"></option>
          <option label="New York City">New York City</option>
          <option value="Los Angeles">Los Angeles</option>
          <option value="Boston">Boston</option>
          <option value="Chicago">Chicago</option>
        </select> <br/>
        <div className="field">
        <input onChange={this.handleChange} placeholder="image URL" name="img_url" type="url" required />
        </div>
        <button className="ui button" type="submit">Submit</button>
        </form>
      </div>

    )
  }

}


export default CreatePetForm
