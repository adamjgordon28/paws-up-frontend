import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { fetchCurrentAdopter } from '../actions/adopter'
import { fetchCurrentPet } from '../actions/pet'
import { Loader } from 'semantic-ui-react'

const withAuth = (WrappedComponent) => {
  class AuthorizedComponent extends React.Component {

    componentDidMount() {
      this.props.fetchCurrentPet(this.props.match.params.iPd)
      if (localStorage.getItem('jwt') && !this.props.loggedIn){ this.props.fetchCurrentAdopter()
    }
    }

    render() {
      if (localStorage.getItem('jwt') && this.props.loggedIn) {
        return <WrappedComponent {...this.props}/>
      } else if (localStorage.getItem('jwt') && (this.props.authenticatingAdopter || !this.props.loggedIn)) {
        return <Loader active inline="centered" />
      } else {
        return <Redirect to="/login" />
      }
    }
  }

  const mapStateToProps = (state) => {
    return {
      loggedIn: state.adoptersReducer.loggedIn,
      authenticatingAdopter: state.adoptersReducer.authenticatingAdopter
    }
  }


  return connect(mapStateToProps, { fetchCurrentAdopter, fetchCurrentPet })(AuthorizedComponent)
}

export default withAuth
