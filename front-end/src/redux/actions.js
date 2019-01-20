
const fetchingCourses = () => {
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/courses')
    .then(res => res.json())
    .then(courses => dispatch({type: "FETCHED_COURSES", courses}))
  }
}

const fetchingDancingCourses = () => {
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/categories')
    .then(res => res.json())
    .then(dancingCourses => dispatch(fetchedDancingCourses(dancingCourses)))
  }
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
      }
    })
  }
}

const loggedIn = (user) => {
  return { type: "LOGGED_IN", user}
}

const fetchedDancingCourses = (dancingCourses) => {
  return {type: "FETCHED_DANCING_COURSES", dancingCourses}
}


export {fetchingCourses, fetchingDancingCourses, loggingIn}






// this.setState({ modalOpen: false })
//     fetch(`http://localhost:3000/api/v1/login`, {
//       method:"POST",
//       headers: {
//         "Content-type":"application/json",
//         "Accept":"application/json"
//       },
//       body: JSON.stringify({
//         email: this.state.email,
//         password: this.state.password
//       })
//     }).then(res => res.json())
//     .then(data => {
//       console.log(data)
//       if(data.error){
//         alert('Incorrect username or password')
//       }else{
//         console.log(data)
//         this.props.currentUser(data.user_info)
//         this.props.setCurrentUser(data.user_info)
//         localStorage.setItem('token', data.token)
//       }
//     })