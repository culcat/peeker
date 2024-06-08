import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ProductData, responseData } from "../types/productData";

export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://188.165.18.190:7812/api' }),
    endpoints: (builder) => ({
        getProductByName: builder.query<responseData, { name: string, page: number, filter_by: 'asc' | 'desc' | null, filter_name: 'rating' | 'buy' | 'price' | null }>({
            query: ({ name, page, filter_by, filter_name }) => {
                let query = `/product/?name=${encodeURIComponent(name)}&offset=10&page_number=${page}`;
                if (filter_by && filter_name) {
                    query += `&filter_by=${filter_by}&filter_name=${filter_name}`;
                }
                return query;
            },
        }),
    }),
});

export const { useGetProductByNameQuery } = productApi;
export const { reducer: productReducer } = productApi;
