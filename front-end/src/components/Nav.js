import React, { Fragment } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { Menu } from "semantic-ui-react";

const Nav = ({location: { pathname}, logged_in, setCurrentUser}) => {
  
  let logout =  () => {
    setCurrentUser(null)
    localStorage.clear()
  }

  return (
    <Menu className="navbar" pointing secondary size="huge">
      <Fragment>
        <Menu.Item
          as={NavLink}
          to="/home"
          name="SkillHub"
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
        <Menu.Item
          name='Inbox'
          as={NavLink}
          to="/messages"
        />
          <Menu.Item to="/logout" name="Logout" onClick={logout} />
        </Menu.Menu>
      </Fragment>
      <Menu.Item
        as={NavLink}
        to="/login"
        name="Login"
        active={pathname === "/login"}
      />
    </Menu>
  )
}

export default withRouter(Nav);