import React from 'react';

class Profile extends React.Component{

    renderAdopterInfoList = () => {
      if (this.props.currentUser){
        return (<div style={{position:"relative", right: "6em", fontSize: "1.6em"}}>
    <img className="ui medium circular image" src={this.props.currentUser.img_url}/>
    <h1>{this.props.currentUser.name}</h1><div className="ui list">
    <div className="item">
      <i className="marker icon"></i>
      <div className="content">
        {this.props.currentUser.location}
      </div>
    </div>
  <div className="item">
    <i class="home icon"></i>
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
    <i class="certificate icon"></i>
    <div className="content">
      {this.props.currentUser.allergy? "Adopter Has Allergies": "Adopter Has No Allergies"}
    </div>
  </div>
  <div className="item">
    <i class="paw icon"></i>
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
        if(this.props.currentUser.meetings){
          return (<div>What's Up?</div>)
        }
        else {
          return(<div style={{position:"relative", top:"12em"}} class="ui message">This Adopter Has No Pet Meetings Yet! Go See Some Pets!</div>)
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


export default Profile
