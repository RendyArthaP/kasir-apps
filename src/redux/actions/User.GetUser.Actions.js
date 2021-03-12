import axios from "axios"

export const GET_USER_REQUEST = "GET_USER_REQUEST" 
export const GET_USER_SUCCESS = "GET_USER_SUCCESS"
export const GET_USER_ERROR = "GET_USER_ERROR"

export const getUserRequest = () => {
  return {
    type: GET_USER_REQUEST
  }
}

export const getUserSuccess = (result) => {
  return {
    type: GET_USER_SUCCESS,
    result
  }
}

export const getUserError = (error) => {
  return {
    type: GET_USER_ERROR,
    error
  }
}

export const getDataUsers = (userLogin, {directedToHome}, setSuccessAlert, setSuccessContent, setErrorAlert, setErrorContent) => {
  return function(dispatch) {
    dispatch(getUserRequest);
      axios
      .get("https://604a28e69251e100177ce121.mockapi.io/users")
      .then((result) => {
        const user = result.data.find((user) => user.email === userLogin.email && user.password === userLogin.password)
        console.log(user)
        if(user) {
          dispatch(getUserSuccess())
          let {password, ...dataUserLogin} = user
          localStorage.setItem("user", JSON.stringify(dataUserLogin))
          localStorage.setItem("isLogin", true)
          return (  
            setSuccessAlert(true),
            setSuccessContent("Login berhasil"),
            setTimeout(() => {
              directedToHome()
            }, 1000)
          )        
        } else {
          return(
            setErrorAlert(true),
            setErrorContent("Email dan password yang anda masukan salah!"),
            setTimeout(() => {
              setErrorAlert(false)
            }, 2000)
          )
        }
      })
      .catch((error) => getUserError(error))
  }
}
