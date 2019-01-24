import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {fetchingUser} from '../redux/actions'
import { Divider, Breadcrumb, Grid, Rating, Tab, Feed, Image, Button, Card, Icon, Modal, Form, Header, TextArea } 
from 'semantic-ui-react'
import CourseCard from "../components/CourseCard"
import "../styles/userContainer.css"

class DashBoard extends Component {


  componentDidMount() {
    let userId = parseInt(localStorage.getItem('currentUser'))
    this.props.fetchUser(userId)
    console.log(userId)
  }

  render() {
   

    return this.props.user ? (
      <Fragment>
        <div className="user-container">
          <Grid>
            <Grid.Column className="user-sidebar" width={5}>
              <div className="user-image-photo">
                <Image centered src={this.props.user.image} size='small' circular />
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
            <Grid.Column className="user-about-me" width={9}>
             <h2>About me</h2>
             <div className="inner-user-about-me">
               {this.props.user.bio}. {this.props.user.courses[0].bio}
             </div>
             <div className="user-courses-container">
               <h2>My courses</h2>
                <div className="inner-user-courses">
                  {this.props.user.courses.map(course => {
                    return <CourseCard key={course.key} course={course} />
                  })}
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
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: (id) => {dispatch(fetchingUser(id))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashBoard) 
