import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { updatingSession } from '../redux/actions'
import { deletingSession } from '../redux/actions'
import { addingReview } from '../redux/actions'

import swal from 'sweetalert';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import { Card, Image, Rating, CardDescription, Form, Modal, Icon, Header, Button, TextArea } from 'semantic-ui-react'
import "../styles/sessions.css"


class SessionCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      startDate: this.props.session.checkin,
      endDate: this.props.session.checkout,
      modalOpen: false,
      courseSession: this.props.session,
      rating: 0,
      reviewContent: ''
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
    this.props.updateSession(data)
    this.setState({ 
      open: false,
    })
    swal({
      text: "Session has been updated!",
      icon: "success",
      button: "Ok",
    });
  }

  deleteSession = () => {
    this.props.deleteSession(this.props.session.id)
    this.setState({ 
      modalOpen: false
    })
  }

  postReview = () => {
    console.log(this.state)
    let data = {
    description: this.state.reviewContent,
    rating: this.state.rating,
    student_id: parseInt(localStorage.getItem('currentUser')),
    course_session_id: this.state.courseSession.id
    }
    this.props.addReview(data)
    this.setState({ modalOpen: false , rating: 0, reviewContent: '' })
    
    swal({
      text: "Review has been posted",
      icon: "success",
      button: "Ok",
    });
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

  handleClose = () => this.setState({ modalOpen: false , rating: 0, reviewContent: '' })

  close = () => {
    this.setState({ 
      open: false,
      startDate: this.props.session.checkin,
      endDate: this.props.session.checkout,
    })
  } 

  reviewChange = (e) => this.setState({reviewContent: e.target.value})

  handleChange = e => this.setState({ rating: e.target.value })


  render() {
    const { open, dimmer } = this.state
    const { rating } = this.state

    return (
      <Fragment>
      <div className="session-card">
      <Card>
        <Image src={this.props.session.course.image} />
        <Card.Content>
          <Card.Header>{this.props.session.course.name}</Card.Header>
          <Card.Meta>{this.props.session.course.address}</Card.Meta>
          <Card.Description>Start: {moment(this.state.startDate).format("MMMM Do YYYY, h:mm a")}
          </Card.Description>
          <Card.Description>End: {moment(this.state.endDate).format("MMMM Do YYYY, h:mm a")}</Card.Description>
          <Modal
            trigger={<Button onClick={this.handleOpen} style={{marginTop: '10px'}} size="mini" basic color='teal'> Leave Review
            </Button>}
             onClose={this.handleClose}
             open={this.state.modalOpen}
          >
            <Modal.Header>Leave a Review</Modal.Header>
            <Modal.Content image>
              <Image wrapped size='medium' src={this.props.session.course.image} />
              <Modal.Description>
                <Header>{this.props.session.course.name}</Header>
                <Form style={{ width: '400px'}}>
                <div>
                  <div>Rating: {rating}</div>
                  <input type='range' min={1} max={5} value={rating} onChange={this.handleChange} />
                  <br />
                  <Rating rating={this.state.rating} maxRating={5} />
                </div>
                <Form.Field rows='6' onChange={(e) => this.reviewChange(e)} control={TextArea} label='Review' placeholder='Leave a review' />
                </Form>
                <Button onClick={this.postReview}>Default</Button>
              </Modal.Description>
            </Modal.Content>
          </Modal>
          
          <div className="right">
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
                      // minDate={this.state.startDate}
                      showTimeSelect
                      dateFormat="Pp"
                    />
                  </Form.Field>
                  <Form.Field>
                    <label>Select End Date: </label>
                    <DatePicker
                      selected={ this.state.endDate }
                      onChange={ this.endHandleChange }
                      // minDate={this.state.endDate}
                      showTimeSelect
                      dateFormat="Pp"
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
            {/* <Modal
              trigger={<Icon link onClick={this.handleOpen} name='trash' size='large' />}
              open={this.state.modalOpen}
              onClose={this.handleClose}
              size='small'
            >
              <Header className="delete-header" icon='trash' content='Delete Trip ' />
              <Modal.Description>
                <p className="delete-message">Are you sure you want to delete this upcoming trip?</p>
              </Modal.Description>
              <Modal.Actions>
                <Button color='red' onClick={this.handleClose} inverted>
                  <Icon name='x' /> No
                </Button>
                <Button color='green' onClick={this.deleteSession} inverted>
                  <Icon name='checkmark' /> Yes
                </Button>
              </Modal.Actions>
            </Modal>
             */}
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
    updateSession: (sessionData) => {dispatch(updatingSession(sessionData))},
    deleteSession: (id) => {dispatch(deletingSession(id))},
    addReview: (data) => {dispatch(addingReview(data))}
  }
}

export default connect(null, mapDispatchToProps)(SessionCard) 