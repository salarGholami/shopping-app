const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const upatedCart = [...state.cart];

      const updatedItemIndex = upatedCart.findIndex(
        (item) => item.id === action.payload.id
      );

      if (updatedItemIndex < 0) {
        upatedCart.push({ ...action.payload, quantity: 1 });
      } else {
        const updatedItem = { ...upatedCart[updatedItemIndex] };
        updatedItem.quantity++;
        upatedCart[updatedItemIndex] = updatedItem;
      }

      return { ...state, cart: upatedCart };

    default:
      return state;
  }
};

export default cartReducer;
