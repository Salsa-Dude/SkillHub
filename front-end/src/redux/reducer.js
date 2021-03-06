
import {combineReducers} from 'redux'
import { fil } from 'date-fns/esm/locale';

const userReducer = (state = null, action) => {
  switch(action.type) {
    case "FETCH_USER":
      return action.userData
    default:
      return state
  }
}

const courseReducer = (oldState = [], action) => {
  switch(action.type) {
    case "FETCHED_COURSES":
      return action.courses
    default:
      return oldState
  }
}

const dancingReducer = (state = [], action) => {
  switch(action.type) {
    case "FETCHED_DANCING_COURSES_2":
      console.log(action)
      return action.danceCourses
    default:
      return state
  }
}

const languageReducer = (state = [], action) => {
  switch(action.type) {
    case "FETCHED_LANGUAGES_COURSES":
    return action.languageCourses
    default: 
      return state
  }
}

const musicalReducer = (state = [], action) => {
  switch(action.type) {
    case "FETCHED_MUSICAL_COURSES":
    return action.musicalCourses
    default: 
      return state
  }
}

const carpentryReducer = (state = [], action) => {
  switch(action.type) {
    case "FETCHED_CARPENTRY_COURSES":
    return action.carpentryCourses
    default: 
      return state
  }
}

const artReducer = (state = [], action) => {
  switch(action.type) {
    case "FETCHED_ART_COURSES":
    return action.artCourses
    default: 
      return state
  }
}

const dancingSearch = (state = null, action) => {
  switch(action.type) {
    case "SEARCH_DANCING_COURSES":
        return action.searchTerm
    default: 
      return state
  }
}

const languageSearch = (state = null, action) => {
  switch(action.type) {
    case "SEARCH_LANGUAGE_COURSES":
        return action.searchTerm
    default: 
      return state
  }
}

const musicalSearch = (state = null, action) => {
  switch(action.type) {
    case "SEARCH_MUSICAL_COURSES":
        return action.searchTerm
    default: 
      return state
  }
}

const carpentrySearch = (state = null, action) => {
  switch(action.type) {
    case "SEARCH_CARPENTRY_COURSES":
        return action.searchTerm
    default: 
      return state
  }
}

const artSearch = (state = null, action) => {
  switch(action.type) {
    case "SEARCH_ART_COURSES":
        return action.searchTerm
    default: 
      return state
  }
}

const loginReducer = (oldState = null, action) => {
  switch(action.type) {
    case "LOGGED_IN":
      return action.user
    case "LOGOUT":
      return action.user
    default: 
      return oldState
  }
}

const classSessionReducer = (state = [], action) => {
  switch(action.type) {
    case "FETCH_CLASS_SESSIONS":
      return action.classData
    default:
      return state
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
  user: userReducer,
  courses: courseReducer,
  dancingCourses: dancingReducer,
  languageCourses: languageReducer,
  musicalCourses: musicalReducer,
  carpentryCourses: carpentryReducer,
  artCourses: artReducer,
  login: loginReducer,
  mentorSessions: classSessionReducer, 
  courseSessions: courseSessionReducer,
  reviews: reviewReducer,
  messages: messageReducer,
  mentorCourses: mentorReducer,
  dancingSearch: dancingSearch,
  languageSearch: languageSearch,
  musicalSearch: musicalSearch,
  carpentrySearch: carpentrySearch,
  artSearch: artSearch
})

export default rootReducer