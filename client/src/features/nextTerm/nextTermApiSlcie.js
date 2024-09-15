import { NEXTTERM_URL } from '../constants';
import { apiSlice } from '../apiSlice';

export const nextTermApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getNextTermInfo: builder.query({
      query: (level) => ({
        url: `${NEXTTERM_URL}/${level}`,
      }),
      providesTags: ['NextTerm'],
      keepUnusedDataFor: 5,
    }),
    addNextTermInfo: builder.mutation({
      query: (data) => ({
        url: `${NEXTTERM_URL}`,
        method: 'PUT',
        body: data,
        credentials: 'include',
      }),
      providesTags: ['NextTerm'],
      keepUnusedDataFor: 5,
    }),
    //     deleteEvent: builder.mutation({
    //       query: (evebtId) => ({
    //         url: `${NEXTTERM_URL}/${evebtId}`,
    //         method: 'DELETE',
    //         credentials: 'include',
    //       }),
    //       providesTags: ['NextTerm'],
    //       keepUnusedDataFor: 5,
    //     }),
  }),
});

export const { useGetNextTermInfoQuery, useAddNextTermInfoMutation } =
  nextTermApiSlice;
