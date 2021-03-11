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
      return {
        ...state,
        isLogin: true
      }
    case GET_USER_ERROR:
      return {
        ...state,
        error: action.error
      }
    default:
      return state
  }
}

export default handleUsers