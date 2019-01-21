
import React, {Component, Fragment} from 'react'
import { connect } from 'react-redux'

import { fetchingMessages} from '../redux/actions'
import { Divider, Button, Image, List } from 'semantic-ui-react'

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
        <div className="sessions-container">
          <h1>My Messages</h1>
          <div className="message-container">
          <List divided verticalAlign='middle'>
            {this.props.userMessages.map(message => {
              return (
                <List.Item>
                  <List.Content className="message-buttons" floated='right'>
                    <Button>Reply</Button>
                    <Button>Delete</Button>
                  </List.Content>
                  <Image style={{marginTop: '10px'}} size="mini" avatar src={message.sender.image} />
                  <List.Content className="sender-name">{message.sender.first_name}</List.Content>
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