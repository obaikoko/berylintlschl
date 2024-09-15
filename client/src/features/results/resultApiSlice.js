import { RESULTS_URL } from '../constants';
import { apiSlice } from '../apiSlice';

export const resultsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getResults: builder.query({
      query: () => ({
        url: `${RESULTS_URL}`,
        credentials: 'include',
      }),
      providesTags: ['Results'],
      keepUnusedDataFor: 5,
    }),
    getResult: builder.query({
      query: (resultId) => ({
        url: `${RESULTS_URL}/${resultId}`,
        credentials: 'include',
      }),
      providesTags: ['Results'],
      keepUnusedDataFor: 5,
    }),
    searchResults: builder.query({
      query: ({ keyword, level }) => ({
        url: `${RESULTS_URL}?keyword=${keyword}&level=${level}`,
        credentials: 'include',
      }),
      providesTags: ['Results'],
      keepUnusedDataFor: 5,
    }),
    updateResult: builder.mutation({
      query: (data) => ({
        url: `${RESULTS_URL}/${data.resultId}`,
        method: 'PUT',
        body: data,
        credentials: 'include',
      }),
    }),
    generateResult: builder.mutation({
      query: (data) => ({
        url: `${RESULTS_URL}/${data.studentId}`,
        method: 'POST',
        body: data,
        credentials: 'include',
      }),
    }),
    deleteResult: builder.mutation({
      query: (resultId) => ({
        url: `${RESULTS_URL}/${resultId}`,
        method: 'DELETE',
        credentials: 'include',
      }),
      providesTags: ['Results'],
    }),
    generatePositions: builder.mutation({
      query: (data) => ({
        url: `${RESULTS_URL}/positions`,
        method: 'POST',
        body: data,
        credentials: 'include',
      }),
    }),
    generateBroadsheet: builder.mutation({
      query: (data) => ({
        url: `${RESULTS_URL}/broadsheet`,
        method: 'POST',
        body: data,
        credentials: 'include',
      }),
    }),
  }),
});

export const {
  useGetResultQuery,
  useGetResultsQuery,
  useSearchResultsQuery,
  useUpdateResultMutation,
  useGenerateResultMutation,
  useDeleteResultMutation,
  useGeneratePositionsMutation,
  useGenerateBroadsheetMutation
} = resultsApiSlice;
