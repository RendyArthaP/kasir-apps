import { createStore } from "redux";
import handleItem from "./reducers/Order.reducers"

export default createStore(handleItem)