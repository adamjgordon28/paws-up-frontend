import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './header.css';

class Header extends Component {

  render() {
    return (
      <header>
        <Link to="/">
        <h1 style={{fontSize: '6em'}} className="logo">
        PawsUp🐾
        </h1>
        </Link>
      </header>
    );
  }

}

export default Header;
