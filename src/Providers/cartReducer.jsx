const addProductTocart = (state, payload) => {
  const updatedCart = [...state.cart];

  const updatedItemIndex = updatedCart.findIndex(
    (item) => item.id === payload.id
  );

  if (updatedItemIndex < 0) {
    updatedCart.push({ ...payload, quantity: 1 });
  } else {
    const updatedItem = { ...updatedCart[updatedItemIndex] };
    updatedItem.quantity++;
    updatedCart[updatedItemIndex] = updatedItem;
  }

  return {
    ...state,
    cart: updatedCart,
    total: state.total + payload.price,
  };
};

const removeProducrFromCart = (state, payload) => {
  const updatedCart = [...state.cart];

  const updatedItemIndex = updatedCart.findIndex(
    (item) => item.id === payload.id
  );
  const updatedItem = { ...updatedCart[updatedItemIndex] };

  if (updatedItem.quantity === 1) {
    const filterCart = updatedCart.filter((item) => item.id !== payload.id);
    return {
      ...state, 
      cart: filterCart,
      total: state.total - payload.price,
    };
  } else {
    updatedItem.quantity--;
    updatedCart[updatedItemIndex] = updatedItem;
    return {
      ...state,
      cart: updatedCart,
      total: state.total - payload.price,
    };
  }
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return addProductTocart(state, action.payload);

    case "REMOVE-_PRODUCT":
      return removeProducrFromCart(state, action.payload);
    default:
      return state;
  }
};

export default cartReducer;
