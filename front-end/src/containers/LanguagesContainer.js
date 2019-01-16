import React, {Component, Fragment} from 'react'
import TopicHeader from '../components/TopicHeader'

class LanguagesContainer extends Component {
  render() {
    return (
      <Fragment>
        <TopicHeader 
          img="https://images.unsplash.com/photo-1513957723230-c330c6152342?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" 
          title="Languages"
        />
      </Fragment>
    )
  }
}

export default LanguagesContainer