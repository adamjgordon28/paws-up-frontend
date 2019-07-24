const defaultState = {
  currentUser: null,
  pets: [],
  currentPet: null
}

  const mainReducer = (state=defaultState, action) => {
    switch(action.type){
      case 'SET_CURRENT_USER':
      return {...state, currentUser: action.payload}
      case 'SET_PETS':
      return {...state, pets: action.payload}
      case 'ADD_PET_TO_PETS':
      return {
        ...state,
        pets: [...state.pets, action.payload]
      }
      case 'SET_CURRENT_PET':
      return {...state, currentPet: action.payload}
      case 'ADD_MEETING_TO_CURRENT_USER':
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          meetings: [...state.currentUser.meetings, action.payload]
        }
      }
      case 'ADD_MEETING_TO_CURRENT_PET':
      return {
        ...state,
        currentPet: {
          ...state.currentPet,
          meetings: [...state.currentPet.meetings, action.payload]
        }
      }
      default:
      return state
    }

  }

  export default mainReducer
