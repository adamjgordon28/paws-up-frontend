import React from 'react';
import { connect } from 'react-redux';

class Login extends React.Component {

  state = {
    username: "",
    password:""
  }

  handleSubmit = (e) => {
    e.preventDefault()
    fetch("http://localhost:4000/api/v1/login",{
      method: "POST",
      headers: {"Content-Type": "application/json", Accepts: "application/json"},
      body: JSON.stringify(this.state)
    })
    .then(res=>res.json())
    .then(json => {
      if (json.errors){
        alert(json.errors)
      }
      else {
      localStorage.setItem("token", json.token)
      this.props.setCurrentUser(json.user)
      this.props.history.push('/adopter-profile')
      }
    })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })

  }


  render(){
    return(
      <div>

      <h1>Login</h1>
        <form className="ui form" onSubmit ={this.handleSubmit} style = {{width: "25em"}}>
        <input placeholder="User Name" onChange={this.handleChange} name="username" type="text" required /> <br/><br/>
        <input placeholder="Password" onChange={this.handleChange} name="password" type="password" required /> <br/><br/>
        <button className="ui button" type="submit">Submit</button>
        </form>
      </div>

    )
  }

}

function mapDispatchToProps(dispatch) {
  return {

    setCurrentUser: (user) => {
      dispatch({type: 'SET_CURRENT_USER', payload: user})
    }
  }
}


export default connect(null, mapDispatchToProps)(Login)
