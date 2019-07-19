import React from 'react';





class Filter extends React.Component {



  removeElement(array, element){
    let filterArray = array.filter((member)=>{
    return  member !== element
    })
    return filterArray
  }

  handleAnimalChange = (e) => {
    if(e.target.value) {
    this.props.setAnimalFilter(e.target.value)
    }
    else {
    this.props.setAnimalFilter(null)
    }
  }

  handleSizeChange = (e) => {
    if(e.target.value) {
    this.props.setSizeFilter(e.target.value)
    }
    else {
    this.props.setSizeFilter(null)
    }
  }

  handleSexChange = (e) => {
    if(e.target.value) {
    this.props.setSexFilter(e.target.value)
    }
    else {
    this.props.setSexFilter(null)
    }
  }

  render(){
    return(
      <div>
        <select onChange={this.handleAnimalChange} className="ui search dropdown" style={{color:"black", margin: ".5em"}}>
        <option label="Animal"></option>
        <option value="dog">Dog</option>
        <option value="cat">Cat</option>
        <option value="lizard">Lizard</option>
        <option value="pig">Pig</option>
        <option value="hamster">Hamster</option>
        <option value="rabbit">Rabbit</option>
        </select>
        <select onChange={this.handleSizeChange} className="ui search dropdown" style={{color:"black", margin: ".5em"}} >
        <option label="Size"></option>
        <option value="small">Small</option>
        <option value="medium">Medium</option>
        <option value="large">Large</option>
        </select>
        <select onChange={this.handleSexChange} className="ui search dropdown" style={{color:"black", margin: ".5em"}}>
        <option label="Sex"></option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        </select>
      </div>


    )
  }
}


export default Filter
