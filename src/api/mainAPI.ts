import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {MainItem} from "../types/MainItem";

export const mainApi = createApi({
    reducerPath: 'mainApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://188.165.18.190:7812/api/' }),
    endpoints: (builder) => ({
        getMain: builder.query<MainItem[], void>({
            query: () => 'main',
        }),
    }),
});

export const { useGetMainQuery } = mainApi;
export const { reducer: mainReducer } = mainApi;
