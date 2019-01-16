import React, {Component, Fragment} from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

import { Divider, Breadcrumb, Grid, Rating, Tab, Feed, Image, Button, Card, Icon } from 'semantic-ui-react'
import {fetchingCourses} from '../redux/actions'
import '../styles/courseDetails.css'

class CourseDetailsContainer extends Component {

  componentDidMount() {
    this.props.fetchingCourses()
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
                    <p className="stat-heading">Category</p>
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
                      <Image size='tiny' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg3HQeJm8oZPpYVRgRgiLnnUimKY4FMme6AZh3OfK0TNo4WMhR' avatar />
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
        { menuItem: 'Reviews', render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane> },
        { menuItem: 'Contact', render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane> },
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