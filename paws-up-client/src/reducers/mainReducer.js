const defaultState = {
  currentUser: null,
  pets: []
}

  const mainReducer = (state=defaultState, action) => {
    switch(action.type){
      case 'SET_CURRENT_USER':
      return {...state, currentUser: action.payload}
      case 'SET_PETS':
      return {...state, pets: action.payload}
      default:
      return state
    }

  }

  export default mainReducer
