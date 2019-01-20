import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'

import { Card, Image, Rating, CardDescription } from 'semantic-ui-react'
import "../styles/sessions.css"

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';


class SessionCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      startDate: this.props.session.checkin,
      endDate: this.props.session.checkout,
      modalOpen: false,
    }
  }
  render() {
    const ratingIcon = {
      marginTop: '15px'
    }

    console.log(moment(this.state.startDate).format("MM/DD/YYYY"))

    return (
      <Fragment>
      <div className="session-card">
      <Card>
        <Image src={this.props.session.course.image} />
        <Card.Content>
          <Card.Header>{this.props.session.course.name}</Card.Header>
          <Card.Description>Check In: {moment(this.state.startDate).format("MM/DD/YYYY")}
          </Card.Description>
          <Card.Description>Check Out: {moment(this.state.endDate).format("MM/DD/YYYY")}</Card.Description>
          {/* <Card.Description style={ratingIcon}>{this.props.session.course.instructor.first_name} {props.course.instructor.last_name}</Card.Description> */}
          <Rating style={ratingIcon} icon='star' defaultRating={5} maxRating={5} disabled /> <span className="rating-number">5</span>
        </Card.Content>
      </Card>
      </div>
      </Fragment>
    )
  }
}

export default SessionCard