export const fetchPets = () => {
  return (dispatch) => {
    fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/pets`,{
         method: "GET",
         headers: {"Content-Type": "application/json",
                    Accepts: "application/json"}
       })
       .then(response => response.json())
       .then((data) => dispatch(setAllPets(data)))
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

// export const setMeeting = (meeting) =>({
//   type: 'SET_MEETING',
//   payload: meeting
// })
