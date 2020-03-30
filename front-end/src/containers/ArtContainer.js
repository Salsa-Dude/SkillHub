import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {fetchingArtCourses, searchArtCourses} from '../redux/actions'

import { Divider, Search } from 'semantic-ui-react'
import TopicHeader from '../components/TopicHeader'
import CourseCard from '../components/CourseCard'
import SearchBar from '../components/SearchBar'

class ArtContainer extends Component {

  componentDidMount() {
    this.props.fetchingArtCourses()
  }

  onSearchHandle = (e) => {
    let event = e
    this.setState({
      searchTerm: e.target.value
    })
    this.props.searchArtCourses(event)
  }

  render() {

    return this.props.artCourses ? (
      <Fragment>
         <Divider />
        <TopicHeader 
          img="https://images.unsplash.com/photo-1511113495287-4c70b42107ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" 
          title="Art"
        />
         {/* <SearchBar /> */}
         <Search
            input={{ fluid: true }} 
            size="small"
            className="search-bar"
            onSearchChange={this.onSearchHandle}
            showNoResults={false}
            value={this.props.artSearch}
          />
        <div className="dancing-container">
          <div className="ui four column grid">
            <div className="row">
              {this.props.artCourses.map(course => {
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
  let courses = state.artSearch ? state.artCourses.filter((course) => course.name.toLowerCase().includes(state.artSearch.toLowerCase())) : state.artCourses
  return { 
    artCourses: courses,
    artSearch: state.artSearch

  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchingArtCourses: () => {dispatch(fetchingArtCourses())},
    searchArtCourses: (event) => {dispatch(searchArtCourses(event))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArtContainer)