import React, {Component, Fragment} from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import DatePicker from "react-datepicker";
import moment from 'moment';
import {fetchingCourses} from '../redux/actions'
import {bookingSession} from '../redux/actions'
import {sendingMessage} from '../redux/actions'
import swal from 'sweetalert';


import "react-datepicker/dist/react-datepicker.css";
import { Divider, Breadcrumb, Grid, Rating, Tab, Feed, Image, Button, Card, Icon, Modal, Form, Header, TextArea, Message } from 'semantic-ui-react'
import '../styles/courseDetails.css'

class CourseDetailsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      startDate: new Date(),
      endDate: new Date(),
      modalOpen: false,
      open: false,
      messageContent: ''
    }
  }

  bookSession = (courseObj) => {
    if(localStorage.getItem('token')) {
      let data = {
        checkin: this.state.startDate,
        checkout: this.state.endDate,
        student_id: parseInt(localStorage.getItem('currentUser')),
        course_id: courseObj.id
      }
      this.props.bookingSession(data)
      this.setState({ modalOpen: false })
      swal({
        text: "Booking confirmed",
        icon: "success",
        button: "Ok",
      });
    }
  }

  sendMessage = (courseObject) => {
    if(localStorage.getItem('token')) {
      let data = {
        content: this.state.messageContent,
        sender_id: parseInt(localStorage.getItem('currentUser')),
        recipient_id: courseObject.instructor_id,
      }
      
      this.props.sendingMessage(data)
      this.setState({ open: false })

      swal({
        text: "Message has been sent!",
        icon: "success",
        button: "Ok",
      });
    } 
  }

  messageChange = (e) => {
    this.setState({
      messageContent: e.target.value
    })
  }


  startHandleChange = (date) => {
    this.setState({
      startDate: date
    })
  }

  endHandleChange = (date) => {
    this.setState({
      endDate: date
    })
  }

  handleOpen = () => {
    if(localStorage.getItem('currentUser')) {
      this.setState({ modalOpen: true })
    } else {
      swal({
        text: "Need to Login",
        icon: "info",
        button: "Ok",
      });
    }
  
  }

  handleClose = () => {
    this.setState({ modalOpen: false })
  } 

  show = (dimmer) => ()  => localStorage.getItem('currentUser') ? this.setState({ dimmer, open: true }) : swal({
    text: "Need to Login",
    icon: "info",
    button: "Ok",
  });

  close = () => {
    this.setState({ 
      open: false
    })
  } 
  
  getStudentImage = (id, courseObj) => {
    let student = courseObj.students.find(student => {
      return student.id === id
    })   
    return student.image
  }
  
  componentDidMount() {
    this.props.fetchingCourses()

  }

  render() {
    let courseObject;
    let backgroundImage;
    let panes;
    
    const { open, dimmer } = this.state
   
    if (this.props) {
      courseObject = this.props.courses.find(course => {
        return course.id == this.props.match.params.id
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
                      <Link to={`/user/${courseObject.instructor_id}`}>  
                        <Image size='tiny' src={courseObject.instructor.image} circular  />
                      </Link>
                      <div className="mentor-contact-box">
                      <span className="user-name">{courseObject.instructor.first_name} {courseObject.instructor.last_name}</span>
                      <div className="mentor-contact-btn"><Button onClick={this.show('blurring')} icon basic color='teal'><Icon style={mailIcon} name='mail' />Contact</Button></div>
                      </div>
                      
                      <Modal dimmer={dimmer} open={open} onClose={this.close}>
                        <Modal.Header>Message {courseObject.instructor.first_name}</Modal.Header>
                        <Modal.Content className="contact-message-container">
                          <Image className="contact-user-image" circular size="small" src={courseObject.instructor.image} />
                        <Modal.Description className="message-form">
                        <Form.Field onChange={(e) => this.messageChange(e)} rows='7' className="message-input" control={TextArea} placeholder='Write a message' />
                        </Modal.Description>
                        </Modal.Content>
                        <Modal.Actions>
                          <Button color='black' onClick={this.close}>
                            Cancel
                          </Button>
                          <Button
                            positive
                            icon='checkmark'
                            labelPosition='right'
                            content="Send Message"
                            onClick={() => this.sendMessage(courseObject)}
                          />
                        </Modal.Actions>
                      </Modal>
                      
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
              {courseObject.reviews.length  ? courseObject.reviews.map(review => {
                  return (
                    <p>  <Rating icon='star' defaultRating={review.rating} maxRating={5} disabled /> {review.description} <span><Image size='mini' src={this.getStudentImage(review.student_id, courseObject)} avatar /></span>
                    </p>
                  )
                }) : <p>No reviews have been posted</p> }
            </div>
          </Tab.Pane> 
          },
        { menuItem: 'Location', render: () => 
          <Tab.Pane attached={false}>
            <div className="mapouter"><div className="gmap_canvas"><iframe id="gmap_canvas" src={`https://maps.google.com/maps?q=${courseObject.address}&t=&z=13&ie=UTF8&iwloc=&output=embed`} scrolling="no"  ></iframe></div></div>
          </Tab.Pane> },
      ]
    }

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
                    <Link to="/categories">
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
              <div class="book-session">
             <div className="hourly-pay">
             ${courseObject.hourly}/h
             </div>
              <Modal trigger={<Button onClick={this.handleOpen} style={{width: '150px', height: '50px', backgroundColor: "#eb872a", color: 'white'}} >Book Session</Button>}
              open={this.state.modalOpen}
              onClose={this.handleClose}
              >

               <Modal.Content image>
                <Image wrapped size='medium' src={courseObject.image} />
                <Modal.Description style={{ marginLeft: "5%", width: "50%" }}>
                <Header style={{fontSize: "30px", color: "#41444b"}}>{courseObject.name}</Header>
                <p class="book-sesssion-user">Book a session with {courseObject.instructor.first_name} {courseObject.instructor.last_name}</p>
                <Form>
                  <Form.Field>
                    <label>Select Start Date: </label>
                    <DatePicker
                      selected={ this.state.startDate}
                      onChange={ this.startHandleChange }
                      // minDate={this.state.startDate}
                      className="date-picker-course"
                      showTimeSelect
                      dateFormat="Pp"
                    />
                  </Form.Field>
                  <Form.Field>
                    <label>Select End Date: </label>
                    <DatePicker
                      selected={ this.state.endDate }
                      onChange={ this.endHandleChange }
                      // minDate={this.state.endDate}
                      className="date-picker-course"
                      showTimeSelect
                      dateFormat="Pp"
                    />
                  </Form.Field>
                </Form>
                </Modal.Description>
              </Modal.Content>
              <Modal.Actions>
                <Button style={{backgroundColor: '#db4f56', color: 'white'}} onClick={this.handleClose}>
                  Cancel
                </Button>
                <Button
                  positive
                  icon='checkmark'
                  labelPosition='right'
                  content="Book Session"
                  onClick={ () => this.bookSession(courseObject)}
                />
              </Modal.Actions>
            </Modal>

              </div>
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
    fetchingCourses: () => {dispatch(fetchingCourses())},
    bookingSession: (data) => {dispatch(bookingSession(data))},
    sendingMessage: (data) => {dispatch(sendingMessage(data))}
  }
}

const mapStateToProps = (state) => {
  return { 
    courses: state.courses
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(CourseDetailsContainer)