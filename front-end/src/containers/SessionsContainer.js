import React, {Component, Fragment} from 'react'
import { connect } from 'react-redux';
import {fetchingCourseSessions} from '../redux/actions'

import SessionCard from '../components/SessionCard'
import { Divider } from 'semantic-ui-react'
import '../styles/sessions.css'

class SessionsContainer extends Component {
 
  componentDidMount() {
    this.props.fetchingCourseSessions()
  }

  render() {
    console.log(this.props.userSessions)
    return  this.props.userSessions ? (
      <Fragment>
        <Divider style={{borderTop: 'none', borderBottom: 'none'}} />
        <div className="sessions-container">
          <h1>Booked Sessions</h1>
          <div className="ui four column grid">
            <div className="row">
              {this.props.userSessions.map(session => {
                console.log(session.id)
                return <div>{<SessionCard key={session.id} session={session} />}</div>
              })}
            </div>
          </div>
        </div>
      </Fragment>
    ) : null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchingCourseSessions: () => {dispatch(fetchingCourseSessions())}
  }
}

const mapStateToProps = (state) => {
  return {
    userSessions: state.courseSessions
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionsContainer)