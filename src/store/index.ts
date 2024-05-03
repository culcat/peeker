import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { marketplaceApi } from "../api/marketplaceAPI";
import { productApi } from "../api/popularAPI";



export const store = configureStore({
    reducer: {
        [marketplaceApi.reducerPath]: marketplaceApi.reducer,
        [productApi.reducerPath]: productApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            marketplaceApi.middleware,
            productApi.middleware
        ),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
