import React from 'react';

class PetMeetingCard extends React.Component {

  renderMeetingRows = () => {
    let rowArray = this.props.pet.meetings.map((meeting) => {
      return (<tr>
        <td>
          <h4 class="ui image header">
            <img alt="" src={meeting.adopter_img_url} class="ui mini rounded image"/>
            <div class="content">
              {meeting.adopter}
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
    console.log(this.props.pet.meetings)
    return(
      <table class="ui very basic collapsing celled table">
  <thead>
    <tr><th>Adopter Name</th>
    <th>Date</th>
  </tr></thead>


  <tbody>
    {this.renderMeetingRows()}
  </tbody>
</table>
    )
  }
}

export default PetMeetingCard
