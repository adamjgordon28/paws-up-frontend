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
      return { ...state, adopter: action.payload, loggedIn: true, authenticatingAdopter: false }
    case 'AUTHENTICATING_ADOPTER':
      return { ...state, authenticatingAdopter: true }
    case 'AUTHENTICATED_ADOPTER':
      return { ...state, authenticatingAdopter: false }
    case 'FAILED_LOGIN':
      return {
        ...state,
        failedLogin: true,
        error: action.payload,
        authenticatingAdopter: false
      }
    case 'ADD_MEETING_TO_CURRENT_ADOPTER':
      return {
          ...state,
          adopter: {
            ...state.adopter,
            meetings: [...state.adopter.meetings, action.payload]
          }
        }
    case 'DELETE_MEETING_TO_CURRENT_ADOPTER':
          let index = state.adopter.meetings.indexOf(state.adopter.meetings.find(m=>m.id === action.payload))
          let newMeetings = [...state.adopter.meetings.slice(0, index), ...state.adopter.meetings.slice(index + 1)]
          return {...state, adopter: {...state.adopter, meetings: newMeetings}};
    case 'LOG_OUT':
      return defaultState;
    default:
      return state
  }
}

export default adoptersReducer
