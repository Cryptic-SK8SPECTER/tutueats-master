import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";

import { MenuNavigator } from "./navigation";
import { store } from "./store/store";
import { OrderProvider } from "./context/OrderContext";

export default function App() {
  return (
    <Provider store={store}>
      <OrderProvider>
        <NavigationContainer>
          <MenuNavigator />
        </NavigationContainer>
      </OrderProvider>
    </Provider>
  );
}
