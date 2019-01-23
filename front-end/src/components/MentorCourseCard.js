import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import {updatingMentorCourses} from '../redux/actions'
import {deletingMentorCourse} from '../redux/actions'
import { Divider, Image, Item, Grid, Button, Header, Modal, Form , TextArea, Icon } from 'semantic-ui-react'
import "../styles/mentorCourses.css"

class MentorCourseCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      modalOpen: false,
      courseName: this.props.course.name,
      courseAddress: this.props.course.address,
      courseCity: this.props.course.city,
      courseDescription: this.props.course.description,
      courseBio: this.props.course.bio,
      courseImage: this.props.course.image,
      courseId: this.props.course.id
    }
  }

  updateCourse = () => {
    let data = {
      id: this.state.courseId,
      name: this.state.courseName,
      description: this.state.courseDescription,
      image: this.state.courseImage,
      bio: this.state.courseBio,
      instructor_id: parseInt(localStorage.getItem('currentUser')),
      city: this.state.courseCity,
      address: this.state.courseAddress,
    }

    this.props.updateMentorCourses(data)

    this.setState({ 
      open: false
    })
  }

  deleteCourse = () => {
    this.props.deleteCourse(this.state.courseId)
  }

  nameChange = (e) => {
    this.setState({
     courseName: e.target.value
    })
  }

  addressChange = (e) => {
    this.setState({
     courseAddress: e.target.value
    })
  }

  descriptionChange = (e) => {
    this.setState({
     courseDescription: e.target.value
    })
  }

  bioChange = (e) => {
    this.setState({
     courseBio: e.target.value
    })
  }

  handleOpen = (e, dimmer) => {
    this.setState({ dimmer, open: true })
  }

  handleTwoOpen = () => {
    this.setState({ modalOpen: true })
  }

  close = () => {
    this.setState({ 
      open: false,
      courseName: this.props.course.name,
      courseAddress: this.props.course.address,
      courseCity: this.props.course.city,
      courseDescription: this.props.course.description,
      courseBio: this.props.course.bio
    })
  }

  handleClose = () => this.setState({ modalOpen: false })

  render() {

    const { open, dimmer } = this.state
    return (
      <Item.Group>
        <Item>
          <Item.Image size='medium' src={this.props.course.image} />

          <Item.Content>
            <Item.Header className="mentor-course-header" as='a'>{this.state.courseName}</Item.Header>
            <Item.Meta><span className="item-span">Address:</span> {this.state.courseAddress}</Item.Meta>
            <Item.Meta><span className="item-span">City:</span> {this.state.courseCity}</Item.Meta>
            <Item.Description>
              <span className="item-span">Description:</span> <span className="mentor-course-description">{this.state.courseDescription}</span>
            </Item.Description>
            <Item.Description><span className="item-span">About me</span> {this.state.courseBio}</Item.Description>
          </Item.Content>
        </Item>
        <div className="mentor-btns">
          <Button onClick={(e) => this.handleOpen(e, 'inverted' )} basic color='teal'>Edit</Button>
          <Modal size="tiny" dimmer={dimmer} open={open} onClose={this.close}>
            <Header>Update Course </Header>
            <Modal.Content className="">
              <Modal.Description className="">
                <Form>
                  <Form.Field>
                    <label>Name</label>
                    <input name="courseName" onChange={(e) => this.nameChange(e)} placeholder='name' value={this.state.courseName} />
                  </Form.Field>
                  <Form.Field>
                    <label>Address</label>
                    <input name="courseAddress" onChange={(e) => this.addressChange(e)} placeholder='address' value={this.state.courseAddress} />
                  </Form.Field>
                  <Form.Field>
                  <Form.TextArea onChange={(e) => this.descriptionChange(e)} name="courseDescription" rows='6' label='Description' value={this.state.courseDescription} placeholder='What is the course about...' />
                  <Form.TextArea onChange={(e) => this.bioChange(e)} name="courseBio" rows='3' value={this.state.courseBio} label='About Me' placeholder='brief bio of yourself...' />
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
                content="Update Course"
                onClick={this.updateCourse}
              />
            </Modal.Actions>
          </Modal>
          <Modal trigger={<Button onClick={this.handleTwoOpen} basic color='red'>Delete</Button>}
          open={this.state.modalOpen}
          onClose={this.handleClose}
          >
            <Header className="delete-header" icon='trash' content='Delete Trip ' />
            <Modal.Description>
              <p className="delete-message">Are you sure you want to delete this course?</p>
            </Modal.Description>
            <Modal.Actions>
              <Button color='red' onClick={this.handleClose} inverted>
                <Icon name='x' /> No
              </Button>
              <Button color='green' onClick={this.deleteCourse} inverted>
                <Icon name='checkmark' /> Yes
              </Button>
            </Modal.Actions>
          </Modal>
        </div>
      </Item.Group>
    )
  }

}

const mapDispatchToProps = dispatch => {
  return {
    updateMentorCourses: (data) => {dispatch(updatingMentorCourses(data))},
    deleteCourse: (id) => {dispatch(deletingMentorCourse(id))}
  }
}

export default connect(null, mapDispatchToProps)(MentorCourseCard);


