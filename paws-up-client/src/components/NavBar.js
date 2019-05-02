import React from 'react';

class NavBar extends React.Component {


  render(){
    return(
      <div>
        <ul className="navBar">
          <li><a href="http://localhost:3000/">Home</a></li>
          <li><a href="https://www.facebook.com/">About</a></li>
          <li><a href="https://www.facebook.com/">Take our Personality Test!</a></li>
          <li><a href="https://www.facebook.com/">Meet our Guardians</a></li>
        </ul>
      </div>
    )
  }

}

export default NavBar
