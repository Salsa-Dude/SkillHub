import React, { Fragment } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { Menu } from "semantic-ui-react";

const Nav = ({location: { pathname}}) => {
  return (
    <Menu pointing secondary size="huge">
      <Fragment>
        <Menu.Item
          as={NavLink}
          to="/home"
          name="Home"
          active={pathname === "/home"}
        />
        <Menu.Item
          name='My Sessions'
          as={NavLink}
          to="/trips"
        />
        <Menu.Item
          name='Become a Instructor'
          as={NavLink}
          to="/myProperties"
        />
      
        <Menu.Menu position="right">
        <Menu.Item
          name='Inbox'
          as={NavLink}
          to="/messages"
        />
          <Menu.Item to="/logout" name="Logout" />
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