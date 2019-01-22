
import React, {Component, Fragment} from 'react'
import { connect } from 'react-redux'
import moment from 'moment';
import { fetchingMessages} from '../redux/actions'
import {sendingMessage} from '../redux/actions'
import { Divider, Button, Image, List, Icon, Modal, Header, Form, TextArea } from 'semantic-ui-react'

import '../styles/message.css'

class MessageContainer extends Component {
  constructor() {
    super()
    this.state = {
      modalOpen: false,
      messageContent: '',
      senderImage: "",
      senderName: '',
      senderId: '',
      open: false,
    }
  }

  componentDidMount() {
    this.props.fetchMessages()
  }

  sendReply = () => {
    let data = {
      content: this.state.messageContent,
      sender_id: parseInt(localStorage.getItem("currentUser")),
      recipient_id: parseInt(this.state.senderId)
    }

    this.props.sendingMessage(data)
    
    this.setState({ 
      open: false,
      senderImage: "",
      senderName: "",
      senderId: "",
      messageContent: ''
    })

  }

  messageChange = (e) => {
    this.setState({
      messageContent: e.target.value
    })
  }

  handleOpen = (e, dimmer) => {
    this.setState({ dimmer, open: true })
    
    let btn = e.currentTarget
    
    console.log(btn)
    let gotSenderImage = btn.dataset.image
    let gotSenderName = btn.dataset.name
    let gotSenderId = btn.dataset.id

    this.setState({ 
      senderImage: gotSenderImage,
      senderName: gotSenderName,
      senderId: gotSenderId
    })
  }

  close = () => {
    this.setState({ 
      open: false,
      senderImage: "",
      senderName: "",
      senderId: "",
      messageContent: ''
    })
  }

  render() {
    const { open, dimmer } = this.state
  
    const userMessages = this.props.allMessages.filter(message => {
      return message.recipient_id === parseInt(localStorage.getItem('currentUser'))
    })

    return userMessages ? (
      <Fragment>
        <Divider />
        <div className="message-container">
          <h1>My Messages</h1>
          <div className="inner-message-container">
          <List divided verticalAlign='middle'>
            {userMessages.map(message => {
              return (
                <List.Item key={message.id}>
                  <List.Content className="message-buttons" floated='right'>
                   <Button onClick={(e) => this.handleOpen(e, 'inverted' )} data-image={message.sender.image} data-name={message.sender.first_name} data-id={message.sender_id}  basic color='teal'>Reply <Icon style={{marginLeft: "10px"}} name="reply"></Icon></Button>
                    
                  <Modal dimmer={dimmer} open={open} onClose={this.close}>
                    <Header>Reply to {this.state.senderName}</Header>
                      <Modal.Content className="contact-message-container">
                        <Image className="contact-user-image" circular size="small" src={this.state.senderImage} />
                      <Modal.Description className="message-form">
                      <Form.Field onChange={(e) => this.messageChange(e)} rows='7' className="message-input" control={TextArea} placeholder='Write a message' />
                      </Modal.Description>
                      </Modal.Content>
                      <Modal.Actions>
                        <Button color='black' onClick={this.close}>
                          Cancel
                        </Button>
                        <Button
                          positive
                          icon='checkmark'
                          labelPosition='right'
                          content="Send Message"
                          onClick={this.sendReply}
                        />
                      </Modal.Actions>
                    </Modal>


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
        </div>
      </Fragment>
    ) : null
  }
}

const mapDispatchToState = (state) => {
  return {
    allMessages: state.messages
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMessages: () => {dispatch(fetchingMessages())},
    sendingMessage: (data) => {dispatch(sendingMessage(data))}
  }
}

export default connect(mapDispatchToState, mapDispatchToProps)(MessageContainer)