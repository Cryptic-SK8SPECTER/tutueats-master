// import { LOGIN, LOGOUT, ERROR } from "../actions";

const order_reducer = (state, action) => {
  if (action.type === "LOGIN") {
    return {
      ...state,
    };
  }

  return state;
};

export default order_reducer;
