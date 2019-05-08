import React from 'react'
import { Form, Button } from 'semantic-ui-react'


class Login extends React.Component {

  state = {
    username: "",
    password:""
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
        <button class="ui button" type="submit">Submit</button>
        </form>
      </div>

    )
  }

}


export default Login
