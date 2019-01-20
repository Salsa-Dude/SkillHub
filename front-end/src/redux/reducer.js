
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

const courseSessionReducer = (state = [], action) => {
 
  switch(action.type) {
    case "FETCHED_COURSE_SESSIONS": 
    return action.userSessions
    case "ADD_SESSION": 
      return [...state, action.sessionData]
    case "UPDATE_SESSION":
    console.log(action)
      return state.map(stateSession => {
        if(stateSession.id == action.sessionData.id) {
          return action.sessionData
        } else {
          return stateSession
        }
      })
    default:
      return state
  }
}

const rootReducer = combineReducers({
  courses: courseReducer,
  dancingCourses: dancingReducer,
  user: loginReducer,
  courseSessions: courseSessionReducer
})

export default rootReducer