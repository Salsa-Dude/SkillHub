import React, {Component, Fragment} from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

import { Divider, Breadcrumb, Grid, Rating, Tab, Feed, Image, Button, Card } from 'semantic-ui-react'
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
                      
                    </p>
                    <p>
                     
                    </p>
                  </div>
                  <div className="stat">

                  </div>
                  <div className="stat">

                  </div>
                </div>
              <Card>
              <Card.Content>
                <Card.Header>Your Host</Card.Header>
              </Card.Content>
              <Card.Content>
                <Feed>
                  <Feed.Event>
                    <Feed.Label>
                    <Image src='http://www.thatentertains.com/wp-content/uploads/2018/01/female-place-holder-profile-image.jpg' />
                    <span className="user-name">Joseph</span>
                    </Feed.Label>
                    <Feed.Content>
                      <Feed.Summary>
                        hello
                      </Feed.Summary>
                    </Feed.Content>
                  </Feed.Event>
                </Feed>
              </Card.Content>
              <Button color='teal'>
                Message Host
              </Button>
            </Card>
              </div>
            </div>
          </Tab.Pane> },
        { menuItem: 'Reviews', render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane> },
        { menuItem: 'Contact', render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane> },
      ]
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