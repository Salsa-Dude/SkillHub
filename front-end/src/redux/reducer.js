
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

const rootReducer = combineReducers({
  courses: courseReducer,
  dancingCourses: dancingReducer
})

export default rootReducer