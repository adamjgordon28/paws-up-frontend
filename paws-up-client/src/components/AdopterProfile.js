import React, {Fragment} from 'react';
import AdopterMeetingCard from './AdopterMeetingCard.js';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux'
import { Card, Image } from 'semantic-ui-react'
import withAuth from '../hocs/withAuth'

import { fetchPets, setPet } from '../actions/pet'
import PetProfile from './PetProfile'


class AdopterProfile extends React.Component{

    state={
      pet:null
    }

    capitalize = (s) => {
   if (typeof s !== 'string'){ return ''}
   else{
     let splitStr = s.split(' ');
    for (let i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    return splitStr.join(' '); }
  }

  componentDidMount(){
      this.props.fetchPets()
  }

  handleClick=(id)=>{
    let thisPet = this.props.pets.find(p => p.id === id)
    this.setState({
      pet: thisPet
    })
    this.props.setPet(thisPet)
  }

    renderAdopterInfoList = () => {
      if (this.props.adopter){
        return (
          <div className="adopterProfile">
            <Card>
              <Image src={this.props.adopter.img_url} />
              <Card.Content>
              <Card.Header>{this.capitalize(this.props.adopter.name)}</Card.Header>
              <Card.Description> username : {this.props.adopter.username}</Card.Description>
              </Card.Content>
            </Card>
              <div className="ui list">
              <div className="item">
                <i className="marker icon"></i>
                <div className="content">
                  {this.props.adopter.location}
                </div>
              </div>
            <div className="item">
              <i className="home icon"></i>
              <div className="content">
                Residence Type: {this.props.adopter.residence_type}
              </div>
            </div>
            <div className="item">
              <i className="birthday cake icon"></i>
              <div className="content">
                {this.props.adopter.age} Years Old
              </div>
            </div>
            <div className="item">
              <i className="certificate icon"></i>
              <div className="content">
                {this.props.adopter.allergy? "Adopter Has Allergies": "Adopter Has No Allergies"}
              </div>
            </div>
            <div className="item">
              <i className="paw icon"></i>
              <div className="content">
                {this.props.adopter.other_pets ? "Adopter Has Other Pets" : "No Other Pets"}
              </div>
            </div>
          </div>
        </div>)
      }
      else {
       return null
      }
    }


    renderAdopterMeetings = () => {
      if(this.props.adopter){
        if(this.props.adopter.meetings.length){
          return (
            <div style={{marginLeft: "5em"}}>
            <AdopterMeetingCard handleClick={this.handleClick}/>
            <h4><Link to="/"> Do you want to see more pets? </Link></h4>
            </div>
          )
        }
        else {
          return(
          <Fragment>
            <Card>
              <Card.Content>
                <Card.Header>
                  <i className="calendar times outline icon"></i>
                  No Meeting
                </Card.Header>
                <hr/>
              <Card.Description>
                You Haven't Set Any Pet Meetings Up Yet! <Link to="/"><span style={{color:"blue"}}>Go and Find Your Pet!</span></Link>
              </Card.Description>
              </Card.Content>
            </Card>
          </Fragment>)
        }
      }
      else {
        return null
      }
    }

    render(){
      console.log("PROF",this.props.currentPet);
      // debugger
      return  this.state.pet ? (  <PetProfile /> ):
       ( <div className="adopter">
            <div>{this.renderAdopterInfoList()}</div>
            <br/>
            <div className="meeting">{this.renderAdopterMeetings()}</div>
        </div>
        )
      }
    }


const mapStateToProps = ({ adoptersReducer: { adopter: adopter }, petsReducer: {pets: pets, currentPet: currentPet} }) => ({
  adopter,
  pets,
  currentPet
})

export default withAuth(connect(mapStateToProps,{fetchPets, setPet})(AdopterProfile))
