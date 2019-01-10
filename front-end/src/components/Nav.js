import React, { Fragment } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { Menu, Icon, Label, Input  } from "semantic-ui-react";

const Nav = ({location: { pathname}, logged_in, setCurrentUser}) => {
  
  let logout =  () => {
    setCurrentUser(null)
    localStorage.clear()
  }

  return (
    <Menu className="navbar" pointing secondary size="huge">
      {logged_in ? (
      <Fragment>
        <Menu.Item
          as={NavLink}
          to="/home"
          name="SkillHub"
          className="logo"
          active={pathname === "/home"}
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
          className="logo"
          active={pathname === "/home"}
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
            active={pathname === "/login"}
          />
          </Menu.Menu>
        </Fragment>
      )}
      
    </Menu>
  )
}

export default withRouter(Nav);