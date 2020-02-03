import { ADD_TODO, TOGGLE_TODO, SET_FILTER, ADD_GAME, FETCH_RANKS } from "./actionTypes";

let nextTodoId = 0;
// dispatchers

export const fetchRanks = () => {
  return dispatch => {
    fetch('http://localhost:7000/api/v1/ranks')
      .then(res => res.json())
      .then(ranks =>
        dispatch({
          type: FETCH_RANKS,
          payload: ranks,
        })
      );
  };
};

export const addGame = game => {
  return dispatch => {
    fetch('http://localhost:7000/api/v1/games', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(game),
    })
      .then(res => res.json())
      .then(data =>
        dispatch({
          type: ADD_GAME,
          payload: data,
        })
      );
  };
};

/*
export const addGame = game => ({
  type: ADD_GAME,
  payload: {
    game
  }
});
*/
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
