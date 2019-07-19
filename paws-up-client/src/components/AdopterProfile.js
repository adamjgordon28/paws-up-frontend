import React from 'react';
import AdopterMeetingCard from './AdopterMeetingCard.js';
import { Link } from 'react-router-dom';

class AdopterProfile extends React.Component{

    renderAdopterInfoList = () => {
      if (this.props.currentUser){
        return (<div style={{position:"relative", right: "6em", fontSize: "1.6em"}}>
    <img alt="" className="ui medium circular image" src={this.props.currentUser.img_url}/>
    <h1>{this.props.currentUser.name}</h1><div className="ui list">
    <div className="item">
      <i className="marker icon"></i>
      <div className="content">
        {this.props.currentUser.location}
      </div>
    </div>
  <div className="item">
    <i className="home icon"></i>
    <div className="content">
      Residence Type: {this.props.currentUser.residence_type}
    </div>
  </div>
  <div className="item">
    <i className="birthday cake icon"></i>
    <div className="content">
      {this.props.currentUser.age} Years Old
    </div>
  </div>
  <div className="item">
    <i className="certificate icon"></i>
    <div className="content">
      {this.props.currentUser.allergy? "Adopter Has Allergies": "Adopter Has No Allergies"}
    </div>
  </div>
  <div className="item">
    <i className="paw icon"></i>
    <div className="content">
      {this.props.currentUser.other_pets ? "Adopter Has Other Pets" : "No Other Pets"}
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
      if(this.props.currentUser){
        if(this.props.currentUser.meetings.length){
          return (<AdopterMeetingCard currentUser={this.props.currentUser}/>)
        }
        else {
          return(<div style={{position:"relative", top:"6em"}} className="ui message huge">You Haven't Set Any Pet Meetings Up Yet! <Link to="/"><span style={{color:"blue"}}>Go See Some Pets!</span></Link></div>)
        }
      }
      else {
        return null
      }
    }

    render(){
      return(

        <div><div className="ui two column very relaxed grid"><div className="column">{this.renderAdopterInfoList()}</div>
            <div className="column">{this.renderAdopterMeetings()}</div>
            </div>
          </div>
      )
    }

}


export default AdopterProfile
