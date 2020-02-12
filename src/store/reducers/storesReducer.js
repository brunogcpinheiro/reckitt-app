import {
  SET_STORES_DATA,
} from "../types";

const INITIAL_STATE = {
  loading: false,
  stores: []
};

const storesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_STORES_DATA:
      return {
        ...state,
        stores: [...state.stores, action.payload]
      }
      
    default:
      return state;
  }
};

export default storesReducer;
