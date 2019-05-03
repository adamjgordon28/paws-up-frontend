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
        Animal<select onChange={this.handleAnimalChange}>
        <option label="select"></option>
        <option value="dog">Dog</option>
        <option value="cat">Cat</option>
        <option value="lizard">Lizard</option>
        <option value="pig">Pig</option>
        <option value="hamster">Hamster</option>
        </select>
        Size<select onChange={this.handleSizeChange}>
        <option label="select"></option>
        <option value="Toy">Toy</option>
        <option value="Medium">Medium</option>
        <option value="Large">Large</option>
        </select>
        Sex<select onChange={this.handleSexChange}>
        <option label="select"></option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        </select>
      </div>
    )
  }
}


export default Filter
