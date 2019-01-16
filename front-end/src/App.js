import React, { Component, Fragment } from 'react';
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

class App extends Component {
  constructor() {
    super()
    this.state = {
      currentUser: null,
      loading: true
    }
  }

  componentDidMount() {
    let token = localStorage.getItem('token')
    if(token) {
      fetch(`http://localhost:3000/api/v1/home`, {
        method: "GET",
        headers: {
          "Authentication" : `Bearer ${token}`
        }
      }).then(res => res.json())
      .then(data => {
        this.setState({
          currentUser: data.user,
          loading: false
        })
      })
    } else {
      this.setState({
        loading: false
      })
    }
  }

  setCurrentUser = (userObj) => {
    this.setState({
      currentUser: userObj
    })
  }

  render() {
    return (
      <Fragment>
        {this.props.location.pathname !== '/login' ? <Nav logged_in={this.state.currentUser} setCurrentUser={this.setCurrentUser}/> : null }
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/home" />} />
          <Route exact path="/home" render={() => 
            <Home currentUser={this.state.currentUser} />} 
          />
          <Route exact path="/login" render={() => this.state.currentUser == null ?
            <LoginContainer setCurrentUser={this.setCurrentUser} /> : <Redirect to="/home" />}
          />
          <Route exact path="/explore" render={() => <ExploreContainer /> } />
          <Route exact path="/dancing" render={() => <DancingContainer /> } />
          <Route exact path="/languages" render={() => <LanguagesContainer /> } />
          <Route exact path="/carpentry" render={() => <CarpentryContainer /> } />
          <Route exact path="/musical" render={() => <MusicalContainer /> } />
          <Route exact path="/art" render={() => <ArtContainer /> } />
          <Route exact path="/sessions" render={() => <SessionsContainer /> } />
          <Route exact path="/my-courses" render={() => <MyCoursesContainer /> } />
          <Route exact path="/add-course" render={() => <AddCourse /> } />
          <Route exact path="/messages" render={() => <MessageContainer /> } />
          <Route exact path="/courses/:id" render={(props) => {
            let courseId = props.match.params.id 
            return <CourseDetailsContainer courseId={courseId}/>
          }} />
        </Switch>
      </Fragment>
    );
  }
}

export default withRouter(App);
