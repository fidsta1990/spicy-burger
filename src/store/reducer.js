const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };

    case "REMOVE_ITEM":
      const currentCartItemIndex = state.items.findIndex((item) => {
        return item.id === action.id;
      });
      const currentItem = state.items[currentCartItemIndex];
      const newTotalAmount = state.totalAmount - currentItem.price;
      let newItems;
      if (currentItem.amount === 1) {
        newItems = state.items.filter((item) => item.id !== action.id);
      } else {
        const newItem = {
          ...currentItem,
          amount: currentItem.amount - 1,
        };
        newItems = [...state.items];
        newItems[currentCartItemIndex] = newItem;
      }
      return {
        items: newItems,
        totalAmount: newTotalAmount,
      };

    default:
      return state;
  }
};

export default cartReducer;
