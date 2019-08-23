export const loginAdopter = (username, password) => {
  return (dispatch) => {
    dispatch({ type: 'AUTHENTICATING_ADOPTER' })
    fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/login`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
         Accept: 'application/json'
      },
      body: JSON.stringify({
        adopter: {
          username: username,
          password: password
        }
      })
    })
      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          throw response
        }
      })
      .then(JSONResponse => {
        localStorage.setItem('jwt', JSONResponse.jwt)
        dispatch({ type: 'SET_CURRENT_ADOPTER', payload: JSONResponse.adopter })
      })
      .catch(r => r.json().then(e => dispatch({ type: 'FAILED_LOGIN', payload: e.message })))
  }
}


export const fetchCurrentAdopter = () => {
  return (dispatch) => {
    dispatch(authenticatingAdopter())
    fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/profile`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`
      }
    })
      .then(response => response.json())
      .then((JSONResponse) => dispatch(setCurrentAdopter(JSONResponse.adopter)))
  }
}


export const setCurrentAdopter = (adopterData) => ({
  type: 'SET_CURRENT_ADOPTER',
  payload: adopterData
})

export const failedLogin = (errorMsg) => ({
  type: 'FAILED_LOGIN',
  payload: errorMsg
})

export const authenticatingAdopter = () => ({ type: 'AUTHENTICATING_ADOPTER' })


export const logout = () => {return (dispatch)=>{
  localStorage.removeItem("jwt")
  dispatch({ type: 'LOG_OUT'})
}}


export const addMeetingToCurrentAdopter = (meeting)=> ({
  type: "ADD_MEETING_TO_CURRENT_ADOPTER", payload: meeting
})

export const deleteMeetingToCurrentAdopter = (meeting)=> ({
  type: "DELETE_MEETING_TO_CURRENT_ADOPTER", payload: meeting
})
