const defaultState={
  pets:[],
  currentPet:null
}


const petsReducer=(state=defaultState, action)=>{
  switch(action.type){
    case 'SET_ALL_PETS':
      return { ...state, pets: action.payload}
    case 'SET_PET':
    // debugger
      return { ...state, currentPet: action.payload}
    case 'ADD_MEETING_TO_CURRENT_PET':
      return {
          ...state,
          currentPet: {
            ...state.currentPet,
            meetings: [...state.currentPet.meetings, action.payload]
          }
        }
    case 'DELETE_MEETING_TO_CURRENT_PET':
          let index = state.currentPet.meetings.indexOf(state.currentPet.meetings.find(m=>m.id === action.payload))
          let newMeetings = [...state.currentPet.meetings.slice(0, index), ...state.currentPet.meetings.slice(index + 1)]
          // debugger
            return {...state, currentPet: {...state.currentPet, meetings: newMeetings }}
    default:
      return state
  }
}

export default petsReducer
