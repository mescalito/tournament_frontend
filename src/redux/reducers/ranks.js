import {FETCH_RANKS } from "../actionTypes";

const initialState = {
  ranks: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_RANKS: {
      return {
        ...state,
        ranks: [...state.ranks, action.payload]
      };
    }
    default:
      return state;
  }
}
