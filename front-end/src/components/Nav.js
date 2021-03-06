import React, { Fragment, Component } from "react";
import { NavLink, withRouter, Link } from "react-router-dom";
import { connect } from 'react-redux'
import { loggingIn } from '../redux/actions'
import { loggingOut} from '../redux/actions'
import {fetchingMessages} from '../redux/actions'

import { Menu, Icon, Label, Input, Modal, Form, Message, Button, Divider, Dropdown} from "semantic-ui-react";
import "../styles/nav.css"

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
  
    
    return (
      <Menu stackable className="navbar" pointing secondary size="huge">
        {this.state.isUser || this.props.user ?  (
        <Fragment>
          <Menu.Item
            as={NavLink}
            to="/"
            name="SkillHub"
            className="main-logo"

            // active={this.props.pathname === "/home"}
          />
          <Menu.Item
            name='Categories'
            as={NavLink}
            to="/categories"
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
                <Link to="/my-courses"><Dropdown.Item className="mentor-links">My Courses</Dropdown.Item></Link>
                <Link to="/add-course"><Dropdown.Item className="mentor-links">Add Course</Dropdown.Item></Link>
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
            className="main-logo"
            // active={this.props.pathname === "/home"}
            />
            <Menu.Item
            name='Categories'
            as={NavLink}
            to="/categories"
            />
            {/* <Menu.Item>
              <Input size='small' className='icon' icon='search' placeholder='Search...' />
            </Menu.Item> */}
            
            <Menu.Menu position="right">
              {/* <Menu.Item
                name='Become a Mentor'
                as={NavLink}
                to="/myProperties"
              /> */}
              <Modal className="login-modal" trigger={
                <Menu.Item
                  // as={NavLink}
                  // to="/login"
                  name="Login"
                  className="login-btn"
                  onClick={this.handleOpen}
                  // active={pathname === "/login"}
                />
                }
              open={this.state.modalOpen}
              onClose={this.handleClose}
              >
              <div className="login-form-container">
                <div className="loginHeading">
                  <h2>Login In to Your SkillHub Account</h2>
                  <Message className="guest-message">
                    <p>Sign in with email 'guest@guest.com' and password 'guest' to demo the app. Or, create an account below.</p>
                  </Message>
                </div>
                <Divider />
                <Form
                  onSubmit={this.handleLoginSubmit}
                  size="big"
                  key="big"
                  loading={this.props.authenticatingUser}
                  error={this.props.failedLogin}
                >
                  <Message
                    error
                    header={this.props.failedLogin ? this.props.error : null}
                  />
                  <Form.Field>
                  <label className="emailLabel login-label">Email</label>
                  <Form.Input
                      placeholder="Email"
                      name="email"
                      onChange={this.handleChange}
                      value={this.state.username}
                    />
                  </Form.Field>
                  <Form.Field>
                  <label className="passwordLabel login-label">Password</label>
                  <Form.Input
                    type="password"
                    placeholder="password"
                    name="password"
                    onChange={this.handleChange}
                    value={this.state.password}
                  />
                  </Form.Field>
                  <Button color="teal" className="login-form-btn" fluid type="submit">Login</Button>
                </Form>
                <Divider />
                {/* <div className="switchForm">
                  <h3>Don't have a account? <a href="#">Sign Up</a></h3>
                </div> */}
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