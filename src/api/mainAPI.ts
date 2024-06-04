import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {ApiResponse, MainItem} from "../types/MainItem";

export const mainApi = createApi({
    reducerPath: 'mainApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://188.165.18.190:7812/api/' }),
    endpoints: (builder) => ({
        getMain: builder.query<ApiResponse, void>({
            query: () => 'main?offset=100',
        }),
    }),
});

export const { useGetMainQuery } = mainApi;
export const { reducer: mainReducer } = mainApi;
