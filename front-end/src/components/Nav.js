import React, { Fragment } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { Menu } from "semantic-ui-react";

const Nav = () => {
  return (
    <Menu pointing secondary size="huge">
        <Fragment>
          <Menu.Item
            as={NavLink}
            to="/profile"
            name="Home"
            // active={pathname === "/profile"}
          />
          <Menu.Item
            name='My Sessions'
            as={NavLink}
            to="/trips"
            // active={pathname === "/trips"}
          />
          <Menu.Item
            name='Become a Instructor'
            as={NavLink}
            to="/myProperties"
            // active={pathname === "/myProperties"}
          />
        
          <Menu.Menu position="right">
          <Menu.Item
            name='Inbox'
            as={NavLink}
            to="/messages"
            // active={pathname === "/messages"}
          />
            <Menu.Item to="/logout" name="Logout" />
          </Menu.Menu>
        </Fragment>
        <Menu.Item
          as={NavLink}
          to="/login"
          name="Login"
          // active={pathname === "/login"}
        />
      
    </Menu>
  )
}

export default Nav;