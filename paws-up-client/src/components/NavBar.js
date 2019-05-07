import React from 'react';
import {Link} from 'react-router-dom'

class NavBar extends React.Component {


  render(){
    return(
      <div className="ui menu" style={{textAlign: "left"}}>
          <div class="item"><a href="http://localhost:3000/">Home</a></div>
          <div class="item"><Link to="/about">About</Link></div>
          <div class="item"><Link to='/new-pet'>Register a Pet for Adoption</Link></div>
          <div class="right item"><Link to='/new-adopter'>Sign Up</Link></div>
          <div class="right item"><Link to='/new-adopter'>Log In</Link></div>
          <div class="right item"><Link to='/adopter-profile'>AdopterProfile</Link></div>
      </div>
    )
  }

}

export default NavBar
