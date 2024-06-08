// api.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ProductData, responseData } from "../types/productData";

export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://188.165.18.190:7812/api' }),
    endpoints: (builder) => ({
        getProductByName: builder.query<responseData, { name: string, page: number }>({
            query: ({ name, page }) => `/product/?name=${encodeURIComponent(name)}&offset=10&page_number=${page}`,
        }),
    }),
});

export const { useGetProductByNameQuery } = productApi;
export const { reducer: productReducer } = productApi;
