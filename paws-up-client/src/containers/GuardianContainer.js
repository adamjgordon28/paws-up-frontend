import React from 'react';
import GuardianCard from '../components/GuardianCard.js';
import NavBar from '../components/NavBar.js'


class GuardianContainer extends React.Component {

  state = {
    guardians: []
  }

fetchandSetGuardians = () => {
  fetch("http://localhost:4000/api/v1/guardians")
  .then(res => res.json())
  .then(guardians => {
    this.setState({
      guardians: guardians
    })
  })
}

renderGuardians = () => {
  let guardianArray = this.state.guardians.map((guardian) => {
    return <GuardianCard key={guardian.id} guardian={guardian}/>
  })
  return guardianArray
}

componentDidMount = () => {
  this.fetchandSetGuardians()
}

  render(){
    return (
      <div className="ui grid container">
      <h1>PawsUp</h1><img alt="" src="http://icons.iconarchive.com/icons/iconsmind/outline/256/Paw-icon.png"/>
      <NavBar />
      {this.renderGuardians()}
      </div>
    )

  }

}

export default GuardianContainer
