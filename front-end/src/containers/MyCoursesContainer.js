import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {fetchingMentorCourses} from '../redux/actions'
import { Divider } from 'semantic-ui-react'

class MyCoursesContainer extends Component {

  componentDidMount() {
    this.props.fetchingMentorCourses()
  }

  render() {
    console.log(this.props.mentorCourses)
    return (
      <Fragment>
        <Divider />
        <div className="sessions-container">
          <h1>My Courses</h1>
          <div className="ui four column grid">
            <div className="row">
              {/* {user.rentals.map(trip => {
                return <TripCard deleteTrip={this.props.deleteTrip} updateTrip={this.props.updateTrip} allTinyPlaces={this.props.allTinyPlaces} key={trip.id} trip={trip} />
              })} */}
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

const mapDispatchToState = (state) => {
  return {
    mentorCourses: state.mentorCourses
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchingMentorCourses: () => {dispatch(fetchingMentorCourses())}
  }
}

export default connect(mapDispatchToState, mapDispatchToProps)(MyCoursesContainer)