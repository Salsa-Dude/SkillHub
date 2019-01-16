import React, {Component, Fragment} from 'react'

import { Divider } from 'semantic-ui-react'

class AddCourse extends Component {
  render() {
    return (
      <Fragment>
        <Divider />
        <div className="sessions-container">
          <h1>Add Course</h1>
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

export default AddCourse