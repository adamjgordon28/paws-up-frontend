import React from 'react';
import NavBar from '../components/NavBar.js'

class CreateGuardianForm extends React.Component {

  state = {
    name: "",
    location: "",
    img_url: "",
  }

  render(){
    return(
      <div>
      <h1>PawsUp</h1><img alt="" src="http://icons.iconarchive.com/icons/iconsmind/outline/256/Paw-icon.png"/>
      <NavBar />
      Create Guardian!
      </div>

    )
  }

}


export default CreateGuardianForm
