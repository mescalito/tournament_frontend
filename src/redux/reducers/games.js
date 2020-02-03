import {ADD_GAME } from "../actionTypes";

const initialState = {
  games: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_GAME: {
      return {
        ...state,
        games: [...state.games, action.payload[0]]
      };
    }
    default:
      return state;
  }
}
