export const fetchPets = () => {
  return (dispatch) => {
    fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/pets`,{
         method: "POST",
         headers: {"Content-Type": "application/json",
                    Accepts: "application/json"}
       })
       .then(res=>res.json())
       .then((JSONResponse) => console.log(JSONResponse))
}
