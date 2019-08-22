import React, { Fragment } from 'react';
import {Link} from 'react-router-dom'
import './header.css';

class NavBar extends React.Component {


  render(){
    return(
      <div className="ui menu" style={{textAlign: "left"}}>
          <div className="item"><Link to="/pets">Pets!</Link></div>
          <div className="item"><Link to="/about">About</Link></div>
          <div className="item"><Link to='/new-pet'>Register a Pet for Adoption</Link></div>
          {this.props.location.pathname!=="/"? <div className="center item"><h3 className="logo">PawsUp</h3> </div> :""}
            {!localStorage.token?
        <Fragment><div className="right item"><Link to='/signup'>Sign Up</Link></div><div className="right item"><Link to='/login'>Log In</Link></div></Fragment> :
        <Fragment><div className="right item"><Link to='/logout'>Log Out</Link></div><div className="right item"><Link to='/adopter-profile'>Adopter Profile</Link></div></Fragment> }
      </div>
    )
  }

}

export default NavBar
