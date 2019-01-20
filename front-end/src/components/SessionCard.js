import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { updatingSession } from '../redux/actions'

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import { Card, Image, Rating, CardDescription, Form, Modal, Icon, Header, Button } from 'semantic-ui-react'
import "../styles/sessions.css"


class SessionCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      startDate: this.props.session.checkin,
      endDate: this.props.session.checkout,
      modalOpen: false,
      courseSession: this.props.session
    }
  }

  updateSession = () => {
    let data = {
      id: this.props.session.id,
      checkin: this.state.startDate,
      checkout: this.state.endDate,
      student_id: parseInt(localStorage.getItem('currentUser')),
      course_id: this.props.session.course_id
    }

    console.log(data)
    this.props.updateSession(data)
  }

  show = dimmer => () => this.setState({ dimmer, open: true })

  startHandleChange = (date) => {
    this.setState({
      startDate: date
    })
  }

  endHandleChange = (date) => {
    this.setState({
      endDate: date
    })
  }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

  close = () => {
    this.setState({ 
      open: false,
      startDate: this.props.session.checkin,
      endDate: this.props.session.checkout,
    })
  } 


  render() {
  
    const { open, dimmer } = this.state

    return (
      <Fragment>
      <div className="session-card">
      <Card>
        <Image src={this.props.session.course.image} />
        <Card.Content>
          <Card.Header>{this.props.session.course.name}</Card.Header>
          <Card.Meta>{this.props.session.course.address}</Card.Meta>
          <Card.Description>Check In: {moment(this.state.startDate).format("MM/DD/YYYY")}
          </Card.Description>
          <Card.Description>Check Out: {moment(this.state.endDate).format("MM/DD/YYYY")}</Card.Description>
          <Card.Description style={{marginTop: '10px'}}>{this.props.session.course.description}</Card.Description>
         
          {/* <Card.Description style={ratingIcon}>{this.props.session.course.instructor.first_name} {props.course.instructor.last_name}</Card.Description> */}
          {/* <Rating style={ratingIcon} icon='star' defaultRating={5} maxRating={5} disabled /> <span className="rating-number">5</span> */}
          <div>
          <Icon link onClick={this.show('blurring')} name='edit' size='large' />
            
            <Modal dimmer={dimmer} open={open} onClose={this.close}>
              <Modal.Header>Update Session</Modal.Header>
              <Modal.Content image>
                <Image wrapped size='medium' src={this.props.session.course.image} />
                <Modal.Description className="update-form">
                <Header>{this.props.session.course.name}</Header>
                <h4>{this.props.session.course.address}</h4>
                <Form>
                  <Form.Field>
                    <label>Select Start Date: </label>
                    <DatePicker
                      selected={ this.state.startDate}
                      onChange={ this.startHandleChange }
                      minDate={this.state.startDate}
                    />
                  </Form.Field>
                  <Form.Field>
                    <label>Select End Date: </label>
                    <DatePicker
                      selected={ this.state.endDate }
                      onChange={ this.endHandleChange }
                      minDate={this.state.endDate}
                    />
                  </Form.Field>
                </Form>
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
                  content="Update Session"
                  onClick={this.updateSession}
                />
              </Modal.Actions>
            </Modal>
          </div>
        </Card.Content>
      </Card>
      </div>
      </Fragment>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateSession: (sessionData) => {dispatch(updatingSession(sessionData))}
  }
}

export default connect(null, mapDispatchToProps)(SessionCard) 