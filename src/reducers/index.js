import id from "./id";
import {combineReducers} from "redux";

const allReducers = combineReducers({
  checkId: id,
  // other: otherReducers,
});

export default allReducers;
