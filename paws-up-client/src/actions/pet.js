export const fetchPets = () => {
  return (dispatch) => {
    fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/pets`,{
         method: "GET",
         headers: {"Content-Type": "application/json",
                    Accepts: "application/json"}
       })
       .then(response => response.json())
       .then(data => {
      if (data.errors){
        alert(data.errors)
      }
      else {
    dispatch(setAllPets(data))
     }
    })
}
}

export const fetchCurrentPet = (id) => {
  return (dispatch) => {
    fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/pets/${id}`)
      .then(response => response.json())
      .then((JSONResponse) => {
        console.log('????????',JSONResponse);
        dispatch(setPet(JSONResponse))})
  }
}



export const setAllPets = (petData) => ({
  type: 'SET_ALL_PETS',
  payload: petData
})

export const setPet = (data) =>({
  type: 'SET_PET',
  payload: data
})

export const addMeetingToCurrentPet = (meeting) => ({
  type: 'ADD_MEETING_TO_CURRENT_PET',
  payload: meeting
})

export const deleteMeetingToCurrentPet = (meeting) => ({
  type: 'DELETE_MEETING_TO_CURRENT_PET',
  payload: meeting
})
