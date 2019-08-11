import React, { Fragment } from 'react'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import Profile from './components/profile'
import LoginForm from './components/Login'
import NavBar from './components/NavBar'
import PetContainer from './containers/PetContainer'
import PetPage from './containers/PetPage'
import CreatePetForm from './containers/CreatePetForm'
import CreateAdopterForm from './containers/CreateAdopterForm'
import AdopterProfile from './components/AdopterProfile'
import About from './components/About'

import './App.css'


const App = props => {
  console.log('%c APP Props: ', 'color: firebrick', props)
  return (
    <Fragment>
      <NavBar />
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/pets" />} />
        <Route exact path="/profile" component={AdopterProfile} />
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/signup" component={CreateAdopterForm} />
        <Route exact path="/logout" render={() => <Redirect to="/" />} />
        <Route exact path="/pets" component={PetPage}/>
        <Route exact path="/newpet" component={CreatePetForm} />
        <Route exact path="/about" component={About}/>
      </Switch>
    </Fragment>
  )
}

export default withRouter(App)

// class App extends React.Component {
//
//     state = {
//       currentAdopter: null
//     }
//
//     logOut = () => {
//     localStorage.removeItem("token")
//     this.setCurrentAdopter(-1)
//     return <Redirect to="/login"/>
//   }
//
//     componentDidMount() {
//     const token = localStorage.getItem("token")
//
//     if (token) {
//       fetch("http://localhost:4000/api/v1/auto_login", {
//         headers: {
//           "Authorization": token
//         }
//
//       })
//       .then(res => res.json())
//       .then((adopter) => {
//         if (adopter.errors) {
//           this.setCurrentAdopter(-1)
//           alert(adopter.errors)
//           this.logOut()
//         } else {
//           this.setCurrentAdopter(adopter)
//         }
//       })
//     }
//
//     else {
//       this.props.history.push("/login")
//     }
//   }
//
//   createPet = (pet)=> {
//     fetch("http://localhost:4000/api/v1/pets",{
//       method: "POST",
//       headers: {"Content-Type": "application/json", Accepts: "application/json"},
//       body: JSON.stringify(pet)
//     })
//     .then(res=>res.json())
//     .then(data => {
//      return this.props.history.push("/")
//     })
//
//   }
//
//   createAdopter = (adopter)=> {
//     fetch("http://localhost:4000/api/v1/adopters",{
//       method: "POST",
//       headers: {"Content-Type": "application/json", Accepts: "application/json"},
//       body: JSON.stringify({name: adopter.name,
//         username: adopter.username,
//         password: adopter.password,
//         age: adopter.age,
//         location: adopter.location,
//         residence_type: adopter.residence_type,
//         allergy: adopter.allergy,
//         other_pets: adopter.other_pets,
//         img_url: adopter.img_url})
//     })
//     .then(res=>{console.log(res); res.json()})
//     .then(response => {
//       if (response.error){
//             alert(response.error)
//           }
//       else {
//       localStorage.setItem("token", response.token)
//       this.setCurrentAdopter(response.adopter)
//       }
//     })
//
//   }
//
//   setCurrentAdopter = (adopter) => {
//       this.setState({
//         currentAdopter:adopter
//       }, ()=> {
//         if (localStorage.token){this.props.history.push("/adopter-profile")
//       }
//       })
//   }
//
//
//   render(){
//     return (
//       <div className="App">
//       <NavBar currentAdopter={this.state.currentAdopter} location={this.props.location}/>
//         <header className="App-header">
//         {this.props.history.location.pathname==="/"? <Header/>:" "}
//         <Switch>
//         <Route exact path ='/' render = {(routeProps)=>
//           <PetPage {...routeProps} currentAdopter={this.state.currentAdopter}/>} />
//             <Route exact path = '/new-pet' render={(routeProps) => <CreatePetForm createPet = {this.createPet} {...routeProps}/>}/>
//             <Route exact path = '/about' render={(routeProps) => <About {...routeProps}/> }/>
//             <Route exact path = '/signup' render={(routeProps) => <CreateAdopterForm {...routeProps} createAdopter = {this.createAdopter}/>}/>
//             <Route exact path = '/login' render={(routeProps) => <Login {...routeProps} setCurrentAdopter={this.setCurrentAdopter}/>}/>
//             <Route exact path = '/adopter-profile' render={(routeProps) => <AdopterProfile {...routeProps} currentAdopter={this.state.currentAdopter} /> }/>
//             <Route exact path ='/logout' render = {(routeProps) => <Logout logOut = {this.logOut} {...routeProps}/>}/>
//
//         </Switch>
//         </header>
//       </div>
//     );
//   }
// }
//
// export default App;
