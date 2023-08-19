const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
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

      return {
        ...state,
        cart: upatedCart,
        total: state.total + action.payload.price,
      };
    }

    case "REMOVE-_PRODUCT": {
      const updatedCart = [...state.cart];

      const updatedItemIndex = updatedCart.findIndex(
        (item) => item.id === action.payload.id
      );
      const updatedItem = { ...updatedCart[updatedItemIndex] };

      if (updatedItem.quantity === 1) {
        const filterCart = updatedCart.filter(
          (item) => item.id !== action.payload.id
        );
        return {
          ...state,
          cart: filterCart,
          total: state.total - action.payload.price,
        };
      } else {
        updatedItem.quantity--;
        updatedCart[updatedItemIndex] = updatedItem;
        return {
          ...state,
          cart: updatedCart,
          total: state.total - action.payload.price,
        };
      }
    }
    default:
      return state;
  }
};

export default cartReducer;
