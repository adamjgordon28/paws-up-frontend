const defaultState = {
  adopter: null,
  loggedIn: false,
  authenticatingAdopter: false,
  failedLogin: false,
  error: null
}

const adoptersReducer = (state=defaultState, action) => {
  switch (action.type) {
    case 'SET_CURRENT_ADOPTER':
      //action.payload { username: 'Chandler Bing', bio: 'my adopter bio', avatar: 'some image url' }
      return { ...state, adopter: action.payload, loggedIn: true, authenticatingAdopter: false }
    case 'AUTHENTICATING_ADOPTER': //tells the app we're fetching
      return { ...state, authenticatingAdopter: true }
    case 'AUTHENTICATED_ADOPTER':
      return { ...state, authenticatingAdopter: false }
    case 'FAILED_LOGIN': //for error handling
      return {
        ...state,
        failedLogin: true,
        error: action.payload,
        authenticatingAdopter: false
      }
    case 'LOG_OUT':
      return defaultState;
    default:
      return state
  }
}

export default adoptersReducer
