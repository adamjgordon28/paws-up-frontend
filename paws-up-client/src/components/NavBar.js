import React, { Fragment } from 'react';
import { logout } from '../actions/adopter'
import { connect } from 'react-redux'
import { NavLink, withRouter } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

class NavBar extends React.Component{

render(){
  console.log("NAV",this.props);
  return<Menu pointing secondary>
  {this.props.adopter.loggedIn ? (
    <Fragment>
        <Menu.Item as={NavLink} to="/about" name="About" active={this.props.location.pathname === '/about'} />
        <Menu.Item as={NavLink} to="/" name="pets" active={this.props.location.pathname === '/pets'} />
      <Menu.Menu position="right">
      <Menu.Item as={NavLink} to="/profile" name="Profile" active={this.props.location.pathname === '/profile'} />
      <Menu.Item to="/logout" name="Logout" onClick={this.props.logout} />
      </Menu.Menu>
    </Fragment>
  ) : (
    <Fragment>
    <Menu.Item as={NavLink} to="/about" name="About" active={this.props.location.pathname === '/about'} />
    <Menu.Menu position="right">
    <Menu.Item as={NavLink} to="/login" name="Login" active={this.props.location.pathname === '/login'} />
    <Menu.Item as={NavLink} to="/signup" name="Signup" active={this.props.location.pathname === '/signup'} />
    </Menu.Menu>
    </Fragment>
  )}
  </Menu>

}
}



const mapStateToProps = ({ adoptersReducer: adopter }) => ({ adopter })

export default withRouter(connect(mapStateToProps,{logout})(NavBar))
