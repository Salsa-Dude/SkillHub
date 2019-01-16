import React, {Component, Fragment} from 'react'
import TopicHeader from '../components/TopicHeader'

class CarpentryContainer extends Component {
  render() {
    return (
      <Fragment>
        <TopicHeader 
          img="https://images.unsplash.com/photo-1497219055242-93359eeed651?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1591&q=80" 
          title="Carpentry"
        />
      </Fragment>
    )
  }
}

export default CarpentryContainer