import React, {Component, Fragment} from 'react'
import TopicHeader from '../components/TopicHeader'
import {connect} from 'react-redux'
import {fetchingDancingCourses2, searchDancingCourses} from '../redux/actions'
import { Divider, Search } from 'semantic-ui-react'
import SearchBar from '../components/SearchBar'

import CourseCard from '../components/CourseCard'
import '../styles/dancingContainer.css'
class DancingContainer extends Component {

  state = {
    searchTerm: ""
  }

  componentDidMount() {
    this.props.fetchingDancingCourses()
   
  }

  onSearchHandle = (e) => {
    let event = e
    this.setState({
      searchTerm: e.target.value
    })
    this.props.searchDancingCourses(event)
  }

  

  render() {
    
    return this.props.danceCourses? (
      <Fragment>
        <Divider />
        <TopicHeader 
          img="https://skill-hub-images.s3.amazonaws.com/topic/dancing-topic.jpg" 
          title="Dancing"
        />
         
          <div className="dancing-container">
            {/* <SearchBar /> */}
            <Search
            input={{ fluid: true }} 
            size="small"
            className="search-bar"
            onSearchChange={this.onSearchHandle}
            // loading={true}
            // onResultSelect={this.handleResultSelect}
            // onSearchChange={_.debounce(this.handleSearchChange, 500, {
            //   leading: true,
            // })}
            // results={results}
            // value={value}
            // {...this.props}
            showNoResults={false}
            value={this.props.dancingSearch}
          />
            <div className="ui four column grid">
              <div className="row">
                {this.props.danceCourses.map(course => {
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
  console.log(state.dancingSearch)
  let courses = state.dancingSearch ? state.dancingCourses.filter((val) => val.name.toLowerCase().startsWith(state.dancingSearch.toLowerCase())) : state.dancingCourses
  return { 
    danceCourses: courses,
    dancingSearch: state.dancingSearch

  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchingDancingCourses: () => {dispatch(fetchingDancingCourses2())},
    searchDancingCourses: (event) => {dispatch(searchDancingCourses(event))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DancingContainer);