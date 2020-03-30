import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {fetchingCarpentryCourses, searchCarpentryCourses} from '../redux/actions'

import { Divider, Search } from 'semantic-ui-react'
import TopicHeader from '../components/TopicHeader'
import CourseCard from '../components/CourseCard'
import SearchBar from '../components/SearchBar'

class CarpentryContainer extends Component {

  componentDidMount() {
    this.props.fetchingCarpentryCourses()
  }

  onSearchHandle = (e) => {
    let event = e
    this.setState({
      searchTerm: e.target.value
    })
    this.props.searchCarpentryCourses(event)
  }
  

  render() {

    return this.props.carpentryCourses ? (
      <Fragment>
        <Divider />
        <TopicHeader 
          img="https://images.unsplash.com/photo-1497219055242-93359eeed651?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1591&q=80" 
          title="Carpentry"
        />
         {/* <SearchBar /> */}
         <Search
            input={{ fluid: true }} 
            size="small"
            className="search-bar"
            onSearchChange={this.onSearchHandle}
            showNoResults={false}
            value={this.props.carpentrySearch}
          />
        <div className="dancing-container">
          <div className="ui four column grid">
            <div className="row">
              {this.props.carpentryCourses.map(course => {
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
  let courses = state.carpentrySearch ? state.carpentryCourses.filter((course) => course.name.toLowerCase().includes(state.carpentrySearch.toLowerCase())) : state.carpentryCourses
  return { 
    carpentryCourses: courses,
    carpentrySearch: state.carpentrySearch

  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchingCarpentryCourses: () => {dispatch(fetchingCarpentryCourses())},
    searchCarpentryCourses: (event) => {dispatch(searchCarpentryCourses(event))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CarpentryContainer)