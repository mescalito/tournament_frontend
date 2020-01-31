import { combineReducers } from "redux";
import visibilityFilter from "./visibilityFilter";
import todos from "./todos";
import games from "./games";

export default combineReducers({ todos, visibilityFilter, games });
