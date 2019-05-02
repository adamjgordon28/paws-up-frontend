import React from 'react';
import PetPage from './containers/PetPage.js'
import './App.css';

class App extends React.Component {

  render(){
    return (
      <div className="App">
        <header className="App-header">
        <PetPage />
        </header>
      </div>
    );
  }
}

export default App;
