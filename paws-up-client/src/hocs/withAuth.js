import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { fetchCurrentAdopter } from '../actions/adopter'
import { Loader } from 'semantic-ui-react'

const withAuth = (WrappedComponent) => {
  class AuthorizedComponent extends React.Component {
    componentDidMount() {
      console.log('%c INSIDE COMPONENT DID MOUNT FOR AUTH HOC', 'color: purple')
      if (localStorage.getItem('jwt') && !this.props.loggedIn) this.props.fetchCurrentAdopter()
    }

    render() {
      console.log('%c INSIDE RENDER FOR HOC', 'color: green')
      if (localStorage.getItem('jwt') && this.props.loggedIn) {

        return <WrappedComponent />
      } else if (localStorage.getItem('jwt') && (this.props.authenticatingAdopter || !this.props.loggedIn)) {
        return <Loader active inline="centered" />
      } else {
        return <Redirect to="/login" />
      }
    }
  }

  const mapStateToProps = (reduxStoreState) => {
    return {
      loggedIn: reduxStoreState.adoptersReducer.loggedIn,
      authenticatingAdopter: reduxStoreState.adoptersReducer.authenticatingAdopter
    }
  }

  // const mapDispatchToProps = (dispatch) => {
  //   return {
  //     fetchCurrentAdopter: () => dispatch(fetchCurrentAdopter()),
  //   }
  // }

  return connect(mapStateToProps, { fetchCurrentAdopter })(AuthorizedComponent)
}

export default withAuth
