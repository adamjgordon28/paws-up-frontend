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
      case 'SET_CURRENT_PET':
      return {...state, currentPet: action.payload}
      default:
      return state
    }

  }

  export default mainReducer
