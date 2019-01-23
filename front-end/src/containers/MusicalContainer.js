import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {fetchingDancingCourses} from '../redux/actions'

import { Divider } from 'semantic-ui-react'
import TopicHeader from '../components/TopicHeader'
import CourseCard from '../components/CourseCard'

class MusicalContainer extends Component {

  componentDidMount() {
    this.props.fetchingDancingCoursesDispatch()
  }

  render() {

    const musicalCourses = this.props.dancingCourses.find(course => {
      return course.name === "Musical"
    })

    return musicalCourses ? (
      <Fragment>
        <Divider />
        <TopicHeader 
          img="https://images.unsplash.com/photo-1536657235019-030fc1fd7b43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" 
          title="Musical"
        />
        <div className="dancing-container">
          <div className="ui four column grid">
            <div className="row">
              {musicalCourses.courses.map(course => {
                return <CourseCard key={course.id} course={course} />
              })}
            </div>
          </div>
        </div>
      </Fragment>
    ) : null
  }
}

const mapStateToProps = (state) => {
  return { dancingCourses: state.dancingCourses}
}

const mapDispatchToProps = dispatch => {
  return {
    fetchingDancingCoursesDispatch: () => {dispatch(fetchingDancingCourses())}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MusicalContainer)