import React from 'react';

class PetMeetingCard extends React.Component {

  renderMeetingRows = () => {
    let rowArray = this.props.pet.meetings.map((meeting) => {
      return (<tr>
        <td>
          <h4 className="ui image header">
            <img alt="" src={meeting.adopter_img_url} className="ui mini rounded image"/>
            <div className="content">
              {meeting.adopter}
              <div className="sub header">{meeting.location}
            </div>
          </div>
        </h4></td>
        <td>
          {meeting.date}
        </td>
      </tr>)
    })
    return rowArray
  }
  render(){
    return(
      <div className="ui raised card" style={{marginTop: "3em", padding: "0.25em"}}>
      <table className="ui very basic collapsing celled table">

  <thead>
    <th style={{textAlign:"center", background: "darkblue", color: "white"}} colspan="2">Meetings</th>
    <tr><th>Adopter Name</th>
    <th>Date</th>
  </tr></thead>


  <tbody>
    {this.renderMeetingRows()}
  </tbody>
</table>
</div>
    )
  }
}

export default PetMeetingCard
