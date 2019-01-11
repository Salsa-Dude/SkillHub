import React, { Component, Fragment } from 'react';
import { Button, Icon, Grid } from 'semantic-ui-react'
import {connect} from 'react-redux'

class Home extends Component {

  componentDidMount() {
    URL = "http://localhost:3000/api/v1/courses"
    fetch(URL)
    .then(res => res.json())
    .then(courses => {
      console.log(courses)
      this.props.fetchedCourses(courses)
    })
  }


  render() {
    const topCategoriesContainer = {
      marginRight: 'auto',
      marginLeft: 'auto'
    }

    return (
      <Fragment>
          <div className="jumbo-container">
            <div className="jumbo-catchphase">
              <h1>Meet up and Learn a Skill from a Mentor</h1>
              <h2>Find a local mentor and accelerate your learning</h2>
                <div className="get-started-container">
                <Button className="get-started-btn" color='teal'>Get Started</Button>
                </div>
              </div>
          </div>
          <div className="howSkillHubWorks-container">
            <div className="howSkillHubWorks-inner">
              <div className="howSkillHubWorks-col">
                <span className="howSkillHubIcon">
                  <Icon className="howIcon" name='users' />
                </span>
                <div className="howSkillAbout">
                  Find local mentors in the DC area
                </div>
              </div>
              <div className="howSkillHubWorks-col">
                <span className="howSkillHubIcon">
                  <Icon className="howIcon" name='handshake outline' />
                </span>
                <div className="howSkillAbout">
                  Learn a skill one-on-one in person
                </div>
              </div>
              <div className="howSkillHubWorks-col">
                <span className="howSkillHubIcon">
                  <Icon className="howIcon" name='whmcs' />
                </span>
                  <div className="howSkillAbout">
                    Learn a variety of unique skills
                  </div>
              </div>
            </div>
          </div>
          <div className="space"></div>

          <Grid>
            <Grid.Column style={topCategoriesContainer} width={10}>
              <h2>Top Categories</h2>

            </Grid.Column>
          </Grid>
        
      </Fragment>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchedCourses: (courses) => {
      dispatch({type: "FETCHED_COURSES", courses: courses})
    }
  }
}

export default Home;