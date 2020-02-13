import { SET_STORES_DATA, CLEAR_STORES_DATA } from "../types";

const INITIAL_STATE = {
  loading: false,
  storesInfo: []
};

const storesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_STORES_DATA:
      return {
        loading: true,
        storesInfo: [...state.storesInfo, action.payload]
      };
    case CLEAR_STORES_DATA:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default storesReducer;
