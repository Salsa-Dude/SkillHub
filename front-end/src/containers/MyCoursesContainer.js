import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {fetchingMentorCourses} from '../redux/actions'
import { Divider, Image, Item, Grid, Button } from 'semantic-ui-react'
import "../styles/mentorCourses.css"

class MyCoursesContainer extends Component {

  componentDidMount() {
    this.props.fetchingMentorCourses()
  }

  render() {
    
    const userMentorCourses = this.props.mentorCourses.filter(course => {
      return course.instructor_id === parseInt(localStorage.getItem('currentUser'))
    })

    console.log(userMentorCourses)
   
    return (
      <Fragment>
        <Divider />
        <div className="sessions-container">
          <h1>My Courses</h1>
              {userMentorCourses.map(course => {
                return (
                  <div className="mentor-courses-container">
                    <Grid style={{marginTop: '20px'}}>
                      <Grid.Column width={11}>
                        <Item.Group>
                          <Item>
                            <Item.Image size='medium' src={course.image} />

                            <Item.Content>
                              <Item.Header className="mentor-course-header" as='a'>{course.name}</Item.Header>
                              <Item.Meta><span className="item-span">Address:</span> {course.address}</Item.Meta>
                              <Item.Meta><span className="item-span">City:</span> {course.city}</Item.Meta>
                              <Item.Description>
                                <span className="item-span">Description:</span> <span className="mentor-course-description">{course.description}</span>
                              </Item.Description>
                              <Item.Description><span className="item-span">About me</span> {course.bio}</Item.Description>
                            </Item.Content>
                          </Item>
                          <div className="mentor-btns">
                              <Button basic color='teal'>Edit</Button>
                              <Button basic color='red'>Delete</Button>
                            </div>
                        </Item.Group>
                      </Grid.Column>
                    </Grid>
                  </div>
                )
              })}
           
        </div>
      </Fragment>
    )
  }
}

const mapDispatchToState = (state) => {
  return {
    mentorCourses: state.mentorCourses
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchingMentorCourses: () => {dispatch(fetchingMentorCourses())}
  }
}

export default connect(mapDispatchToState, mapDispatchToProps)(MyCoursesContainer)