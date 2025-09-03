import { createStore, combineReducers } from "redux";
import { OrderReducer } from "./reducers/OrderReducer";

// Combina todos os reducers da aplicação
const rootReducer = combineReducers({
  orders: OrderReducer,
});

// Cria a store Redux
export const store = createStore(rootReducer);
