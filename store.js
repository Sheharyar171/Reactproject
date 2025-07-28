import { configureStore, createSlice } from '@reduxjs/toolkit';


const initialProducts = 
[
  { id: 1, name: 'Fiddle Leaf Fig', category: 'Foliage', price: 25, thumbnail: 'https://via.placeholder.com/100?text=Fiddle+Leaf' },
  { id: 2, name: 'Snake Plant', category: 'Succulent', price: 15, thumbnail: 'https://via.placeholder.com/100?text=Snake+Plant' },
  { id: 3, name: 'Monstera', category: 'Foliage', price: 30, thumbnail: 'https://via.placeholder.com/100?text=Monstera' },
  { id: 4, name: 'Aloe Vera', category: 'Succulent', price: 12, thumbnail: 'https://via.placeholder.com/100?text=Aloe+Vera' },
  { id: 5, name: 'Orchid', category: 'Flowering', price: 20, thumbnail: 'https://via.placeholder.com/100?text=Orchid' },
  { id: 6, name: 'Peace Lily', category: 'Flowering', price: 18, thumbnail: 'https://via.placeholder.com/100?text=Peace+Lily' },
];


const productsSlice = createSlice({
  name: 'products',
  initialState: initialProducts,
  reducers: {},
});


const cartSlice = createSlice({
  name: 'cart',
  initialState: 
  {
    items: {}, 
  },
  reducers: 
  {
    addToCart: (state, action) => 
    {
      const id = action.payload;
      if (!state.items[id]) {
        state.items[id] = 1;
      }
    },
    incrementItem: (state, action) => 
    {
      const id = action.payload;
      if (state.items[id]) {
        state.items[id]++;
      }
    },
    decrementItem: (state, action) => 
    {
      const id = action.payload;
      if (state.items[id] > 1) {
        state.items[id]--;
      }
    },
    deleteItem: (state, action) => 
    {
      const id = action.payload;
      delete state.items[id];
    },
    clearCart: (state) => 
    {
      state.items = {};
    },
  },
});

export const 
{
  addToCart,
  incrementItem,
  decrementItem,
  deleteItem,
  clearCart,
} = cartSlice.actions;

export const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
    cart: cartSlice.reducer,
  },
});
