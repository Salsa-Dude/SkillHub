import React, {Component, Fragment} from 'react'
import TopicHeader from '../components/TopicHeader'
import {connect} from 'react-redux'
import {fetchingDancingCourses} from '../redux/actions'

import CourseCard from '../components/CourseCard'
class DancingContainer extends Component {

  componentDidMount() {
    this.props.fetchingDancingCourses()
  }

  render() {
    
    const dancingCourses = this.props.dancingCourses.find(course => {
      return course.name === "Dancing"
    })

    

    return (
      <Fragment>
        <TopicHeader 
          img="https://images.unsplash.com/photo-1511913411692-818ea059c8be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" 
          title="Dancing"
        />
        <div className="grid-box">
          <div className="ui four column grid">
            <div className="row">
              {/* {dancingCourses.map(course => {
                return <CourseCard key={course.id} course={course} />
              })} */}
            </div>
          </div>
        </div>
      </Fragment>
    ) 
  }
}

const mapStateToProps = (state) => {
  return { dancingCourses: state.dancingCourses}
}

const mapDispatchToProps = dispatch => {
  return {
    fetchingDancingCourses: () => {dispatch(fetchingDancingCourses())}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DancingContainer);