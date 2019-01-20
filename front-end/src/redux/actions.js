
const fetchingCourses = () => {
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/courses')
    .then(res => res.json())
    .then(courses => dispatch({type: "FETCHED_COURSES", courses}))
  }
}

const fetchingCourseSessions = () => {
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/course_sessions')
    .then(res => res.json())
    .then(data => {
      let userSessions = data.filter(session => {
        return session.student_id === parseInt(localStorage.getItem('currentUser'))
      })
      dispatch(fetchedCourseSessions(userSessions))
    })
  }
}

const fetchedCourseSessions = (userSessions) => {
  return {type: "FETCHED_COURSE_SESSIONS", userSessions}
}


const fetchingDancingCourses = () => {
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/categories')
    .then(res => res.json())
    .then(dancingCourses => dispatch(fetchedDancingCourses(dancingCourses)))
  }
}

const fetchedDancingCourses = (dancingCourses) => {
  return {type: "FETCHED_DANCING_COURSES", dancingCourses}
}

const loggingIn = (loggingInfo) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/login`, {
      method:"POST",
      headers: {
        "Content-type":"application/json",
        "Accept":"application/json"
      },
      body: JSON.stringify({
        email: loggingInfo.email,
        password: loggingInfo.password
      })
    }).then(res => res.json())
    .then(data => {
      console.log(data)
      if(data.error){
        alert('Incorrect username or password')
      }else{
        console.log(data)
        dispatch(loggedIn(data.user_info))
        localStorage.setItem('token', data.token)
        localStorage.setItem('currentUser', data.user_info.id)
      }
    })
  }
}

const loggedIn = (user) => {
  return { type: "LOGGED_IN", user}
}

/////////////// COURSE_SESSION /////////////////////////////////////////////

const bookedSession = (sessionData) => {
  return {type: "ADD_SESSION", sessionData}
}

const bookingSession = (sessionData) => {
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/course_sessions', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sessionData)
    }).then(res => res.json())
    .then(data => {
      dispatch(bookedSession(data))
    })
 }
}

const updatingSession = (sessionData) => {
  console.log(sessionData)
  return dispatch => {
    fetch(`http://localhost:3000/api/v1/course_sessions/${sessionData.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sessionData)
    }).then(res => res.json())
    .then(data => {
      dispatch(updatedSession(data))
    })
  }
}

const updatedSession = (sessionData) => {
  return {type: "UPDATE_SESSION", sessionData}
}

const deletingSession = (id) => {
  return dispatch => {
    fetch(`http://localhost:3000/api/v1/course_sessions/${id}`, {
      method: "DELETE"
    }).then(res => res.json())
    .then(data => {
      dispatch(deleteSession(data))
    })
  }
}

const deleteSession = (session) => {
  return {type: "DELETE_SESSION", session}
}


export {fetchingCourses, fetchingCourseSessions, fetchingDancingCourses, loggingIn, bookingSession, updatingSession, deletingSession}






