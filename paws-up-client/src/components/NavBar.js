import React from 'react';
import {Link} from 'react-router-dom'

class NavBar extends React.Component {


  render(){
    return(
      <div>
        <ul className="navBar">
          <li><a href="http://localhost:3000/">Home</a></li>
          <li><a href="https://www.facebook.com/">About</a></li>
          <li><Link to="/guardians">Meet our Guardians</Link></li>
          <li><Link to='/new-pet'>Register a Pet for Adoption</Link></li>
          <li><Link to='/new-adopter'>Sign Up as an Adopter</Link></li>
        </ul>
      </div>
    )
  }

}

export default NavBar
