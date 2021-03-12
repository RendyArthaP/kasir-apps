import { combineReducers } from "redux";

import handleItem from "./Order.reducers"
import handleUsers from "./Users.reducers";

const rootReducers = combineReducers({
  handleItem,
  handleUsers
})

export default rootReducers;