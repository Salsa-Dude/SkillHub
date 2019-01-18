import React, {Component, Fragment} from 'react'
import TopicHeader from '../components/TopicHeader'
import {connect} from 'react-redux'
import {fetchingDancingCourses} from '../redux/actions'

import CourseCard from '../components/CourseCard'


class LanguagesContainer extends Component {

  componentDidMount() {
    this.props.fetchingDancingCourses()
  }

  render() {
    
    const languagesCourses = this.props.dancingCourses.find(course => {
      return course.name === "Languages"
    })

    return languagesCourses ? (
      <Fragment>
        <TopicHeader 
          img="https://images.unsplash.com/photo-1513957723230-c330c6152342?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" 
          title="Languages"
        />
        <div className="dancing-container">
          <div className="ui four column grid">
            <div className="row">
              {languagesCourses.courses.map(course => {
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

export default connect(mapStateToProps, mapDispatchToProps)(LanguagesContainer) 