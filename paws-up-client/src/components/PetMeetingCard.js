import React from 'react';
import { Icon, Label, Menu, Table } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
// import { connect } from 'react-redux';
// import {deleteMeetingToCurrentPet} from '../actions/pet'
// import {deleteMeetingToCurrentAdopter} from '../actions/adopter'
//

class PetMeetingCard extends React.Component {


  renderMeetingRows = () => {
    let rowArray = this.props.pet.meetings.map((meeting) => {
      return (<tr>
              <Link to={"/profile/"}  style={{display: "inline"}}>
              <td>
                <h4 className="ui image header">
                      <img alt="" src={meeting.adopter_img_url} className="ui mini rounded image"/>
                      <div className="content">
                      {meeting.adopter}
                      </div>
                      <div className="sub header">{meeting.location}</div>
                </h4>
              </td>
              </Link>
              <td>
                {meeting.date}
              </td>
              <td>
              <Icon link name='close' value={meeting.id} onClick={this.handleClick}/>
              </td>
            </tr>)
          })
          return rowArray
  }

  handleClick=()=>{
    let meeting= this.props.pet.meetings.find(m=>m.adopter_id===this.props.adopter.id)
    console.log(meeting.id)
    // debugger
    this.props.deleteMeeting(meeting.id)
  }



  render(){
    return(
      <div className="ui raised card"
           style={{marginTop: "3em",
                   padding: "0.25em"}}>
      <table celled className="petMeetingCard">
      <thead>
        <tr>
            <th colSpan="3"
                style={{textAlign:"center",
                    background: "#b0e0e6",
                    color: "white",
                    padding: ".4em",
                    }} >
                    Meetings
            </th>
        </tr>

        <tr style={{textAlign:"center",
            background: "	#DCDCDC",
            }}>
          <th style={{textAlign:"center",
                padding: ".4em"
                }}>
              Adopter Name</th>
          <th>Date</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        {this.renderMeetingRows()}
      </tbody>
    </table>
    </div>
        )
      }
    }

    // const mapStateToProps = ({ adoptersReducer:{adopter: adopter}, petsReducer: { currentPet: currentPet } }) => ({
    //   adopter,
    //   currentPet
    // })
    //
    // export default connect(mapStateToProps)(PetMeetingCard)
    export default PetMeetingCard
