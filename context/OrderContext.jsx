import React, { useEffect, useContext, useReducer } from "react";
import reducer from "../store/reducers/OrderReducer";
// import {
//   LOAD_PRODUCTS,
// } from "../actions";

const initialState = {
  orders: [],
  status: "idle", // idle | loading | success | error
  error: null,
};

const OrderContext = React.createContext();

export const OrderProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <OrderContext.Provider value={{ state }}>{children}</OrderContext.Provider>
  );
};
// make sure use
export const useOrderContext = () => {
  return useContext(OrderContext);
};
