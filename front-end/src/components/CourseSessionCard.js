import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment';
import "../styles/courseCard.css"
import { Card, Image, Rating, CardDescription, Item} from 'semantic-ui-react'

const CourseCard = props => {
  
  console.log(props.classSession)

  return (
    <Fragment>
      <div>
      {/* <Link to={`/courses/${props.course.id}`}> */}
      {/* <div className="course-card-container"> */}
      <Item.Group>
      <Item style={{marginTop: "50px"}}>
            <Item.Image size='tiny' src={props.classSession.student.image}  />

            <Item.Content>
              <Item.Header className="mentor-course-header" as='a'>{props.classSession.course.name}</Item.Header>
              <Item.Meta><span className="item-span">Student Name: </span> {props.classSession.student.first_name} {props.classSession.student.last_name}</Item.Meta>
              <Item.Meta><span className="item-span">Start Time: </span>{moment(props.classSession.checkin).format("MMMM Do YYYY, h:mm a")}</Item.Meta>
              <Item.Meta><span className="item-span">End Time: </span> {moment(props.classSession.checkout).format("MMMM Do YYYY, h:mm a")}</Item.Meta>
              <Item.Meta><span className="item-span">Location: </span>{props.classSession.course.address}</Item.Meta>
              {/* <Item.Description>
                <span className="item-span">Description:</span> <span className="mentor-course-description">{props.classSession.course.description}</span>
              </Item.Description> */}
              {/* <Item.Description><span className="item-span">About me</span> {this.state.courseBio}</Item.Description> */}
            </Item.Content>
          </Item>
        </Item.Group>
      {/* </div> */}
      {/* </Link> */}
      </div>
    </Fragment>
  )
}


export default CourseCard;