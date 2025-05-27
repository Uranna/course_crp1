import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";

type ProductInCart = {
  id: number;
  quantity: number;
}

type CartState = {
  value: Array<ProductInCart>;
}

type Action = PayloadAction<{ id: number }>;

const initialState: CartState = { value: [] };
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProductToCart(state, action: Action) {
      const { id } = action.payload;
      const product = state.value.find(product => product.id === id);
      if (product) {
        product.quantity++;
      } else {
        state.value.push({ id, quantity: 1 });
      }
    },
    removeProductToCart(state, action: Action) {
      const { id } = action.payload;
      const product = state.value.find(product => product.id === id);
      if (product) {
        if (product.quantity > 1) {
          product.quantity--;
        } else {
          return { value: state.value.filter(product => product.id !== id) };
        }
      }
    },
    deleteProductToCart(state, action: Action) {
      const { id } = action.payload;
      return { value: state.value.filter(product => product.id !== id) };
    }
  }
});

export const {
  addProductToCart,
  removeProductToCart,
  deleteProductToCart,
} = cartSlice.actions;

export const store = configureStore({
  reducer: cartSlice.reducer,
  devTools: true,
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useCartProducts = () => useTypedSelector(state => state.value);

export const useCartProduct = (id: number) => {
  const cartProducts = useCartProducts();
  return cartProducts.find(product => product.id === id);
};
