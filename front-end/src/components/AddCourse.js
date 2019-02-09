import React, {Component, Fragment} from 'react'

import { Divider, Form, Button, Grid } from 'semantic-ui-react'

class AddCourse extends Component {

  state = {
    uploading: false,
    image: "",
    courseName: ''
  }


  handleImageChange = (e) => {
    console.log(e.target.files[0])
    this.setState({image: e.target.files[0]})
  }

  addCourse = (e) => {

  }

  nameChange = (e) => {
    this.setState({
      courseName: e.target.value
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

  cityChange = (e) => {
    this.setState({
      courseCity: e.target.value
     })
  }

  addressChange = (e) => {
    this.setState({
      courseAddress: e.target.value
     })
  }

  hourlyChange = (e) => {
    this.setState({
      courseHourly: e.target.value
     })
  }



  render() {
    return (
      <Fragment>
        <Divider />
        <div className="mentor-add-container">
        <Grid>
            <Grid.Column className="add-form-course-grid" width={5}>
          <h1>Add Course</h1>
          <div>
          <Form onSubmit={this.addCourse}>
            <Form.Field>
              <label>Name</label>
              <input placeholder='Name' onChange={(e) => this.nameChange(e)} value={this.state.courseName} />
            </Form.Field>
            <Form.Field>
              <label>Description</label>
              <input placeholder='Description' onChange={(e) => this.descriptionChange(e)} value={this.state.courseDescription} />
            </Form.Field>
            <Form.Field>
              <label>Instructor Bio</label>
              <input placeholder='Bio' onChange={(e) => this.bioChange(e)} value={this.state.courseBio} />
            </Form.Field>
            <Form.Field>
              <label>City</label>
              <input placeholder='City' onChange={(e) => this.cityChange(e)} value={this.state.courseCity} />
            </Form.Field>
            <Form.Field>
              <label>Address</label>
              <input placeholder='Address' onChange={(e) => this.addressChange(e)} value={this.state.courseAddress} />
            </Form.Field>
            <Form.Field>
              <label>Hourly rate</label>
              <input placeholder='Hourly' onChange={(e) => this.hourlyChange(e)} value={this.state.courseHourly} />
            </Form.Field>
            <input type="file" onChange = {this.handleImageChange} />
            <Button className="add-submit" type='submit'>Submit</Button>
          </Form>
          </div>
          </Grid.Column>
          </Grid>
        </div>
      </Fragment>
    )
  }
}

export default AddCourse