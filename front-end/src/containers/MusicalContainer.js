import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {fetchingMusicalCourses, searchMusicalCourses} from '../redux/actions'

import { Divider, Search } from 'semantic-ui-react'
import TopicHeader from '../components/TopicHeader'
import CourseCard from '../components/CourseCard'
import SearchBar from '../components/SearchBar'

class MusicalContainer extends Component {

  componentDidMount() {
    this.props.fetchingMusicalCourses()
  }

  onSearchHandle = (e) => {
    let event = e
    this.setState({
      searchTerm: e.target.value
    })
    this.props.searchMusicalCourses(event)
  }

  render() {
  
    return this.props.musicalCourses? (
      <Fragment>
        <Divider />
        <TopicHeader 
          img="https://skill-hub-images.s3.amazonaws.com/topic/musical-topic.jpg" 
          title="Musical"
        />
        {/* <SearchBar /> */}
        <Search
            input={{ fluid: true }} 
            size="small"
            className="search-bar"
            onSearchChange={this.onSearchHandle}
            showNoResults={false}
            value={this.props.musicalSearch}
          />
        <div className="dancing-container">
          <div className="ui four column grid">
            <div className="row">
              {this.props.musicalCourses.map(course => {
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
 
  let courses = state.musicalSearch ? state.musicalCourses.filter((course) => course.name.toLowerCase().includes(state.musicalSearch.toLowerCase())) : state.musicalCourses
  return { 
    musicalCourses: courses,
    musicalSearch: state.musicalSearch

  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchingMusicalCourses: () => {dispatch(fetchingMusicalCourses())},
    searchMusicalCourses: (event) => {dispatch(searchMusicalCourses(event))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MusicalContainer)