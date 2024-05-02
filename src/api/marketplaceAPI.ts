import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {MarketplaceItem} from "../types/MarketplaceItem";

export const marketplaceApi = createApi({
    reducerPath: 'marketplaceApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://188.165.18.190:7812/api/' }),
    endpoints: (builder) => ({
        getMarketplace: builder.query<MarketplaceItem[], void>({
            query: () => 'market/list',
        }),
    }),
});

// Экспорт хуков и редьюсера для использования в компонентах
export const { useGetMarketplaceQuery } = marketplaceApi;
export const { reducer: marketplaceReducer } = marketplaceApi;
