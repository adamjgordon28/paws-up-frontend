import React from 'react'
import { connect } from 'react-redux'
import { Card, Image } from 'semantic-ui-react'
import withAuth from '../hocs/withAuth'

const Profile = ({ img_url, username, lacation }) => (
  <Card>
    <Image src={img_url} />
    <Card.Content>
      <Card.Header>{username}</Card.Header>

      <Card.Description>{lacation}</Card.Description>
    </Card.Content>
  </Card>
)

const mapStateToProps = ({ adoptersReducer: { adopter: { img_url, username, lacation } } }) => ({
  img_url,
  username,
  lacation
})

export default withAuth(connect(mapStateToProps)(Profile))
