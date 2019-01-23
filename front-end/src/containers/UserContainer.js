import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {fetchingUser} from '../redux/actions'
import { Divider, Breadcrumb, Grid, Rating, Tab, Feed, Image, Button, Card, Icon, Modal, Form, Header, TextArea } from 'semantic-ui-react'
import "../styles/userContainer.css"

class UserContainer extends Component {

  componentDidMount() {
    let userId = this.props.match.params.id
    this.props.fetchUser(userId)
  }

  render() {

    return (
      <Fragment>
        <div className="user-container">
          <Grid>
            <Grid.Column className="user-sidebar" width={5}>
              <div className="user-image-photo">
                <Image centered src={this.props.fetchUser.image} size='small' circular />
              </div>
            </Grid.Column>
            <Grid.Column className="user-about-me" width={9}>
             
            </Grid.Column>
          </Grid>
        </div>
      </Fragment>
    )
  }
}



const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: (id) => {dispatch(fetchingUser(id))}
  }
}

export default connect(null, mapDispatchToProps)(UserContainer) 