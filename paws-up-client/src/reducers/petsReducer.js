const defaultState={
  pets:[],
  pet:''
}


const petsReducer=(state=defaultState, action)=>{
  switch(action.type){
    case 'SET_ALL_PETS':
      return { ...state, pets: action.payload}
    case 'SET_PET':
      return { ...state, pet: action.payload}
    default:
      return state
  }
}

export default petsReducer
