import React from 'react';

class AdopterMeetingCard extends React.Component {

  renderMeetingRows = () => {
    let rowArray = this.props.currentUser.meetings.map((meeting) => {
      return (<tr>
        <td>
          <h4 class="ui image header">
            <img alt="" src={meeting.pet_img_url} class="ui mini rounded image"/>
            <div class="content">
              {meeting.pet}
              <div class="sub header">{meeting.location}
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
      <table class="ui very basic collapsing celled table">
  <thead>
    <tr><th>Pet Name</th>
    <th>Date</th>
  </tr></thead>


  <tbody>
    {this.renderMeetingRows()}
  </tbody>
</table>
    )
  }
}

export default AdopterMeetingCard
