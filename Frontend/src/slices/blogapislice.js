import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
    baseUrl: ''
});

export const blogApiSlice = createApi({
    baseQuery,
    tagTypes:['Blog'],
    endpoints:(builder)=>({})
});

