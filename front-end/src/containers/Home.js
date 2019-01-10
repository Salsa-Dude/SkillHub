import React, { Component, Fragment } from 'react';
import { Button } from 'semantic-ui-react'


class Home extends Component {
  render() {
    return (
      <Fragment>
        {this.props.currentUser ? (
          <div className="jumbo-container">
            <div className="jumbo-catchphase">
              <h1>Meet up and Learn from a Mentor</h1>
              <h2>Find a local mentor and accelerate your learning</h2>
                <div className="get-started-container">
                <Button className="get-started-btn" color='teal'>Get Started</Button>
                </div>
              </div>
          </div>
        ) : null }
      </Fragment>
    )
  }
}

export default Home;