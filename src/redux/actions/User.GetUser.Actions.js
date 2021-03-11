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

export const getDataUsers = (userLogin, {toOrder}) => {
  return function(dispatch) {
    dispatch(getUserRequest);
      axios
      .get("https://604a28e69251e100177ce121.mockapi.io/users")
      .then((result) => {
        const user = result.data.find((user) => user.email === userLogin.email && user.password === userLogin.password)
        if(user) {
          alert("Login berhasil")
          return toOrder()
        } else {
          return alert("Login gagal!")
        }
      })
      .catch((error) => getUserError(error))
  }
    
}
