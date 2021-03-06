import {GET_USER_REQUEST, GET_USER_SUCCESS, GET_USER_ERROR} from '../actions/User.GetUser.Actions'

const initialState = {
  isLogin: false,
}

const handleUsers = (state = initialState, action) => {
  switch(action.type) {
    case GET_USER_REQUEST:
      return {
        ...state
      }
    case GET_USER_SUCCESS:
      console.log(action)
      return {
        ...state,
        isLogin: true,
        result: action.result
      }
    case GET_USER_ERROR:
      console.log(action)
      return {
        ...state,
        error: action.error
      }
    default:
      return state
  }
}

export default handleUsers