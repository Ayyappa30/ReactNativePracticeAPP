import {createSlice} from '@reduxjs/toolkit';

interface cartItemsProps {
  id: number;
  imageURL: string;
  title: string;
  price: number;
  qty: number;
  sum: number;
}

interface cartState {
  items: cartItemsProps[];
}
const initialState: cartState = {
  items: [],
};

const cartReducer = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // add items to cart

    addItemsToCart: (state, action) => {
      const ExistingItem = state.items.find(
        item => item.id === action.payload.id,
      );

      if (ExistingItem) {
        (ExistingItem.qty += 1), (ExistingItem.sum += action.payload.price);
      } else {
        state.items.push({
          ...action.payload,
          qty: 1,
          sum: action.payload.price,
        });
      }
    },

    // remove itms from the cart

    removeItemFromCart: (state, action) => {
      const ExistingItem = state.items.find(
        item => item.id === action.payload.id,
      );

      if (!ExistingItem) return; 

      if (ExistingItem.qty > 1) {
        ExistingItem.qty -= 1;
        ExistingItem.sum -= action.payload.price;
      } else {
        state.items = state.items.filter(item => item.id !== action.payload.id);
      }
    },

    // remove the product from cart

    removeProductFromCart: (state, action) => {
      const ExistingItem = state.items.find(
        item => item.id === action.payload.id,
      );

      if (ExistingItem) {
        state.items = state.items.filter(item => item.id !== action.payload.id);
      }
    },
    increaseItemFromCart: (state, action) => {
      const ExistingItem = state.items.find(
        item => item.id === action.payload.id,
      );
      if (ExistingItem) {
        ExistingItem.qty += 1;
        ExistingItem.sum += action.payload.price;
      }
    },
  },
});

export const {
  addItemsToCart,
  removeItemFromCart,
  removeProductFromCart,
  increaseItemFromCart,
} = cartReducer.actions;

export default cartReducer.reducer;
