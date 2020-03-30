import React, {Component, Fragment} from 'react'
import TopicHeader from '../components/TopicHeader'
import {connect} from 'react-redux'
import {fetchingLanguagesCourses, searchLanguageCourses} from '../redux/actions'
import { Divider, Search } from 'semantic-ui-react'
import SearchBar from '../components/SearchBar'

import CourseCard from '../components/CourseCard'


class LanguagesContainer extends Component {

  componentDidMount() {
    this.props.fetchingLanguageCourses()
  }

  onSearchHandle = (e) => {
    let event = e
    this.setState({
      searchTerm: e.target.value
    })
    this.props.searchLanguageCourses(event)

    // console.log(e.target.value)
    // let searchDancingCourses = this.props.dancingCourses.find(course => {
    //   return course.name === "Dancing"
    // })
    // console.log(searchDancingCourses.courses)
  }

  render() {
    
    return this.props.languageCourses ? (
      <Fragment>
        <Divider />
        <TopicHeader 
          img="https://images.unsplash.com/photo-1513957723230-c330c6152342?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" 
          title="Languages"
        />
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
            value={this.props.languageSearch}
          />
        <div className="dancing-container">
          <div className="ui four column grid">
            <div className="row">
              {this.props.languageCourses.map(course => {
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
  let courses = state.languageSearch ? state.languageCourses.filter((course) => course.name.toLowerCase().includes(state.languageSearch.toLowerCase())) : state.languageCourses
  return { 
    languageCourses: courses,
    languageSearch: state.languageSearch 
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchingLanguageCourses: () => {dispatch(fetchingLanguagesCourses())},
    searchLanguageCourses: (event) => {dispatch(searchLanguageCourses(event))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LanguagesContainer) 