const OrderReducer = (state, action) => {
  if (action.type === "LOAD_ORDERS") {
    return {
      ...state,
      orders: action.payload, // atualiza orders com os dados recebidos
      status: "success",
      error: null,
    };
  }

  return state;
};

export default OrderReducer;
