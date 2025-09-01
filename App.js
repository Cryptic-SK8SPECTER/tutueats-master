import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import { MenuNavigator } from "./navigation";
import { order_reducer } from "./store/reducers";

const rootReducer = combineReducers({
  orders: order_reducer,
});

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MenuNavigator />
      </NavigationContainer>
    </Provider>
  );
}
