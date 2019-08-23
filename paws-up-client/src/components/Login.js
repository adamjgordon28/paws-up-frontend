import React from 'react'
import Header from './Header'
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router'
import { loginAdopter } from '../actions/adopter'
import { Button, Form, Segment, Message } from 'semantic-ui-react'
import '../index.css';


class Login extends React.Component {

  state = { username: '', password: '' }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleLoginSubmit = (e) => {
    this.props.loginAdopter(this.state.username, this.state.password)
    this.setState({ username: '', password: '' })
  }

  render() {
    return this.props.loggedIn ? (
      <Redirect to="/profile" />
    ) : (
      <div className="login">
      <Header/>
      <div className="login-form">
      <Segment style={{width: "40em"}}>
      <h2>Login</h2>
      <hr/>
      <br/>
        <Form
          onSubmit={this.handleLoginSubmit}
          size="mini"
          key="mini"
          loading={this.props.authenticatingAdopter}
          error={this.props.failedLogin}
        >
          <Message error header={this.props.failedLogin ? this.props.error : null} />

          <input placeholder="User Name" onChange={this.handleChange} name="username" type="text" required /> <br/><br/>
          <input placeholder="Password" onChange={this.handleChange} name="password" type="password" required /> <br/><br/>

          <Button type="submit">Login</Button>
        </Form>
      </Segment>
      </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    authenticatingAdopter: state.adoptersReducer.authenticatingAdopter,
    failedLogin: state.adoptersReducer.failedLogin,
    error: state.adoptersReducer.error,
    loggedIn: state.adoptersReducer.loggedIn
  }
}

export default withRouter(connect(mapStateToProps, { loginAdopter })(Login))
