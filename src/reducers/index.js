import { combineReducers } from "redux";
import todos from "./todos";
import editTodo from "./editTodo";
import visibilityFilter from "./visibilityFilter";

export default combineReducers({
  todos,
  editTodo,
  visibilityFilter
});
