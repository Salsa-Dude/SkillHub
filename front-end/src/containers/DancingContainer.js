import React, {Component, Fragment} from 'react'
import TopicHeader from '../components/TopicHeader'

class DancingContainer extends Component {
  render() {

    return (
      <Fragment>
        <TopicHeader 
          img="https://images.unsplash.com/photo-1511913411692-818ea059c8be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" 
          title="Dancing"
        />
      </Fragment>
    )
  }
}

export default DancingContainer;