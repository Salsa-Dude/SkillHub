
import {combineReducers} from 'redux'

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
      return state.map(stateSession => {
        if(stateSession.id === action.sessionData.id) {
          return action.sessionData
        } else {
          return stateSession
        }
      })
    case "DELETE_SESSION":
      let findSession = state.find(session => session.id == action.session.id)
      let index = state.indexOf(findSession)
      let sessionsCopy = [...state]
      sessionsCopy.splice(index, 1)
      return sessionsCopy
    default:
      return state
  }
}

const reviewReducer = (state= [], action) => {
  switch(action.type) {
    case "ADD_REVIEW":
      return [...state, action.reviewData]
    default:
      return state
  }
}

const messageReducer = (state = [], action) => {
  switch(action.type) {
    case "FETCHED_MESSAGES": 
      return action.messagesData
    case "ADD_MESSAGE":
      return [...state, action.messageData]
    case "DELETE_MESSAGE":
    let findMessage = state.find(message => message.id === action.messageData.id)
    let index = state.indexOf(findMessage)
    let messagesCopy = [...state]
    messagesCopy.splice(index, 1)
    return messagesCopy
    default:
      return state
  }
}

const mentorReducer = (state = [], action) => {
  switch(action.type) {
    case "FETCH_MENTOR_COURSES":
      return action.mentorCoursesData 
    case "UPDATED_MENTOR_COURSES":
      return state.map(course => {
        if(course.id === action.updatedCourses.id) {
          return action.updatedCourses
        } else {
          return course
        }
      })
    case "DELETE_MENTOR_COURSE":
      let findCourse = state.find(course => course.id === action.menterCourse.id)
      let index = state.indexOf(findCourse)
      let copyCourses = [...state]
      copyCourses.splice(index, 1)
      return copyCourses
    default:
      return state
  }
}


const rootReducer = combineReducers({
  courses: courseReducer,
  dancingCourses: dancingReducer,
  user: loginReducer,
  courseSessions: courseSessionReducer,
  reviews: reviewReducer,
  messages: messageReducer,
  mentorCourses: mentorReducer
})

export default rootReducer