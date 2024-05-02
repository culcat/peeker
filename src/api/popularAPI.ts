// api.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ProductData } from "../types/productData";

export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://188.165.18.190:7812/api' }),
    endpoints: (builder) => ({
        getProductByName: builder.query<ProductData, string>({
            query: (name) => `/product/?name=${encodeURIComponent(name)}`,
        }),
    }),
});

export const { useGetProductByNameQuery } = productApi;
export const { reducer: productReducer } = productApi