import React, { Fragment, Component } from "react";
import { NavLink, withRouter, Link } from "react-router-dom";
import { connect } from 'react-redux'
import { loggingIn } from '../redux/actions'
import { loggingOut} from '../redux/actions'
import {fetchingMessages} from '../redux/actions'

import { Menu, Icon, Label, Input, Modal, Form, Message, Button, Divider, Dropdown} from "semantic-ui-react";
import {login, logo, loginContainer, loginForm, loginModal, loginBtn} from '../styles/navbar'

class Nav extends Component {
  
  constructor(props) {
     super(props)
     this.state = {
      modalOpen: false,
      email: "",
      password: "",
      isUser: ""
      
     }
  }

  logout = () => {
    localStorage.clear()
    this.setState({
      isUser: ''
    })
    this.props.loggingOut()
  }


  handleLoginSubmit = () => {
    let loginFormInput = this.state
    this.props.loggingIn(loginFormInput)
    this.setState({ modalOpen: false })
  }

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value });
  };

  handleOpen = () => {
    this.setState({ modalOpen: true })
  }

  handleClose = () => {
    this.setState({ modalOpen: false })
  } 

  componentDidMount() {
    this.setState({
      isUser: localStorage.getItem('currentUser')
    })
  }

  
   render() {
   

    const myCourses = {
      fontSize: '16px'
    }
    
    return (
      <Menu className="navbar" pointing secondary size="huge">
        {this.state.isUser || this.props.user ?  (
        <Fragment>
          <Menu.Item
            as={NavLink}
            to="/"
            name="SkillHub"
            style={logo}

            // active={this.props.pathname === "/home"}
          />
          <Menu.Item
            name='Explore'
            as={NavLink}
            to="/explore"
          />
          <Menu.Item
            name='My Sessions'
            as={NavLink}
            to="/sessions"
            // active={this.pathname === "/sessions"}
          />
         
          <Menu className="k">
            <Dropdown className="r" item text='Mentor'>
              <Dropdown.Menu>
                <Link style={myCourses} to="/my-courses"><Dropdown.Item className="mentor-links">My Courses</Dropdown.Item></Link>
                <Link style={myCourses} to="/add-course"><Dropdown.Item className="mentor-links">Add Course</Dropdown.Item></Link>
              </Dropdown.Menu>
            </Dropdown>
          </Menu>
          
          <Menu.Menu position="right">

          <Menu.Item
            name='DashBoard'
            as={NavLink}
            to="/dashboard"
            
          />

          <Menu.Item as={NavLink} to="/messages">
            <Icon name='mail' />Messages
            {/* <Label color='red'>
              
            </Label> */}
          </Menu.Item>
            <Menu.Item as={NavLink} to="/logout" name="Logout" onClick={this.logout} />
          </Menu.Menu>
        </Fragment>
        ) : (
          <Fragment>
            <Menu.Item
            as={NavLink}
            to="/"
            name="SkillHub"
            style={logo}
            // active={this.props.pathname === "/home"}
            />
            <Menu.Item
            name='Explore'
            as={NavLink}
            to="/explore"
            />
            <Menu.Item>
              <Input size='small' className='icon' icon='search' placeholder='Search...' />
            </Menu.Item>
            
            <Menu.Menu position="right">
              {/* <Menu.Item
                name='Become a Mentor'
                as={NavLink}
                to="/myProperties"
              /> */}
              <Modal style={loginModal} trigger={
                <Menu.Item
                  // as={NavLink}
                  // to="/login"
                  name="Login"
                  style={login}
                  onClick={this.handleOpen}
                  // active={pathname === "/login"}
                />
                }
              open={this.state.modalOpen}
              onClose={this.handleClose}
              >
              <div style={loginContainer}>
                <div className="loginHeading">
                  <h3>Login In to Your SkillHub Account</h3>
                </div>
                <Divider />
                <Form
                  onSubmit={this.handleLoginSubmit}
                  size="huge"
                  style={loginForm}
                  key="big"
                  loading={this.props.authenticatingUser}
                  error={this.props.failedLogin}
                >
                  <Message
                    error
                    header={this.props.failedLogin ? this.props.error : null}
                  />
                  <Form.Field>
                  <label className="emailLabel">Email</label>
                  <Form.Input
                      placeholder="Email"
                      name="email"
                      onChange={this.handleChange}
                      value={this.state.username}
                    />
                  </Form.Field>
                  <Form.Field>
                  <label className="passwordLabel">Password</label>
                  <Form.Input
                    type="password"
                    placeholder="password"
                    name="password"
                    onChange={this.handleChange}
                    value={this.state.password}
                  />
                  </Form.Field>
                  <Button size="big" color="teal" style={loginBtn} fluid type="submit">Login</Button>
                </Form>
                <Divider />
                <div className="switchForm">
                  <h3>Don't have a account? <a href="#">Sign Up</a></h3>
                </div>
              </div>
              </Modal>
            </Menu.Menu>
          </Fragment>
        )}
        
      </Menu>
    )
  }
  
}


const mapStateToStore = (state) => {
  return {
    user: state.login
  }
}

const mapDispatchToStore = (dispatch) => ({
  loggingIn: (loginFormInput) => dispatch(loggingIn(loginFormInput)),
  loggingOut: () => dispatch(loggingOut()),
  fetchingMessages: () => {dispatch(fetchingMessages())}

})

export default connect(mapStateToStore, mapDispatchToStore)(withRouter(Nav));