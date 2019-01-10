import React, { Component, Fragment } from 'react';


class Home extends Component {
  render() {
    return (
      <Fragment>
        {this.props.currentUser ? (
          <div className="jumbo-container">
           
          </div>
        ) : null }
      </Fragment>
    )
  }
}

export default Home;