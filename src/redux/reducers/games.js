import {ADD_GAME } from "../actionTypes";

const initialState = {
  games: [],
  ranks: [1,2,3]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_GAME: {
      const { content } = action.payload;
      //console.log(content)
      return {
        ...state,
        games: [...state.games, content]
      };
    }
    default:
      return state;
  }
}
