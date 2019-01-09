import React, { Component, Fragment } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

import Nav from './components/Nav';
import Home from './containers/Home';
import LoginContainer from './containers/LoginContainer'
class App extends Component {
  constructor() {
    super()
    this.state = {
      currentUser: null
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
        {this.props.location.pathname !== '/login' ? <Nav/> : null }
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/home" />} />
          <Route exact path="/home" render={() => 
            <Home currentUser={this.state.currentUser} />} 
          />
          <Route exact path="/login" render={() => this.state.currentUser == null ?
            <LoginContainer setCurrentUser={this.setCurrentUser} /> : <Redirect to="/home" />}
          />
        </Switch>
      </Fragment>
    );
  }
}

export default withRouter(App);
