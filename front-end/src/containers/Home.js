import React, { Component, Fragment } from 'react';

class Home extends Component {
  render() {
    return (
      <Fragment>
        {this.props.currentUser ? (
          <div>
            <h1>{this.props.currentUser.first_name}</h1>
            <h1>{this.props.currentUser.bio}</h1>
          </div>
        ) : null }
      </Fragment>
    )
  }
}

export default Home;