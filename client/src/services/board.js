// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const boardApi = createApi({
  reducerPath: 'boardApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/' }),
  endpoints: (builder) => ({
    getBoardById: builder.query({
      query: (id) => `boards/${id}`,
    }),
    updateBoard: builder.mutation({
        // note: an optional `queryFn` may be used in place of `query`
        query: ({ id, ...patch }) => ({
          url: `board/${id}`,
          method: 'PATCH',
          body: patch,
        }),
        // Pick out data and prevent nested properties in a hook or selector
        transformResponse: (response, meta, arg) => response.data,
        invalidatesTags: ['Post'],
        // onQueryStarted is useful for optimistic updates
        // The 2nd parameter is the destructured `MutationLifecycleApi`
        async onQueryStarted(
          arg,
          { dispatch, getState, queryFulfilled, requestId, extra, getCacheEntry }
        ) {},
        // The 2nd parameter is the destructured `MutationCacheLifecycleApi`
        async onCacheEntryAdded(
          arg,
          {
            dispatch,
            getState,
            extra,
            requestId,
            cacheEntryRemoved,
            cacheDataLoaded,
            getCacheEntry,
          }
        ) {},
      }),
  }),
})

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { getBoardById, updateBoard, usePrefetch } = boardApi;