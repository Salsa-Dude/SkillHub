
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




export {fetchingCourses, fetchingCourseSessions, fetchingDancingCourses, loggingIn, bookingSession}






