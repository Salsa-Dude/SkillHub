import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {fetchingMentorCourses} from '../redux/actions'

import MentorCourseCard from '../components/MentorCourseCard'
import { Divider, Image, Item, Grid, Button, Header, Modal, Form , TextArea } from 'semantic-ui-react'
import "../styles/mentorCourses.css"

class MyCoursesContainer extends Component {
  constructor() {
    super()
    this.state = {
      open: false,
    }
  }

  componentDidMount() {
    this.props.fetchingMentorCourses()
  }

  handleOpen = (e, dimmer) => {
    this.setState({ dimmer, open: true })
  }

  close = () => {
    this.setState({ 
      open: false
    })
  }


  render() {
    
    const userMentorCourses = this.props.mentorCourses.filter(course => {
      return course.instructor_id === parseInt(localStorage.getItem('currentUser'))
    })

    const { open, dimmer } = this.state
   
    return (
      <Fragment>
        <Divider/>
        <div className="session-mentor-container ">
          <h1>My Courses</h1>
              {userMentorCourses.map(course => {
                return (
                  <div className="mentor-courses-container">
                    <Grid style={{marginTop: '20px'}}>
                      <Grid.Column width={12}>
                        <MentorCourseCard key={course.id }course={course} />
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