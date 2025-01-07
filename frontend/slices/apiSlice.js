import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const apiSlice = createApi({
    reducerPath: 'branchApi',
    baseQuery: fetchBaseQuery({
        baseUrl: '',
    }),
    tagTypes: ['Branch'],
    endpoints: (builder) => ({
        getBranches: builder.query({
            query: () => 'api',
            providesTags: ['Branch'],
        })
    }),
});


export const { useGetBranchesQuery } = apiSlice;