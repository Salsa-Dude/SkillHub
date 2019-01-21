
import React, {Component, Fragment} from 'react'
import { connect } from 'react-redux'
import moment from 'moment';
import { fetchingMessages} from '../redux/actions'
import { Divider, Button, Image, List, Icon } from 'semantic-ui-react'

import '../styles/message.css'

class MessageContainer extends Component {

  componentDidMount() {
    this.props.fetchMessages()
  }

  render() {
    console.log(this.props.userMessages)
    return (
      <Fragment>
        <Divider />
        <div className="message-container">
          <h1>My Messages</h1>
          <div className="inner-message-container">
          <List divided verticalAlign='middle'>
            {this.props.userMessages.map(message => {
              return (
                <List.Item>
                  <List.Content className="message-buttons" floated='right'>
                    <Button basic color='teal'>Reply <Icon style={{marginLeft: "10px"}} name="edit"></Icon></Button>
                    <Button basic color="red">Delete <Icon style={{marginLeft: "10px"}} name="trash"></Icon></Button>
                  </List.Content>
                  <Image style={{marginTop: '10px'}} size="mini" avatar src={message.sender.image} />
                  <List.Content className="sender-name">{message.sender.first_name}</List.Content>
                  <List.Content className="message-date">{moment(message.modified_at).format("MM/DD/YYYY")}</List.Content>
                  <List.Content className="message-content">{message.content}</List.Content>
                </List.Item>
              )
            })}
          </List>
          </div>
          {/* <div className="ui four column grid">
            <div className="row"> */}
              {/* {user.rentals.map(trip => {
                return <TripCard deleteTrip={this.props.deleteTrip} updateTrip={this.props.updateTrip} allTinyPlaces={this.props.allTinyPlaces} key={trip.id} trip={trip} />
              })} */}
            {/* </div>
          </div> */}
        </div>
      </Fragment>
    )
  }
}

const mapDispatchToState = (state) => {
  return {
    userMessages: state.messages
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    fetchMessages: () => {dispatch(fetchingMessages())}
  }
}

export default connect(mapDispatchToState, mapDispatchToProps)(MessageContainer)