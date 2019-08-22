import React, { Component, Fragment } from 'react';


class Logout extends Component {


  render(){
    return(
      <Fragment>
      {this.props.logOut()}
      </Fragment>
    )
  }

}



export default Logout
