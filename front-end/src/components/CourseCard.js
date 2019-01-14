import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { Card, Image, Rating } from 'semantic-ui-react'

const CourseCard = props => {
  return (
    // <Link to={`/properties/${this.props.courses.id}`}>
    <div className="search-card">
      <Card>
        <Image src={props.course.image} />
        <Card.Content>
          <Card.Header>{props.course.name}</Card.Header>
          <Card.Meta>{props.course.city}</Card.Meta>
          <Card.Meta>{props.course.address}</Card.Meta>
          {/* <Card.Description>${this.props.place.price} per week</Card.Description> */}
          {/* { rating ? <Rating icon='star' defaultRating={rating} maxRating={5} disabled /> : null } */}
        </Card.Content>
      </Card>
    </div>
    // </Link>
  )
}


export default CourseCard;