import { SET_STORES_DATA, CLEAR_STORES_DATA, SET_CITY_DATA } from "../types";

const INITIAL_STATE = {
  loading: false,
  storesInfo: [],
  cities: []
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
    case SET_CITY_DATA:
      return {
        ...state,
        cities: state.storesInfo.filter(f => f.nome === action.payload)
      };
    default:
      return state;
  }
};

export default storesReducer;
