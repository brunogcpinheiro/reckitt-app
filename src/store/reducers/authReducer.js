const INITIAL_STATE = {
  user: {
    name: "Bruno Giovani",
  },
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "LOG_IN":
      return { ...state };
    default:
      return state;
  }
};

export default authReducer;
