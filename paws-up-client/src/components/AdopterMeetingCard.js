import React from 'react';
import {setPet} from '../actions/pet';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

class AdopterMeetingCard extends React.Component {

        renderMeetingRows = () => {
          let rowArray = this.props.adopter.meetings.map((meeting) => {
            return (
              <tr key={Math.random()}>
                <Link to={"/pet/"+meeting.pet_id}>
                  <td onClick={()=>this.props.handleClick(meeting.pet_id)} style={{textAlign:"center"}}>
                    <h4 className="ui image header">
                      <img alt="" src={meeting.pet_img_url} className="ui mini rounded image"/>
                      <div className="content">
                        {meeting.pet}
                        <div className="sub header">{meeting.location}</div>
                      </div>
                    </h4>
                  </td>
              </Link>
                  <td>
                    <div className="meeingdate" style={{textAlign:"center", padding: ".7em"}}>
                    {meeting.date}
                    </div>
                  </td>
              </tr>)
          })
          return rowArray
        }

  render(){
    return(
      <div className="ui raised card" style={{padding: "0.25em", width: "25em"}}>
        <table style={{fontSize: "1em", textAlign:"center", width: "24.5em"}}>
          <thead>
                <th style={{textAlign:"center", background: "darkblue", color: "white", padding: ".7em"}} colSpan="2">Meetings</th>
              <tr>
                <th>Pet Name</th>
                <th style={{textAlign:"center", padding: ".7em"}}>Date</th>
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




  const mapStateToProps = ({ adoptersReducer: { adopter: adopter }, petsReducer: {currentPet: currentPet} }) => ({
    adopter,
    currentPet
  })

export default connect(mapStateToProps, {setPet})(AdopterMeetingCard)
