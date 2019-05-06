import React from 'react'


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

      <h1>Create an Adopter Account!</h1>
        <form className="ui form" onSubmit ={this.handleSubmit} style = {{width: "25em"}}>
        <input placeholder="Name" onChange={this.handleChange} name="name" type="text" required /> <br/><br/>
        <input  onChange={this.handleChange}
        placeholder="Age" min="18" name="age" type="number" required/> <br/><br/>
        <select onChange={this.handleChange} name="location" required >
          <option label="Location"></option>
          <option label="New York City">Apt</option>
          <option value="Los Angeles">Townhouse</option>
          <option value="Boston">Igloo</option>
          <option value="Chicago">Chateau</option>
        </select> <br/>
        <select onChange={this.handleChange} name="residence_type" required >
          <option label="Residence Type?"></option>
          <option label="Apt">Apt</option>
          <option value="Townhouse">Townhouse</option>
          <option value="One-Story-House">One-Story-House</option>
          <option value="Chateau">Chateau</option>
          <option value="Dorm Room">Dorm Room!</option>
          <option value="Bungalow">Bungalow</option>
          <option value="Yurt">Yurt</option>
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
        <br/><br/><button class="ui button" type="submit">Submit</button>
        </form>
      </div>

    )
  }

}


export default CreateAdopterForm
