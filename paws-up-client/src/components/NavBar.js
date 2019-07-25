import React, { Fragment } from 'react';
import { logout } from '../actions/adopter'
import { connect } from 'react-redux'
import { NavLink, withRouter } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'


class NavBar extends React.Component{

render(){
  console.log(this.props);
  return<Menu pointing secondary>
  {this.props.adopter.loggedIn ? (
    <Fragment>
      <Menu.Item as={NavLink} to="/profile" name="Profile" active={this.props.location.pathname === '/profile'} />
        <Menu.Item as={NavLink} to="/pets" name="pets" active={this.props.location.pathname === '/pets'} />
      <Menu.Menu position="right">
      <Menu.Item to="/logout" name="Logout" onClick={this.props.logout} />
      </Menu.Menu>
    </Fragment>
  ) : (
    <Fragment>
    <Menu.Item as={NavLink} to="/login" name="Login" active={this.props.location.pathname === '/login'} />
    <Menu.Menu position="right">
    <Menu.Item as={NavLink} to="/signup" name="Signup" active={this.props.location.pathname === '/signup'} />
    </Menu.Menu>
    </Fragment>
  )}
  </Menu>

}
}

// const NavBar = ({ adopter: { loggedIn }, location: { pathname } }) => {
//
//   return (
//     <Menu pointing secondary>
//       {loggedIn ? (
//         <Fragment>
//           <Menu.Item as={NavLink} to="/profile" name="Profile" active={pathname === '/profile'} />
//           <Menu.Menu position="right">
//           <Menu.Item to="/logout" name="Logout" onClick={(e)=>{console.log(e);}} />
//           </Menu.Menu>
//         </Fragment>
//       ) : (
//         <Menu.Item as={NavLink} to="/login" name="Login" active={pathname === '/login'} />
//       )}
//     </Menu>
//   )
// }



const mapStateToProps = ({ adoptersReducer: adopter }) => ({ adopter })

export default withRouter(connect(mapStateToProps,{logout})(NavBar))

//
// class NavBar extends React.Component {
//
//
//   render(){
//     console.log(this.props.location);
//     return(
//       <div className="ui menu" style={{textAlign: "left"}}>
//           <div className="item"><Link to="/">Pets!</Link></div>
//           <div className="item"><Link to="/about">About</Link></div>
//           <div className="item"><Link to='/new-pet'>Register a Pet for Adoption</Link></div>
//           {this.props.location.pathname!=="/"? <div className="center item"><h3 className="logo"><Link to="/">PawsUp</Link></h3> </div> :""}
//             {!localStorage.jwt?
//         <Fragment><div className="right item"><Link to='/signup'>Sign Up</Link></div><div className="right item"><Link to='/login'>Log In</Link></div></Fragment> :
//         <Fragment><div className="right item"><Link to='/logout'>Log Out</Link></div><div className="right item"><Link to='/adopter-profile'>Adopter Profile</Link></div></Fragment> }
//       </div>
//     )
//   }
//
// }
//
// export default NavBar
