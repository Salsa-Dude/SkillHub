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

  render() {

    return  (
      <Fragment>
        <Divider />
        <TopicHeader 
          img="https://images.unsplash.com/photo-1536657235019-030fc1fd7b43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" 
          title="Musical"
        />
        {/* <SearchBar /> */}
        <Search
            input={{ fluid: true }} 
            size="small"
            className="search-bar"
            onSearchChange={this.onSearchHandle}
            showNoResults={false}
            value={this.props.dancingSearch}
          />
        <div className="dancing-container">
          <div className="ui four column grid">
            <div className="row">
              {/* {musicalCourses.courses.map(course => {
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
  // let courses = state.Search ? state.dancingCourses.filter((val) => val.name.toLowerCase().startsWith(state.dancingSearch.toLowerCase())) : state.dancingCourses
  // return { 
  //   musicalCourses: courses,
  //   // dancingSearch: state.dancingSearch

  // }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchingMusicalCourses: () => {dispatch(fetchingMusicalCourses())},
    searchDancingCourses: (event) => {dispatch(searchMusicalCourses(event))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MusicalContainer)