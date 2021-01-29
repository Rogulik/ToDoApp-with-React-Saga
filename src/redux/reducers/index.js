import { combineReducers } from "redux"
import todo from "./todo"

//for future development purposes i wrapped todos reducer in combineReducers function,
//even if at this moment there is only one reducer in the app
export default combineReducers({
  todo,
})
