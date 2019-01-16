import React, {Component, Fragment} from 'react'
import { connect } from 'react-redux';
import {fetchingCourses} from '../redux/actions'

import { Divider } from 'semantic-ui-react'
import '../styles/sessions.css'

class SessionsContainer extends Component {

  componentDidMount() {
    this.props.fetchingCourses()
  }

  render() {
    return (
      <Fragment>
        <Divider />
        <div className="sessions-container">
          <h1>My Sessions</h1>
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

const mapDispatchToProps = dispatch => {
  return {
    fetchingCourses: () => {dispatch(fetchingCourses())}
  }
}

export default connect(null, mapDispatchToProps)(SessionsContainer)