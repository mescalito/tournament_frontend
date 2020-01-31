import { ADD_TODO, TOGGLE_TODO, SET_FILTER, ADD_GAME } from "./actionTypes";

let nextTodoId = 0;
// dispatchers

export const addGame = content => ({
  type: ADD_GAME,
  payload: {
    content
  }
});
export const addTodo = content => ({
  type: ADD_TODO,
  payload: {
    id: ++nextTodoId,
    content
  }
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  payload: { id }
});

export const setFilter = filter => ({ type: SET_FILTER, payload: { filter } });
