
import {combineReducers} from 'redux'

// let initialState = {
//   courses: []
// }

const courseReducer = (oldState = [], action) => {
  switch(action.type) {
    case "FETCHED_COURSES":
      return action.courses
    default:
  }
  return oldState
}

const dancingReducer = (oldState = [], action) => {
  switch(action.type) {
    case "FETCHED_DANCING_COURSES":
      return action.dancingCourses
    default:
  }
  return oldState
}

const loginReducer = (oldState = null, action) => {
  switch(action.type) {
    case "LOGGED_IN":
      return action.user
    default: 
      return oldState
  }
}

const courseSessionReducer = (oldState = [], action) => {
  switch(action.type) {
    case "FETCHED_COURSE_SESSIONS": 
    return [...oldState, action.userSessions]
    case "ADD_SESSION": 
      return [...oldState, action.sessionData]
    default:
      return oldState
  }
}

const rootReducer = combineReducers({
  courses: courseReducer,
  dancingCourses: dancingReducer,
  user: loginReducer,
  courseSessions: courseSessionReducer
})

export default rootReducer