import React, {Component, Fragment} from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

import { Divider, Breadcrumb, Grid, Rating, Tab, Feed, Image, Button, Card, Icon } from 'semantic-ui-react'
import {fetchingCourses} from '../redux/actions'
import '../styles/courseDetails.css'

class CourseDetailsContainer extends Component {
  constructor() {
    super()
    
  }

  componentDidMount() {
    this.props.fetchingCourses()
  }

  getStudentImage = (id, courseObj) => {
    let student = courseObj.students.find(student => {
      return student.id === id
    })   
    return student.image
  }

  render() {
    let courseObject;
    let backgroundImage;
    let panes;
    

    if (this.props) {
      courseObject = this.props.courses.find(course => {
        return course.id == this.props.courseId
      })
     
    }

    if (courseObject) {
      console.log(courseObject)
      backgroundImage = {
      backgroundImage: `url('${courseObject.image}')`,
      opacity: '1',
      backgroundPosition: '100%',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      bottom: '0',
      height: '100%',
      position: 'absolute',
      right: '0',
      top: '0',
      width: '50%',
      zIndex: '1'
      }

      panes = [
        { menuItem: 'About', render: () => 
          <Tab.Pane attached={false}>
            <div className="tab-container">
              <div className="tab-about">
                <p className="tab-about-content">
                  {courseObject.description}
                </p>
              </div>
              <div className="tab-mentor">
                <div className="course-stats">
                  <div className="stat">
                    <p className="course-students-stat">
                      <Icon className="stat-icon users-icon" name="users" /> 50
                    </p>
                    <p className="stat-heading">Students</p>
                  </div>
                  <div className="stat">
                    <p>
                      <Icon className="stat-icon" name="tag" />
                    </p>
                    <p className="stat-heading">{courseObject.categories[0].name}</p>
                  </div>
                  <div className="stat">
                    <p>
                      <Icon className="stat-icon" name="signal" />
                    </p>
                    <p className="stat-heading">All Levels</p>
                  </div>
                </div>
                <Divider />
                <div className="mentor-section">
                  <div className="mentor-about">
                    <div>
                      <Image size='tiny' src={courseObject.instructor.image} avatar />
                      <span>{courseObject.instructor.first_name} {courseObject.instructor.last_name}
                      <div className="mentor-contact-btn"><Button icon basic color='teal'><Icon style={mailIcon} name='mail' />Contact</Button></div>
                      </span>
                      
                      <div className="mentor-bio">
                        <p>{courseObject.bio}</p>
                      </div>  
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Tab.Pane> },
        { menuItem: 'Reviews', render: () => 
          <Tab.Pane attached={false}>
            <div class="review-container">
              {courseObject.reviews ? courseObject.reviews.map(review => {
                  return (
                    <p>  <Rating icon='star' defaultRating={review.rating} maxRating={5} disabled /> {review.description} <span><Image size='mini' src={this.getStudentImage(review.student_id, courseObject)} avatar /></span>
                    </p>
                  )
                }) : null }
            </div>
          </Tab.Pane> 
          },
        { menuItem: 'Location', render: () => 
          <Tab.Pane attached={false}>
            <div className="mapouter"><div className="gmap_canvas"><iframe id="gmap_canvas" src={`https://maps.google.com/maps?q=${courseObject.address}&t=&z=13&ie=UTF8&iwloc=&output=embed`} scrolling="no"  ></iframe></div></div>
          </Tab.Pane> },
      ]
    }

    // const mentorContactBtn = {
    //   display: 'block'
    // }

    const mailIcon = {
      paddingRight: '20px'  
    }

    const exploreGrid = {
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: "20px"
    }

    const BreadcrumbStyle = {
      color: 'white'
    }

    const ratingIcon = {
      marginTop: '15px'
    }
    
    return courseObject ? (
      <Fragment>
        <Divider />
        <div className="courseDetailBox">
          <div className="courseBannerContainer">
            <div className="course-gradient-background">

            </div>
            <div style={backgroundImage} className="course-background-image">

            </div>
            <div className="course-banner-content">
              <Grid>
                <Grid.Column style={exploreGrid} width={14}>
                  <div className="bread-crumb">
                    <Breadcrumb size='large'>
                    <Link to="/explore">
                    <Breadcrumb.Section style={BreadcrumbStyle} link>Courses</Breadcrumb.Section>
                    </Link>
                    <Breadcrumb.Divider icon='right chevron' />
                    <Link to={`/${courseObject.categories[0].name.toLowerCase()}`}>
                    <Breadcrumb.Section style={BreadcrumbStyle} link>Category</Breadcrumb.Section>
                    </Link>
                    <Breadcrumb.Divider icon='right angle' />
                    <Breadcrumb.Section active>{courseObject.name}</Breadcrumb.Section>
                    </Breadcrumb>
                  </div>
                  <h1>{courseObject.name}</h1>
                  <Rating style={ratingIcon} icon='star' defaultRating={5} maxRating={5} disabled /> <span className="rating-number">5</span>
                </Grid.Column>
              </Grid>
            </div>
          </div>
          <div className="underline-tabs">
          <Grid>
            <Grid.Column style={exploreGrid} width={14}>
            <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
            </Grid.Column>
          </Grid>
          
          </div>
        </div>
      </Fragment>
    ) : null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchingCourses: () => {dispatch(fetchingCourses())}
  }
}

const mapStateToProps = (state) => {
  return { courses: state.courses };
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseDetailsContainer)