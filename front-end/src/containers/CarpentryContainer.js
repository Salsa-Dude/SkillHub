import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {fetchingDancingCourses} from '../redux/actions'

import { Divider } from 'semantic-ui-react'
import TopicHeader from '../components/TopicHeader'
import CourseCard from '../components/CourseCard'
import SearchBar from '../components/SearchBar'

class CarpentryContainer extends Component {

  componentDidMount() {
    this.props.fetchingDancingCourses()
  }
  

  render() {

    const carpentryCourses = this.props.dancingCourses.find(course => {
      return course.name === "Carpentry"
    })

    return carpentryCourses ? (
      <Fragment>
        <Divider />
        <TopicHeader 
          img="https://images.unsplash.com/photo-1497219055242-93359eeed651?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1591&q=80" 
          title="Carpentry"
        />
         <SearchBar />
        <div className="dancing-container">
          <div className="ui four column grid">
            <div className="row">
              {carpentryCourses.courses.map(course => {
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
    fetchingDancingCourses: () => {dispatch(fetchingDancingCourses())}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CarpentryContainer)