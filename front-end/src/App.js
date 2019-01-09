import React, { Component, Fragment } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

import Nav from './components/Nav';
import Home from './containers/Home';
import LoginContainer from './containers/LoginContainer'
class App extends Component {
  render() {
    return (
      <Fragment>
        {this.props.location.pathname !== '/login' ? <Nav/> : null }
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/home" />} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/login" component={LoginContainer} />
        </Switch>
      </Fragment>
    );
  }
}

export default withRouter(App);
