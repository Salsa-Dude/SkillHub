import React, { Fragment, Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { Menu, Icon, Label, Input, Modal } from "semantic-ui-react";

import styles from '../styles/navbar'

 class Nav extends Component {
   constructor({ location: { pathname }, logged_in, setCurrentUser }) {
     super()
  
   }
  

  render() {

    let logout =  () => {
      this.props.setCurrentUser(null)
      localStorage.clear()
    }

    return (
      <Menu className="navbar" pointing secondary size="huge">
        {this.props.logged_in ? (
        <Fragment>
          <Menu.Item
            as={NavLink}
            to="/home"
            name="SkillHub"
            // className="logo"
            style={styles.logo}
            active={this.props.pathname === "/home"}
          />
          <Menu.Item
            name='My Sessions'
            as={NavLink}
            to="/trips"
          />
          <Menu.Item
            name='Become a Mentor'
            as={NavLink}
            to="/myProperties"
          />
          <Menu.Menu position="right">
          <Menu.Item as='a'>
            <Icon name='mail' />Messages
            <Label color='red'>
              7
            </Label>
          </Menu.Item>
            <Menu.Item to="/logout" name="Logout" onClick={logout} />
          </Menu.Menu>
        </Fragment>
        ) : (
          <Fragment>
            <Menu.Item
            as={NavLink}
            to="/home"
            name="SkillHub"
            // className="logo"
            style={styles.logo}
            active={this.props.pathname === "/home"}
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
              <Menu.Item
                name='Become a Mentor'
                as={NavLink}
                to="/myProperties"
              />
              <Menu.Item
                as={NavLink}
                to="/login"
                name="Login"
                className="login-btn"
                onClick={this.handleOpen}
                // active={pathname === "/login"}
              />
            </Menu.Menu>
          </Fragment>
        )}
        
      </Menu>
    )
  }
  
}

export default withRouter(Nav);