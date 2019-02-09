import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {fetchingUser} from '../redux/actions'
import {fetchingClassSessions} from '../redux/actions'
import { Divider, Breadcrumb, Grid, Rating, Tab, Feed, Image, Button, Card, Icon, Modal, Form, Header, TextArea, Item  } 
from 'semantic-ui-react'
import CourseSessionCard from '../components/CourseSessionCard'
import "../styles/userContainer.css"

class DashBoard extends Component {

  state = {
    mentorClasses: []
  }


  componentDidMount() {
    let userId = parseInt(localStorage.getItem('currentUser'))
    this.props.fetchUser(userId)
    this.props.fetchClassSessions()
  }

  render() {

    
    return this.props.user ? (
      <Fragment>
        <div className="user-container">
          <Grid>
            <Grid.Column className="user-sidebar" width={5}>
              <div className="user-image-photo">
                <Image centered src={this.props.user.image} size='medium' circular />
                <div className="user-page-name">
                  {this.props.user.first_name} {this.props.user.last_name} 
                  <div>
                  <Button className="user-tag" color='teal'>Teacher</Button>
                  </div>
                  <div className="user-message-box"><Button icon basic color='teal'><Icon  name='mail' />Contact</Button></div>
                </div>
              </div>
              <div>
               
              </div>
            </Grid.Column>
            <Grid.Column className="user-about-me" width={8}>
             <h2>About me</h2>
             <div className="inner-user-about-me">
               {this.props.user.bio}. {this.props.user.courses[0].bio}
             </div>
             <div className="user-courses-container">
               <h2>Upcoming Class Sessions</h2> 
                <div className="inner-user-courses">
                  {this.props.mentorSessions && this.props.mentorSessions.length > 0 ? this.props.mentorSessions.map(course => {
                    return (
                     <CourseSessionCard classSession={course} />
                     )
                  }) : <h3 className="no-class">No Class Sessions</h3> }
                </div>
             </div>
            </Grid.Column>
          </Grid>
        </div>
        
      </Fragment>
    ) : null
  }
}


const mapStateToProps = (state) => {
  return {
    user: state.user,
    mentorSessions: state.mentorSessions
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: (id) => {dispatch(fetchingUser(id))},
    fetchClassSessions: () => dispatch(fetchingClassSessions())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashBoard) 
