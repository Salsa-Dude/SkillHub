import React, {Component, Fragment} from 'react'
import TopicHeader from '../components/TopicHeader'

class ArtContainer extends Component {
  render() {
    return (
      <Fragment>
        <TopicHeader 
          img="https://images.unsplash.com/photo-1511113495287-4c70b42107ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" 
          title="Art"
        />
      </Fragment>
    )
  }
}

export default ArtContainer