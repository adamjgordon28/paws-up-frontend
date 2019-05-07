import React from 'react';

class AdopterMeetingCard extends React.Component {

  renderMeetingRows = () => {
    let rowArray = this.props.currentUser.meetings.map((meeting) => {
      return (<tr key={Math.random()}>
        <td>
          <h4 className="ui image header">
            <img alt="" src={meeting.pet_img_url} className="ui mini rounded image"/>
            <div className="content">
              {meeting.pet}
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
      <div className="ui raised card">
      <table className="ui very basic collapsing celled table">
  <thead>
    <tr><th>Pet Name</th>
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

export default AdopterMeetingCard
