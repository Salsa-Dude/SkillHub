
// Development link: http://localhost:3000
// Production link: https://skillhub-backend.herokuapp.com


const fetchingCourses = () => {
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/courses')
    .then(res => res.json())
    .then(courses => dispatch({type: "FETCHED_COURSES", courses}))
  }
}


/////////////// CATEGORIES /////////////////////////////////////////////

const fetchingDancingCourses = () => {
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/categories')
    .then(res => res.json())
    .then(dancingCourses => {
      console.log(dancingCourses)
      // dispatch(fetchedDancingCourses(dancingCourses))
    })
  }
}

const fetchedDancingCourses = (dancingCourses) => {
  return {type: "FETCHED_DANCING_COURSES", dancingCourses}
}

const fetchingDancingCourses2 = () => {
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/dance')
    .then(res => res.json())
    .then(danceCategory => {
     
      let danceCourses = danceCategory.courses
      dispatch(fetchedDancingCourses2(danceCourses))
    })
  }
}

const fetchedDancingCourses2 = (danceCourses) => {
  return {type: "FETCHED_DANCING_COURSES_2", danceCourses}
}

const fetchingLanguagesCourses = () => {
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/languages')
    .then(res => res.json())
    .then(languageCategory => {
     
      let languageCourses = languageCategory.courses
      dispatch(fetchedLanguageCourses(languageCourses))
    })
  }
}

const fetchedLanguageCourses = (languageCourses) => {
  return {type: "FETCHED_LANGUAGES_COURSES", languageCourses}
}

const fetchingMusicalCourses = () => {
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/musicals')
    .then(res => res.json())
    .then(musicalCategory => {
     
      let musicalCourses = musicalCategory.courses
      dispatch(fetchedMusicalCourses(musicalCourses))
    })
  }
}

const fetchedMusicalCourses = (musicalCourses) => {
  return {type: "FETCHED_MUSICAL_COURSES", musicalCourses}
}

const fetchingCarpentryCourses = () => {
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/carpentry')
    .then(res => res.json())
    .then(carpentryCategory => {
     
      let carpentryCourses = carpentryCategory.courses
      dispatch(fetchedCarpentryCourses(carpentryCourses))
    })
  }
}

const fetchedCarpentryCourses = (carpentryCourses) => {
  return {type: "FETCHED_CARPENTRY_COURSES", carpentryCourses}
}

const fetchingArtCourses = () => {
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/art')
    .then(res => res.json())
    .then(artCategory => {
     
      let artCourses = artCategory.courses
      dispatch(fetchedArtCourses(artCourses))
    })
  }
}

const fetchedArtCourses = (artCourses) => {
  return {type: "FETCHED_ART_COURSES", artCourses}
}


/////////////// SEARCH /////////////////////////////////////////////

const searchDancingCourses = (event) => {
  return dispatch => {
    dispatch(searchedDancingCourses(event.target.value))
  }
}

const searchedDancingCourses = (searchTerm) => {
  return {type: "SEARCH_DANCING_COURSES", searchTerm}
}

const searchLanguageCourses = (event) => {
  return dispatch => {
    dispatch(searchedLanguageCourses(event.target.value))
  }
}

const searchedLanguageCourses = (searchTerm) => {
  return {type: "SEARCH_LANGUAGE_COURSES", searchTerm}
}

const searchMusicalCourses = (event) => {
  return dispatch => {
    dispatch(searchedMusicalCourses(event.target.value))
  }
}

const searchedMusicalCourses = (searchTerm) => {
  return {type: "SEARCH_MUSICAL_COURSES", searchTerm}
}

const searchCarpentryCourses = (event) => {
  return dispatch => {
    dispatch(searchedCarpentryCourses(event.target.value))
  }
}

const searchedCarpentryCourses = (searchTerm) => {
  return {type: "SEARCH_CARPENTRY_COURSES", searchTerm}
}

const searchArtCourses = (event) => {
  return dispatch => {
    dispatch(searchedArtCourses(event.target.value))
  }
}

const searchedArtCourses = (searchTerm) => {
  return {type: "SEARCH_ART_COURSES", searchTerm}
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


/////////////// CLASS_SESSIONS /////////////////////////////////////////////

const fetchingClassSessions = () => {
  return dispatch => {
    fetch('http://localhost:3000/api/v1/course_sessions')
    .then(res => res.json())
    .then(data => {
      console.log(data)
      let mentorSessions = data.filter(session => {
        return session.course.instructor_id === parseInt(localStorage.getItem('currentUser'))
      })
      dispatch(fetchClassSessions(mentorSessions))
    })
  }
}

const fetchClassSessions = (classData) => {
  return { type: "FETCH_CLASS_SESSIONS", classData}
}

/////////////// COURSE_SESSION /////////////////////////////////////////////


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


export {fetchingCourses, searchDancingCourses, searchLanguageCourses, searchMusicalCourses, searchCarpentryCourses, searchArtCourses, fetchingClassSessions, fetchingCourseSessions, fetchingDancingCourses, fetchingLanguagesCourses, fetchingMusicalCourses, fetchingCarpentryCourses, fetchingArtCourses, fetchingDancingCourses2, loggingIn, loggingOut, fetchingUser, bookingSession, updatingSession, deletingSession, addingReview, fetchingMessages, sendingMessage, deletingMessage, fetchingMentorCourses, updatingMentorCourses, deletingMentorCourse}





