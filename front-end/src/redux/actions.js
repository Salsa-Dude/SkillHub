
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

/////////////// LOGIN/LOGOUT /////////////////////////////////////////////

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

const loggingOut = () => {
  return dispatch => {
    dispatch(logOut(null))
  }
}

const logOut = (user) => {
  return {type: "LOGOUT", user}
}


/////////////// USER /////////////////////////////////////////////

const fetchingUser = (id) => {
  return dispatch => {
   fetch(`http://localhost:3000/api/v1/users/${id}`)
   .then(res => res.json())
   .then(data => {
     dispatch(fetchUser(data))
   })
  }
}

const fetchUser = (userData) => {
  return {type: "FETCH_USER", userData}
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
        "Content-Type": "application/json"
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

/////////////// REVIEW /////////////////////////////////////////////

const addingReview = (sessionData) => {
  return dispatch => {
    fetch(`http://localhost:3000/api/v1/reviews`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(sessionData)
    }).then(res => res.json())
    .then(data => dispatch(addReview(data)))
  }
}

const addReview = (reviewData) => {
  return {type: "ADD_REVIEW", reviewData}
}

/////////////// MESSAGES /////////////////////////////////////////////

const fetchingMessages = () => {
  return dispatch => {
    fetch('http://localhost:3000/api/v1/messages')
    .then(res => res.json())
    .then(data => {
      dispatch(fetchedMessages(data))
    })
  }
}

const fetchedMessages = (messagesData) => {
  return {type: "FETCHED_MESSAGES", messagesData}
}

const sendingMessage = (data) => {
  return dispatch => {
    fetch('http://localhost:3000/api/v1/messages', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then(res => res.json())
    .then(data => {
      sendMessage(data)
    })
  }
}

const sendMessage = (messageData) => {
  return {type: "ADD_MESSAGE", messageData}
}

const deletingMessage = (id) => {
  return dispatch => {
    fetch(`http://localhost:3000/api/v1/messages/${id}`, {
      method: "DELETE"
    }).then(res => res.json())
    .then(data => {
      dispatch(deleteMessage(data))
    })
  }
}

const deleteMessage = (messageData) => {
  return {type: "DELETE_MESSAGE", messageData}
}

/////////////// MENTOR COURSES /////////////////////////////////////////////

const fetchingMentorCourses = () => {
  return dispatch => {
    fetch("http://localhost:3000/api/v1/courses")
    .then(res => res.json())
    .then(data => {
      dispatch(fetchMentorCourses(data))
    })
  }
}

const fetchMentorCourses = (mentorCoursesData) => {
  return {type: "FETCH_MENTOR_COURSES", mentorCoursesData }
}

const updatingMentorCourses = (updateMentorCourses) => {
  return dispatch => {
    fetch(`http://localhost:3000/api/v1/courses/${updateMentorCourses.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updateMentorCourses)
    }).then(res => res.json())
    .then(data => {
      dispatch(updatedMentorCourses(data))
    })
  }
}

const updatedMentorCourses = (updatedCourses) => {
  return {type: "UPDATED_MENTOR_COURSES", updatedCourses}
}

const deletingMentorCourse = (id) => {
  return dispatch => {
    fetch(`http://localhost:3000/api/v1/courses/${id}`, {
      method: "DELETE"
    }).then(res => res.json())
    .then(data => {
      dispatch(deleteMentorCourse(data))
    })
  }
}

const deleteMentorCourse = (menterCourse) => {
  return {type: "DELETE_MENTOR_COURSE", menterCourse }
}


export {fetchingCourses, fetchingCourseSessions, fetchingDancingCourses, loggingIn, loggingOut, fetchingUser, bookingSession, updatingSession, deletingSession, addingReview, fetchingMessages, sendingMessage, deletingMessage, fetchingMentorCourses, updatingMentorCourses, deletingMentorCourse}





