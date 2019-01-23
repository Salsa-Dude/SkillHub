import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

import Nav from './components/Nav';
import Home from './containers/Home';
import LoginContainer from './containers/LoginContainer'
import ExploreContainer from "./containers/ExploreContainer"
import DancingContainer from "./containers/DancingContainer"
import CourseDetailsContainer from './containers/CourseDetailsContainer'
import LanguagesContainer from './containers/LanguagesContainer'
import CarpentryContainer from './containers/CarpentryContainer'
import MusicalContainer from './containers/MusicalContainer'
import ArtContainer from './containers/ArtContainer'
import SessionsContainer from './containers/SessionsContainer'
import MyCoursesContainer from './containers/MyCoursesContainer'
import AddCourse from './components/AddCourse'
import MessageContainer from './containers/MessageContainer'
import UserContainer from './containers/UserContainer'

class App extends Component {

  render() {
    return (
      
      <Fragment>
        {this.props.location.pathname !== '/login' ? <Nav/> : null }
        <Switch>
          <Route exact path="/logout" render={() => <Redirect to="/home" />} />
          <Route exact path="/home" render={() => 
            <Home />} 
          />
          <Route exact path="/login" render={() => localStorage.getItem('token') ?
            <LoginContainer /> : <Redirect to="/home" />}
          />
          <Route exact path="/explore" component={ExploreContainer} />
          <Route exact path="/dancing" render={() => <DancingContainer /> } />
          <Route exact path="/languages" render={() => <LanguagesContainer /> } />
          <Route exact path="/carpentry" render={() => <CarpentryContainer /> } />
          <Route exact path="/musical" render={() => <MusicalContainer /> } />
          <Route exact path="/art" render={() => <ArtContainer /> } />
          <Route exact path="/sessions" render={() => <SessionsContainer /> } />
          <Route exact path="/my-courses" render={() => <MyCoursesContainer /> } />
          <Route exact path="/add-course" render={() => <AddCourse /> } />
          <Route exact path="/messages" render={() => <MessageContainer /> } />
          <Route exact path="/courses/:id" component={CourseDetailsContainer} />
          <Route exact path="/user/:id" component={UserContainer} />
        </Switch>
      </Fragment>
    );
  }
}



export default withRouter((App));
