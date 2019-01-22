import React, { Component, Fragment } from 'react'

import { Divider, Image, Item, Grid, Button, Header, Modal, Form , TextArea } from 'semantic-ui-react'
import "../styles/mentorCourses.css"


class MentorCourseCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      courseName: props.course.name,
      courseAddress: props.course.address,
      courseCity: props.course.city,
      courseDescription: props.course.description,
      courseBio: props.course.bio
    }
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

  render() {

    const { open, dimmer } = this.state
    return (
      <Item.Group>
        <Item>
          <Item.Image size='medium' src={this.props.course.image} />

          <Item.Content>
            <Item.Header className="mentor-course-header" as='a'>{this.props.course.name}</Item.Header>
            <Item.Meta><span className="item-span">Address:</span> {this.props.course.address}</Item.Meta>
            <Item.Meta><span className="item-span">City:</span> {this.props.course.city}</Item.Meta>
            <Item.Description>
              <span className="item-span">Description:</span> <span className="mentor-course-description">{this.props.course.description}</span>
            </Item.Description>
            <Item.Description><span className="item-span">About me</span> {this.props.course.bio}</Item.Description>
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
                onClick={this.sendReply}
              />
            </Modal.Actions>
          </Modal>
          <Button basic color='red'>Delete</Button>
        </div>
      </Item.Group>
    )
  }

}

export default MentorCourseCard;


