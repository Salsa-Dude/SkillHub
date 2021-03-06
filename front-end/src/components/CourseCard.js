import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import "../styles/courseCard.css"
import { Card, Image, Rating, CardDescription } from 'semantic-ui-react'

const CourseCard = props => {
  
  const ratingIcon = {
    marginTop: '15px'
  }

  return (
    <Link to={`/courses/${props.course.id}`}>
    <div className="course-card-container">
      <Card>
        <Image src={props.course.image} />
        <Card.Content>
          <Card.Header style={{color: '#41444b'}}>{props.course.name}</Card.Header>
          {/* <Card.Description style={ratingIcon}>{props.course.instructor.first_name} {props.course.instructor.last_name}</Card.Description> */}
          <Rating style={ratingIcon} icon='star' defaultRating={5} maxRating={5} disabled /> <span className="rating-number">5</span>
        </Card.Content>
      </Card>
    </div>
    </Link>
  )
}


export default CourseCard;