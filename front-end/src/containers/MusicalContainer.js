import React, {Component, Fragment} from 'react'
import TopicHeader from '../components/TopicHeader'

class MusicalContainer extends Component {
  render() {
    return (
      <Fragment>
        <TopicHeader 
          img="https://images.unsplash.com/photo-1536657235019-030fc1fd7b43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" 
          title="Musical"
        />
      </Fragment>
    )
  }
}

export default MusicalContainer