import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './header.css';

class Header extends Component {

  render() {
    return (
      <header>
        <h1 style={{fontSize: '4em'}} className="text-center" className="logo"><Link to="/">
        PawsUp
        <img alt="logo" style={{width: "15%", height: "15%"}} src="http://icons.iconarchive.com/icons/iconsmind/outline/256/Paw-icon.png"/>
        </Link></h1>
      </header>
    );
  }

}

export default Header;
