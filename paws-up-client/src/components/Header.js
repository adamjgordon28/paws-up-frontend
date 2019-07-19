import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './header.css';

class Header extends Component {

  render() {
    return (
      <header>
        <h1 style={{fontSize: '4em'}} className="text-center" className="logo">
        PawsUp🐾
        </h1>
      </header>
    );
  }

}

export default Header;
