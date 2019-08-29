import React, { Component, Fragment } from 'react';
import { NavLink} from "react-router-dom";
import { Button, Icon, Grid } from 'semantic-ui-react'
import {connect} from 'react-redux'
import {fetchingCourses} from '../redux/actions'

import "../styles/home.css"

class Home extends Component {

  componentDidMount() {
    this.props.fetchingCourses()
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
              <Button  as={NavLink} to="/categories" className="get-started-btn" color='teal'>Get Started</Button>
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
          {/* <div className="space"></div>

          <Grid>
            <Grid.Column style={topCategoriesContainer} width={13}>
              <h2>Trending Courses</h2>

            </Grid.Column>
          </Grid> */}
        
      </Fragment>
    )
  }
}

// props called fetchingCourses that fetches the Tasks from server

const mapStateToProps = state => {
  return {
    
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchingCourses: () => {dispatch(fetchingCourses())}
  }
}

// export default connect(null, mapDispatchToProps)(Home);
export default connect(null, mapDispatchToProps)(Home);