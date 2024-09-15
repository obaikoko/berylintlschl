import { ADMISSION_URL } from '../constants';
import { apiSlice } from '../apiSlice';

export const admissionApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createAdmission: builder.mutation({
      query: (data) => ({
        url: `${ADMISSION_URL}`,
        method: 'POST',
        body: data,
        credentials: 'include',
      }),
      providesTags: ['Admission'],
      keepUnusedDataFor: 5,
    }),
    deleteAdmission: builder.mutation({
      query: (admissionId) => ({
        url: `${ADMISSION_URL}/${admissionId}`,
        method: 'DELETE',
        credentials: 'include',
      }),
      providesTags: ['Admission'],
      keepUnusedDataFor: 5,
    }),
  }),
});

export const { useCreateAdmissionMutation, useDeleteAdmissionMutation } =
  admissionApiSlice;
