import { combineReducers } from "redux";
import visibilityFilter from "./visibilityFilter";
import todos from "./todos";
import games from "./games";
import ranks from "./ranks";

export default combineReducers({ todos, visibilityFilter, games, ranks });
