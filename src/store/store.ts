import {
  combineReducers,
  configureStore,
  PreloadedState,
} from '@reduxjs/toolkit';

import { itemAPI, pizzasAPI } from '../services';
import cart from './slices/cart/reducer/cartReducer';
import categorySlice from './slices/category/reducer/categoryReducer';
import theme from './slices/theme/reducer/themeReducer';

const rootReducer = combineReducers({
  activeCategory: categorySlice,
  theme,
  cart,
  [itemAPI.reducerPath]: itemAPI.reducer,
  [pizzasAPI.reducerPath]: pizzasAPI.reducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
        .concat(itemAPI.middleware)
        .concat(pizzasAPI.middleware),
    preloadedState,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
