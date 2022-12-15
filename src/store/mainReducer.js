import { actions } from "./index";

const initialState = { data: {} };

export function mainReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_RESPONSE:
      return { ...state, data: action.payload };

    default:
      return state;
  }
}
